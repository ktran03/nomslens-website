export const SITE_NAME = "NomLens";
export const SITE_URL  = "https://nomlens.app";
export const SITE_DESCRIPTION =
  "NomLens decodes Han Nôm script from photos of stone steles, temple inscriptions, and ancient manuscripts — on your iPhone, offline.";

export const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Model",        href: "/model"         },
  { label: "Docs",         href: "/docs"           },
  { label: "Research",     href: "/research"       },
];

export const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Photograph",
    description:
      "Point your camera at any Han Nôm source — a stone stele, temple inscription, manuscript page, or printed text. NomLens accepts photos from your library too.",
    icon: "📷",
  },
  {
    step: "02",
    title: "Preprocess",
    description:
      "Core Image filters run on-device in milliseconds: adaptive thresholding corrects uneven lighting on weathered stone, noise reduction cleans aged manuscript ink, and perspective correction fixes keystoning.",
    icon: "⚙️",
  },
  {
    step: "03",
    title: "Segment & Sort",
    description:
      "Apple's Vision framework locates individual characters. NomLens clusters them into columns and sorts right-to-left, top-to-bottom — the correct Han Nôm reading order.",
    icon: "🔲",
  },
  {
    step: "04",
    title: "Classify",
    description:
      "Each character crop is passed to an on-device Core ML model (EfficientNet-B0, 10.6 MB). High-confidence results are instant. Low-confidence characters escalate to Claude Vision API for expert fallback.",
    icon: "🧠",
  },
  {
    step: "05",
    title: "Results",
    description:
      "A structured grid returns each character with its Unicode form, Quốc ngữ transliteration, English meaning, and a confidence badge. Tap any cell for full decode details. Everything persists in local history.",
    icon: "📋",
  },
];

export const MODEL_STATS = [
  { label: "Validation Accuracy",          value: "97.6%",   note: "EfficientNet-B0, v1"           },
  { label: "Precision @ ≥90% Confidence",  value: "99.3%",   note: "Calibrated confidence scores"  },
  { label: "Routes to Claude",             value: "1.4%",    note: "Below 60% threshold"            },
  { label: "Model Size",                   value: "10.6 MB", note: ".mlpackage, INT8-ready for v2"  },
  { label: "Inference Speed",              value: "<10ms",   note: "iPhone Neural Engine"           },
  { label: "Calibration Error (ECE)",      value: "0.0034",  note: "After temperature scaling (T=0.6908)" },
  { label: "Character Classes (v1)",       value: "972",     note: "83.5% of corpus coverage"      },
  { label: "Training Images",             value: "296K+",   note: "HWDB handwriting + font renders" },
];

export const CONFIDENCE_TIERS = [
  {
    range: "≥ 90%",
    label: "High",
    color: "green",
    action: "Accepted on-device. Result shown with green badge.",
  },
  {
    range: "60 – 90%",
    label: "Medium",
    color: "yellow",
    action: "Accepted on-device. Yellow badge flags for user review.",
  },
  {
    range: "< 60%",
    label: "Low",
    color: "red",
    action: "Escalated to Claude Vision API for expert classification.",
  },
];

export const AUDIENCE_CARDS = [
  {
    audience: "Field Users",
    headline: "Works where the inscriptions are",
    body: "Remote temples, rural steles, archaeological sites with no cell signal. NomLens runs entirely on-device. No internet required after the initial model download.",
    cta: { label: "Download", href: "#download" },
    icon: "🏛️",
  },
  {
    audience: "Scholars",
    headline: "Accuracy you can cite",
    body: "97.6% validation accuracy on the Han layer. Temperature-calibrated confidence scores (ECE 0.0034). Full decode provenance: character, Unicode codepoint, source type, model version. Export to structured JSON.",
    cta: { label: "Model details", href: "/model" },
    icon: "📜",
  },
  {
    audience: "Developers",
    headline: "Open architecture, OTA model delivery",
    body: "EfficientNet-B0 Core ML classifier, confidence-routed fallback to Claude API, SHA-256 verified OTA model updates. Full pipeline documentation and manifest spec.",
    cta: { label: "Read the docs", href: "/docs" },
    icon: "⚙️",
  },
];

export const DOCS_NAV = [
  { label: "Overview",             href: "/docs#overview"        },
  { label: "iOS Components",       href: "/docs#ios-components"  },
  { label: "Manifest Format",      href: "/docs#manifest"        },
  { label: "Download & Verify",    href: "/docs#download"        },
  { label: "Model Activation",     href: "/docs#activation"      },
  { label: "Storage Layout",       href: "/docs#storage"         },
  { label: "Known Gaps",           href: "/docs#gaps"            },
];

export const COVERAGE_TIERS = [
  { classes: 972,   label: "v1 (current)", coverage: "83.5%", bar: 83.5 },
  { classes: 2000,  label: "v2 (planned)", coverage: "95.2%", bar: 95.2 },
  { classes: 3000,  label: "v3 (future)",  coverage: "99.5%", bar: 99.5 },
];

export const COMPETITOR_ROWS = [
  { dimension: "Architecture",         academic: "CRNN / Transformer / U-Net",  nomlens: "EfficientNet-B0 (mobile)"      },
  { dimension: "Deployment",           academic: "Server-side only",            nomlens: "On-device, offline"            },
  { dimension: "Task",                 academic: "Line-level sequence OCR",     nomlens: "Single-character classification" },
  { dimension: "Accuracy (real data)", academic: "71–85% depending on method", nomlens: "97.6% val (Han layer)"         },
  { dimension: "Inference speed",      academic: "No on-device benchmarks",     nomlens: "<10ms on Neural Engine"        },
  { dimension: "iOS app",              academic: "None with real ML",           nomlens: "NomLens"                       },
  { dimension: "Data flywheel",        academic: "None",                        nomlens: "Every correction = training data" },
];
