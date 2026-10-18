export const portfolioData = {
  identity: {
    name: "Akhil Vinayak P",
    roleTitle: "Data Engineer & AI/ML Engineer",
    positioning: "Data Engineer transitioning toward AI/ML Engineering and MLOps",
    experienceYears: "4.5+ Years",
    location: "Bangalore / Kerala, India",
    heroHeadline: "Data Platforms & Production ML",
    heroIntro:
      "Data Engineer with 4.5+ years of experience engineering scalable Medallion lakehouses, ETL pipelines, and interpretable machine learning workflows across Google Cloud Platform and Databricks.",
    github: "https://github.com/AkhilVinayakp",
    linkedin: "https://www.linkedin.com/in/akhilvinayakp",
    contactEmail: "akhilvinayakp.dev@gmail.com",
  },

  resumeConfig: {
    isAvailable: false,
    publicPath: "/Akhil_Vinayak_P_Resume.pdf",
    statusNote: "Resume PDF available upon request via LinkedIn or email.",
  },

  about: {
    summary:
      "Data professional with 4.5+ years of experience across Data Engineering and ML Engineering, specializing in building scalable data pipelines, ML-ready datasets, and cloud-native machine learning workflows.",
    paragraphs: [
      "My foundation is built on rigorous enterprise data engineering: migrating mission-critical ETL systems, architecting Medallion lakehouses (Data Vault modeling in Silver, curated Data Marts in Gold) with dbt and Databricks, and enforcing reconciliation checks so downstream systems run on verified data.",
      "Across CGI, Infosys, and Turbolab Technologies, I have built distributed data workflows on Google Cloud Platform (BigQuery, Vertex AI, GCS, Dataform, Dataplex), PySpark, and Snowflake.",
      "Bridging the divide between raw infrastructure and practical intelligence, I train, evaluate, and interpret production machine learning models (XGBoost, KMeans clustering) with SHAP attribution, with an active focus on MLOps pipelines and agentic AI architectures."
    ],
    corePillars: [
      {
        id: "lakehouse",
        title: "Enterprise Lakehouse & ETL",
        detail: "Informatica-to-Databricks migrations, dbt Data Vault modeling, Medallion architecture, and automated reconciliation.",
        tag: "Data Architecture",
        stack: ["Databricks", "dbt", "PySpark", "SQL", "Data Vault"],
        mechanisms: [
          "Medallion staging: Raw Bronze to curated Gold marts",
          "dbt Data Vault (Hubs, Links, Satellites) in Silver",
          "Automated row-hash validation & reconciliation logic",
          "Database view query tuning for lower runtime latency"
        ],
      },
      {
        id: "cloud-systems",
        title: "Cloud & Distributed Systems",
        detail: "Production workloads on GCP (Vertex AI, BigQuery, GCS), Databricks, PySpark, Snowflake, and Apache Airflow.",
        tag: "Cloud Infrastructure",
        stack: ["GCP", "BigQuery", "PySpark", "GCS", "Snowflake"],
        mechanisms: [
          "BigQuery partitioned/clustered analytical querying",
          "Distributed PySpark transformations across multi-domain datasets",
          "Automated cloud data pipelines using Dataform and Airflow",
          "Enterprise data reconciliation and storage governance"
        ],
      },
      {
        id: "mlops",
        title: "Production ML & MLOps",
        detail: "Feature pipelines, XGBoost & KMeans clustering, SHAP interpretability, and Vertex AI MLOps pipeline orchestration.",
        tag: "Applied Intelligence",
        stack: ["Vertex AI", "XGBoost", "KMeans", "SHAP", "MLflow"],
        mechanisms: [
          "Interpretable supervised classification with SHAP TreeExplainer",
          "Unsupervised customer segmentation & cluster profiling",
          "Containerized Vertex AI Pipelines with Docker and Kubeflow SDK",
          "Automated data quality monitoring and feature preparation"
        ],
      },
    ],
  },

  experience: [
    {
      id: "cgi",
      company: "CGI",
      role: "Software Engineer",
      location: "Bangalore, India",
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
        "MS SQL Server",
      ],
      responsibilities: [
        "Collaborating within a cross-functional engineering team to migrate enterprise ETL pipelines from Informatica to Databricks using SQL and Python.",
        "Ensuring data quality, consistency, and reliability across migrated pipelines through validation checks, automated reconciliation logic, and fault tolerance.",
        "Developing end-to-end data delivery pipelines for multiple downstream systems, including Oracle, MS SQL Server, and automated CSV server exports.",
        "Optimizing database views and transformation queries to reduce pipeline runtimes and increase throughput.",
        "Implementing Data Vault structures in the Silver layer and designing curated Gold-layer Data Marts with dbt inside Databricks.",
      ],
      verifiedAccomplishments: [
        "Delivered query and transformation optimizations reducing pipeline execution time and improving overall system throughput.",
        "Established Silver-layer Data Vault structures and Gold-layer Data Marts using dbt inside Databricks.",
      ],
    },
    {
      id: "infosys",
      company: "Infosys",
      role: "Senior System Engineer",
      location: "Trivandrum, India",
      period: "January 2023 – May 2025",
      current: false,
      technologies: [
        "Google Cloud Platform",
        "Vertex AI",
        "BigQuery",
        "GCS",
        "PySpark",
        "Python",
        "SQL",
        "XGBoost",
        "KMeans",
        "SHAP",
      ],
      responsibilities: [
        "Analyzed and processed large-scale telecom datasets to enable data-informed operational decision-making.",
        "Delivered production ML models including KMeans clustering and XGBoost classification with SHAP analysis and cluster profiling for actionable model interpretability.",
        "Architected and optimized data pipelines integrating multi-domain data sources to accelerate model development cycles.",
        "Leveraged GCP technologies (Vertex AI, BigQuery, GCS) and PySpark to engineer scalable, reproducible machine learning workflows.",
      ],
      verifiedAccomplishments: [
        "Reduced data preparation time by up to 20% by streamlining multi-domain telecom data integration.",
        "Deployed interpretable XGBoost and KMeans models validated through SHAP analysis and cluster profiling on Vertex AI.",
      ],
    },
    {
      id: "turbolab",
      company: "Turbolab Technologies",
      role: "Junior Python Developer",
      location: "Kochi, India",
      period: "July 2021 – August 2022",
      current: false,
      technologies: [
        "Python",
        "Pandas",
        "ETL Pipelines",
        "Web Data Extraction",
        "REST APIs",
      ],
      responsibilities: [
        "Developed and maintained scalable ETL pipelines in Python for large-scale web data extraction powering critical business operations.",
        "Implemented automated data quality checks and validation using Pandas and custom testing frameworks.",
        "Designed modular, reusable Python extractors that adapt to evolving schema changes and website structures.",
        "Maintained high pipeline uptime through automated monitoring and fast issue resolution.",
      ],
      verifiedAccomplishments: [
        "Engineered modular Python web data extraction frameworks and automated Pandas data validation suites.",
      ],
    },
  ],

  projects: [
    {
      id: "proj-lakehouse",
      category: "Data Engineering",
      title: "Enterprise Lakehouse & dbt Data Vault",
      subtitle: "Scalable batch ingestion, Data Vault modeling in Silver, and Gold-layer analytical marts.",
      overview:
        "Engineered a scalable Medallion lakehouse architecture migrating legacy ETL jobs to Databricks and PySpark. Implemented automated data quality checks, schema evolution, and reconciliation routines so downstream consumers query validated marts.",
      technologies: ["Databricks", "dbt", "PySpark", "Python", "SQL", "Medallion Architecture"],
      architectureSteps: [
        { label: "Bronze", desc: "Raw multi-source ingestion with schema validation" },
        { label: "Silver", desc: "dbt Data Vault (Hubs, Links, Satellites) + Reconciliation" },
        { label: "Gold", desc: "Curated star schemas and analytical data marts" },
      ],
      keyTakeaways: [
        "Separated ingestion, cleansing, and analytical modeling into distinct Medallion tiers.",
        "Implemented automated row-count and column-hash reconciliation between source and target.",
        "Configured dbt tests for non-null constraints, unique keys, and referential integrity.",
      ],
    },
    {
      id: "proj-telecom-ml",
      category: "Machine Learning",
      title: "Telecom Segmentation & Explainable ML",
      subtitle: "Large-scale feature engineering with PySpark and BigQuery; XGBoost & KMeans with SHAP interpretability.",
      overview:
        "Built an end-to-end machine learning pipeline on Google Cloud Platform to predict customer churn risk and discover operational clusters across telecom data. Prioritized model interpretability via SHAP attribution.",
      technologies: ["Google Cloud Platform", "BigQuery", "Vertex AI", "PySpark", "XGBoost", "SHAP"],
      architectureSteps: [
        { label: "Feature Store", desc: "BigQuery & PySpark multi-domain feature transformations" },
        { label: "Model Training", desc: "XGBoost classifier & KMeans clustering on Vertex AI" },
        { label: "Explainability", desc: "SHAP tree explainer feature importance & summary plots" },
      ],
      keyTakeaways: [
        "Streamlined data preparation workflows, cutting integration time across data domains by up to 20%.",
        "Coupled predictive scores with SHAP attribution so stakeholders understand key churn indicators.",
        "Delivered reproducible notebook and script artifacts for automated retraining.",
      ],
    },
    {
      id: "proj-mlops-vertex",
      category: "MLOps",
      title: "Cloud-Native Vertex AI MLOps",
      subtitle: "Modular component authoring, containerized training, experiment tracking, and model registry.",
      overview:
        "Designed a reproducible MLOps workflow automating the lifecycle from raw data ingestion to registered model endpoints using Vertex AI Pipelines, Docker containers, and artifact tracking.",
      technologies: ["Vertex AI Pipelines", "Docker", "MLflow", "GCP", "Python", "Artifact Registry"],
      architectureSteps: [
        { label: "Orchestration", desc: "Vertex AI Pipelines DAG with containerized step execution" },
        { label: "Tracking", desc: "Parameters, metrics, and model evaluation artifact logging" },
        { label: "Registry", desc: "Model versioning and staged deployment checks" },
      ],
      keyTakeaways: [
        "Encapsulated ETL and model training tasks into deterministic Docker containers.",
        "Automated model validation gates before updating the Vertex AI Model Registry.",
        "Established declarative pipeline definitions in Python using the Kubeflow Pipelines SDK.",
      ],
    },
    {
      id: "proj-rag-agents",
      category: "AI Systems",
      title: "Enterprise RAG & AI Agent Systems",
      subtitle: "Document ingestion, vector embeddings, semantic retrieval, and agentic reasoning.",
      overview:
        "Implemented an enterprise Retrieval-Augmented Generation (RAG) prototype on GCP. Focused on reducing hallucination through semantic chunking, grounded context retrieval, and structured tool-use orchestration.",
      technologies: ["Python", "Vertex AI Search", "Vector Embeddings", "RAG", "GCS"],
      architectureSteps: [
        { label: "Ingestion", desc: "Document parsing, semantic chunking, and embedding creation" },
        { label: "Vector Search", desc: "Approximate nearest-neighbor similarity indexing" },
        { label: "Agentic Loop", desc: "Tool dispatch and citation-grounded response synthesis" },
      ],
      keyTakeaways: [
        "Applied learnings from the Google/Kaggle 5-Day AI Agents Intensive.",
        "Enforced citation requirements to ground model output against source documents.",
        "Evaluated retrieval faithfulness and relevance on domain query sets.",
      ],
    },
  ],

  skills: [
    {
      category: "Languages & Querying",
      items: ["Python", "SQL", "PySpark"],
    },
    {
      category: "Data Platforms & Lakehouse",
      items: [
        "Databricks",
        "dbt (Data Vault & Medallion)",
        "Google Cloud Platform (GCP)",
        "BigQuery",
        "Dataform",
        "Snowflake",
        "Apache Airflow",
        "Oracle",
        "MS SQL Server",
      ],
    },
    {
      category: "Data Quality & Engineering",
      items: [
        "Medallion Architecture",
        "ETL / ELT Pipelines",
        "Automated Reconciliation",
        "Data Quality Monitoring",
        "Dataplex",
        "Pandas",
        "Data Modeling",
      ],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "XGBoost",
        "KMeans Clustering",
        "SHAP (Model Explainability)",
        "Scikit-learn",
        "Vertex AI",
        "TensorFlow",
        "Retrieval-Augmented Generation (RAG)",
        "AI Agents",
      ],
    },
    {
      category: "MLOps & Developer Tooling",
      items: [
        "Vertex AI Pipelines",
        "MLflow",
        "Kubeflow",
        "Docker",
        "Git & GitHub",
        "Bitbucket",
        "JIRA",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Science",
      specialization: "Specialized in Intelligent Systems",
      institution: "Central University of Kerala",
      period: "2019 – 2021",
      score: "CGPA: 8.39",
    },
    {
      degree: "Bachelor of Computer Science",
      specialization: "Core Computer Science & Mathematics",
      institution: "Mahatma Gandhi College",
      period: "2016 – 2019",
      score: "CGPA: 8.5",
    },
  ],

  certifications: [
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      year: "2026",
    },
    {
      name: "SnowPro Core Certification",
      issuer: "Snowflake",
      year: "2025",
    },
    {
      name: "5-Day AI Agents Intensive with Google",
      issuer: "Kaggle",
      year: "2025",
    },
    {
      name: "DeepLearning.AI TensorFlow Developer Specialization",
      issuer: "Coursera",
      year: "2020",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "University of Washington / Coursera",
      year: "2020",
    },
  ],
};