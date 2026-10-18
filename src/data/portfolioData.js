export const portfolioData = {
  identity: {
    name: "Akhil Vinayak P",
    roleTitle: "Machine Learning Engineer",
    positioning: "Data Engineer | AI/ML Engineer | MLOps Enthusiast",
    experienceYears: "4.5+ Years",
    location: "Bangalore / Kerala, India",
    heroHeadline: "Architecting resilient data platforms and production-grade machine learning systems.",
    heroIntro:
      "Data and ML Engineer with 4.5+ years of experience building scalable ETL pipelines, Medallion lakehouse architectures, and interpretable machine learning workflows across Google Cloud Platform and Databricks.",
    github: "https://github.com/AkhilVinayakp",
    linkedin: "https:// linkedin.com/in/akhilvinayakp".replace(" ", ""),
    email: "[PLACEHOLDER: your.email@domain.com]", // Not present in resume PDF
  },

  // Keep the resume PDF outside /public until verified and ready to publish
  resumeConfig: {
    isPublic: false,
    publicPath: "/Akhil_Vinayak_P_Resume.pdf",
    statusNote:
      "Resume PDF is currently held outside the public directory pending final verification. Enable `resumeConfig.isPublic = true` in `src/data/portfolioData.js` once placed in `/public`.",
  },

  about: {
    summary:
      "Data professional with 4.5+ years of experience across Data Engineering and ML Engineering, specializing in building scalable data pipelines, ML-ready datasets, and cloud-native machine learning workflows.",
    paragraphs: [
      "My foundation starts with rigorous data engineering—migrating enterprise ETL systems, implementing Medallion lakehouse architectures (Data Vault in Silver, curated Data Marts in Gold) with dbt and Databricks, and enforcing validation and reconciliation checks so downstream analytics and models operate on trustworthy data.",
      "Across my tenure at CGI, Infosys, and Turbolab Technologies, I have worked closely with distributed data and cloud platforms including Google Cloud Platform (BigQuery, Vertex AI, GCS, Dataform, Dataplex), PySpark, and Snowflake.",
      "Bridging the gap between raw data infrastructure and applied intelligence, I build, evaluate, and deploy machine learning models (such as XGBoost classification and KMeans clustering) backed by SHAP explainability, while actively expanding into MLOps pipelines and Retrieval-Augmented Generation (RAG) applications."
    ],
    corePillars: [
      {
        title: "Enterprise Data Engineering",
        detail: "Informatica-to-Databricks migrations, dbt Data Vault modeling, Medallion architectures, and automated data reconciliation."
      },
      {
        title: "Cloud & Distributed Platforms",
        detail: "Production workloads on GCP (Vertex AI, BigQuery, GCS), Databricks, PySpark, Snowflake, and Airflow."
      },
      {
        title: "Production ML & Explainability",
        detail: "End-to-end feature pipelines, XGBoost & clustering workflows, SHAP interpretability, and MLOps orchestration."
      }
    ]
  },

  experience: [
    {
      id: "cgi",
      company: "CGI",
      role: "Software Engineer",
      location: "Bangalore, Kerala",
      period: "May 2025 – Present",
      current: true,
      technologies: [
        "Databricks",
        "Python",
        "SQL",
        "dbt",
        "Data Vault",
        "Medallion Architecture",
        "Oracle",
        "MS SQL Server"
      ],
      responsibilities: [
        "Collaborated within a cross-functional team to migrate enterprise ETL pipelines from Informatica to Databricks, leveraging Databricks, SQL, and Python to build scalable and maintainable data workflows.",
        "Ensured data quality, robustness, and consistency across migrated pipelines through validation checks, reconciliation logic, and error handling.",
        "Developed end-to-end data pipelines to deliver processed data to multiple downstream systems, including Oracle, MS SQL Server, and CSV-based server exports.",
        "Implemented performance optimizations on database views and transformations, reducing pipeline execution time and improving overall throughput.",
        "Contributed to data modeling efforts using dbt within Databricks, implementing Data Vault structures in the Silver layer and building curated Gold-layer Data Marts following Medallion architecture principles."
      ],
      verifiedAccomplishments: [
        "Reduced pipeline execution time and improved overall throughput via targeted database view and transformation optimizations.",
        "Established Silver-layer Data Vault structures and Gold-layer Data Marts using dbt inside Databricks."
      ]
    },
    {
      id: "infosys",
      company: "Infosys",
      role: "Senior System Engineer",
      location: "Trivandrum, Kerala",
      period: "January 2023 – May 2025",
      current: false,
      technologies: [
        "Google Cloud Platform",
        "Vertex AI",
        "BigQuery",
        "GCS",
        "PySpark",
        "XGBoost",
        "KMeans",
        "SHAP",
        "Generative AI"
      ],
      responsibilities: [
        "Enabled data-driven decision-making by analyzing and interpreting large-scale telecom datasets to optimize operations.",
        "Delivered high-performing ML models such as KMeans and XGBoost (classification), with performance evaluation through SHAP analysis and cluster profiling to ensure actionable and interpretable results.",
        "Architected and optimized robust data pipelines, integrating multi-domain data sources for faster model development.",
        "Leveraged Google Cloud technologies (Vertex AI, BigQuery, GCS) and PySpark to deliver scalable, production-grade ML workflows and streamline cross-functional collaboration through well-documented data processes.",
        "Explored ways to integrate Generative AI techniques into existing systems to unlock new capabilities and drive innovation."
      ],
      verifiedAccomplishments: [
        "Reduced data preparation time by up to 20% while integrating multi-domain telecom data sources for faster model development.",
        "Delivered interpretable production XGBoost and KMeans models validated through SHAP analysis and cluster profiling on Vertex AI."
      ]
    },
    {
      id: "turbolab",
      company: "Turbolab Technologies",
      role: "Junior Python Developer",
      location: "Kochi, Kerala",
      period: "July 2021 – August 2022",
      current: false,
      technologies: [
        "Python",
        "Pandas",
        "ETL Pipelines",
        "Web Data Extraction",
        "REST APIs"
      ],
      responsibilities: [
        "Developed and maintained scalable ETL (Extract, Transform, Load) pipelines in Python for large-scale web data extraction, ensuring timely and accurate product delivery for critical business operations.",
        "Improved data quality and processing accuracy by implementing robust validation checks using Pandas and custom tools.",
        "Boosted engineering efficiency by designing reusable, modular Python codebases and proactively adapting crawlers to evolving website structures.",
        "Ensured high system reliability and availability through continuous monitoring, rapid issue resolution, and stress-tested API deployment."
      ],
      verifiedAccomplishments: [
        "Designed modular Python extraction frameworks and automated Pandas validation pipelines for high-volume web data."
      ]
    }
  ],

  // Structured Case Study slots. Do not invent fake metrics or URLs.
  projects: [
    {
      id: "proj-lakehouse-migration",
      category: "Data Engineering Pipelines",
      isPlaceholder: true,
      title: "[PLACEHOLDER: Enterprise Lakehouse & dbt Medallion Pipeline]",
      subtitle: "Can be adapted from your CGI Informatica-to-Databricks & Data Vault experience or a personal repo",
      problem:
        "[PLACEHOLDER: Describe the legacy bottleneck or raw multi-source ingestion challenge requiring schema enforcement, reconciliation, and scalable transformation.]",
      solution:
        "Architected a Bronze-Silver-Gold Medallion pipeline using Databricks, PySpark, and dbt. Implemented Data Vault modeling in the Silver layer with automated validation checks and curated Gold-layer analytical marts.",
      contribution:
        "[PLACEHOLDER: Detail your specific role in pipeline orchestration, SQL/PySpark optimization, and reconciliation testing.]",
      verifiedResults:
        "[PLACEHOLDER: Add verified latency reduction, data quality pass rate, or throughput metric—do not publish unverified numbers.]",
      technologies: ["Databricks", "dbt", "PySpark", "SQL", "Data Vault", "Medallion Architecture"],
      githubUrl: "",
      liveUrl: "",
      architectureNote: "Raw Sources → Bronze (Ingestion) → Silver (dbt Data Vault + Reconciliation) → Gold (Curated Marts)"
    },
    {
      id: "proj-telecom-ml",
      category: "Machine Learning Workflows",
      isPlaceholder: true,
      title: "[PLACEHOLDER: Explainable Telecom Classification & Segmentation]",
      subtitle: "Can be adapted from your Infosys telecom ML workflow (XGBoost, KMeans, SHAP) or a public dataset case study",
      problem:
        "[PLACEHOLDER: Define the operational decision problem across multi-domain datasets requiring both high predictive accuracy and human-interpretable feature attribution.]",
      solution:
        "Built end-to-end feature preparation pipelines in BigQuery and PySpark, training XGBoost classification and KMeans clustering models on Vertex AI with SHAP explainability and cluster profiling.",
      contribution:
        "[PLACEHOLDER: Detail feature engineering, hyperparameter tuning, and SHAP dashboarding delivered.]",
      verifiedResults:
        "Reduced data preparation time by up to 20% (if referencing verified Infosys workflow) — [PLACEHOLDER: add model evaluation metrics if public].",
      technologies: ["Python", "XGBoost", "KMeans", "SHAP", "Scikit-learn", "BigQuery", "PySpark"],
      githubUrl: "",
      liveUrl: "",
      architectureNote: "Multi-Domain GCS/BigQuery → PySpark Feature Prep → XGBoost / KMeans → SHAP Explainability"
    },
    {
      id: "proj-mlops-vertex",
      category: "MLOps & Deployment",
      isPlaceholder: true,
      title: "[PLACEHOLDER: Cloud-Native MLOps Pipeline on Vertex AI]",
      subtitle: "Showcase reproducible training, experiment tracking, and containerized deployment",
      problem:
        "[PLACEHOLDER: Describe the challenge of moving notebook-based ML models into automated, versioned, and monitored production workflows.]",
      solution:
        "[PLACEHOLDER: Detail orchestration using Vertex AI Pipelines / Kubeflow, experiment tracking via MLflow, containerized steps with Docker, and data quality gates with Dataplex.]",
      contribution:
        "[PLACEHOLDER: Specify pipeline component authoring, CI/CD triggers, and model registry integration.]",
      verifiedResults:
        "[PLACEHOLDER: Supply verified deployment frequency or reproducibility outcomes.]",
      technologies: ["Vertex AI Pipelines", "MLflow", "Kubeflow", "Docker", "GCP", "Dataplex"],
      githubUrl: "",
      liveUrl: "",
      architectureNote: "Git Push → Docker Build → Vertex AI / Kubeflow Pipeline → MLflow Registry → Endpoint"
    },
    {
      id: "proj-rag-agents",
      category: "RAG & AI Applications",
      isPlaceholder: true,
      title: "[PLACEHOLDER: Enterprise Retrieval-Augmented Generation (RAG) & AI Agent System]",
      subtitle: "Aligned with your 2025 Google/Kaggle 5-Day AI Agents Intensive & GenAI exploration",
      problem:
        "[PLACEHOLDER: Describe the domain knowledge retrieval or multi-step reasoning problem requiring grounded, low-hallucination responses.]",
      solution:
        "[PLACEHOLDER: Detail document chunking, vector indexing, retrieval ranking, and agentic tool-use orchestration on GCP / Vertex AI.]",
      contribution:
        "[PLACEHOLDER: Specify ingestion pipeline, retrieval evaluation, and prompt/agent architecture.]",
      verifiedResults:
        "[PLACEHOLDER: Supply retrieval precision/faithfulness benchmarks or latency metrics once verified.]",
      technologies: ["Python", "Vertex AI", "RAG", "AI Agents", "Vector Search", "GCS"],
      githubUrl: "",
      liveUrl: "",
      architectureNote: "Document Corpus → Chunking & Embeddings → Vector Retrieval → Grounded Agent Response"
    }
  ],

  skills: [
    {
      category: "Programming",
      description: "Core languages for distributed data processing, analytical querying, and ML systems.",
      items: ["Python", "SQL", "PySpark"]
    },
    {
      category: "Data Engineering & Governance",
      description: "Batch/streaming ETL, lakehouse modeling, orchestration, and enterprise data quality.",
      items: [
        "Databricks",
        "dbt (Data Vault & Medallion)",
        "BigQuery",
        "Dataform",
        "Apache Airflow",
        "Snowflake",
        "Dataplex",
        "Data Catalog",
        "Data Quality Monitoring",
        "Pandas"
      ]
    },
    {
      category: "Cloud & Data Platforms",
      description: "Cloud-native storage, serverless warehousing, and managed AI infrastructure.",
      items: [
        "Google Cloud Platform (GCP)",
        "Vertex AI",
        "Google Cloud Storage (GCS)",
        "BigQuery",
        "Databricks Lakehouse",
        "Snowflake",
        "Oracle & MS SQL Server"
      ]
    },
    {
      category: "Machine Learning & Data Science",
      description: "Predictive modeling, unsupervised segmentation, statistical analysis, and explainability.",
      items: [
        "Predictive Modeling (Classification & Regression)",
        "XGBoost",
        "Clustering (KMeans)",
        "Model Evaluation & SHAP Analysis",
        "Scikit-learn",
        "TensorFlow",
        "NumPy",
        "Statistics",
        "Seaborn & Matplotlib"
      ]
    },
    {
      category: "MLOps & Model Deployment",
      description: "Pipeline orchestration, experiment tracking, and containerized model serving.",
      items: [
        "Vertex AI Pipelines",
        "MLflow",
        "Kubeflow",
        "Docker"
      ]
    },
    {
      category: "AI Applications & RAG",
      description: "Applied Generative AI workflows and intelligent agent architectures.",
      items: [
        "Retrieval-Augmented Generation (RAG)",
        "AI Agents",
        "Generative AI Integration",
        "LLM Workflows on Vertex AI"
      ]
    },
    {
      category: "Developer Tooling & Visualization",
      description: "Version control, observability, and agile engineering collaboration.",
      items: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Kibana",
        "JIRA",
        "Confluence"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Science (Specialized in Intelligent Systems)",
      institution: "Central University of Kerala",
      period: "June 2019 – May 2021",
      score: "CGPA: 8.39"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Mahatma Gandhi College",
      period: "June 2016 – May 2019",
      score: "CGPA: 8.5"
    }
  ],

  certifications: [
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      year: "2026"
    },
    {
      name: "SnowPro Core Certification",
      issuer: "Snowflake",
      year: "2025"
    },
    {
      name: "5-Day AI Agents Intensive Course with Google",
      issuer: "Kaggle",
      year: "2025"
    },
    {
      name: "DeepLearning.AI TensorFlow Developer Specialization",
      issuer: "DeepLearning.AI — Coursera",
      year: "2020"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "University of Washington — Coursera",
      year: "2020"
    }
  ]
};