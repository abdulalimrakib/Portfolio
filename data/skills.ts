import {
  Code,
  Bot,
  ScanEye,
  BrainCircuit,
  SlidersHorizontal,
  Sparkles,
  Globe,
  Database,
  type LucideIcon,
} from "lucide-react";

export type SkillAccent =
  "indigo" | "purple" | "blue" | "emerald" | "orange" | "teal" | "sky" | "rose";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: SkillAccent;
  items: string[];
  /** Give a category extra width in the bento grid on large screens. */
  wide?: boolean;
}

/**
 * Grouped directly from the Resume's SKILLS section and the Academic CV's
 * "Teaching, Technical, and Research Skills" section (which is a superset —
 * e.g. it additionally lists the Grok API and HTML5/CSS3/Bootstrap/SASS).
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    accent: "indigo",
    items: ["Python", "JavaScript", "SQL", "C", "C++", "Java", "Kotlin"],
  },
  {
    title: "NLP & LLMs",
    icon: Bot,
    accent: "purple",
    items: [
      "LoRA / QLoRA fine-tuning",
      "SFT (TRL SFTTrainer)",
      "RAG architecture",
      "LangChain",
      "LangGraph",
      "Prompt engineering (few-shot, chain-of-thought)",
      "Hugging Face Transformers",
      "PEFT",
      "Unsloth",
      "Bilingual English–Bangla NLP",
    ],
    wide: true,
  },
  {
    title: "Computer Vision",
    icon: ScanEye,
    accent: "blue",
    items: [
      "CNNs",
      "Vision Transformers",
      "GANs",
      "Image classification",
      "Forensic manipulation detection/localization",
      "Grad-CAM & LIME",
      "OpenCV",
      "Albumentations",
      "timm",
    ],
  },
  {
    title: "ML / DL Frameworks",
    icon: BrainCircuit,
    accent: "emerald",
    items: [
      "PyTorch",
      "TensorFlow / Keras",
      "Scikit-learn",
      "ONNX / ONNX Runtime",
      "NumPy",
      "Pandas",
      "SciPy",
    ],
  },
  {
    title: "Applied ML Techniques",
    icon: SlidersHorizontal,
    accent: "orange",
    items: [
      "Knowledge distillation",
      "INT8 quantization",
      "Ensemble learning",
      "Transfer learning",
      "Hyperparameter search",
      "Explainable AI",
    ],
  },
  {
    title: "Generative AI APIs",
    icon: Sparkles,
    accent: "teal",
    items: [
      "OpenAI API",
      "Anthropic Claude API",
      "Google Gemini API",
      "Grok API",
    ],
  },
  {
    title: "Web & Backend",
    icon: Globe,
    accent: "sky",
    items: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "REST API design",
      "JWT authentication",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    accent: "rose",
    items: [
      "MySQL",
      "MongoDB",
      "Chroma (vector DB)",
      "Git / GitHub",
      "Linux CLI",
      "Jupyter Notebook",
      "Postman",
    ],
  },
];
