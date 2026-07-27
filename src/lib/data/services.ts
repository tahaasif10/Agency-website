// src/lib/data/services.ts
import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    slug: "generative-ai-development",
    href: "/services/generative-ai-development",
    badge: "Generative AI",
    title: "Generative AI & Enterprise LLM Applications",
    shortDescription:
      "Custom LLM-powered applications, copilots, content engines, and autonomous code assistants built for production reliability.",
    fullDescription:
      "We design, build, and deploy custom Generative AI applications tailored specifically to your domain logic. Moving beyond standard wrappers, we integrate state-of-the-art LLMs directly into your data pipelines and user interfaces with custom guards and monitoring.",
    iconName: "Sparkles",
    featured: true,
    features: [
      {
        title: "Custom Copilots & Workflows",
        description: "Task-specific assistants that integrate directly with your existing APIs and tools.",
      },
      {
        title: "Structured Output Pipelines",
        description: "Enforce strict JSON schemas and validation logic for enterprise system integration.",
      },
      {
        title: "Latency & Cost Optimization",
        description: "Model routing and prompt compression to reduce token costs by up to 60%.",
      },
    ],
    deliverables: [
      "Custom Web & Mobile Interfaces",
      "API & Middleware Architecture",
      "Evaluation & Benchmarking Frameworks",
      "Production Telemetry & Observability",
    ],
    techStack: ["Next.js", "Python", "LangChain", "LlamaIndex", "OpenAI", "Anthropic", "vLLM"],
  },
  {
    slug: "ai-agent-development",
    href: "/services/ai-agent-development",
    badge: "Autonomous Agents",
    title: "Autonomous AI Agents & Multi-Agent Workflows",
    shortDescription:
      "Self-correcting AI agents capable of multi-step planning, tool usage, database interaction, and automated task execution.",
    fullDescription:
      "Build autonomous agents that don't just answer questions—they perform end-to-end operational work. Our agentic architectures feature self-reflection loops, stateful task trees, sandbox code execution, and human-in-the-loop fallback controls.",
    iconName: "Bot",
    featured: true,
    features: [
      {
        title: "Multi-Agent Collaboration",
        description: "Specialized sub-agents communicating through orchestrated coordination layers.",
      },
      {
        title: "Tool Execution & Function Calling",
        description: "Agents equipped to query SQL databases, send emails, trigger webhooks, and run scripts.",
      },
      {
        title: "Safety & Guardrails",
        description: "Strict permission scoping and human approval steps for sensitive operations.",
      },
    ],
    deliverables: [
      "Multi-agent Orchestrator Codebase",
      "Tooling & API Connectors",
      "Human-in-the-loop Dashboard",
      "Deployment Scripts & Docker Containers",
    ],
    techStack: ["LangGraph", "AutoGen", "CrewAI", "Python", "FastAPI", "Redis", "Docker"],
  },
  {
    slug: "rag-systems",
    href: "/services/rag-systems",
    badge: "Data & Search",
    title: "Enterprise RAG & Knowledge Retrieval Systems",
    shortDescription:
      "Production-grade Retrieval-Augmented Generation that connects your private data to LLMs with zero hallucination.",
    fullDescription:
      "Eliminate model hallucinations by grounding LLMs in your enterprise documents, vector databases, and live data sources. We build hybrid search pipelines combining dense vector retrieval with sparse keyword matching and re-ranking models.",
    iconName: "Database",
    featured: true,
    features: [
      {
        title: "Hybrid Vector Search & Re-ranking",
        description: "Combine semantic search with Cohere re-ranking for pinpoint context selection.",
      },
      {
        title: "Document Parsing & Chunking",
        description: "Extract clean text, tables, and charts from complex PDFs, slide decks, and spreadsheets.",
      },
      {
        title: "Granular Access Control (RBAC)",
        description: "Ensure users only retrieve context they have explicit enterprise permission to see.",
      },
    ],
    deliverables: [
      "Vector Database Setup & Ingestion Pipeline",
      "Semantic Chunking & Parsing Engine",
      "Hybrid Search & Re-ranking Layer",
      "Context Verification & Hallucination Guardrails",
    ],
    techStack: ["Pinecone", "Qdrant", "pgvector", "Unstructured.io", "Cohere", "FastAPI"],
  },
  {
    slug: "model-fine-tuning",
    href: "/services/model-fine-tuning",
    badge: "Custom Models",
    title: "Domain Model Fine-Tuning & Quantization",
    shortDescription:
      "Custom open-weights models (Llama 3, Qwen, DeepSeek) fine-tuned on your proprietary data for total privacy.",
    fullDescription:
      "Take total control of your AI stack with custom fine-tuned models. We utilize LoRA, QLoRA, and DPO techniques to train open-weight models on your domain dataset, delivering cloud-tier intelligence on your own hardware.",
    iconName: "Cpu",
    featured: false,
    features: [
      {
        title: "Dataset Preparation & Synthetic Data",
        description: "Clean, filter, and augment domain datasets for high-quality instruction tuning.",
      },
      {
        title: "LoRA & QLoRA Fine-Tuning",
        description: "Parameter-efficient tuning reducing VRAM requirements while maximizing accuracy.",
      },
      {
        title: "On-Prem / Edge Quantization",
        description: "Quantize models (GGUF, AWQ, GPTQ) for low-latency inference on private hardware.",
      },
    ],
    deliverables: [
      "Dataset Cleaning & Formatting Pipeline",
      "Tuned Model Weights & Checkpoints",
      "vLLM / Ollama Deployment Server Setup",
      "Benchmark Comparison Matrix",
    ],
    techStack: ["PyTorch", "Hugging Face", "Unsloth", "vLLM", "Axolotl", "Ollama"],
  },
  {
    slug: "computer-vision-nlp",
    href: "/services/computer-vision-nlp",
    badge: "Vision & Speech",
    title: "Computer Vision, Speech & Multimodal Systems",
    shortDescription:
      "Visual inspection, real-time object tracking, document OCR, and low-latency voice AI agents.",
    fullDescription:
      "Transform visual and auditory data into actionable business intelligence. From real-time camera feeds to automated document processing and conversational voice bots, we deploy end-to-end multimodal models.",
    iconName: "Eye",
    featured: false,
    features: [
      {
        title: "Document AI & Vision OCR",
        description: "Extract structured JSON from invoices, receipts, blueprints, and handwritten forms.",
      },
      {
        title: "Real-time Voice AI Agents",
        description: "Ultra-low-latency (<500ms) conversational voice bots for telephone and app interactions.",
      },
      {
        title: "Object Tracking & Detection",
        description: "Edge-deployed YOLO and SAM models for quality control and security.",
      },
    ],
    deliverables: [
      "Custom Computer Vision Model Pipeline",
      "Speech-to-Text & Text-to-Speech Streaming Server",
      "Edge Deployment Package",
    ],
    techStack: ["OpenCV", "YOLOv8", "Whisper", "Deepgram", "Cartesia", "TensorRT"],
  },
  {
    slug: "ai-strategy-consulting",
    href: "/services/ai-strategy-consulting",
    badge: "Strategy",
    title: "AI Architecture & Security Roadmap Consulting",
    shortDescription:
      "Technical discovery, AI readiness audits, security risk assessments, and executive roadmap planning.",
    fullDescription:
      "Navigate the AI landscape with confidence. We audit your existing tech stack, evaluate data readiness, identify high-ROI use cases, and deliver a comprehensive production architecture blueprint before you write a line of code.",
    iconName: "Sliders",
    featured: false,
    features: [
      {
        title: "Tech Stack & Data Readiness Audit",
        description: "Evaluate your architecture, data hygiene, and security posture for AI readiness.",
      },
      {
        title: "High-ROI Use Case Prioritization",
        description: "Identify and scope high-value opportunities with clear build-vs-buy analysis.",
      },
      {
        title: "Security & Compliance Blueprint",
        description: "Ensure HIPAA, SOC 2, and GDPR compliance across all AI data touchpoints.",
      },
    ],
    deliverables: [
      "Executive AI Strategy Report",
      "Technical Architecture Blueprint",
      "ROI Model & Cost Estimation Matrix",
      "Proof of Concept (PoC) Specification",
    ],
    techStack: ["Architecture Analysis", "Security Audit", "SOC2/HIPAA Guidance"],
  },
];
