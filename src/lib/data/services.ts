// src/lib/data/services.ts
import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    slug: "ai-agents-llm-applications",
    href: "/services/ai-agents-llm-applications",
    badge: "AI & Agents",
    title: "AI Agents & LLM Applications",
    shortDescription:
      "AI copilots, agents and LLM applications embedded directly into your workflows, automating the work your team repeats.",
    fullDescription:
      "AI copilots, agents and LLM applications embedded directly into your workflows, automating the work your team repeats.",
    iconName: "Bot",
    featured: true,
    features: [
      {
        title: "Autonomous Agent Workflows",
        description: "Multi-step reasoning, tool execution, and self-correcting logic built for real operational tasks.",
      },
      {
        title: "Custom Copilots & Workflows",
        description: "Task-specific assistants that integrate directly with your existing APIs and tools.",
      },
      {
        title: "Safety, Guardrails & Human-in-the-Loop",
        description: "Strict permission scoping and human review points for mission-critical operations.",
      },
    ],
    deliverables: [
      "Agent Orchestration Engine",
      "API & Tool Integrations",
      "Human-in-the-Loop Dashboard",
      "Telemetry & Evaluation Harness",
    ],
    techStack: ["LangGraph", "CrewAI", "Python", "FastAPI", "OpenAI", "Anthropic", "Docker"],
  },
  {
    slug: "product-platform-engineering",
    href: "/services/product-platform-engineering",
    badge: "Engineering",
    title: "Product & Platform Engineering",
    shortDescription:
      "SaaS platforms, web applications and digital products built to scale with your business.",
    fullDescription:
      "SaaS platforms, web applications and digital products built to scale with your business.",
    iconName: "Layout",
    featured: true,
    features: [
      {
        title: "Full-Stack SaaS Architecture",
        description: "High-performance web and cloud platforms built with scalable design patterns.",
      },
      {
        title: "Resilient Microservices & APIs",
        description: "Decoupled backend services engineered for low latency and high concurrency.",
      },
      {
        title: "Modern Frontend Engineering",
        description: "Intuitive, responsive, and blazing-fast user interfaces designed for conversion and retention.",
      },
    ],
    deliverables: [
      "Production-Grade SaaS Codebase",
      "Modern Web Application",
      "CI/CD Pipelines & Test Automation",
      "Comprehensive Technical Documentation",
    ],
    techStack: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "custom-internal-platforms",
    href: "/services/custom-internal-platforms",
    badge: "Internal Tools",
    title: "Custom Internal Platforms",
    shortDescription:
      "Custom CRM, ERP and business systems built around how your company operates.",
    fullDescription:
      "Custom CRM, ERP and business systems built around how your company operates.",
    iconName: "Settings",
    featured: true,
    features: [
      {
        title: "Tailored Workflows & Automation",
        description: "Software engineered precisely around your proprietary team processes rather than rigid templates.",
      },
      {
        title: "Role-Based Access & Governance",
        description: "Fine-grained permissions, audit logging, and enterprise security policies.",
      },
      {
        title: "Operational Visibility & Reporting",
        description: "Real-time analytics and custom dashboards built for decision-makers.",
      },
    ],
    deliverables: [
      "Custom CRM / ERP Platform",
      "Admin & Operations Dashboards",
      "Automated Business Workflow Triggers",
      "Database Architecture & Migrations",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
  },
  {
    slug: "data-engineering-pipelines",
    href: "/services/data-engineering-pipelines",
    badge: "Data & Pipelines",
    title: "Data Engineering & Pipelines",
    shortDescription:
      "Data infrastructure and pipelines that turn fragmented data into reliable, AI-ready systems.",
    fullDescription:
      "Data infrastructure and pipelines that turn fragmented data into reliable, AI-ready systems.",
    iconName: "Database",
    featured: true,
    features: [
      {
        title: "ETL & ELT Data Pipelines",
        description: "Automated ingestion, transformation, and normalization across disparate data sources.",
      },
      {
        title: "AI-Ready Data Warehousing",
        description: "Clean, structured vector stores and data lakes prepared for real-time model querying.",
      },
      {
        title: "Data Quality & Observability",
        description: "Automated validation, schema monitoring, and continuous data integrity checks.",
      },
    ],
    deliverables: [
      "Scalable Ingestion & Transformation Pipelines",
      "Vector & Relational Database Architecture",
      "Automated Data Cleaning Routines",
      "Monitoring & Pipeline Health Dashboards",
    ],
    techStack: ["Python", "PostgreSQL", "pgvector", "Apache Kafka", "Redis", "Qdrant", "dbt"],
  },
  {
    slug: "systems-integration-api-engineering",
    href: "/services/systems-integration-api-engineering",
    badge: "Integrations",
    title: "Systems Integration & API Engineering",
    shortDescription:
      "Connect your software, platforms and data so your systems work together.",
    fullDescription:
      "Connect your software, platforms and data so your systems work together.",
    iconName: "GitMerge",
    featured: true,
    features: [
      {
        title: "Unified API Architecture",
        description: "Robust REST, GraphQL, and event-driven APIs connecting siloed systems seamlessly.",
      },
      {
        title: "Third-Party & Legacy Connectors",
        description: "Custom middleware bridging third-party SaaS platforms with proprietary legacy systems.",
      },
      {
        title: "High Reliability & Webhooks",
        description: "Fault-tolerant webhook handlers, queue-backed retries, and rate-limiting infrastructure.",
      },
    ],
    deliverables: [
      "Enterprise Integration Middleware",
      "Custom API Gateway & Endpoints",
      "Event Bus & Webhook Architecture",
      "Interactive API Documentation",
    ],
    techStack: ["FastAPI", "Node.js", "TypeScript", "GraphQL", "RabbitMQ", "Redis", "Docker"],
  },
  {
    slug: "cloud-modernization-migration",
    href: "/services/cloud-modernization-migration",
    badge: "Cloud & DevOps",
    title: "Cloud Modernization & Migration",
    shortDescription:
      "Modernize, migrate and scale legacy systems on reliable cloud infrastructure.",
    fullDescription:
      "Modernize, migrate and scale legacy systems on reliable cloud infrastructure.",
    iconName: "Cloud",
    featured: true,
    features: [
      {
        title: "Zero-Downtime Cloud Migration",
        description: "Structured migration roadmaps that transfer workloads smoothly without disruption.",
      },
      {
        title: "Containerization & Orchestration",
        description: "Docker and Kubernetes setups optimizing resource utilization and system resilience.",
      },
      {
        title: "Cloud Infrastructure as Code",
        description: "Repeatable, automated infrastructure deployment with Terraform and modern CI/CD.",
      },
    ],
    deliverables: [
      "Cloud Architecture Blueprint",
      "Dockerized Applications & Helm Charts",
      "Automated CI/CD Deployment Pipelines",
      "Cloud Cost & Performance Optimization Report",
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    slug: "mobile-field-apps",
    href: "/services/mobile-field-apps",
    badge: "Mobile Apps",
    title: "Mobile & Field Apps",
    shortDescription:
      "Mobile applications built for teams and field operations.",
    fullDescription:
      "Mobile applications built for teams and field operations.",
    iconName: "Smartphone",
    featured: false,
    features: [
      {
        title: "Offline-First Synchronization",
        description: "Field apps engineered to perform seamlessly without internet and sync when back online.",
      },
      {
        title: "Cross-Platform Performance",
        description: "Native-quality mobile applications for iOS and Android with single-codebase velocity.",
      },
      {
        title: "Hardware & Sensor Integration",
        description: "Deep integration with GPS, camera OCR, Bluetooth devices, and barcode scanning.",
      },
    ],
    deliverables: [
      "iOS & Android Mobile Applications",
      "Offline Sync & Local Database Architecture",
      "Admin Dispatch & Tracking Console",
      "App Store & Enterprise MDM Deployment",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "SQLite", "Node.js", "Tailwind CSS"],
  },
  {
    slug: "security-compliance-by-design",
    href: "/services/security-compliance-by-design",
    badge: "Security",
    title: "Security & Compliance by Design",
    shortDescription:
      "Secure software architecture, data protection and compliance built into your systems from day one.",
    fullDescription:
      "Secure software architecture, data protection and compliance built into your systems from day one.",
    iconName: "ShieldCheck",
    featured: false,
    features: [
      {
        title: "Enterprise Compliance Readiness",
        description: "Architecture aligned with SOC 2, HIPAA, and GDPR standards from initial design.",
      },
      {
        title: "Data Encryption & Zero Trust",
        description: "End-to-end encryption in transit and at rest with strict zero-trust access controls.",
      },
      {
        title: "Automated Vulnerability Auditing",
        description: "Continuous static analysis, dependency scanning, and secret management.",
      },
    ],
    deliverables: [
      "Security Architecture Assessment",
      "Compliance Implementation Roadmap",
      "Hardened Infrastructure Configurations",
      "Secrets Management & Access Policies",
    ],
    techStack: ["OAuth2", "OpenID Connect", "HashiCorp Vault", "AWS KMS", "OWASP Best Practices"],
  },
  {
    slug: "managed-support-continuous-improvement",
    href: "/services/managed-support-continuous-improvement",
    badge: "Support & SLA",
    title: "Managed Support & Continuous Improvement",
    shortDescription:
      "Ongoing monitoring, improvements and dedicated engineering support after launch.",
    fullDescription:
      "Ongoing monitoring, improvements and dedicated engineering support after launch.",
    iconName: "Activity",
    featured: false,
    features: [
      {
        title: "24/7 Monitoring & Alerting",
        description: "Proactive uptime, health, and error tracking with automated incident response.",
      },
      {
        title: "Continuous Feature Iteration",
        description: "Dedicated sprint capacity for regular enhancements, performance tuning, and updates.",
      },
      {
        title: "SLA-Backed Engineering Support",
        description: "Fast-response engineering escalations directly handled by the developers who built it.",
      },
    ],
    deliverables: [
      "Production Health & Telemetry Dashboard",
      "Monthly Maintenance & Improvement Reports",
      "SLA Incident Escalation Protocol",
      "Ongoing Feature Releases",
    ],
    techStack: ["Datadog", "Sentry", "Prometheus", "Grafana", "AWS CloudWatch", "GitHub Actions"],
  },
];
