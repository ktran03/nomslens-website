export type Lang = "en" | "vi";

// ─── English ──────────────────────────────────────────────────────────────────

const en = {
  nav: {
    howItWorks: "How It Works",
    model:      "Model",
    docs:       "Docs",
    research:   "Research",
    download:   "Download",
  },

  footer: {
    tagline:    "Decoding Han Nôm script for scholars, researchers, and anyone who wants to read what time is erasing.",
    subtitle:   "漢喃 · Chữ Nôm · Classical Vietnamese",
    navigation: "Navigation",
    resources:  "Resources",
    privacy:    "Privacy Policy",
  },

  home: {
    hero: {
      eyebrow:      "Han Nôm Decoder · iOS",
      line1:        "Read what",
      line2:        "time is erasing.",
      description:  "NomLens decodes Han Nôm script from photos of stone steles, temple inscriptions, and ancient Vietnamese manuscripts — on your iPhone,",
      offline:      "offline",
      subtext:      "Characters, Quốc ngữ transliteration, and English meaning. In seconds.",
      downloadCTA:  "Download on App Store",
      learnCTA:     "How it works",
      stats: {
        accuracy:  "97.6% validation accuracy",
        inference: "<10ms per character on Neural Engine",
        size:      "10.6 MB model · works offline",
        classes:   "972 character classes (v1)",
      },
    },

    whatIsHanNom: {
      eyebrow: "The Script",
      heading: "What is Han Nôm?",
      p1:      "Chữ Nôm (漢喃) was the primary writing system of Vietnam for over a thousand years. It combines Chinese characters (Hán) with characters invented specifically for Vietnamese sounds and concepts (Nôm).",
      p2:      "The script was used for imperial edicts, poetry, religious texts, genealogies, and stele inscriptions. Vietnam's greatest literary work — Truyện Kiều — was originally written in chữ Nôm.",
      p3:      "Today, fewer than 100 scholars worldwide can read it fluently. The physical artifacts — stone steles, aged manuscripts, temple carvings — deteriorate every year. The window for preservation is closing.",
      cta:     "Research context →",
    },

    pipeline: {
      eyebrow:  "Pipeline",
      heading:  "How NomLens works",
      subhead:  "Five steps from raw photo to structured decode. Steps 1–4 run entirely on-device.",
      cta:      "Full pipeline walkthrough →",
    },

    pipelineSteps: [
      {
        step: "01", icon: "📷",
        title:       "Photograph",
        description: "Point your camera at any Han Nôm source — a stone stele, temple inscription, manuscript page, or printed text. NomLens accepts photos from your library too.",
      },
      {
        step: "02", icon: "⚙️",
        title:       "Preprocess",
        description: "Core Image filters run on-device in milliseconds: adaptive thresholding corrects uneven lighting on weathered stone, noise reduction cleans aged manuscript ink, and perspective correction fixes keystoning.",
      },
      {
        step: "03", icon: "🔲",
        title:       "Segment & Sort",
        description: "Apple's Vision framework locates individual characters. NomLens clusters them into columns and sorts right-to-left, top-to-bottom — the correct Han Nôm reading order.",
      },
      {
        step: "04", icon: "🧠",
        title:       "Classify",
        description: "Each character crop is passed to an on-device Core ML model (EfficientNet-B0, 10.6 MB). High-confidence results are instant. Low-confidence characters escalate to Claude Vision API for expert fallback.",
      },
      {
        step: "05", icon: "📋",
        title:       "Results",
        description: "A structured grid returns each character with its Unicode form, Quốc ngữ transliteration, English meaning, and a confidence badge. Tap any cell for full decode details. Everything persists in local history.",
      },
    ],

    stats: {
      eyebrow: "Performance",
      heading: "By the numbers",
      subhead: "EfficientNet-B0 with temperature-scaled calibration. v1 model, trained on HWDB handwriting + Han Nôm font renders.",
      cta:     "Model architecture & training →",
    },

    modelStats: [
      { label: "Validation Accuracy",         value: "97.6%",   note: "EfficientNet-B0, v1"                  },
      { label: "Precision @ ≥90% Confidence", value: "99.3%",   note: "Calibrated confidence scores"         },
      { label: "Routes to Claude",            value: "1.4%",    note: "Below 60% threshold"                  },
      { label: "Model Size",                  value: "10.6 MB", note: ".mlpackage, INT8-ready for v2"        },
      { label: "Inference Speed",             value: "<10ms",   note: "iPhone Neural Engine"                 },
      { label: "Calibration Error (ECE)",     value: "0.0034",  note: "After temperature scaling (T=0.6908)" },
      { label: "Character Classes (v1)",      value: "972",     note: "83.5% of corpus coverage"            },
      { label: "Training Images",             value: "296K+",   note: "HWDB handwriting + font renders"      },
    ],

    mission: {
      eyebrow:    "Mission",
      pullQuote:  "Once a script dies, the history it carried dies with it.",
      window:     "We are in a narrow window — perhaps the last one — where the final generation of living scholars who can fluently read Han Nôm, the surviving physical artifacts, and modern AI technology all still exist at the same time. That window is closing. NomLens was built to seize it.",
      heading:    "This is not abstract research. This is a race against time.",
      p1:         "For nearly a thousand years, Han Nôm was the soul of Vietnamese culture — the script in which ancestors recorded history, poetry, law, medicine, and everyday life. Today it is in mortal danger. Physical inscriptions erode under rain and pollution. Manuscripts crumble. Fewer than a hundred people in the world still possess deep, native-level mastery of the script. When they pass, and when the stones and papers finally disintegrate, an irreplaceable portion of Vietnam's heritage disappears forever.",
      p2:         "NomLens turns anyone with a smartphone into a guardian of that heritage. Every photo taken at a remote temple, every character corrected by a user, every inscription recorded and verified becomes a permanent digital record — feeding directly back into the model, expanding its knowledge of rare glyphs, and building the largest open archive of Han Nôm ever created. You don't need to be a scholar. You just need to care.",
      vision:     "No Han Nôm inscription should ever be lost again simply because no one could read it. Future generations — scholars, students, ordinary Vietnamese — deserve to still touch the words of their ancestors.",
      cta1:       "Academic background →",
      cta2:       "Partnership opportunities",
    },

    audiences: {
      eyebrow:  "Who It's For",
      heading:  "Built for three kinds of people",
      cards: [
        {
          icon:     "🏛️",
          audience: "Field Users",
          headline: "Works where the inscriptions are",
          body:     "Remote temples, rural steles, archaeological sites with no cell signal. NomLens runs entirely on-device. No internet required after the initial model download.",
          cta:      "Download",
          href:     "#download",
        },
        {
          icon:     "📜",
          audience: "Scholars",
          headline: "Accuracy you can cite",
          body:     "97.6% validation accuracy on the Han layer. Temperature-calibrated confidence scores (ECE 0.0034). Full decode provenance: character, Unicode codepoint, source type, model version. Export to structured JSON.",
          cta:      "Model details",
          href:     "/model",
        },
        {
          icon:     "⚙️",
          audience: "Developers",
          headline: "Open architecture, OTA model delivery",
          body:     "EfficientNet-B0 Core ML classifier, confidence-routed fallback to Claude API, SHA-256 verified OTA model updates. Full pipeline documentation and manifest spec.",
          cta:      "Read the docs",
          href:     "/docs",
        },
      ],
    },

    download: {
      heading:  "Start decoding",
      subhead:  "Free download. Works offline. No account required.",
      cta:      "Download on App Store",
      footnote: "Requires iOS 17+",
    },
  },

  // ─── How It Works ───────────────────────────────────────────────────────────
  howItWorks: {
    eyebrow:     "Pipeline",
    heading:     "How NomLens Works",
    description: "A full walkthrough of every stage — from raw photograph to structured decode with Quốc ngữ transliteration and English meaning.",

    phase1: {
      label:       "Phase 1 (current)",
      heading:     "Claude Vision API fallback",
      description: "On-device model handles the majority of characters. Low-confidence crops escalate to Claude Vision API for per-glyph expert reasoning.",
    },
    phase2: {
      label:       "Phase 2 (active)",
      heading:     "On-device Core ML model",
      description: "EfficientNet-B0, 972 classes, 97.6% accuracy, <10ms on Neural Engine. Works offline. OTA model updates — no App Store update required.",
    },

    pipelineHeading: "The five-step pipeline",

    filterChain: {
      heading: "Filter chain (in order):",
      filters: [
        "Perspective correction — fix keystoning from camera angle",
        "Deskew — straighten rotated page",
        "Noise reduction — clean aged manuscript ink",
        "Contrast + brightness + desaturate (grayscale)",
        "Adaptive threshold — local contrast normalization for uneven stele lighting",
        "Unsharp mask — sharpen character edges",
      ],
      note: "All filters run via Core Image (GPU-accelerated). Adaptive thresholding is custom-built using Gaussian blur + local mean subtraction — Core Image has no native implementation.",
    },

    readingOrder: {
      heading: "Reading order:",
      body:    "Characters cluster into columns using a dynamic threshold (1.2× median bounding box width — adapts to character density). Columns sort right-to-left by midX; within each column, top-to-bottom by minY. This is the correct classical Han Nôm reading direction.",
      note:    "Vision returns normalized coordinates with origin at bottom-left. NomLens converts to pixel coordinates with origin top-left using VNImageRectForNormalizedRect, then adds 8px padding around each crop.",
    },

    confidenceRouting: {
      heading:  "Confidence routing",
      subhead:  "The on-device model returns a calibrated confidence score (after temperature scaling with T=0.6908) for every character. NomLens routes based on that score:",
      tiers: [
        { range: "≥ 90%",    label: "High confidence",   color: "green",  action: "Accepted on-device. Result shown with green badge."    },
        { range: "60 – 90%", label: "Medium confidence", color: "yellow", action: "Accepted on-device. Yellow badge flags for user review." },
        { range: "< 60%",    label: "Low confidence",    color: "red",    action: "Escalated to Claude Vision API for expert classification." },
      ],
      warning: "Important: These thresholds apply to temperature-scaled scores, not raw softmax probabilities. Raw neural network outputs are systematically overconfident — without calibration, a \"95%\" score might only correspond to 80% real accuracy. NomLens uses temperature scaling (T=0.6908) to produce scores with an Expected Calibration Error of 0.0034 — meaning the score you see is accurate to within ~0.3%.",
    },

    resultStructure: {
      heading: "Result structure",
      subhead: "Each decoded character returns a structured record. The full decode for a page assembles these records in reading order.",
      note:    "Low-confidence characters escalated to Claude Vision API use an identical output schema, returned by Claude's structured JSON response.",
    },

    ota: {
      heading: "OTA model delivery",
      subhead: "The Core ML model is not bundled in the app binary. It downloads on demand and hot-swaps without requiring an App Store update — critical for pushing accuracy improvements as the training data grows.",
      cards: [
        { title: "Version check on launch", body: "ModelManager fetches a manifest.json from the hosted endpoint. If the version matches what's on disk, no download occurs." },
        { title: "SHA-256 verification",    body: "Every downloaded .mlpackage is verified against the manifest's SHA-256 hash before it replaces the active model. Corrupt downloads are discarded." },
        { title: "Compiled model cache",    body: "After first load, the compiled .mlmodelc is cached to disk. Subsequent launches load the compiled binary directly — no recompilation overhead." },
        { title: "Hot-swap without restart", body: "ClassifierProxy holds the active model reference. ModelManager calls proxy.update() after verification — new model is live instantly." },
      ],
      cta: "Full OTA documentation →",
    },

    footer: { cta1: "Model architecture →", cta2: "Developer docs" },
  },

  // ─── Model ──────────────────────────────────────────────────────────────────
  model: {
    eyebrow:     "ML Model",
    heading:     "The NomLens Classifier",
    description: "EfficientNet-B0 trained on Han Nôm character data, exported to Core ML, and delivered OTA to iOS devices. Architecture, training strategy, calibration, and performance breakdown.",

    architecture: {
      heading: "Architecture",
      p1:      "NomLens uses EfficientNet-B0 — a CNN designed specifically for mobile/edge deployment via compound scaling of depth, width, and input resolution. It achieves better accuracy per parameter than ResNet or MobileNet at this size class.",
      p2:      "This is a single-character image classifier, not an OCR sequence model. Segmentation is handled upstream by Apple's Vision framework, so the model only needs to solve: \"given a 96×96 crop of one character, what is it?\" — a simpler and more accurate task than sequence decoding.",
      p3:      "After the convolutional layers, AdaptiveAvgPool collapses spatial dimensions to a 1280-dimensional feature vector. The classifier head (Linear 1280→N) maps this to probabilities over N character classes.",
    },

    training: {
      heading: "Training strategy",
      subhead: "Transfer learning from ImageNet pretrained weights. The backbone already knows edges, curves, textures, and geometric patterns — the same low-level features needed for stroke and radical recognition. Two-phase fine-tuning prevents the random classification head from destroying those pretrained features.",
      phases: [
        {
          phase: "Head-only (epochs 1–5)",
          details: [
            "Backbone weights frozen (requires_grad=False)",
            "Only Linear(1280→N) classification head trains",
            "Adam optimizer, lr=1e-3",
            "Rationale: prevents garbage gradients from random head from destroying pretrained backbone features",
          ],
        },
        {
          phase: "Full fine-tune (epochs 6–50)",
          details: [
            "All 5.3M parameters train",
            "AdamW optimizer, lr=1e-4 (10× lower than phase 1)",
            "CosineAnnealingLR — smooth decay toward ~0",
            "Weight decay=1e-4 (L2 regularization against overfitting)",
            "Stopped at epoch 24 — converged at 97.6% val accuracy",
          ],
        },
      ],
      imbalance: {
        heading: "Class imbalance handling",
        body:    "511 Han classes have ~576 HWDB samples each (294K total). 461 Nôm-only classes have 2–4 font renders each (1,900 total). Without intervention, the model would learn to predict Han characters almost exclusively. WeightedRandomSampler gives each sample a weight of 1/(number of samples in its class), ensuring every class appears at roughly equal frequency in every training batch regardless of raw sample count.",
      },
    },

    dataSources: [
      { name: "CASIA-HWDB",              role: "Primary",          description: "294,280 images across 511 CJK character classes. Real handwriting from Chinese writers on pen tablets. Institute of Automation, Chinese Academy of Sciences.", note: "Covers the Hán layer of Han Nôm. Dense training data for the most common characters." },
      { name: "Han Nôm Font Renders",    role: "Primary (Nôm)",    description: "1,944 PNG images rendered from HanNomA.ttf and HanNomB.ttf — 4 font variants, 2 images per class.", note: "461 Nôm-specific characters don't exist in any handwriting database. Font renders are the only available training data for these classes." },
      { name: "NomNaOCR Dataset (Kaggle)", role: "Future (v2)",    description: "38,318 labeled character patches from real woodblock-print manuscripts. Covers Truyện Kiều × 3 versions, Lục Vân Tiên, and Đại Việt Sử Ký Toàn Thư.", note: "Would meaningfully improve model performance on printed manuscript sources. Not yet incorporated." },
      { name: "User Corrections (Phase 3)", role: "Future flywheel", description: "Verified in-app corrections feed a retraining pipeline. Every low-confidence prediction that a user corrects becomes labeled training data.", note: "The moat: real-world field data from actual users and scholars cannot be replicated from scratch." },
    ],

    tempScaling: {
      heading: "Temperature scaling",
      subhead: "Neural networks trained with cross-entropy loss are systematically overconfident — a raw softmax output of \"97%\" might only correspond to 80% real accuracy. This makes confidence-based routing meaningless without calibration.",
      fix:     "The fix",
      results: "v1 results",
      note:    "T is baked into the exported Core ML model via forward_calibrated() — the iOS app never sees raw logits. All outputs are calibrated probabilities.",
    },

    coverage: {
      heading: "Character coverage",
      subhead: "Coverage is measured against a 22-work Chữ Nôm corpus from chunom.org. Rare characters outside the class set fall through to Claude Vision API fallback.",
      note:    "v2 (2,000 classes) and v3 (3,000 classes) are blocked on additional training data. The app's correction flywheel — every user-verified label — is the primary mechanism for unlocking them.",
      tiers: [
        { classes: 972,  label: "v1 (current)", coverage: "83.5%", bar: 83.5 },
        { classes: 2000, label: "v2 (planned)", coverage: "95.2%", bar: 95.2 },
        { classes: 3000, label: "v3 (future)",  coverage: "99.5%", bar: 99.5 },
      ],
    },

    footer: { cta1: "OTA & developer docs →", cta2: "Research context" },
  },

  // ─── Docs ───────────────────────────────────────────────────────────────────
  docs: {
    eyebrow:     "Developer Docs",
    heading:     "OTA Model Delivery",
    description: "NomLens delivers Core ML model updates over-the-air — no App Store update required. This documents the iOS-side architecture, manifest format, download pipeline, and current gaps.",

    overview: {
      heading: "Overview",
      body:    "The OTA system is designed to be silent, safe, and non-blocking. It never interrupts the user, never corrupts a working model, and degrades gracefully when offline.",
      startup: "Startup sequence",
      note:    "These two tasks run concurrently. The app is usable as soon as loadStoredModel() completes. The update check happens silently behind.",
    },

    components: {
      heading: "iOS components",
      items: [
        { name: "ModelManager",     file: "Services/ModelManager.swift",     description: "Central Swift actor responsible for fetching, verifying, storing, and activating models. All state mutations are serialized with no manual locking. Runs two concurrent startup tasks: loadStoredModel() (restores from disk, milliseconds) and checkForUpdates() (fetches manifest in background)." },
        { name: "ClassifierProxy",  file: "Services/ClassifierProxy.swift",  description: "Actor that wraps the active NomClassifier and allows hot-swapping at runtime. RoutingDecoder holds a reference to the proxy for the app lifetime. ModelManager calls proxy.update(newClassifier) after a successful download — all subsequent calls use the new model automatically." },
        { name: "NomClassifier",    file: "Services/NomClassifier.swift",    description: "Wraps a Core ML model using Vision (VNCoreMLModel + VNCoreMLRequest). Accepts .mlpackage or pre-compiled .mlmodelc. Class labels are Unicode codepoints in hex (e.g. '4EBA') — NomClassifier converts these to actual Unicode characters ('人'). Vision handles center-crop and scaling to the model's input size." },
        { name: "RoutingDecoder",   file: "Services/RoutingDecoder.swift",   description: "Sits between ClassifierProxy and ClaudeService. For each character crop, applies confidence routing: ≥90% → accepted on-device (green), 60–90% → accepted on-device (yellow), <60% → escalated to Claude API, throws → fail-safe escalation to Claude." },
      ],
    },

    manifest: {
      heading: "Manifest format",
      subhead: "The manifest is a small JSON file at a fixed HTTPS endpoint, fetched on every app launch.",
      fields: [
        ["version",            "Compared against UserDefaults. If equal, no download occurs."],
        ["url",                "Direct download link for the .mlpackage. Can change between versions."],
        ["sha256",             "Hex-encoded SHA-256. Verified via CryptoKit before model touches the models directory."],
        ["num_classes",        "Informational — used to sanity-check the downloaded model."],
        ["class_list_version", "Identifies which classes/v*.txt file the model was trained against."],
        ["training_date",      "Informational metadata."],
        ["size_mb",            "Used for download progress reporting."],
      ] as [string, string][],
      cacheNote: "The manifest must have Cache-Control: no-cache, no-store so version checks are always fresh. The model file itself can use aggressive CDN caching — it's content-addressed by version.",
    },

    downloadFlow: {
      heading: "Download & verification flow",
      steps: [
        ["Fetch manifest",    "10-second timeout. Non-2xx response → throw. Current model stays active."],
        ["Version check",     "Compare manifest version against UserDefaults['nomModelVersion']. If same → stop."],
        ["Download to temp",  "Model file downloads to a UUID path in tmp/. Partial downloads never replace a good model."],
        ["SHA-256 verify",    "CryptoKit verifies temp file against manifest.sha256. Mismatch → delete temp file, throw. Current model stays active."],
        ["Move to models dir","createDirectory for Application Support/NomLens/models/ if needed. Move verified temp file → models/{version}.mlpackage."],
        ["Activate",          "Call activate(modelURL:version:) — see activation section below."],
      ] as [string, string][],
    },

    activation: {
      heading: "Model activation & compile cache",
    },

    storage: {
      heading: "Storage layout",
    },

    hosting: {
      heading:  "Hosting requirements",
      subhead:  "The iOS app needs two static files reachable over HTTPS. No dynamic backend required. Cloudflare R2 is recommended: free egress, global CDN, per-file cache control headers.",
      manifest: { name: "manifest.json",       desc: "Version check on every launch. Must be at a stable, permanent URL. Cache-Control: no-cache." },
      model:    { name: "NomLensClassifier_1.0.0.mlpackage", desc: "10.6 MB model file. URL comes from manifest — can change between versions. Cache-Control: public, max-age=31536000." },
      note:     "Constraints: No auth headers (URLSession download sends no credentials). HTTPS required (iOS ATS enforced). Content-Length header recommended for progress reporting.",
    },

    gaps: {
      heading: "Known gaps",
      items: [
        { item: "Manifest server",   status: "Missing", note: "https://api.nomlens.app/model/manifest.json does not exist yet. checkForUpdates() fails silently. Development workaround: hardcoded local model path in ContentView." },
        { item: "Old model cleanup", status: "Missing", note: "Superseded model versions are not deleted from disk after a successful update. Disk usage grows unbounded across model versions." },
        { item: "Rollback logic",    status: "Partial", note: "Infrastructure supports it (previous .mlpackage stays on disk) but no explicit rollback path or UI exists. If new model fails verification, the old model stays active — but there's no deliberate revert trigger." },
        { item: "Zip extraction",    status: "N/A for now", note: ".mlpackage is a directory bundle. Current download writes bytes directly assuming server serves uncompressed content. If a zip is uploaded to the CDN, a decompression step must be added to ModelManager.download()." },
      ],
    },

    workaround: {
      heading: "Current development workaround",
      subhead: "Until the manifest endpoint is live, the iOS app loads the model directly from a local path. This block must be removed before production:",
      note:    "The checkForUpdates() call already exists in the startup sequence and will take over once the manifest URL is real. Two additional changes are needed: ModelManager.manifestURL must be updated to the live endpoint.",
    },

    footer: { cta1: "← Model architecture", cta2: "Research context" },
  },

  // ─── Research ────────────────────────────────────────────────────────────────
  research: {
    eyebrow:     "Research",
    heading:     "Academic Context",
    description: "The state of Han Nôm OCR research, how NomLens compares to existing academic approaches, data sources, the full product roadmap, and partnership opportunities.",

    crisis: {
      heading: "The preservation crisis",
      p1:      "For nearly a thousand years, Han Nôm was the soul of Vietnamese culture — the script in which ancestors recorded history, poetry, law, medicine, philosophy, and everyday life. It appears on ancient stone steles, temple inscriptions, wooden couplets, imperial manuscripts, and fragile paper documents. It is not merely a writing system. It is Vietnamese history and cultural memory made visible.",
      p2:      "Today, that memory is in mortal danger. Every year, physical inscriptions erode under rain, wind, and pollution. Manuscripts crumble. The last generation of living scholars who can fluently read Han Nôm is rapidly shrinking — perhaps no more than a hundred people in the world still possess deep, native-level mastery of the script. When they pass, and when the stones and papers finally disintegrate, a vast and irreplaceable portion of Vietnam's heritage will be lost forever.",
      p3:      "We are in a narrow window — perhaps the last one — where the final expert readers, the surviving physical artifacts, and modern AI technology all still exist at the same time. The Vietnamese Nôm Preservation Foundation spent two decades digitizing manuscripts before dissolving in 2018. Their work was extraordinary. But the window hasn't closed yet. NomLens exists to seize what remains of it.",
      stats: [
        { stat: "<100",    label: "Scholars worldwide who can read Han Nôm fluently"   },
        { stat: "1,000+",  label: "Years of Vietnamese history written in this script"  },
        { stat: "2018",    label: "Year the Nôm Preservation Foundation dissolved"      },
        { stat: "Growing", label: "Rate of physical artifact deterioration"             },
      ],
    },

    academic: {
      heading: "Prior academic work",
      papers: [
        {
          title:  "NomNaOCR (2022) — VNUHCM-UIT",
          badge:  "Most significant",
          body:   "2,953 pages, 38,318 labeled character patches from woodblock prints (Truyện Kiều × 3, Lục Vân Tiên, Đại Việt Sử Ký Toàn Thư). Architecture: DBNet detection + CRNN/Transformer recognition. Server-side only.",
          kaggle: "Dataset on Kaggle →",
          github: "GitHub →",
        },
        {
          title: "Nom Document Digitalization (2020) — Pattern Recognition Letters",
          body:  "719 pages of Truyện Kiều. U-Net segmentation + CNN classifier with attention. Results: segmentation IoU 92%, character recognition 85.07%. Clean woodblock prints only.",
        },
        {
          title: "Integrating Nôm Language Model (2022)",
          body:  "Tests on unseen woodblock editions (cross-edition generalization). Results: 71–74% mAP at sequence level on unseen data. This is the honest real-world number for the best academic sequence-level work.",
        },
        {
          title: "Scene Sino-Nom OCR (2025) — most recent",
          body:  "Focuses on real-world photos (temples, signs) — the most relevant use case to NomLens. Combines deep learning with explicit linguistic knowledge of Nôm structure.",
        },
      ],
    },

    comparison: {
      heading: "How NomLens compares",
      note:    "Note: the 71–74% accuracy of the best academic sequence-level work on unseen data vs. NomLens's 97.6% per-character accuracy is not a fair comparison — they solve different tasks. Per-character classification is simpler and more accurate than sequence OCR, given reliable upstream segmentation.",
      columns: { dimension: "Dimension", academic: "Academic / Existing Apps", nomlens: "NomLens" },
      rows: [
        { dimension: "Architecture",         academic: "CRNN / Transformer / U-Net",  nomlens: "EfficientNet-B0 (mobile)"      },
        { dimension: "Deployment",           academic: "Server-side only",            nomlens: "On-device, offline"            },
        { dimension: "Task",                 academic: "Line-level sequence OCR",     nomlens: "Single-character classification" },
        { dimension: "Accuracy (real data)", academic: "71–85% depending on method", nomlens: "97.6% val (Han layer)"         },
        { dimension: "Inference speed",      academic: "No on-device benchmarks",     nomlens: "<10ms on Neural Engine"        },
        { dimension: "iOS app",              academic: "None with real ML",           nomlens: "NomLens"                       },
        { dimension: "Data flywheel",        academic: "None",                        nomlens: "Every correction = training data" },
      ],
      highlight: "The key finding: A production-quality, on-device, real-time Nôm character recognizer for iOS is genuinely novel. No direct competitor exists. Academic work is server-side and not productized. Existing App Store apps are undisclosed black boxes with no accuracy claims or on-device inference.",
    },

    kaggle: {
      heading: "NomNaOCR dataset",
      body:    "The NomNaOCR dataset (38,318 labeled character patches from real Nôm woodblock-print manuscripts) is publicly available on Kaggle. This is real printed Nôm character images with labels — adding it to training would meaningfully improve the model's knowledge of what printed manuscript characters look like, beyond synthetic font renders.",
      cta:     "View on Kaggle →",
      note:    "Evaluated for v2 / v3 training inclusion",
    },

    roadmap: {
      heading: "Product roadmap",
      phases: [
        {
          phase: "Phase 1 · Complete", title: "AI-Powered Decoder", status: "complete",
          items: ["Claude Vision API per-character decode", "Core Image preprocessing (adaptive threshold, deskew, perspective correction)", "Vision framework segmentation + reading order sort", "SwiftData local history", "Structured JSON export"],
        },
        {
          phase: "Phase 2 · Active", title: "On-Device Core ML Model", status: "active",
          items: ["EfficientNet-B0 trained (97.6% val accuracy, 10.6 MB)", "Temperature calibration (ECE 0.0034)", "OTA model delivery (iOS components built, manifest server pending)", "Confidence routing: on-device → Claude fallback"],
        },
        {
          phase: "Phase 3 · Planned", title: "Active Learning Loop", status: "planned",
          items: ["In-app correction flow (user verifies low-confidence characters)", "Supabase backend: correction store, image crops, auth", "Data quality pipeline (outlier detection, expert review queue)", "Threshold-based retraining trigger (500+ new verified corrections)", "Automated evaluation + Core ML export + OTA push"],
        },
        {
          phase: "Phase 4 · Future", title: "Community & Collaboration", status: "future",
          items: ["Scholar verification accounts with elevated correction weight", "GPS-tagged decode archive (living map of Han Nôm inscriptions)", "Public session publishing and community annotation", "Context tagging (dynasty, text type, location, subject matter)"],
        },
        {
          phase: "Phase 5 · Future", title: "Deeper NLP", status: "future",
          items: ["Literary translation with cultural context (Claude or fine-tuned model)", "Poetic form identification (lục bát, Đường thi forms)", "Historical period estimation from vocabulary and style", "Named entity recognition (place names, reign titles, personal names)"],
        },
        {
          phase: "Phase 6 · Future", title: "Academic Integration", status: "future",
          items: ["Open dataset export — verified corrections contributed to Nom Foundation and Kaggle", "Research API for batch manuscript digitization", "NEH / Mellon Foundation grant applications", "Partnerships: VNUHCM-UIT, Yale, Harvard, Cornell Southeast Asian Studies"],
        },
      ],
    },

    grants: {
      heading: "Grant & partnership opportunities",
      subhead: "The open dataset contribution (verified user corrections exported as labeled training data) is the key that opens academic and institutional doors. We're not asking for money to build a product — we're offering infrastructure that advances shared scholarly goals.",
      items: [
        { name: "NEH (National Endowment for the Humanities)", program: "Digital Humanities Advancement Grants",       fit: "Open dataset contribution, manuscript digitization infrastructure" },
        { name: "Mellon Foundation",                          program: "Scholarly Communications & Information Technology", fit: "Cultural heritage preservation, academic access to endangered script data" },
        { name: "Vietnamese Ministry of Culture",             program: "Cultural Heritage Digitization Program",       fit: "National interest in preserving Nôm manuscript heritage" },
        { name: "University Partners",                        program: "Yale, Harvard, Cornell — Southeast Asian Studies", fit: "Batch digitization of institutional manuscript collections, student research access" },
      ],
    },

    citation: {
      heading: "Cite NomLens",
      note:    "Academic citation format (placeholder — update with publication details):",
    },

    footer: { cta1: "← Model details", cta2: "Developer docs" },
  },
};

