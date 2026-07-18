export const CV_URL = "https://drive.google.com/file/d/10ldL5De8cLSp70R4utMmRunNlBCRUB7Y/view?usp=sharing";
export const VIMEO_URL = "https://player.vimeo.com/video/1149476430";
export const MN_MANAGER_VIDEO_URL = "https://www.youtube.com/embed/_yb3U57rSRw";
export const APK_DIRECT_URL = "https://drive.google.com/uc?export=download&id=1XF939yWymy5ODkzK7TWY6jCPV-4Hicmy";
export const FORMSPREE = "https://formspree.io/f/xdkdvyeo";

export const EMAIL = String.fromCharCode(109,111,97,122,114,97,103,97,98,54,53,50,64,103,109,97,105,108,46,99,111,109);
export const PHONE_DIGITS = String.fromCharCode(50,48,49,48,50,53,53,56,54,56,49,51);

export const NAV_LINKS = [
  { href:'#about', label:'About', icon:'👤' },
  { href:'#skills', label:'Skills', icon:'⚡' },
  { href:'#projects', label:'Projects', icon:'📱' },
  { href:'#experience', label:'Experience', icon:'💼' },
  { href:'#education', label:'Education', icon:'🎓' },
  { href:'#contact', label:'Contact', icon:'✉️' },
];

