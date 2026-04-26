export const siteConfig = {
  name: "Manish Nath",
  title: "Senior Mobile Engineer",
  description: "Portfolio website of Manish Nath",
  accentColor: "#1d4ed8",
  social: {
    email: "nathmanish91@gmail.com",
    linkedin: "https://www.linkedin.com/in/manish-nath-623584111",
    github: "https://github.com/nathmanish",
  },
  aboutMe:
    "Senior Android Developer with 10+ years of experience building scalable, high-performance mobile applications using Kotlin and modern Android architecture. I specialize in crafting clean, maintainable code with a strong focus on user experience, performance, and reliability. Passionate about continuous learning, I enjoy solving complex problems and building products that impact millions of users.",
  skills: ["Kotlin", "Java", "Android Development", "Android SDK", "Jetpack Compose", "MVVM", "MVI", "Clean Architecture", "SOLID Principles", "Coroutines", "Kotlin Flow", "REST APIs", "GraphQL", "Apollo GraphQL", "Retrofit", "Room Database", "SQLite", "Dependency Injection", "Dagger 2", "Hilt", "Koin", "Material Design", "Firebase", "Google Play Billing", "ExoPlayer", "Glide", "Coil", "Lottie", "Gradle", "CI/CD", "Bitrise", "Git", "GitHub", "Android Studio", "JUnit", "Mockito", "Espresso", "Appium", "Crashlytics", "BugSnag", "Amplitude", "Agile", "Scrum", "Kanban", "Release Management", "Technical Documentation", "Performance Optimization", "Code Review", "LLM Tools", "AI-Assisted Development", "Cursor", "Claude", "Model Context Protocol (MCP)"],
  projects: [
    {
      name: "Mindvalley App",
      description:
        "At Mindvalley, I shipped 15+ high-impact features across Android and cross-platform apps, blending Kotlin expertise with AI-assisted development (Claude) to accelerate delivery. I modernized the app with Jetpack Compose, improved performance by 30%, and built scalable media, billing, and offline systems used by 90%+ of users—while maintaining 99%+ stability.",
      link: "https://play.google.com/store/apps/details?id=com.mindvalley.mva",
      skills: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "DaggerHilt", "ApolloClient (GraphQL)", "ExoPlayer",],
    },
    {
      name: "Cisco / Spectralin (AOSP Project)",
      description:
        "Led the end-to-end development of 10+ system apps, starting from requirement discovery through delivery. Defined scope, broke down features into actionable tasks, and coordinated execution across the team. Collaborated closely with stakeholders from Cisco and Spectralink on timelines, priorities, and architecture. Ensured consistent delivery by aligning business needs with scalable technical solutions. Played a key role in driving cross-team communication and execution efficiency.",
      link: "https://www.spectralink.com/products/wi-fi/",
      skills: ["Android", "JAVA", "AOSP (Android open source project)", "SIP Protocol", "Certificate Pinning", "Battery App", "PPT (Push to Talk)"],
    },
    {
      name: "1+1 Cares",
      description:
        "Implemented real-time chat along with audio/video calling using the Twilio SDK. Enabled seamless peer-to-peer and group communication within the app. Focused on low-latency messaging and stable call connections across varying network conditions. Improved overall user engagement by making communication more accessible and reliable. Played a key role in enhancing in-app interaction and retention.",
      link: "https://play.google.com/store/apps/details?id=com.oneplusone",
      skills: ["Android", "Kotlin", "Java", "Twilio SDK (Audio/ Video Calling)", "Google Maps Integration"],
    },
    {
      name: "Got This",
      description:
        "Designed and developed an AR application using Google ARCore and Android Camera2 API. Focused on creating immersive and interactive user experiences using real-world environment mapping. Ensured smooth performance and stability across multiple Android devices with different hardware capabilities. Handled camera rendering pipelines and AR session lifecycle for consistent tracking and alignment. Successfully tested and validated the application in real-world usage scenarios.",
      link: "https://play.google.com/store/apps/details?id=com.gotthis",
      skills: ["Android", "Kotlin", "Java", "GoogleARCore", "Camera2API",],
    },
    {
      name: "Gita Seva : Ebooks and Audio",
      description:
        "Led the end-to-end development of a full-scale media application built from scratch using Kotlin. Designed system architecture, feature planning, and core implementation for scalable growth. The app reached 1M+ users on the Play Store and maintained a 4.8★ rating. Focused heavily on performance, smooth playback, and intuitive user experience. Ensured stability and scalability across a wide range of Android devices.",
      link: "https://play.google.com/store/apps/details?id=ct.android.gitasevakotlin",
      skills: ["Android", "Kotlin", "EPUB Reader", "LRC Reader (Lyrics sync)", "Android Media Player"],
    },
    {
      name: "Brackets Chat App",
      description:
        "Designed and developed an internal organizational chat application using Eclipse IDE. Built as a secure alternative to WhatsApp, addressing enterprise communication constraints. Focused on scalable architecture to support large-scale internal messaging use cases. Implemented core chat workflows including group messaging and real-time communication. Ensured reliability and maintainability for long-term internal organizational usage.",
      skills: ["Android", "Java", "Eclipse", "AsyncTasks",],
    },
  ],
  experience: [
    {
      company: "Mindvalley Labs",
      title: "Senior Mobile Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Developed React web and React Native mobile apps using Claude, creating detailed implementation plans that modularized UI components, state management, and APIs, enabling 50% faster cross-platform development and seamless code reuse.",

        "Implemented full-stack React web app and React Native mobile counterpart using Claude-guided workflows, following best practices for code generation, testing (Jest/Playwright), and deployment, delivering production-ready apps with responsive design and 95% test coverage in under 4 weeks.",

        "Led and delivered 15+ features, including 5+ built with Jetpack Compose, using Kotlin Coroutines, Flow, and state management while following Clean Architecture and SOLID principles for scalable and maintainable code.",

        "Redesigned legacy XML and Fragment-based screens using Jetpack Compose and a unified design system, adding full tablet support for portrait and landscape modes and improving UI rendering performance by 30%.",

        "Integrated REST APIs using Retrofit and GraphQL using Apollo, reducing data load times by 30% and improving overall app responsiveness and user experience.",

        "Built and integrated ExoPlayer-based audio and video playback, powering a core feature used by 90%+ of active users, delivering smooth and reliable media experiences.",

        "Developed offline audio and video downloading using ExoPlayer download service with secure encryption, increasing user engagement for offline content by 30%.",

        "Integrated in-app billing with multi-layer authentication (Fingerprint, Biometric, PIN), improving payment security and increasing trust for premium content purchases.",

        "Maintained 99%+ app stability by writing unit tests using JUnit, MockK, and Mockito, and UI tests using Espresso for deep-link flows, significantly reducing regressions and improving coverage.",

        "Identified and resolved a critical billing issue causing revenue loss, stabilizing the payment system and preventing ongoing financial impact for the company."
      ],
    },
    {
      company: "Matellio, Inc.",
      title: "Senior Android Developer",
      dateRange: "Nov 2018 - Oct 2022",
      bullets: [
        "Led the development of 10 system apps, managing feature delivery from requirement discovery to task breakdown and team assignment, while collaborating closely with project managers from Cisco and Spectralink to align on timelines, priorities, and technical decisions.",

        "Designed and developed system apps for Versity and Saturn Android devices using Android Studio and Android SDK, improving device functionality used by thousands of enterprise users in production environments.",

        "Built a real-time Barcode Scanner app capable of reading and displaying barcode data instantly, improving scanning efficiency by 40% in testing environments through optimized processing and UI responsiveness.",

        "Contributed to Cisco Phone and Bizphone apps, enabling secure SIP-based calling via Cisco Unified Communication Manager (CUCM), supporting 1000+ enterprise users with reliable communication.",

        "Developed a battery monitoring system app to track battery health and hot-swap status, improving device uptime and reducing unexpected shutdowns by 20% through proactive monitoring and alerts.",

        "Built a Safety app enabling instant emergency alerts to multiple users, improving response times in critical scenarios across enterprise test deployments.",

        "Implemented real-time chat and audio/video calling using Twilio SDK, enabling seamless communication and significantly improving in-app user engagement.",

        "Integrated Google Maps SDK to enable location-based features, improving navigation capabilities and increasing feature adoption across enterprise workflows.",

        "Developed a custom calendar module for scheduling and appointment tracking, streamlining workflows and reducing dependency on external calendar applications.",

        "Designed and developed an augmented reality (AR) application using Google ARCore and Camera2 API, delivering interactive AR experiences and validating performance across multiple Android devices.",

        "Created and integrated custom 3D models into real-world AR environments, improving visual accuracy, spatial alignment, and overall user engagement."
      ],
    },
    {
      company: "Capsitech IT Service Pvt. Ltd.",
      title: "Android Developer",
      dateRange: "Feb 2017 - Nov 2018",
      bullets: [
        "​Led the end-to-end development of a media application, designed and built from scratch in Kotlin, which reached 1M+ users and earned a 4.8 star rating on the Play Store for its performance and user experience.",
        "Designed and developed core features including a media player, lyrics synchronization, and an EPUB file reader, enhancing content accessibility and user engagement."
      ],
    },
    {
      company: "DHI Technologies",
      title: "Android Developer",
      dateRange: "May 2014 - Dec 2016",
      bullets: [
        "​Designed and developed an internal organizational chat application using Eclipse, tailored as an alternative to WhatsApp due to its group size limitations.",
        "​Enabled group chats with support for over 5000 users per group, addressing a critical communication need for the client’s internal operations."
      ],
    },
  ],
  education: [
    {
      school: "Rajasthan Technical University, Kota, India",
      degree: "Bachelor of Technology (Honors) - Computer Science Engineering",
      dateRange: "2010 - 2014",
      achievements: [],
    },
  ],
};
