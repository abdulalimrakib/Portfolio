export interface ResearchProject {
  title: string;
  subtitle: string;
  category:
    | "Computer Vision, Medical Imaging & Forensics"
    | "NLP & Large Language Models";
  period: string;
  summary: string;
  highlights: string[];
  tools: string[];
  githubHref?: string;
  /** Give the strongest, most complete project the largest card. */
  featured?: boolean;
}

/**
 * Sourced from the Academic CV's "Research Experience and Academic Projects"
 * section, which is a more detailed superset of the Resume's PROJECTS
 * section for the same work — figures here match the Academic CV's precise
 * wording. GitHub links were recovered from the CV PDF's link annotations,
 * not invented; projects with no linked repository in the source PDF have
 * no githubHref (LawBot, IELTS Evaluator, SecureSpeak, BrainTumorTracking).
 */
export const researchProjects: ResearchProject[] = [
  {
    title:
      "A Leakage-Safe Benchmark for Deployable Rice Variety Classification",
    subtitle:
      "Independent undergraduate research, North South University · co-authored with Sumaya Shimu Rima",
    category: "Computer Vision, Medical Imaging & Forensics",
    period: "Ongoing",
    summary:
      "A leakage-safe, deployable benchmark across 22 pretrained CNN and Vision Transformer architectures on a unified 63-class, 98,730-image rice dataset.",
    highlights: [
      "Unified three heterogeneous datasets into a 63-class, 98,730-image benchmark; diagnosed and corrected a data-leakage flaw that had inflated reported accuracy by up to 4.8 points.",
      "Benchmarked 22 pretrained CNN and Vision Transformer architectures under one protocol — best single model (Xception) reached 99.49% accuracy / 98.23% macro-F1; a 4-model weighted ensemble built via a 420-configuration search reached 99.66% / 98.76%.",
      "Distilled the ensemble into a lightweight ShuffleNetV2 student, replicating a published ensemble-distillation methodology (Hasan et al., IEEE Access, 2025) on a new domain — reporting a controlled negative result inconsistent with the source paper's claims.",
      "Compressed the deployable model to 1.69 MB via static per-channel ONNX INT8 quantization (348 images/sec, 96.57% macro-F1); diagnosed and resolved a dynamic-quantization failure that had collapsed accuracy from 99% to 27%.",
      "Validated with 5-fold cross-validation, bootstrap significance testing, robustness testing, and Grad-CAM / LIME interpretability analysis.",
    ],
    tools: [
      "Python",
      "PyTorch",
      "timm",
      "torchvision",
      "Albumentations",
      "ONNX / ONNX Runtime",
      "Scikit-learn",
      "Grad-CAM",
      "LIME",
    ],
    githubHref: "https://github.com/abdulalimrakib/Rice-detection",
    featured: true,
  },
  {
    title:
      "BrainTumorTracking: Response Assessment in Post-Treatment Glioma MRI",
    subtitle:
      "CSE 498R Directed Research, North South University · four-member research team",
    category: "Computer Vision, Medical Imaging & Forensics",
    period: "2025 – 2026",
    summary:
      "A measurement instrument — not another segmentation model — for longitudinal tumor-response assessment on a 203-patient post-treatment glioma MRI cohort.",
    highlights: [
      "Designed a measurement instrument for longitudinal response assessment on the MU-Glioma-Post cohort (203 patients, 596 imaging timepoints, four-label expert masks).",
      "Contributed three methodological advances: a concavity-aware perpendicular diameter computed from an interior chord rather than a rotated bounding box, a cavity-aware tumour-burden measure, and correspondence-anchored target-lesion designation across timepoints.",
      "Implemented a layered, reproducible pipeline of approximately 34,000 lines with 1,051 automated tests and a documented decision log; six stages (index, audit, measure, track, target designation, SPD computation) run end to end.",
      "Documented a dataset limitation in the public clinical table (absent scan dates) and made the pipeline fail-safe by operating in ordinal-time mode and refusing rate-based metrics rather than reporting unsupported values.",
    ],
    tools: [
      "Python",
      "NumPy",
      "SciPy",
      "Medical image processing",
      "pytest",
      "Layered architecture",
    ],
  },
  {
    title:
      "Comparative Evaluation of Deep Forensic Architectures for Manipulation Localization",
    subtitle: "Course research project (CSE 468), North South University",
    category: "Computer Vision, Medical Imaging & Forensics",
    period: "Ongoing",
    summary:
      "Controlled, reproducible benchmarking of state-of-the-art architectures for pixel-level image manipulation detection and localization.",
    highlights: [
      "Implemented and ran controlled experiments across MVSS-Net++, TruFor, SegFormer (B0/B2), EfficientNet-B4, and MMFusion for pixel-level manipulation detection and localization.",
      "Prototyped a custom dual-branch ForensicSegNet architecture and constructed manipulation datasets for reproducible comparative benchmarking.",
    ],
    tools: ["Python", "PyTorch", "Jupyter Notebook"],
    githubHref: "https://github.com/abdulalimrakib/CSE-468-2nd",
  },
  {
    title:
      "IELTS Writing Evaluator: Parameter-Efficient Fine-Tuning for Automated Essay Scoring",
    subtitle: "Independent research project, North South University",
    category: "NLP & Large Language Models",
    period: "2025",
    summary:
      "Fine-tuned Meta-Llama-3.1-8B with QLoRA/PEFT to score IELTS Writing Task 2 essays with structured, per-criterion feedback — benchmarked against frontier commercial models.",
    highlights: [
      "Fine-tuned Meta-Llama-3.1-8B-Instruct with 4-bit QLoRA and LoRA adapters (r=128, α=256) across all seven attention/MLP projection layers, trained for 1,500 steps with TRL's SFTTrainer.",
      "Produced band scores on a 0.5-step scale across the four IELTS assessment criteria, with structured, per-criterion corrective feedback.",
      "Benchmarked against GPT-4, Gemini, and DeepSeek on 100 held-out samples using quadratic weighted kappa, MAE, exact match, and accuracy within ±0.5 bands — reaching competitive agreement with frontier commercial systems.",
      "Optimized training with Unsloth gradient checkpointing, bfloat16 mixed precision, and a cosine learning-rate schedule with warm-up; saved the LoRA adapter for efficient inference.",
    ],
    tools: [
      "Hugging Face Transformers",
      "PEFT",
      "TRL",
      "Unsloth",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    title:
      "LawBot: A Retrieval-Augmented Generation System over the Bangladesh Penal Code",
    subtitle: "Independent research project, North South University",
    category: "NLP & Large Language Models",
    period: "2025",
    summary:
      "An end-to-end RAG system for natural-language Q&A over the Bangladesh Penal Code — among the first Bangla-domain RAG applications built at the university.",
    highlights: [
      "Built a full retrieval-augmented generation pipeline: document chunking, embedding generation, vector-store indexing, context injection at generation time, and citation-aware output grounding each answer in retrieved statute text.",
    ],
    tools: ["Python", "LangChain", "Chroma", "OpenAI API", "Jupyter Notebook"],
  },
  {
    title:
      "SecureSpeak: Bilingual Threat Detection for Mobile Financial Services",
    subtitle: "Independent research project, North South University",
    category: "NLP & Large Language Models",
    period: "2025",
    summary:
      "A bilingual, context-aware ML security system detecting real-time threats for Bangladeshi mobile financial service users (bKash, Nagad, Rocket).",
    highlights: [
      "Designed a context-aware, multi-layer machine learning security system combining supervised classification with real-time threat scoring.",
      "Built a bilingual English–Bangla threat-communication pipeline connecting a Python REST API inference backend to a Kotlin Android client — delivered end to end from model to mobile device.",
      "Completed a functioning Android prototype with full API integration; preparing a first-author manuscript for publication.",
    ],
    tools: [
      "Python",
      "Scikit-learn",
      "REST API",
      "Kotlin (Android)",
      "Jupyter Notebook",
    ],
  },
];