// ─── Vietnamese ───────────────────────────────────────────────────────────────

const vi: typeof en = {
  nav: {
    howItWorks: "Cách Hoạt Động",
    model:      "Mô Hình",
    docs:       "Tài Liệu",
    research:   "Nghiên Cứu",
    download:   "Tải Về",
  },

  footer: {
    tagline:    "Giải mã chữ Hán Nôm dành cho học giả, nhà nghiên cứu và tất cả những ai muốn đọc những gì thời gian đang xóa mờ.",
    subtitle:   "漢喃 · Chữ Nôm · Tiếng Việt Cổ Điển",
    navigation: "Điều Hướng",
    resources:  "Tài Nguyên",
    privacy:    "Chính Sách Bảo Mật",
  },

  home: {
    hero: {
      eyebrow:     "Giải Mã Hán Nôm · iOS",
      line1:       "Đọc những gì",
      line2:       "thời gian đang xóa mờ.",
      description: "NomLens giải mã chữ Hán Nôm từ ảnh chụp bia đá, văn bia đền chùa và bản thảo cổ của Việt Nam — trên iPhone của bạn,",
      offline:     "không cần mạng",
      subtext:     "Ký tự, phiên âm Quốc ngữ và nghĩa tiếng Anh. Trong vài giây.",
      downloadCTA: "Tải về trên App Store",
      learnCTA:    "Cách hoạt động",
      stats: {
        accuracy:  "97,6% độ chính xác kiểm định",
        inference: "<10ms mỗi ký tự trên Neural Engine",
        size:      "Mô hình 10,6 MB · hoạt động ngoại tuyến",
        classes:   "972 lớp ký tự (v1)",
      },
    },

    whatIsHanNom: {
      eyebrow: "Về Chữ Viết",
      heading: "Chữ Hán Nôm Là Gì?",
      p1:      "Chữ Nôm (漢喃) là hệ thống chữ viết chính của Việt Nam trong hơn một nghìn năm. Chữ Nôm kết hợp chữ Hán với các ký tự được tạo ra đặc biệt cho âm thanh và khái niệm của tiếng Việt (Nôm).",
      p2:      "Chữ viết này được dùng cho chiếu chỉ triều đình, thơ ca, văn bản tôn giáo, gia phả và văn bia. Tác phẩm văn học vĩ đại nhất của Việt Nam — Truyện Kiều — ban đầu được viết bằng chữ Nôm.",
      p3:      "Ngày nay, trên toàn thế giới có chưa đến 100 học giả có thể đọc thông thạo. Các hiện vật — bia đá, bản thảo cũ, điêu khắc đền chùa — xuống cấp theo từng năm. Cơ hội bảo tồn đang dần thu hẹp.",
      cta:     "Bối cảnh nghiên cứu →",
    },

    pipeline: {
      eyebrow: "Quy Trình",
      heading: "NomLens Hoạt Động Như Thế Nào",
      subhead: "Năm bước từ ảnh thô đến kết quả giải mã có cấu trúc. Bước 1–4 chạy hoàn toàn trên thiết bị.",
      cta:     "Hướng dẫn đầy đủ về quy trình →",
    },

    pipelineSteps: [
      {
        step: "01", icon: "📷",
        title:       "Chụp Ảnh",
        description: "Hướng máy ảnh vào bất kỳ nguồn chữ Hán Nôm nào — bia đá, văn bia đền chùa, trang bản thảo hoặc văn bản in. NomLens cũng nhận ảnh từ thư viện của bạn.",
      },
      {
        step: "02", icon: "⚙️",
        title:       "Tiền Xử Lý",
        description: "Các bộ lọc Core Image chạy trên thiết bị trong mili giây: ngưỡng thích ứng sửa chữa ánh sáng không đều trên đá phong hóa, giảm nhiễu làm sạch mực bản thảo cũ, và hiệu chỉnh phối cảnh khắc phục biến dạng hình thang.",
      },
      {
        step: "03", icon: "🔲",
        title:       "Phân Đoạn & Sắp Xếp",
        description: "Framework Vision của Apple xác định từng ký tự riêng lẻ. NomLens phân cụm chúng thành các cột và sắp xếp từ phải sang trái, từ trên xuống dưới — thứ tự đọc chữ Hán Nôm chính xác.",
      },
      {
        step: "04", icon: "🧠",
        title:       "Phân Loại",
        description: "Mỗi ảnh cắt ký tự được đưa vào mô hình Core ML trên thiết bị (EfficientNet-B0, 10,6 MB). Kết quả có độ tin cậy cao cho ngay lập tức. Ký tự có độ tin cậy thấp sẽ được chuyển đến Claude Vision API.",
      },
      {
        step: "05", icon: "📋",
        title:       "Kết Quả",
        description: "Một lưới có cấu trúc trả về từng ký tự với dạng Unicode, phiên âm Quốc ngữ, nghĩa tiếng Anh và huy hiệu độ tin cậy. Nhấn vào bất kỳ ô nào để xem chi tiết đầy đủ. Mọi thứ được lưu trong lịch sử cục bộ.",
      },
    ],

    stats: {
      eyebrow: "Hiệu Suất",
      heading: "Số Liệu Thực Tế",
      subhead: "EfficientNet-B0 với hiệu chỉnh nhiệt độ. Mô hình v1, được huấn luyện trên chữ viết tay HWDB + font chữ Hán Nôm.",
      cta:     "Kiến trúc mô hình & huấn luyện →",
    },

    modelStats: [
      { label: "Độ Chính Xác Kiểm Định",      value: "97,6%",    note: "EfficientNet-B0, v1"                        },
      { label: "Độ Chính Xác @ ≥90% Tin Cậy", value: "99,3%",    note: "Điểm độ tin cậy đã hiệu chỉnh"             },
      { label: "Chuyển Đến Claude",            value: "1,4%",     note: "Dưới ngưỡng 60%"                           },
      { label: "Kích Thước Mô Hình",           value: "10,6 MB",  note: ".mlpackage, sẵn sàng INT8 cho v2"          },
      { label: "Tốc Độ Suy Luận",              value: "<10ms",    note: "Neural Engine iPhone"                      },
      { label: "Sai Số Hiệu Chỉnh (ECE)",      value: "0,0034",   note: "Sau thu phóng nhiệt độ (T=0,6908)"         },
      { label: "Lớp Ký Tự (v1)",               value: "972",      note: "83,5% độ phủ kho ngữ liệu"                },
      { label: "Ảnh Huấn Luyện",               value: "296K+",    note: "Chữ viết tay HWDB + font chữ Hán Nôm"     },
    ],

    mission: {
      eyebrow:    "Sứ Mệnh",
      pullQuote:  "Một khi chữ viết chết đi, lịch sử mà nó mang theo cũng chết theo.",
      window:     "Chúng ta đang ở trong một khoảng thời gian hẹp — có lẽ là khoảng cuối cùng — khi thế hệ học giả cuối cùng có thể đọc thông thạo chữ Hán Nôm, các hiện vật vật lý còn sót lại, và công nghệ AI hiện đại vẫn còn cùng tồn tại. Khoảng thời gian đó đang khép lại. NomLens được xây dựng để nắm bắt nó.",
      heading:    "Đây không phải nghiên cứu trừu tượng. Đây là cuộc đua với thời gian.",
      p1:         "Gần một nghìn năm, chữ Hán Nôm là linh hồn của văn hóa Việt Nam — chữ viết mà tổ tiên dùng để ghi lại lịch sử, thơ ca, luật pháp, y học và cuộc sống hàng ngày. Ngày nay nó đang trong tình trạng nguy hiểm chết người. Các văn bia bị xói mòn dưới mưa và ô nhiễm. Bản thảo mục nát. Chưa đến một trăm người trên thế giới còn có thể đọc thông thạo. Khi họ qua đời, và khi đá và giấy cuối cùng tan rã, một phần di sản vô giá của Việt Nam sẽ biến mất mãi mãi.",
      p2:         "NomLens biến bất kỳ ai có điện thoại thông minh thành người bảo vệ di sản đó. Mỗi bức ảnh chụp tại một ngôi đền xa xôi, mỗi ký tự được người dùng sửa, mỗi văn bia được ghi lại và xác minh trở thành một hồ sơ kỹ thuật số vĩnh cửu — trực tiếp bổ sung vào mô hình, mở rộng kiến thức về các ký tự hiếm, và xây dựng kho lưu trữ Hán Nôm mở lớn nhất từ trước đến nay. Bạn không cần phải là học giả. Bạn chỉ cần quan tâm.",
      vision:     "Không có văn bia Hán Nôm nào nên bị mất chỉ vì không ai có thể đọc được. Các thế hệ tương lai — học giả, sinh viên, người Việt bình thường — xứng đáng được chạm vào những lời của tổ tiên họ.",
      cta1:       "Bối cảnh học thuật →",
      cta2:       "Cơ hội hợp tác",
    },

    audiences: {
      eyebrow: "Dành Cho Ai",
      heading: "Được Xây Dựng Cho Ba Nhóm Người",
      cards: [
        {
          icon:     "🏛️",
          audience: "Người Dùng Thực Địa",
          headline: "Hoạt động ngay nơi có văn bia",
          body:     "Đền chùa xa xôi, bia đá nông thôn, địa điểm khảo cổ không có sóng điện thoại. NomLens chạy hoàn toàn trên thiết bị. Không cần internet sau khi tải mô hình lần đầu.",
          cta:      "Tải về",
          href:     "#download",
        },
        {
          icon:     "📜",
          audience: "Học Giả",
          headline: "Độ chính xác có thể trích dẫn",
          body:     "97,6% độ chính xác kiểm định trên lớp Hán. Điểm độ tin cậy được hiệu chỉnh nhiệt độ (ECE 0,0034). Đầy đủ nguồn gốc giải mã: ký tự, mã Unicode, loại nguồn, phiên bản mô hình. Xuất ra JSON có cấu trúc.",
          cta:      "Chi tiết mô hình",
          href:     "/model",
        },
        {
          icon:     "⚙️",
          audience: "Nhà Phát Triển",
          headline: "Kiến trúc mở, phân phối mô hình OTA",
          body:     "Bộ phân loại Core ML EfficientNet-B0, dự phòng định tuyến tin cậy đến Claude API, cập nhật mô hình OTA được xác minh SHA-256. Tài liệu đầy đủ về quy trình và thông số kỹ thuật manifest.",
          cta:      "Đọc tài liệu",
          href:     "/docs",
        },
      ],
    },

    download: {
      heading:  "Bắt Đầu Giải Mã",
      subhead:  "Tải về miễn phí. Hoạt động ngoại tuyến. Không cần tài khoản.",
      cta:      "Tải về trên App Store",
      footnote: "Yêu cầu iOS 17+",
    },
  },

  howItWorks: {
    eyebrow:     "Quy Trình",
    heading:     "NomLens Hoạt Động Như Thế Nào",
    description: "Hướng dẫn đầy đủ về từng giai đoạn — từ ảnh thô đến kết quả giải mã có cấu trúc với phiên âm Quốc ngữ và nghĩa tiếng Anh.",

    phase1: {
      label:       "Giai Đoạn 1 (hiện tại)",
      heading:     "Dự Phòng Claude Vision API",
      description: "Mô hình trên thiết bị xử lý phần lớn các ký tự. Ảnh cắt có độ tin cậy thấp sẽ được chuyển đến Claude Vision API để suy luận chuyên gia theo từng ký tự.",
    },
    phase2: {
      label:       "Giai Đoạn 2 (đang triển khai)",
      heading:     "Mô Hình Core ML Trên Thiết Bị",
      description: "EfficientNet-B0, 972 lớp, độ chính xác 97,6%, <10ms trên Neural Engine. Hoạt động ngoại tuyến. Cập nhật mô hình OTA — không cần cập nhật App Store.",
    },

    pipelineHeading: "Quy trình năm bước",

    filterChain: {
      heading: "Chuỗi bộ lọc (theo thứ tự):",
      filters: [
        "Hiệu chỉnh phối cảnh — sửa biến dạng hình thang từ góc máy ảnh",
        "Làm thẳng — điều chỉnh trang bị nghiêng",
        "Giảm nhiễu — làm sạch mực bản thảo cũ",
        "Tương phản + độ sáng + khử bão hòa (thang xám)",
        "Ngưỡng thích ứng — chuẩn hóa tương phản cục bộ cho ánh sáng bia đá không đều",
        "Mặt nạ làm sắc nét — làm rõ nét cạnh ký tự",
      ],
      note: "Tất cả bộ lọc chạy qua Core Image (tăng tốc GPU). Ngưỡng thích ứng được xây dựng tùy chỉnh bằng Gaussian blur + trừ trung bình cục bộ — Core Image không có triển khai gốc.",
    },

    readingOrder: {
      heading: "Thứ tự đọc:",
      body:    "Các ký tự được phân cụm thành các cột bằng ngưỡng động (1,2× chiều rộng hộp giới hạn trung vị — thích nghi với mật độ ký tự). Các cột được sắp xếp từ phải sang trái theo midX; trong mỗi cột, từ trên xuống dưới theo minY. Đây là chiều đọc chữ Hán Nôm cổ điển chính xác.",
      note:    "Vision trả về tọa độ chuẩn hóa với gốc ở dưới-trái. NomLens chuyển đổi sang tọa độ pixel với gốc ở trên-trái bằng VNImageRectForNormalizedRect, sau đó thêm đệm 8px xung quanh mỗi ảnh cắt.",
    },

    confidenceRouting: {
      heading: "Định tuyến theo độ tin cậy",
      subhead: "Mô hình trên thiết bị trả về điểm độ tin cậy đã hiệu chỉnh (sau thu phóng nhiệt độ với T=0,6908) cho mọi ký tự. NomLens định tuyến dựa trên điểm đó:",
      tiers: [
        { range: "≥ 90%",    label: "Độ tin cậy cao",        color: "green",  action: "Chấp nhận trên thiết bị. Kết quả hiển thị với huy hiệu xanh lá."   },
        { range: "60 – 90%", label: "Độ tin cậy trung bình", color: "yellow", action: "Chấp nhận trên thiết bị. Huy hiệu vàng đánh dấu để người dùng xem xét." },
        { range: "< 60%",    label: "Độ tin cậy thấp",       color: "red",    action: "Chuyển đến Claude Vision API để phân loại chuyên gia."               },
      ],
      warning: "Quan trọng: Các ngưỡng này áp dụng cho điểm đã thu phóng nhiệt độ, không phải xác suất softmax thô. Đầu ra thô của mạng nơ-ron thường quá tự tin — không có hiệu chỉnh, điểm \"95%\" có thể chỉ tương ứng với độ chính xác thực tế 80%. NomLens sử dụng thu phóng nhiệt độ (T=0,6908) để tạo ra điểm số với Sai Số Hiệu Chỉnh Kỳ Vọng 0,0034 — nghĩa là điểm số bạn thấy chính xác trong khoảng ~0,3%.",
    },

    resultStructure: {
      heading: "Cấu trúc kết quả",
      subhead: "Mỗi ký tự được giải mã trả về một bản ghi có cấu trúc. Kết quả giải mã đầy đủ của một trang tập hợp các bản ghi này theo thứ tự đọc.",
      note:    "Các ký tự có độ tin cậy thấp được chuyển đến Claude Vision API sử dụng lược đồ đầu ra giống hệt, được trả về bởi phản hồi JSON có cấu trúc của Claude.",
    },

    ota: {
      heading: "Phân phối mô hình OTA",
      subhead: "Mô hình Core ML không được đóng gói trong tệp nhị phân ứng dụng. Nó tải xuống theo yêu cầu và hoán đổi nóng mà không cần cập nhật App Store — điều quan trọng để đẩy các cải tiến độ chính xác khi dữ liệu huấn luyện phát triển.",
      cards: [
        { title: "Kiểm tra phiên bản khi khởi động", body: "ModelManager tải manifest.json từ điểm cuối được lưu trữ. Nếu phiên bản khớp với phiên bản trên đĩa, không có tải xuống nào xảy ra." },
        { title: "Xác minh SHA-256",                 body: "Mọi .mlpackage được tải xuống đều được xác minh với hàm băm SHA-256 trong manifest trước khi thay thế mô hình đang hoạt động. Tải xuống bị hỏng sẽ bị loại bỏ." },
        { title: "Bộ đệm mô hình đã biên dịch",       body: "Sau lần tải đầu tiên, .mlmodelc đã biên dịch được lưu vào đĩa. Các lần khởi động tiếp theo tải tệp nhị phân đã biên dịch trực tiếp — không cần biên dịch lại." },
        { title: "Hoán đổi nóng không cần khởi động lại", body: "ClassifierProxy giữ tham chiếu mô hình đang hoạt động. ModelManager gọi proxy.update() sau khi xác minh — mô hình mới hoạt động ngay lập tức." },
      ],
      cta: "Tài liệu OTA đầy đủ →",
    },

    footer: { cta1: "Kiến trúc mô hình →", cta2: "Tài liệu nhà phát triển" },
  },

  model: {
    eyebrow:     "Mô Hình ML",
    heading:     "Bộ Phân Loại NomLens",
    description: "EfficientNet-B0 được huấn luyện trên dữ liệu ký tự Hán Nôm, xuất sang Core ML và phân phối OTA đến thiết bị iOS. Kiến trúc, chiến lược huấn luyện, hiệu chỉnh và phân tích hiệu suất.",

    architecture: {
      heading: "Kiến Trúc",
      p1:      "NomLens sử dụng EfficientNet-B0 — một mạng nơ-ron tích chập được thiết kế đặc biệt cho triển khai di động/biên thông qua thu phóng kết hợp về chiều sâu, chiều rộng và độ phân giải đầu vào. Nó đạt độ chính xác tốt hơn trên mỗi tham số so với ResNet hoặc MobileNet ở kích thước này.",
      p2:      "Đây là bộ phân loại ảnh đơn ký tự, không phải mô hình chuỗi OCR. Phân đoạn được xử lý ở phía trước bởi framework Vision của Apple, vì vậy mô hình chỉ cần giải quyết: \"cho ảnh cắt 96×96 của một ký tự, đó là ký tự gì?\" — một nhiệm vụ đơn giản và chính xác hơn so với giải mã chuỗi.",
      p3:      "Sau các lớp tích chập, AdaptiveAvgPool thu gọn các chiều không gian thành vectơ đặc trưng 1280 chiều. Đầu phân loại (Linear 1280→N) ánh xạ điều này thành xác suất trên N lớp ký tự.",
    },

    training: {
      heading: "Chiến Lược Huấn Luyện",
      subhead: "Học chuyển giao từ trọng số được huấn luyện trước trên ImageNet. Backbone đã biết các cạnh, đường cong, kết cấu và mô hình hình học — các tính năng cấp thấp tương tự cần thiết cho nhận dạng nét và bộ thủ. Tinh chỉnh hai giai đoạn ngăn đầu phân loại ngẫu nhiên phá hủy các tính năng được huấn luyện trước.",
      phases: [
        {
          phase: "Chỉ phần đầu (epochs 1–5)",
          details: [
            "Trọng số backbone bị đóng băng (requires_grad=False)",
            "Chỉ lớp phân loại Linear(1280→N) được huấn luyện",
            "Bộ tối ưu Adam, lr=1e-3",
            "Lý do: ngăn gradient nhiễu từ đầu ngẫu nhiên phá hủy các tính năng backbone được huấn luyện trước",
          ],
        },
        {
          phase: "Tinh chỉnh toàn bộ (epochs 6–50)",
          details: [
            "Tất cả 5,3M tham số được huấn luyện",
            "Bộ tối ưu AdamW, lr=1e-4 (nhỏ hơn 10× so với giai đoạn 1)",
            "CosineAnnealingLR — giảm dần trơn tru về ~0",
            "Weight decay=1e-4 (chính quy hóa L2 chống overfit)",
            "Dừng ở epoch 24 — hội tụ ở độ chính xác kiểm định 97,6%",
          ],
        },
      ],
      imbalance: {
        heading: "Xử lý mất cân bằng lớp",
        body:    "511 lớp Hán có khoảng 576 mẫu HWDB mỗi lớp (294K tổng). 461 lớp chỉ có Nôm có 2–4 font mỗi lớp (1.900 tổng). Không có biện pháp can thiệp, mô hình sẽ học dự đoán ký tự Hán gần như độc quyền. WeightedRandomSampler cho mỗi mẫu trọng số 1/(số mẫu trong lớp), đảm bảo mọi lớp xuất hiện với tần suất gần như bằng nhau trong mọi batch huấn luyện.",
      },
    },

    dataSources: [
      { name: "CASIA-HWDB",                role: "Chính",              description: "294.280 ảnh trên 511 lớp ký tự CJK. Chữ viết tay thực từ người viết Trung Quốc trên bảng vẽ. Viện Tự động hóa, Viện Hàn lâm Khoa học Trung Quốc.",                       note: "Bao phủ lớp Hán của Hán Nôm. Dữ liệu huấn luyện dày đặc cho các ký tự phổ biến nhất." },
      { name: "Font Chữ Hán Nôm",          role: "Chính (lớp Nôm)",   description: "1.944 ảnh PNG được kết xuất từ HanNomA.ttf và HanNomB.ttf — 4 biến thể font, 2 ảnh mỗi lớp.",                                                                        note: "461 ký tự chỉ có Nôm không tồn tại trong bất kỳ cơ sở dữ liệu chữ viết tay nào. Font kết xuất là dữ liệu huấn luyện duy nhất có sẵn cho các lớp này." },
      { name: "Bộ Dữ Liệu NomNaOCR (Kaggle)", role: "Tương lai (v2)", description: "38.318 mảnh ký tự có nhãn từ bản thảo in mộc bản thực. Bao gồm Truyện Kiều × 3 phiên bản, Lục Vân Tiên và Đại Việt Sử Ký Toàn Thư.",                             note: "Sẽ cải thiện đáng kể hiệu suất mô hình trên các nguồn bản thảo in. Chưa được tích hợp." },
      { name: "Sửa Lỗi Người Dùng (Giai Đoạn 3)", role: "Vòng lặp tương lai", description: "Các sửa lỗi được xác minh trong ứng dụng cung cấp cho quy trình huấn luyện lại. Mọi dự đoán có độ tin cậy thấp mà người dùng sửa đều trở thành dữ liệu huấn luyện có nhãn.", note: "Lợi thế cạnh tranh: dữ liệu thực địa từ người dùng và học giả thực tế không thể sao chép từ đầu." },
    ],

    tempScaling: {
      heading: "Thu Phóng Nhiệt Độ",
      subhead: "Mạng nơ-ron được huấn luyện với cross-entropy loss thường quá tự tin — đầu ra softmax thô \"97%\" có thể chỉ tương ứng với độ chính xác thực 80%. Điều này làm cho định tuyến dựa trên độ tin cậy vô nghĩa nếu không có hiệu chỉnh.",
      fix:     "Giải pháp",
      results: "Kết quả v1",
      note:    "T được tích hợp vào mô hình Core ML đã xuất qua forward_calibrated() — ứng dụng iOS không bao giờ thấy logits thô. Tất cả đầu ra đều là xác suất đã hiệu chỉnh.",
    },

    coverage: {
      heading: "Độ Phủ Ký Tự",
      subhead: "Độ phủ được đo so với kho ngữ liệu 22 tác phẩm Chữ Nôm từ chunom.org. Các ký tự hiếm ngoài tập lớp sẽ được chuyển đến Claude Vision API dự phòng.",
      note:    "v2 (2.000 lớp) và v3 (3.000 lớp) đang chờ thêm dữ liệu huấn luyện. Vòng lặp sửa lỗi của ứng dụng — mỗi nhãn được người dùng xác minh — là cơ chế chính để mở khóa chúng.",
      tiers: [
        { classes: 972,  label: "v1 (hiện tại)",  coverage: "83,5%", bar: 83.5 },
        { classes: 2000, label: "v2 (kế hoạch)",  coverage: "95,2%", bar: 95.2 },
        { classes: 3000, label: "v3 (tương lai)", coverage: "99,5%", bar: 99.5 },
      ],
    },

    footer: { cta1: "Tài liệu OTA & nhà phát triển →", cta2: "Bối cảnh nghiên cứu" },
  },

  docs: {
    eyebrow:     "Tài Liệu Nhà Phát Triển",
    heading:     "Phân Phối Mô Hình OTA",
    description: "NomLens phân phối cập nhật mô hình Core ML qua mạng — không cần cập nhật App Store. Tài liệu này mô tả kiến trúc phía iOS, định dạng manifest, quy trình tải xuống và các vấn đề hiện tại.",

    overview: {
      heading: "Tổng Quan",
      body:    "Hệ thống OTA được thiết kế để im lặng, an toàn và không chặn. Nó không bao giờ làm gián đoạn người dùng, không bao giờ làm hỏng mô hình đang hoạt động và xuống cấp duyên dáng khi ngoại tuyến.",
      startup: "Trình tự khởi động",
      note:    "Hai tác vụ này chạy đồng thời. Ứng dụng có thể sử dụng ngay khi loadStoredModel() hoàn thành. Kiểm tra cập nhật xảy ra im lặng ở phía sau.",
    },

    components: {
      heading: "Thành phần iOS",
      items: [
        { name: "ModelManager",    file: "Services/ModelManager.swift",    description: "Actor Swift trung tâm chịu trách nhiệm tải xuống, xác minh, lưu trữ và kích hoạt mô hình. Tất cả các thay đổi trạng thái được tuần tự hóa không cần khóa thủ công. Chạy hai tác vụ khởi động đồng thời: loadStoredModel() (khôi phục từ đĩa, mili giây) và checkForUpdates() (tải manifest ở nền)." },
        { name: "ClassifierProxy", file: "Services/ClassifierProxy.swift", description: "Actor bao bọc NomClassifier đang hoạt động và cho phép hoán đổi nóng tại thời gian chạy. RoutingDecoder giữ tham chiếu đến proxy trong suốt thời gian tồn tại của ứng dụng. ModelManager gọi proxy.update(newClassifier) sau khi tải xuống thành công — tất cả các lệnh gọi tiếp theo tự động sử dụng mô hình mới." },
        { name: "NomClassifier",   file: "Services/NomClassifier.swift",   description: "Bao bọc mô hình Core ML bằng Vision (VNCoreMLModel + VNCoreMLRequest). Chấp nhận .mlpackage hoặc .mlmodelc đã biên dịch trước. Nhãn lớp là mã Unicode hex (ví dụ: '4EBA') — NomClassifier chuyển đổi chúng thành ký tự Unicode thực ('人'). Vision xử lý cắt giữa và thu phóng theo kích thước đầu vào của mô hình." },
        { name: "RoutingDecoder",  file: "Services/RoutingDecoder.swift",  description: "Nằm giữa ClassifierProxy và ClaudeService. Cho mỗi ảnh cắt ký tự, áp dụng định tuyến độ tin cậy: ≥90% → chấp nhận trên thiết bị (xanh), 60–90% → chấp nhận trên thiết bị (vàng), <60% → chuyển đến Claude API, throws → chuyển dự phòng đến Claude." },
      ],
    },

    manifest: {
      heading: "Định Dạng Manifest",
      subhead: "Manifest là tệp JSON nhỏ tại điểm cuối HTTPS cố định, được tải về mỗi lần khởi động ứng dụng.",
      fields: [
        ["version",            "So sánh với UserDefaults. Nếu bằng nhau, không có tải xuống nào xảy ra."],
        ["url",                "Liên kết tải xuống trực tiếp cho .mlpackage. Có thể thay đổi giữa các phiên bản."],
        ["sha256",             "SHA-256 mã hóa hex. Được xác minh qua CryptoKit trước khi mô hình chạm vào thư mục models."],
        ["num_classes",        "Thông tin — dùng để kiểm tra sức khỏe mô hình đã tải xuống."],
        ["class_list_version", "Xác định tệp classes/v*.txt nào mô hình được huấn luyện theo."],
        ["training_date",      "Siêu dữ liệu thông tin."],
        ["size_mb",            "Dùng cho báo cáo tiến trình tải xuống."],
      ] as [string, string][],
      cacheNote: "Manifest phải có Cache-Control: no-cache, no-store để kiểm tra phiên bản luôn mới. Tệp mô hình có thể sử dụng bộ nhớ đệm CDN mạnh — nó được đánh địa chỉ nội dung theo phiên bản.",
    },

    downloadFlow: {
      heading: "Quy Trình Tải Xuống & Xác Minh",
      steps: [
        ["Tải manifest",         "Thời gian chờ 10 giây. Phản hồi không phải 2xx → throw. Mô hình hiện tại vẫn hoạt động."],
        ["Kiểm tra phiên bản",   "So sánh phiên bản manifest với UserDefaults['nomModelVersion']. Nếu giống → dừng."],
        ["Tải xuống tạm thời",   "Tệp mô hình tải xuống đến đường dẫn UUID trong tmp/. Tải xuống một phần không bao giờ thay thế mô hình tốt."],
        ["Xác minh SHA-256",     "CryptoKit xác minh tệp tạm thời với manifest.sha256. Không khớp → xóa tệp tạm, throw. Mô hình hiện tại vẫn hoạt động."],
        ["Di chuyển vào thư mục","createDirectory cho Application Support/NomLens/models/ nếu cần. Di chuyển tệp đã xác minh → models/{version}.mlpackage."],
        ["Kích hoạt",            "Gọi activate(modelURL:version:) — xem phần kích hoạt bên dưới."],
      ] as [string, string][],
    },

    activation: {
      heading: "Kích Hoạt Mô Hình & Bộ Đệm Biên Dịch",
    },

    storage: {
      heading: "Cấu Trúc Lưu Trữ",
    },

    hosting: {
      heading:  "Yêu Cầu Lưu Trữ",
      subhead:  "Ứng dụng iOS cần hai tệp tĩnh có thể truy cập qua HTTPS. Không cần backend động. Cloudflare R2 được khuyến nghị: băng thông miễn phí, CDN toàn cầu, kiểm soát bộ nhớ đệm theo từng tệp.",
      manifest: { name: "manifest.json",       desc: "Kiểm tra phiên bản mỗi lần khởi động. Phải ở URL ổn định, cố định. Cache-Control: no-cache." },
      model:    { name: "NomLensClassifier_1.0.0.mlpackage", desc: "Tệp mô hình 10,6 MB. URL đến từ manifest — có thể thay đổi giữa các phiên bản. Cache-Control: public, max-age=31536000." },
      note:     "Ràng buộc: Không có header xác thực (tải xuống URLSession không gửi thông tin đăng nhập). HTTPS bắt buộc (iOS ATS thực thi). Đề xuất header Content-Length để báo cáo tiến trình.",
    },

    gaps: {
      heading: "Vấn Đề Đã Biết",
      items: [
        { item: "Máy chủ manifest",   status: "Thiếu",          note: "https://api.nomlens.app/model/manifest.json chưa tồn tại. checkForUpdates() thất bại im lặng. Giải pháp tạm thời: đường dẫn mô hình cục bộ được mã hóa cứng trong ContentView." },
        { item: "Dọn dẹp mô hình cũ", status: "Thiếu",          note: "Các phiên bản mô hình đã thay thế không bị xóa khỏi đĩa sau khi cập nhật thành công. Dung lượng đĩa tăng không giới hạn qua các phiên bản mô hình." },
        { item: "Logic khôi phục",    status: "Một phần",        note: "Cơ sở hạ tầng hỗ trợ nó (.mlpackage cũ vẫn trên đĩa) nhưng không có đường dẫn khôi phục rõ ràng hay UI nào tồn tại. Nếu mô hình mới thất bại xác minh, mô hình cũ vẫn hoạt động — nhưng không có tác nhân kích hoạt hoàn nguyên có chủ đích." },
        { item: "Giải nén zip",       status: "Chưa áp dụng",   note: ".mlpackage là gói thư mục. Mã tải xuống hiện tại ghi byte trực tiếp giả sử server phục vụ nội dung không nén. Nếu zip được tải lên CDN, cần thêm bước giải nén vào ModelManager.download()." },
      ],
    },

    workaround: {
      heading: "Giải Pháp Tạm Thời Hiện Tại",
      subhead: "Cho đến khi điểm cuối manifest hoạt động, ứng dụng iOS tải mô hình trực tiếp từ đường dẫn cục bộ. Khối này phải được xóa trước khi đưa vào sản xuất:",
      note:    "Lệnh gọi checkForUpdates() đã tồn tại trong trình tự khởi động và sẽ tiếp quản khi URL manifest thực sự hoạt động. Cần thêm hai thay đổi: ModelManager.manifestURL phải được cập nhật thành điểm cuối thực.",
    },

    footer: { cta1: "← Kiến trúc mô hình", cta2: "Bối cảnh nghiên cứu" },
  },

  research: {
    eyebrow:     "Nghiên Cứu",
    heading:     "Bối Cảnh Học Thuật",
    description: "Tình trạng nghiên cứu OCR chữ Hán Nôm, cách NomLens so sánh với các phương pháp học thuật hiện có, nguồn dữ liệu, lộ trình sản phẩm đầy đủ và cơ hội hợp tác.",

    crisis: {
      heading: "Cuộc Khủng Hoảng Bảo Tồn",
      p1:      "Gần một nghìn năm, chữ Hán Nôm là linh hồn của văn hóa Việt Nam — chữ viết mà tổ tiên dùng để ghi lại lịch sử, thơ ca, luật pháp, y học, triết học và cuộc sống hàng ngày. Nó xuất hiện trên các bia đá cổ, văn bia đền chùa, câu đối gỗ, bản thảo triều đình và tài liệu giấy mỏng manh. Đây không chỉ là một hệ thống chữ viết. Đây là lịch sử và ký ức văn hóa của Việt Nam được hiện thị.",
      p2:      "Ngày nay, ký ức đó đang trong tình trạng nguy hiểm chết người. Mỗi năm, các văn bia bị xói mòn dưới mưa, gió và ô nhiễm. Bản thảo mục nát. Thế hệ học giả cuối cùng có thể đọc thông thạo chữ Hán Nôm đang thu hẹp nhanh chóng — có lẽ không quá một trăm người trên thế giới vẫn còn nắm vững kiến thức thành thạo về chữ viết này. Khi họ qua đời, và khi đá và giấy cuối cùng tan rã, một phần di sản vô giá của Việt Nam sẽ bị mất mãi mãi.",
      p3:      "Chúng ta đang ở trong một khoảng thời gian hẹp — có lẽ là khoảng cuối cùng — khi những chuyên gia đọc cuối cùng, các hiện vật vật lý còn sót lại, và công nghệ AI hiện đại vẫn còn cùng tồn tại. Quỹ Bảo tồn Chữ Nôm Việt Nam đã dành hai thập kỷ số hóa bản thảo trước khi giải tán năm 2018. Công việc của họ thật phi thường. Nhưng cánh cửa chưa đóng hẳn. NomLens tồn tại để nắm bắt những gì còn lại.",
      stats: [
        { stat: "<100",        label: "Học giả trên thế giới có thể đọc Hán Nôm thành thạo"    },
        { stat: "1.000+",      label: "Năm lịch sử Việt Nam được viết bằng chữ này"             },
        { stat: "2018",        label: "Năm Quỹ Bảo tồn Chữ Nôm giải thể"                       },
        { stat: "Ngày càng tăng", label: "Tốc độ xuống cấp của hiện vật vật lý"               },
      ],
    },

    academic: {
      heading: "Công Trình Học Thuật Trước Đây",
      papers: [
        {
          title:  "NomNaOCR (2022) — VNUHCM-UIT",
          badge:  "Quan trọng nhất",
          body:   "2.953 trang, 38.318 mảnh ký tự có nhãn từ bản in mộc bản (Truyện Kiều × 3, Lục Vân Tiên, Đại Việt Sử Ký Toàn Thư). Kiến trúc: phát hiện DBNet + nhận dạng CRNN/Transformer. Chỉ phía máy chủ.",
          kaggle: "Bộ dữ liệu trên Kaggle →",
          github: "GitHub →",
        },
        {
          title: "Số hóa Tài liệu Nôm (2020) — Pattern Recognition Letters",
          body:  "719 trang Truyện Kiều. Phân đoạn U-Net + bộ phân loại CNN với attention. Kết quả: IoU phân đoạn 92%, nhận dạng ký tự 85,07%. Chỉ bản in mộc bản sạch.",
        },
        {
          title: "Tích hợp Mô hình Ngôn ngữ Nôm (2022)",
          body:  "Kiểm tra trên các phiên bản mộc bản chưa thấy (tổng quát hóa liên phiên bản). Kết quả: 71–74% mAP ở cấp độ chuỗi trên dữ liệu chưa thấy. Đây là con số thực tế trung thực cho nghiên cứu chuỗi học thuật tốt nhất.",
        },
        {
          title: "Scene Sino-Nom OCR (2025) — mới nhất",
          body:  "Tập trung vào ảnh thực tế (đền chùa, biển hiệu) — trường hợp sử dụng phù hợp nhất với NomLens. Kết hợp học sâu với kiến thức ngôn ngữ học rõ ràng về cấu trúc Nôm.",
        },
      ],
    },

    comparison: {
      heading: "NomLens So Sánh Như Thế Nào",
      note:    "Lưu ý: độ chính xác 71–74% của nghiên cứu chuỗi học thuật tốt nhất trên dữ liệu chưa thấy so với độ chính xác 97,6% mỗi ký tự của NomLens không phải là so sánh công bằng — chúng giải quyết các nhiệm vụ khác nhau. Phân loại mỗi ký tự đơn giản hơn và chính xác hơn OCR chuỗi, khi có phân đoạn đáng tin cậy ở phía trước.",
      columns: { dimension: "Chiều Kích", academic: "Học Thuật / Ứng Dụng Hiện Có", nomlens: "NomLens" },
      rows: [
        { dimension: "Kiến trúc",            academic: "CRNN / Transformer / U-Net",   nomlens: "EfficientNet-B0 (di động)"       },
        { dimension: "Triển khai",           academic: "Chỉ phía máy chủ",             nomlens: "Trên thiết bị, ngoại tuyến"      },
        { dimension: "Nhiệm vụ",             academic: "OCR chuỗi cấp dòng",           nomlens: "Phân loại đơn ký tự"             },
        { dimension: "Độ chính xác (thực)",  academic: "71–85% tùy phương pháp",       nomlens: "97,6% kiểm định (lớp Hán)"      },
        { dimension: "Tốc độ suy luận",      academic: "Không có benchmark trên thiết bị", nomlens: "<10ms trên Neural Engine"    },
        { dimension: "Ứng dụng iOS",         academic: "Không có với ML thực",          nomlens: "NomLens"                         },
        { dimension: "Vòng lặp dữ liệu",     academic: "Không có",                      nomlens: "Mỗi sửa lỗi = dữ liệu huấn luyện" },
      ],
      highlight: "Phát hiện chính: Bộ nhận dạng ký tự Nôm thời gian thực, trên thiết bị, chất lượng sản xuất cho iOS là thực sự mới mẻ. Không có đối thủ cạnh tranh trực tiếp nào tồn tại. Nghiên cứu học thuật chỉ ở phía máy chủ và không được thương mại hóa. Các ứng dụng App Store hiện có là hộp đen không tiết lộ không có tuyên bố độ chính xác hoặc suy luận trên thiết bị.",
    },

    kaggle: {
      heading: "Bộ Dữ Liệu NomNaOCR",
      body:    "Bộ dữ liệu NomNaOCR (38.318 mảnh ký tự có nhãn từ bản thảo in mộc bản Nôm thực) có sẵn công khai trên Kaggle. Đây là ảnh ký tự Nôm in thực với nhãn — thêm vào huấn luyện sẽ cải thiện đáng kể hiểu biết của mô hình về ký tự bản thảo in, vượt ra ngoài font kết xuất tổng hợp.",
      cta:     "Xem trên Kaggle →",
      note:    "Đang được đánh giá để tích hợp huấn luyện v2 / v3",
    },

    roadmap: {
      heading: "Lộ Trình Sản Phẩm",
      phases: [
        {
          phase: "Giai Đoạn 1 · Hoàn Thành", title: "Bộ Giải Mã Hỗ Trợ AI", status: "complete",
          items: ["Giải mã mỗi ký tự bằng Claude Vision API", "Tiền xử lý Core Image (ngưỡng thích ứng, làm thẳng, hiệu chỉnh phối cảnh)", "Phân đoạn framework Vision + sắp xếp thứ tự đọc", "Lịch sử cục bộ SwiftData", "Xuất JSON có cấu trúc"],
        },
        {
          phase: "Giai Đoạn 2 · Đang Triển Khai", title: "Mô Hình Core ML Trên Thiết Bị", status: "active",
          items: ["EfficientNet-B0 đã huấn luyện (97,6% độ chính xác, 10,6 MB)", "Hiệu chỉnh nhiệt độ (ECE 0,0034)", "Phân phối mô hình OTA (thành phần iOS đã xây dựng, máy chủ manifest đang chờ)", "Định tuyến độ tin cậy: trên thiết bị → dự phòng Claude"],
        },
        {
          phase: "Giai Đoạn 3 · Kế Hoạch", title: "Vòng Lặp Học Tích Cực", status: "planned",
          items: ["Quy trình sửa lỗi trong ứng dụng (người dùng xác minh ký tự có độ tin cậy thấp)", "Backend Supabase: kho sửa lỗi, ảnh cắt, xác thực", "Quy trình chất lượng dữ liệu (phát hiện ngoại lệ, hàng đợi xem xét chuyên gia)", "Kích hoạt huấn luyện lại dựa trên ngưỡng (500+ sửa lỗi đã xác minh mới)", "Đánh giá tự động + xuất Core ML + đẩy OTA"],
        },
        {
          phase: "Giai Đoạn 4 · Tương Lai", title: "Cộng Đồng & Hợp Tác", status: "future",
          items: ["Tài khoản xác minh học giả với trọng số sửa lỗi cao hơn", "Kho giải mã được gắn thẻ GPS (bản đồ sống của văn bia Hán Nôm)", "Xuất bản phiên và chú thích cộng đồng", "Gắn thẻ ngữ cảnh (triều đại, loại văn bản, địa điểm, chủ đề)"],
        },
        {
          phase: "Giai Đoạn 5 · Tương Lai", title: "Lớp NLP Sâu Hơn", status: "future",
          items: ["Dịch văn học với bối cảnh văn hóa (Claude hoặc mô hình tinh chỉnh)", "Nhận dạng thể thơ (lục bát, các thể Đường thi)", "Ước tính thời kỳ lịch sử từ từ vựng và phong cách", "Nhận dạng thực thể tên (địa danh, niên hiệu, tên người)"],
        },
        {
          phase: "Giai Đoạn 6 · Tương Lai", title: "Tích Hợp Học Thuật", status: "future",
          items: ["Xuất bộ dữ liệu mở — sửa lỗi đã xác minh đóng góp cho Nom Foundation và Kaggle", "API nghiên cứu cho số hóa bản thảo hàng loạt", "Đơn xin tài trợ NEH / Mellon Foundation", "Hợp tác: VNUHCM-UIT, Yale, Harvard, Cornell Nghiên cứu Đông Nam Á"],
        },
      ],
    },

    grants: {
      heading: "Cơ Hội Tài Trợ & Hợp Tác",
      subhead: "Đóng góp bộ dữ liệu mở (các sửa lỗi của người dùng đã xác minh được xuất ra làm dữ liệu huấn luyện có nhãn) là chìa khóa mở cánh cửa học thuật và tổ chức. Chúng tôi không xin tiền để xây dựng sản phẩm — chúng tôi cung cấp cơ sở hạ tầng phục vụ mục tiêu học thuật chung.",
      items: [
        { name: "NEH (Quỹ Quốc gia về Nhân văn)", program: "Tài trợ Nâng cao Nhân văn Kỹ thuật số", fit: "Đóng góp bộ dữ liệu mở, cơ sở hạ tầng số hóa bản thảo" },
        { name: "Mellon Foundation",               program: "Truyền thông Học thuật & Công nghệ Thông tin",  fit: "Bảo tồn di sản văn hóa, tiếp cận học thuật với dữ liệu chữ viết nguy cấp" },
        { name: "Bộ Văn hóa Việt Nam",             program: "Chương trình Số hóa Di sản Văn hóa",           fit: "Lợi ích quốc gia trong bảo tồn di sản bản thảo Nôm" },
        { name: "Đối tác Đại học",                 program: "Yale, Harvard, Cornell — Nghiên cứu Đông Nam Á", fit: "Số hóa hàng loạt bộ sưu tập bản thảo, tiếp cận nghiên cứu sinh viên" },
      ],
    },

    citation: {
      heading: "Trích Dẫn NomLens",
      note:    "Định dạng trích dẫn học thuật (placeholder — cập nhật với thông tin xuất bản):",
    },

    footer: { cta1: "← Chi tiết mô hình", cta2: "Tài liệu nhà phát triển" },
  },
};

// ─── Exports ──────────────────────────────────────────────────────────────────

export const translations = { en, vi } as const;
export type Translations = typeof en;