export const PROJECTS = [
  {
    id:'mn-manager', title:'MN Manager', year:'2026', featured:true,
    description:'A cross-platform pharmacy and medical warehouse management system built for fast sales, accurate inventory control, financial reporting, and reliable offline work.',
    features:[
      'Fast POS sales flow with invoice review, professional printing, and QR-coded receipts',
      'Smart inventory alerts for low-stock and near-expiry products',
      'Supplier management with purchase invoices, due payments, and product tracking',
      'Dashboard and reports for daily and monthly performance, profit, and waste analysis',
      'Smart multi-device synchronization with offline-first support',
    ],
    roles:['Business Owners','Pharmacy Managers','Sales Staff'],
    extra:'Designed with complete Arabic and RTL support for a unified experience across Android and desktop.',
    tags:['Kotlin Multiplatform','Compose Multiplatform','Firebase Firestore','REST APIs','Offline-First','QR Code'],
    hasVideo:true, videoUrl:MN_MANAGER_VIDEO_URL, isExpandable:true,
    details:{
      overview:'MN Manager (MedManager) is a comprehensive cross-platform application designed to help pharmacies and medical warehouses operate efficiently.',
      architecture:'Built with Kotlin Multiplatform (KMP), the app shares core business logic across Android and desktop. Compose Multiplatform provides a flexible, consistent UI with full right-to-left language support.',
      sync:'The application follows an offline-first approach, using local storage so teams can continue working without an internet connection. Android devices synchronize in real time through Firebase Firestore.',
      advanced:'Advanced functionality includes QR code generation and scanning for secure invoices and returns, analytics logic for profit, shortages, waste, plus manual and automatic local backup.',
    },
  },
  {
    id:'usage-guard', title:'Usage Guard', year:'2026', featured:true,
    description:'A comprehensive Android application designed to help users monitor, control, and save their data usage through a professional-grade dashboard and intelligent VPN-powered firewall.',
    features:[
      'Real-time data usage monitoring with a custom Canvas-based circular gauge dashboard',
      'Smart VPN firewall (VpnService) for intercepting DNS and blocking apps/websites',
      'Web Blocker with Family Mode, Porn Block toggle, and PIN-protected parental controls',
      'Background monitoring with configurable data limits, 80% threshold warnings, and notifications',
      'Smart Insights engine that analyzes usage patterns and suggests actions every 30 minutes',
      'Achievements & gamification system with points, challenges, and progress tracking',
    ],
    roles:['End Users','Parents (Parental Control)'],
    extra:'Built with Kotlin and Jetpack Compose following MVVM architecture. Designed for minimal battery impact using native system APIs and efficient caching.',
    tags:['Android','Kotlin','Jetpack Compose','MVVM','VpnService','NetworkStatsManager','DataStore'],
    hasVideo:true, videoUrl:'https://www.youtube.com/embed/6qTuutyU8cI', isExpandable:true,
    githubUrl:'https://github.com/Moaz221/UsageGuard',
    apkUrl:'https://usage-guard.en.uptodown.com/android',
    details:{
      overview:'UsageGuard is a comprehensive Android application designed to help users monitor, control, and save their data usage. It leverages advanced system features like VPN (VpnService) and Usage Stats (NetworkStatsManager) to provide a professional-grade dashboard and control center.',
      architecture:'Built with Jetpack Compose for modern reactive UI and MVVM architecture with a single source of truth pattern. Data persistence is handled via Jetpack DataStore (Preferences and Proto) providing reactive, thread-safe storage. Kotlin Coroutines & Flow power all asynchronous operations with Lottie Compose for rich animations.',
      sync:'The SmartVpnService acts as the heart of the app\'s blocking and filtering capabilities. It creates a virtual DNS gateway (10.0.0.2), intercepts DNS queries at 10.0.0.1 (IPv4) and fd00:1:2:3::1 (IPv6), and forwards non-blocked queries to Google DNS (8.8.8.8) via a protected DatagramSocket. Blocked domains are sinkholed with fake IP responses. Three operation modes are supported: Full Tunnel Mode (domain and app blocking), Smart Mode (foreground-only access with dynamic reconfiguration), and Monitor Mode (passive tracking with limit notifications).',
      advanced:'The BackgroundMonitorService maintains persistent foreground presence with real-time usage notifications, listens for connectivity changes, runs periodic checks against configurable limits, and generates smart suggestions every 30 minutes via the InsightsEngine with self-healing logic. The app includes a Web Blocker with Family Mode, Porn Block (thousands of adult domains via built-in blocklist), and DoH protection against DNS bypass. Additional features include per-app data limits, network policies (WiFi/Mobile only), protected apps that bypass all blocking, and a comprehensive DataStore layout for settings, web blocks, app limits, schedules, achievements, and network policies.',
    },
  },
  {
    id:'med-journey', title:'MedJourney: Gamified Learning Ecosystem', year:'2026', featured:true,
    description:'A comprehensive medical education platform that transforms learning into an immersive experience through Gamification.',
    features:[
      'Structured Learning Paths: Modules → Subjects → Chapters → Lessons',
      'Interactive Flashcards for active recall and spaced repetition',
      'Gamification Engine: XP, Global Ranking, and Store integration',
      'Virtual Companion: Character health mechanics to drive engagement',
      'E-commerce Integration: Real-world Bookstore for medical resources',
      'Achievement System: Dynamic PDF certificate generation',
    ],
    roles:['Learners (Students)','Administrators (Full content management & Analytics)'],
    extra:'Built with a focus on high security and scalability. The Admin Panel allows full control over the learning ecosystem.',
    tags:['Android','Kotlin','Jetpack Compose','Gamification','PDF Generation','Secure Architecture'],
    image:'https://i.postimg.cc/YCfWhrdz/Gemini-Generated-Image-f1pmk7f1pmk7f1pm.png',
    isSecure:true,
  },
  {
    id:'uni-system', title:'University Management System', year:'2025', featured:true,
    description:'A real-world university management system with a clear hierarchical structure.',
    features:[
      'Browsing faculties, departments, subjects, and doctors',
      'Search functionality across multiple sections',
      'User authentication with email verification',
      'Profile management and notification preferences',
      'Permanent account deletion or clearing local data',
    ],
    roles:['Guest users','Registered users','Admin users','Super Admin with full system control'],
    extra:'Admins can manage news, activities, events, and schedule display times.',
    tags:['Android','Kotlin','Firebase','Jetpack Compose'],
    hasVideo:true, videoUrl:VIMEO_URL, apkUrl:APK_DIRECT_URL,
  },
  {
    id:'egypt-explorer', title:'Authentication System For Egypt Explorer', year:'2025',
    description:'Worked on the authentication module as part of a team project.',
    tags:['Android','Firebase','Kotlin/Java','UI/UX'],
    image:'https://i.postimg.cc/1X344Y0Y/Screenshot-2025-12-08-001247.png',
    githubUrl:'https://github.com/DEPI-Android/DEPI-Android-Project-Graduation',
    contributions:['Created and connected auth screens to Firebase','Managed user registration, login, and auth states','Ensured smooth and secure user experience'],
  },
  {
    id:'rps', title:'Rock–Paper–Scissors (C++)', year:'2025',
    description:'Console game written in modern C++ with clean input handling and replay logic.',
    tags:['C++','OOP','Console'],
    replitUrl:'https://replit.com/@moazragab652/Rock-Paper-Secissor?v=1',
  },
  {
    id:'todo', title:'TODO (Java)', year:'2025',
    description:'Lightweight productivity tool with persistent storage.',
    tags:['Java','File I/O','Audio'],
    replitUrl:'https://replit.com/@moazragab652/TODO?v=1',
  },
];

export const SKILL_CATEGORIES = [
  { title:'Languages', icon:'{ }', skills:['Kotlin','Java','C++','XML'] },
  { title:'Cross-Platform', icon:'📱', skills:['Kotlin Multiplatform (KMP)','Compose Multiplatform','Jetpack Compose','Android Studio','Material Design'] },
  { title:'Data & Integrations', icon:'⚙️', skills:['Firebase Firestore','REST APIs','Offline-First','Room DB','QR Code','Git','GitHub','Gradle'] },
];