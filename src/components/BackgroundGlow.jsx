import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BackgroundGlow() {
  const canvasRef = useRef(null);
  const [hasMouse, setHasMouse] = useState(false);

  // Spring-damped cursor positions for ambient radial light
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Dual spring values: tight spring for core cyan spot, loose spring for trailing emerald glow
  const smoothX = useSpring(mouseX, { stiffness: 140, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 140, damping: 24 });

  const trailingX = useSpring(mouseX, { stiffness: 60, damping: 30 });
  const trailingY = useSpring(mouseY, { stiffness: 60, damping: 30 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for particle network interaction
    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!hasMouse) setHasMouse(true);
    };

    const handleMouseLeave = () => {
      setHasMouse(false);
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes representing distributed data / telemetry nodes
    const particleCount = Math.min(42, Math.floor((width * height) / 30000));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 1,
      color: Math.random() > 0.45 ? 'rgba(0, 210, 255, ' : 'rgba(16, 185, 129, ',
      alpha: Math.random() * 0.4 + 0.2,
    }));

    // Particle rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Gentle movement
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bounce
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse proximity repulsion/reactivity
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.8;
            p.y -= (dy / dist) * force * 1.8;
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();

          // Connect adjacent nodes with subtle telemetry lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const d = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (d < 110) {
              const lineAlpha = (1 - d / 110) * 0.14;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(0, 210, 255, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasMouse, mouseX, mouseY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dynamic Cursor Spotlight: Illuminates the HUD grid under the cursor */}
      <motion.div
        className="absolute -top-[250px] -left-[250px] w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: hasMouse ? 1 : 0,
          background:
            'radial-gradient(circle, rgba(0, 210, 255, 0.16) 0%, rgba(16, 185, 129, 0.08) 40%, transparent 70%)',
          willChange: 'transform',
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />

      {/* Trailing Emerald Atmospheric Shimmer */}
      <motion.div
        className="absolute -top-[350px] -left-[350px] w-[700px] h-[700px] rounded-full blur-[110px]"
        style={{
          x: trailingX,
          y: trailingY,
          opacity: hasMouse ? 0.75 : 0,
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.10) 0%, rgba(0, 210, 255, 0.03) 50%, transparent 75%)',
          willChange: 'transform',
        }}
        transition={{ opacity: { duration: 0.5 } }}
      />

      {/* Interactive Data Node Telemetry Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />
    </div>
  );
}

