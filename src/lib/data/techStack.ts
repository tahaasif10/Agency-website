// src/lib/data/techStack.ts
import { TechStackItem } from "@/types";

export const techStackData: TechStackItem[] = [
  // AI & LLMs
  {
    name: "OpenAI GPT-4o / O1",
    category: "AI & LLMs",
    description: "State-of-the-art multimodal reasoning models for complex task execution.",
  },
  {
    name: "Anthropic Claude 3.5",
    category: "AI & LLMs",
    description: "Industry-leading precision in code generation and long-context comprehension.",
  },
  {
    name: "Llama 3 & DeepSeek",
    category: "AI & LLMs",
    description: "Open-weight foundational models for private, fine-tuned on-premise deployment.",
  },
  {
    name: "LangChain & LangGraph",
    category: "AI & LLMs",
    description: "Stateful agentic orchestration and multi-agent workflow control.",
  },

  // Vector DBs & Search
  {
    name: "Pinecone & Qdrant",
    category: "Vector DBs & Search",
    description: "High-throughput vector indexing for real-time semantic retrieval.",
  },
  {
    name: "pgvector (PostgreSQL)",
    category: "Vector DBs & Search",
    description: "Native relational vector storage keeping relational data and embeddings unified.",
  },
  {
    name: "Cohere Re-Rank",
    category: "Vector DBs & Search",
    description: "Advanced semantic re-ranking layer ensuring pinpoint retrieval accuracy.",
  },

  // Frameworks & Runtime
  {
    name: "Next.js 16 & React 19",
    category: "Frameworks & Runtime",
    description: "Modern App Router frontend architecture with server component streaming.",
  },
  {
    name: "Python & FastAPI",
    category: "Frameworks & Runtime",
    description: "High-concurrency async backend services optimized for ML workloads.",
  },
  {
    name: "vLLM & Ollama",
    category: "Frameworks & Runtime",
    description: "Ultra-fast local model inference engine with PagedAttention optimization.",
  },

  // Cloud & Security
  {
    name: "Docker & Kubernetes",
    category: "Cloud & Security",
    description: "Containerized, reproducible microservices for seamless cloud or on-prem deployment.",
  },
  {
    name: "AWS / GCP / Azure",
    category: "Cloud & Security",
    description: "Enterprise VPC isolation with strict KMS encryption and access control.",
  },
  {
    name: "Vercel & Supabase",
    category: "Cloud & Security",
    description: "Edge application hosting with serverless database and auth infrastructure.",
  },
];
