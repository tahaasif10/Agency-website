// src/lib/data/caseStudies.ts
import { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "fraud-detection-agent",
    name: "Real-Time Transaction Fraud Detection Agent",
    client: "Nexus Financial Technologies",
    industry: "Fintech & Banking",
    role: "Lead AI Systems Architect & Core Developer",
    summary:
      "Engineered an autonomous multi-agent transaction monitoring system that analyzes high-velocity financial streams in real time.",
    challenge:
      "Nexus FinTech was losing millions to sophisticated fraud vectors while their legacy rule-based engines triggered a 45% false-positive rate, overwhelming compliance teams and infuriating legitimate users.",
    solution:
      "We built a hybrid multi-agent system combining real-time streaming anomaly detection with a fast LLM reasoning agent. The agent inspects user graph history, cross-references transaction velocity, and automatically flags high-risk transactions with fully auditable plain-language explanations.",
    impact:
      "Drastically reduced false positives while stopping complex fraudulent transactions within 120ms of execution.",
    results: [
      { metric: "62%", label: "Reduction in False Positives" },
      { metric: "<120ms", label: "End-to-End Decision Latency" },
      { metric: "$4.2M", label: "Annualized Fraud Losses Prevented" },
    ],
    tags: ["Fintech", "Agents", "LangGraph", "Fraud AI"],
    techStack: ["LangGraph", "Python", "FastAPI", "Redis Vector DB", "Apache Kafka", "OpenAI GPT-4o"],
    featured: true,
    testimonial: {
      quote:
        "Apex AI didn't just build a model; they delivered a production financial guard system that saved us millions within our first quarter.",
      author: "Marcus Vance",
      role: "VP of Engineering, Nexus Financial",
    },
  },
  {
    slug: "clinical-intake-copilot",
    name: "HIPAA-Compliant Clinical Intake & Scribe Copilot",
    client: "OmniHealth Medical Network",
    industry: "Healthcare & MedTech",
    role: "AI Health Systems Engineer",
    summary:
      "Developed a HIPAA-compliant voice-to-EHR clinical assistant that transcribes physician-patient encounters into structured medical charts.",
    challenge:
      "Physicians at OmniHealth spent over 3 hours every day manually typing clinical notes into EHR systems, leading to burnout and decreased patient face-time.",
    solution:
      "We constructed a local-first ambient listening copilot powered by fine-tuned Whisper and a specialized medical LLM. The system transcribes conversations live, extracts ICD-10 medical codes, formats SOAP notes, and pushes them securely into Epic EHR.",
    impact:
      "Cut doctor administrative workload by 70%, allowing physicians to see more patients with zero compromise on chart quality.",
    results: [
      { metric: "3.2x", label: "Faster Patient Onboarding" },
      { metric: "70%", label: "Reduction in Doctor EHR Workload" },
      { metric: "100%", label: "HIPAA & BAA Compliance" },
    ],
    tags: ["Healthcare", "Speech AI", "RAG", "HIPAA"],
    techStack: ["Whisper", "Fine-Tuned Llama 3", "Python", "FastAPI", "Epic Systems API", "Docker"],
    featured: true,
    testimonial: {
      quote:
        "Our doctors went from spending nights charting to finishing their documentation before leaving the clinic. Transformed our practice completely.",
      author: "Dr. Elena Rostova",
      role: "Chief Medical Information Officer, OmniHealth",
    },
  },
  {
    slug: "support-ticket-triage",
    name: "Autonomous Support Ticket Triage & Resolution",
    client: "CloudPulse SaaS",
    industry: "Enterprise B2B Software",
    role: "Full-Stack AI Engineer",
    summary:
      "Deploys an intelligent tier-1 support agent that parses incoming technical tickets, resolves standard issues, and routes complex bugs.",
    challenge:
      "CloudPulse faced a 48-hour backlog of customer support tickets across email, Zendesk, and Slack, directly hurting net retention and user satisfaction.",
    solution:
      "We integrated a custom RAG system directly with CloudPulse's technical documentation, GitHub issues, and customer database. The AI agent resolves tier-1 technical questions autonomously and drafts precise context-filled tickets for human engineers.",
    impact:
      "Eliminated the ticket backlog overnight and reduced average resolution times from 48 hours to under 4 minutes.",
    results: [
      { metric: "40%", label: "Fewer Human Escalations" },
      { metric: "4 min", label: "Average Ticket Resolution Time" },
      { metric: "94%", label: "Customer Satisfaction (CSAT)" },
    ],
    tags: ["Classification", "SaaS", "Automation", "RAG"],
    techStack: ["Next.js", "Python", "Pinecone", "Zendesk API", "OpenAI", "LangChain"],
    featured: true,
  },
  {
    slug: "contract-review-assistant",
    name: "AI Legal Contract Analysis & Redlining Tool",
    client: "Lexis Counsel Group",
    industry: "Legal Tech & Corporate Law",
    role: "AI Document Systems Architect",
    summary:
      "Built a specialized document AI engine that parses complex multi-page legal agreements, highlights non-standard clauses, and suggests redlines.",
    challenge:
      "Attorneys spent 6-8 hours manually reviewing standard NDA, MSA, and SaaS contracts for compliance with corporate risk guidelines.",
    solution:
      "We developed a document processing pipeline using multimodal OCR and structured LLM extraction. The tool scans legal PDFs, flags high-risk clauses against company playbooks, and generates downloadable Microsoft Word redlines.",
    impact:
      "Accelerated contract turnaround time from days to minutes while standardizing risk guidelines across global offices.",
    results: [
      { metric: "5 hrs", label: "Saved per Contract Review" },
      { metric: "99.4%", label: "Clause Classification Accuracy" },
      { metric: "85%", label: "Lower External Legal Fees" },
    ],
    tags: ["RAG", "Legal", "Document AI", "OCR"],
    techStack: ["Unstructured.io", "Python", "Qdrant", "Anthropic Claude 3.5 Sonnet", "React"],
    featured: false,
  },
  {
    slug: "inventory-forecasting",
    name: "Predictive Inventory Demand Forecasting Engine",
    client: "Vanguard Retail Brands",
    industry: "E-Commerce & Supply Chain",
    role: "Machine Learning & AI Developer",
    summary:
      "Implemented a predictive analytics model that combines historical sales data, weather trends, and marketing campaigns to forecast SKU demand.",
    challenge:
      "Vanguard suffered from frequent out-of-stock events on top-selling SKUs while holding excess inventory on slow-moving products, tying up millions in capital.",
    solution:
      "We trained custom time-series forecasting models integrated with an LLM strategy agent that analyzes supplier lead times and generates optimal purchase orders.",
    impact:
      "Optimized inventory turnover, dramatically reduced stockouts during peak promotional windows, and freed up working capital.",
    results: [
      { metric: "18%", label: "Reduction in Stockout Events" },
      { metric: "$1.8M", label: "Working Capital Unlocked" },
      { metric: "91%", label: "Demand Prediction Precision" },
    ],
    tags: ["Forecasting", "Retail", "Predictive ML"],
    techStack: ["PyTorch", "XGBoost", "Python", "Snowflake", "FastAPI", "TailwindCSS"],
    featured: false,
  },
  {
    slug: "sales-call-analyzer",
    name: "Conversational Sales Intelligence Platform",
    client: "ScaleUp Revenue Co.",
    industry: "Enterprise Sales & CRM",
    role: "Speech AI Specialist",
    summary:
      "Built a sales conversation intelligence system that transcribes recorded sales calls, evaluates objection handling, and updates CRM fields.",
    challenge:
      "Sales managers lacked visibility into why deals stalled and spent hours manually listening to call recordings to coach account executives.",
    solution:
      "We constructed a pipeline that automatically ingests Gong/Zoom calls, extracts key buying signals, flags competitor mentions, and writes structured updates into Salesforce.",
    impact:
      "Gave sales leaders instant visibility across hundreds of calls per week and boosted account executive closing efficiency.",
    results: [
      { metric: "28%", label: "Increase in Deal Close Rate" },
      { metric: "100%", label: "Automated CRM Data Hygiene" },
      { metric: "12 hrs", label: "Saved per Manager per Week" },
    ],
    tags: ["Speech AI", "Sales Analytics", "CRM Integration"],
    techStack: ["Deepgram", "OpenAI GPT-4o", "Salesforce API", "Python", "Next.js"],
    featured: false,
  },
];
