export interface PersonalInfo {
  name: string
  title: string
  summary: string
  about: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  github: string
  profileImage: string
}

export interface Skill {
  name: string
  category: "programming" | "framework" | "database" | "tool" | "platform"
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  achievements: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  tech: string[]
  platforms: string[]
  type: string
  projectIcon?: string
  storeLinks: {
    platform: string  // e.g., "Android", "iOS", "Web"
    url: string
    store: string   // e.g., "Google Play", "App Store", "Web"
  }[]
  github?: string
  website?: string
  bannerImage?: string
  screenshots?: {
    [platform: string]: string[]
  }
  createdDate?: string
  releasedDate?: string
  featured: boolean
  stats?: {
    downloads?: string
    rating?: number
    reviews?: string
  }
  company: string
}

export interface OpenSourceProject {
  name: string
  description: string
  url: string
  type: string
  github?: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  location?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Achievement {
  title: string
  description: string
  date?: string
  icon: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  url?: string
  icon: string
}

// Update the Skill interface to include icon
export interface Skill {
  name: string
  category: "programming" | "framework" | "database" | "tool" | "platform"
  icon: string
}

export const personalInfo: PersonalInfo = {
  name: "Muhammad Zeeshan",
  title: "Software Engineer & Mobile App Specialist",
  summary: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Flutter, React Native and Native Android Platform and some other cool libraries and frameworks.",
  about:
    "An innovative software developer with 6+ years of experience with expertise in Mobile Application Development. Passionate about developing software programs that expedite the efficiency and effectiveness of organisational success. With my leadership skills, I can manage teams to build software programs. Critical thinker, problem solver, and innovative creator to develop software that is customized to meet a company's organizational needs and success.",
  email: "zeeshanayaz1@gmail.com",
  phone: "(+92) 312 2309493",
  location: "Karachi, Pakistan",
  website: "https://zeeshan-ayaz.web.app/",
  linkedin: "https://www.linkedin.com/in/zeeshanayaz/",
  github: "https://github.com/zeeshanayaz",
  profileImage: "/images/profile.jpeg",
}

export const skills: Skill[] = [
  { name: "Java/Kotlin", category: "programming", icon: "Code" },
  { name: "Flutter/Dart", category: "framework", icon: "Code" },
  { name: "React Native", category: "framework", icon: "Code" },
  { name: "Python", category: "framework", icon: "Code" },
  { name: "SQL", category: "database", icon: "Database" },
  { name: "Firebase", category: "database", icon: "Flame" },
  { name: "Supabase", category: "database", icon: "Zap" },
  { name: "Git", category: "tool", icon: "GitBranch" },
  { name: "Android Development", category: "platform", icon: "Smartphone" },
  { name: "iOS Development", category: "platform", icon: "Smartphone" },
  { name: "REST APIs", category: "tool", icon: "Globe" },
  { name: "Postman", category: "tool", icon: "Zap" },
  { name: "Figma", category: "tool", icon: "Palette" },
  { name: "Adobe XD", category: "tool", icon: "Palette" },
  { name: "Cross-platform Development", category: "framework", icon: "Monitor" },
  { name: "Play Store Deployment", category: "platform", icon: "Upload" },
  { name: "App Store Deployment", category: "platform", icon: "Upload" },
  { name: "Jira", category: "tool", icon: "GitBranch" },
  { name: "Basecamp", category: "tool", icon: "GitBranch" },
]

export const experiences: Experience[] = [
  {
    company: "Genetech Solutions",
    position: "Software Developer (Tier III)",
    duration: "October 2023 - Present",
    location: "Pakistan",
    achievements: [
      "Developed and launched 10+ mobile applications using Flutter and Kotlin for Android & iOS",
      "Improved app performance by 30% through optimized API integration and efficient coding practices",
      "Integrated REST APIs and Firebase services, enabling real-time features and enhanced user engagement",
      "Collaborated with UI/UX designers to create responsive and user-friendly mobile interfaces",
      "Streamlined API integration that improved app performance and reduced load times",
      "Mentored junior developers, helping them improve their code quality and efficiency",
      "Collaborated with the QA team to implement automated testing, resulting in a 50% reduction in post-release bugs",
      "Managed deployment and updates on Google Play Store and Apple App Store",
    ],
  },
  {
    company: "Genetech Solutions",
    position: "Software Developer (Tier I)",
    duration: "May 2023 - September 2023",
    location: "Pakistan",
    achievements: [
      "Contributed to development of 7+ cross-platform mobile applications",
      "Built UI components and integrated RESTful APIs for seamless user experience",
      "Collaborated with senior developers to enhance Flutter and native development skills",
      "Performed debugging, testing, and optimization to ensure application stability",
      "Supported deployment of applications to Google Play Store and Apple App Store",
    ],
  },
  {
    company: "Genetech Solutions",
    position: "Associate Software Developer",
    duration: "April 2021 - April 2023",
    location: "Pakistan",
    achievements: [
      "Developed and maintained Android applications using Kotlin/Java and transitioned to Flutter for cross-platform",      "Gained proficiency in Flutter, contributing to cross-platform mobile application development",
      "Assisted in integrating RESTful APIs and third-party services into mobile apps",
      "Worked collaboratively with the development team to implement new features",
      "Contributed in debugging and troubleshooting to resolve application issues",
      "Engaged in code reviews, continuously improving coding practices",
      "Supported deployment of applications to Google Play Store",
    ],
  },
  {
    company: "Minhasoft",
    position: "Android Developer",
    duration: "Dec 2019 - April 2021",
    location: "Karachi",
    achievements: [
      "Developed and maintained Android applications using Kotlin/Java and XML",
      "Integrated REST APIs and third-party services",
      "Collaborated with cross-functional teams to deliver new features",
      "Improved app performance and resolved technical issues",
      "Debugged and resolved issues during development and testing phases",
      "Supported deployment of applications to Google Play Store",
    ],
  },
]

export const projects: Project[] = [
  {
    id: "asma_ul_husna",
    name: "Asma Ul Husna–99Names of Allah",
    description: "Asma Ul Husna is a simple mobile application that presents the 99 names of Allah",
    longDescription: "Asma Ul Husna is a simple and elegant mobile application that presents the 99 beautiful names of Allah along with their meanings. The app is designed to help users learn, remember, and reflect on the divine attributes of Allah in an easy and accessible way.\n\nFeatures\n- View all 99 Names of Allah (Asma Ul Husna)\n- Listen all 99 Names of Allah (Asma Ul Husna)\n- Meanings of each name\n- Clean and simple user interface\n- Lightweight and easy to use",
    tech: ["Flutter", "Dart", "Firebase"],
    platforms: ["Android"],
    company: "Personal Project",
    type: "Education",
    projectIcon: "/images/projects/asma_ul_husna/logo.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.asmaulhusna99.app&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      }
    ],
    github: "",
    website: "",
    bannerImage: "/images/projects/asma_ul_husna/banner.png",
    screenshots: {
      Android: [
        "/images/projects/asma_ul_husna/mockups/android/01.png",
        "/images/projects/asma_ul_husna/mockups/android/02.png",
        "/images/projects/asma_ul_husna/mockups/android/03.png",
      ]
    },
    createdDate: "February, 2026",
    releasedDate: "February, 2026",
    featured: true,
    stats: {
      downloads: "10+",
      // rating: 5,
      // reviews: "10+",
    },
  },
  {
    id: "dayzee_farmer",
    name: "DayZee Farmer App",
    description: "DayZee enables farmers to order semen and embryos for livestock breeding.",
    longDescription: "DayZee is a comprehensive mobile application designed to streamline the process of ordering semen and embryos for livestock breeding. The app provides a seamless platform for farmers to browse available products, place orders, and manage their breeding programs efficiently.",
    tech: ["Flutter", "Dart", "Firebase"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    type: "Farming",
    projectIcon: "/images/projects/dayzee_consumer/logo.png",
    storeLinks: [],
    github: "",
    website: "",
    bannerImage: "/images/projects/dayzee_consumer/banner.png",
    screenshots: {},
    createdDate: "March, 2026",
    // releasedDate: "February, 2026",
    featured: true,
    // stats: {
    //   // downloads: "10+",
    //   // rating: 5,
    //   // reviews: "10+",
    // },
  },
  {
    id: "dayzee_vendor",
    name: "DayZee Vendor App",
    description: "DayZee enables farmers to order semen and embryos for livestock breeding.",
    longDescription: "DayZee is a comprehensive mobile application designed to streamline the process of ordering semen and embryos for livestock breeding. The app provides a seamless platform for farmers to browse available products, place orders, and manage their breeding programs efficiently.",
    tech: ["Flutter", "Dart", "Firebase"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    type: "Farming",
    projectIcon: "/images/projects/dayzee_vendor/logo.png",
    storeLinks: [],
    github: "",
    website: "",
    bannerImage: "/images/projects/dayzee_vendor/banner.png",
    screenshots: {},
    createdDate: "March, 2026",
    // releasedDate: "February, 2026",
    featured: true,
    // stats: {
    //   // downloads: "10+",
    //   // rating: 5,
    //   // reviews: "10+",
    // },
  },
  {
    id: "hujjah",
    name: "Hujjah",
    description: "Hujjah go beyond basic answers. AI teachers built to deliver scholar-level insight in Quran, theology, history, ethics, and spirituality.",
    longDescription: "Hujjah go beyond basic answers. AI teachers built to deliver scholar-level insight in Quran, theology, history, ethics, and spirituality.",
    tech: ["Flutter", "Dart", "Firebase"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    type: "ChatBot/Education",
    projectIcon: "/images/projects/hujjah/logo.png",
    storeLinks: [],
    github: "",
    website: "",
    bannerImage: "/images/projects/hujjah/banner.png",
    screenshots: {},
    createdDate: "March, 2026",
    // releasedDate: "February, 2026",
    featured: true,
    stats: {
      // downloads: "10+",
      // rating: 5,
      // reviews: "10+",
    },
  },
  {
    id: "serpent-tales",
    name: "Serpent Tales",
    description: "Relive the classic snake fun! Eat, grow, and survive in Serpent Tales.",
    longDescription: "Serpent Tales – Classic Snake Game Reimagined! 🐍\nGet ready to relive the timeless fun of the legendary Snake game, now brought to life with a fresh twist in Serpent Tales. Simple, addictive, and endlessly entertaining – it’s the perfect casual game to play anytime, anywhere!\\nn🎮 How to Play\nControl your serpent to eat food and grow longer.\nAvoid crashing into walls or your own tail.\nChallenge yourself to beat your high score.\n\n🌟 Features\n✅ Classic Gameplay – Experience the retro snake mechanics you know and love.\n✅ Modern Design – Clean, smooth graphics for a refreshing experience.\n✅ Easy Controls – Simple swipe/tap controls for smooth gameplay.\n✅ Offline Play – No internet required – enjoy anytime, anywhere.\n✅ Lightweight – Small in size, fast, and battery-friendly.\n\n🐍 Why You’ll Love Serpent Tales\nPerfect for quick breaks or long play sessions.\nFun for all ages – kids and adults alike.\nCompete with yourself to set higher scores.\nNostalgic yet modern – a true classic reimagined.\n\nWhether you’re a fan of old-school mobile games or just looking for a fun way to pass the time, Serpent Tales is the ultimate arcade experience. Easy to learn, but hard to master – how long can you survive?\n\n👉 Download Serpent Tales – Classic Snake Game today and start your slithering adventure!",
    tech: ["Flutter", "Dart", "Firebase", "Game", "Arcade", "Snake"],
    platforms: ["Android", "iOS"],
    company: "Personal Project",
    projectIcon: "/images/projects/serpent_tales/logo.png",
    bannerImage: "/images/projects/serpent_tales/banner.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.game.serpent&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      }
    ],
    type: "Game",
    screenshots: {
      Android: [
        "/images/projects/serpent_tales/mockups/android/01.png",
        "/images/projects/serpent_tales/mockups/android/02.png",
        "/images/projects/serpent_tales/mockups/android/03.png",
        "/images/projects/serpent_tales/mockups/android/04.png",
      ]
    },
    stats: {
      downloads: "100+",
      rating: 5,
      reviews: "2",
    },
    createdDate: "2025",
    featured: true,
  },
  {
    id: "empire-developments",
    name: "Empire Developments",
    description: "Where Uniqueness Redefines Luxurious Living",
    longDescription: "Experience the pinnacle of extravagance with Empire Development, Dubai, UAE, a premier luxury real estate developer. Immerse yourself in the epitome of opulence with our luxurious living spaces. Each residence is a testament to exquisite craftsmanship and meticulous attention to detail. From sprawling penthouses with panoramic views to lavish estates nestled in serene landscapes, we redefine what it means to live in luxury. At Empire Development, we specialize in crafting bespoke homes that cater to the most discerning tastes, ensuring an unparalleled lifestyle of sophistication and indulgence.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android", "iOS"],
    company: "Freelance Client",
    projectIcon: "/images/projects/empire_development/logo.png",
    bannerImage: "/images/projects/empire_development/banner.png",
    storeLinks: [],
    type: "Real Estate",
    screenshots: {},
    createdDate: "2025",
    featured: true,
  },
  {
    id: "interviewer_feedback_app",
    name: "Interviewer Feedback App",
    description: "Interview Feedback App is a mobile application designed to streamline the post-interview evaluation process.",
    longDescription: "Interview Feedback App is a mobile application designed to streamline the post-interview evaluation process. It enables interviewers to quickly and efficiently submit structured feedback after candidate interviews. The app ensures consistency, saves time, and centralizes feedback collection for HR and hiring teams.",
    tech: ["Flutter", "Dart", "Android", "iOS", "GIT"],
    platforms: ["Android", "iOS"],
    type: "Feedback App",
    company: "Genetech Solutions",
    projectIcon: "/images/projects/interviewer_feedback_app/logo.png",
    bannerImage: "/images/projects/interviewer_feedback_app/banner.png",
    storeLinks: [],
    screenshots: {
      iOS: [
        "/images/projects/interviewer_feedback_app/mockups/ios/01.jpg",
        "/images/projects/interviewer_feedback_app/mockups/ios/02.jpg",
        "/images/projects/interviewer_feedback_app/mockups/ios/03.jpg",
        "/images/projects/interviewer_feedback_app/mockups/ios/04.jpg",
      ],
    },
    createdDate: "May 2025",
    featured: true,
  },
  {
    id: "portfolio-app",
    name: "Portfolio App",
    description: "A clean, beautiful and responsive portfolio template for all!",
    longDescription: "A clean, beautiful and responsive portfolio template for all available for mobile, windows and web.",
    tech: ["Flutter", "Dart", "Android", "iOS", "GIT", "Firebase"],
    platforms: ["Android", "iOS", "Web"],
    type: "Portfolio",
    company: "Personal Project",
    projectIcon: "/images/projects/portfolio_app/logo.png",
    bannerImage: "/images/projects/portfolio_app/banner.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.zeeshan.portfolio&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
      {
        platform: "web",
        url: "https://zeeshan-ayaz.web.app/?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Web",
      },
    ],
    screenshots: {
      Android: [
        "/images/projects/portfolio_app/mockups/android/01.jpg",
        "/images/projects/portfolio_app/mockups/android/02.jpg",
        "/images/projects/portfolio_app/mockups/android/03.jpg",
        "/images/projects/portfolio_app/mockups/android/04.jpg",
        "/images/projects/portfolio_app/mockups/android/05.jpg",
      ],
      iOS: [
        "/images/projects/portfolio_app/mockups/ios/01.jpeg",
        "/images/projects/portfolio_app/mockups/ios/02.jpeg",
        "/images/projects/portfolio_app/mockups/ios/03.jpeg",
        "/images/projects/portfolio_app/mockups/ios/04.jpeg",
        "/images/projects/portfolio_app/mockups/ios/05.jpeg",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "50+",
      rating: 5,
      reviews: "10+",
    },
    featured: true,
  },
  {
    id: "hey_smarty",
    name: "Hey Smarty",
    description: "Your Personal Home Assistant",
    longDescription: "Hey Smarty, your ultimate virtual assistant designed to transform how you manage your home. Whether you’re looking for the best tutors, schools, cable TV, internet services, or the latest smart home devices, Hey Smarty has you covered. Our AI-powered app is tailored to help you discover top-rated products and services that make your home smarter, more comfortable, and cost-effective. With Hey Smarty, you’ll save both time and money while enjoying a seamless experience in creating the perfect living space. Let Hey Smarty guide you to the best choices for a home you’ll love.",
    tech: ["Flutter", "Dart", "Android", "iOS", "GIT", "Firebase", "OpenAI"],
    platforms: ["Android", "iOS"],
    type: "Assistant",
    company: "Genetech Solutions",
    projectIcon: "/images/projects/hey_smarty/logo.png",
    bannerImage: "/images/projects/hey_smarty/banner.jpg",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.smarty.app&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/heysmarty/id6651834814?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "App Store",
      },
    ],
    screenshots: {
      Android: [
        "/images/projects/hey_smarty/mockups/android/01.jpg",
        "/images/projects/hey_smarty/mockups/android/02.jpg",
        "/images/projects/hey_smarty/mockups/android/03.jpg",
        "/images/projects/hey_smarty/mockups/android/04.jpg",
        "/images/projects/hey_smarty/mockups/android/05.jpg",
        "/images/projects/hey_smarty/mockups/android/06.jpg",
        "/images/projects/hey_smarty/mockups/android/07.png",
        "/images/projects/hey_smarty/mockups/android/08.png",
        "/images/projects/hey_smarty/mockups/android/09.png",
        "/images/projects/hey_smarty/mockups/android/10.png",
        "/images/projects/hey_smarty/mockups/android/11.png",
      ],
      iOS: [
        "/images/projects/hey_smarty/mockups/ios/01.jpg",
        "/images/projects/hey_smarty/mockups/ios/02.jpg",
        "/images/projects/hey_smarty/mockups/ios/03.jpg",
        "/images/projects/hey_smarty/mockups/ios/04.jpg",
        "/images/projects/hey_smarty/mockups/ios/05.jpg",
        "/images/projects/hey_smarty/mockups/ios/06.jpg",
        "/images/projects/hey_smarty/mockups/ios/07.png",
        "/images/projects/hey_smarty/mockups/ios/08.png",
        "/images/projects/hey_smarty/mockups/ios/09.png",
        "/images/projects/hey_smarty/mockups/ios/10.png",
        "/images/projects/hey_smarty/mockups/ios/11.png",
      ],
    },
    createdDate: "Mar, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "50+",
      rating: 5,
      reviews: "10+",
    },
    featured: true,
  },
  {
    id: "padzee",
    name: "Padzee - Online Clipboard",
    description: "Online portable clipboard to help you take notes on the go. No Login, No Hassle!",
    longDescription:
      "Padzee is your pocket-sized digital notepad. This free online clipboard lets you jot down ideas, reminders, and anything else that pops into your head – instantly. Capture Thoughts: Quickly save notes, big or small.",
    tech: ["Flutter", "Dart", "Android", "iOS", "REST APIs", "Firebase"],
    platforms: ["Android", "iOS", "Web"],
    type: "Clipboard, Online Notepad",
    company: "Genetech Solutions",
    projectIcon: "/images/projects/padzee/logo.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.padzee.bit14&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/padzee-online-clipboard/id6743198785?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "App Store",
      },
      {
        platform: "web",
        url: "https://padzee.com/?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Web",
      },
    ],
    bannerImage: "/images/projects/padzee/banner.png",

    screenshots: {
      Android: [
        "/images/projects/padzee/mockups/android/01.png",
        "/images/projects/padzee/mockups/android/02.png",
        "/images/projects/padzee/mockups/android/03.png",
        "/images/projects/padzee/mockups/android/04.png",
        "/images/projects/padzee/mockups/android/05.png",
        "/images/projects/padzee/mockups/android/06.png",
        "/images/projects/padzee/mockups/android/07.png",
        "/images/projects/padzee/mockups/android/08.png",
        "/images/projects/padzee/mockups/android/09.png",
      ],
      iOS: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_7.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_8.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_9.jpg?alt=media",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "50+",
      rating: 5,
      reviews: "10+",
    },
    featured: true,
  },
  {
    id: "ai-photobooth",
    name: "AI Photobooth",
    description: "Reimagine yourself. Generate AI-enhanced avatars with ease.",
    longDescription:
      "AI Photobooth is an innovative mobile application that combines cutting-edge AI technology with photo capturing. The app allows users to take pictures using their device’s camera and then processes the images to generate AI-enhanced avatars and photos. By leveraging advanced image processing algorithms and AI models, the app transforms ordinary photos into visually appealing, AI-generated artwork.",
    tech: ["Flutter", "Dart", "REST APIs", "AI Integration", "Camera", "Image Processing"],
    platforms: ["Android", "iOS"],
    type: "AI/Photo App",
    company: "Genetech Solutions",
    projectIcon: "/images/projects/ai_photobooth/logo.png",
    bannerImage: "/images/projects/ai_photobooth/banner.png",
    storeLinks: [],
    screenshots: {
      iOS: [
        "/images/projects/ai_photobooth/mockups/ios/01.jpeg",
        "/images/projects/ai_photobooth/mockups/ios/02.jpeg",
        "/images/projects/ai_photobooth/mockups/ios/03.jpeg",
        "/images/projects/ai_photobooth/mockups/ios/04.jpeg",
        "/images/projects/ai_photobooth/mockups/ios/05.jpeg",
      ],
      Android: [
        "/images/projects/ai_photobooth/mockups/android/01.png",
        "/images/projects/ai_photobooth/mockups/android/02.png",
        "/images/projects/ai_photobooth/mockups/android/03.png",
        "/images/projects/ai_photobooth/mockups/android/04.png",
        "/images/projects/ai_photobooth/mockups/android/05.png",
        "/images/projects/ai_photobooth/mockups/android/06.png",
        "/images/projects/ai_photobooth/mockups/android/07.png",
        "/images/projects/ai_photobooth/mockups/android/08.png",
        "/images/projects/ai_photobooth/mockups/android/09.png",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "5K+",
      rating: 4.8,
      reviews: "120+",
    },
    featured: true,
  },
  {
    id: "340b-price-guide",
    name: "340B The Price Guide",
    description: "340B Price Guide mobile is an application for HRSA 340B covered entities.",
    longDescription: "340B Price Guide is an app that helps to estimate the price a patient will pay at a pharmacy. It is designed for clinical staff use rather than patients. It is free for staff members of CEs who have already enrolled online on behalf of their company.",
    tech: ["Flutter", "Dart", "REST APIs", "Healthcare", "Pricing Engine"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    projectIcon: "/images/projects/340b_price_guide/logo.png",
    bannerImage: "/images/projects/340b_price_guide/banner.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=us.rx340b.the_340b_price_guide",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/340b-price-guide/id1076084307",
        store: "App Store",
      },
    ],
    type: "Healthcare App",
    screenshots: {
      Android: [
        "/images/projects/340b_price_guide/mockups/android/01.png",
        "/images/projects/340b_price_guide/mockups/android/02.png",
        "/images/projects/340b_price_guide/mockups/android/03.png",
        "/images/projects/340b_price_guide/mockups/android/04.png",
        "/images/projects/340b_price_guide/mockups/android/05.png",
        "/images/projects/340b_price_guide/mockups/android/06.png",
        "/images/projects/340b_price_guide/mockups/android/07.png",
        "/images/projects/340b_price_guide/mockups/android/08.png",
        "/images/projects/340b_price_guide/mockups/android/09.png",
      ],
    },
    createdDate: "Sep, 2023",
    releasedDate: "Nov, 2023",
    stats: {
      downloads: "10K+",
      rating: 4.6,
      reviews: "250+",
    },
    featured: true,
  },
  {
    id: "write",
    name: "Write - Daily Note Organizer",
    description: "Organize daily notes easily.",
    longDescription: "Write is more than just a note-taking app; it\'s your digital notebook, designed to effortlessly capture your thoughts, ideas, and inspirations whenever they strike. With its intuitive interface and powerful features, Write empowers you to organize your life, unleash your creativity, and collaborate seamlessly with others.",
    tech: ["Flutter", "Dart", "Android", "iOS", "Firebase"],
    platforms: ["Android", "iOS", "Web"],
    type: "Clipboard, Online Notepad",
    company: "Personal Project",
    projectIcon: "/images/projects/write/logo.png",
    bannerImage: "/images/projects/write/banner.png",
    storeLinks: [
      {
        platform: "web",
        url: "https://write-note-app.web.app/",
        store: "Web",
      },
    ],
    screenshots: {
      Android: [
        "/images/projects/write/mockups/android/01.png",
        "/images/projects/write/mockups/android/02.png",
        "/images/projects/write/mockups/android/03.png",
        "/images/projects/write/mockups/android/04.png",
        "/images/projects/write/mockups/android/05.png",
        "/images/projects/write/mockups/android/06.png",
        "/images/projects/write/mockups/android/07.png",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "50+",
      rating: 5,
      reviews: "10+",
    },
    featured: true,
  },
  {
    id: "nutri-west",
    name: "Nutri-west",
    description: "E-commerce app that offers various healthcare products.",
    longDescription:
      "Nutri-west is an e-commerce website that offers various Herbal, homeopathic, and general healthcare products to improve health and overall well-being. The Nutri-West App allows both patients and providers to login, purchase products, and manage their profiles.",
    tech: ["Flutter", "Dart", "REST APIs", "E-commerce"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.nutriwest.app",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/nutri-west/id6476763673",
        store: "App Store",
      },
    ],
    type: "E-Commerce",
    projectIcon: "/images/projects/nutriwest/logo.png",
    bannerImage: "/images/projects/nutriwest/banner.png",
    screenshots: {
      Android: [
        "/images/projects/nutriwest/mockups/android/01.png",
        "/images/projects/nutriwest/mockups/android/02.png",
        "/images/projects/nutriwest/mockups/android/03.png",
        "/images/projects/nutriwest/mockups/android/04.png",
        "/images/projects/nutriwest/mockups/android/05.png",
        "/images/projects/nutriwest/mockups/android/06.png",
        "/images/projects/nutriwest/mockups/android/07.png",
        "/images/projects/nutriwest/mockups/android/08.png",
        "/images/projects/nutriwest/mockups/android/09.png",
      ],
      iOS: [
        "/images/projects/nutriwest/mockups/ios/01.png",
        "/images/projects/nutriwest/mockups/ios/02.png",
        "/images/projects/nutriwest/mockups/ios/03.png",
        "/images/projects/nutriwest/mockups/ios/04.png",
        "/images/projects/nutriwest/mockups/ios/05.png",
        "/images/projects/nutriwest/mockups/ios/06.png",
        "/images/projects/nutriwest/mockups/ios/07.png",
        "/images/projects/nutriwest/mockups/ios/08.png",
        "/images/projects/nutriwest/mockups/ios/09.png",
      ],
    },
    createdDate: "Jun, 2023",
    releasedDate: "Aug, 2023",
    featured: true,
  },
  {
    id: "check_the_reviews",
    name: "CheckTheReviews",
    description: "A powerful tool to let people know about Your business by leaving reviews!",
    longDescription: "A powerful tool to let people know about Your business by leaving reviews! The best promotion to any business - good feedback from different real people. Bring new opportunities to Your business with the power of XYZ Reviews! Submit a request for the feedback to your customer by SMS or by generating QR code.",
    tech: ["Flutter", "Dart", "Firebase"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    type: "Review",
    projectIcon: "/images/projects/check_the_reviews/logo.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=reviews.seethepro.com",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/checkthereviews/id1458500788",
        store: "App Store",
      },
    ],
    github: "",
    website: "",
    bannerImage: "/images/projects/check_the_reviews/banner.png",
    screenshots: {
      Android: [
        "/images/projects/check_the_reviews/mockups/android/01.jpg",
        "/images/projects/check_the_reviews/mockups/android/02.jpg",
        "/images/projects/check_the_reviews/mockups/android/03.jpg",
        "/images/projects/check_the_reviews/mockups/android/04.jpg",
        "/images/projects/check_the_reviews/mockups/android/05.jpg",
        "/images/projects/check_the_reviews/mockups/android/06.jpg",
        "/images/projects/check_the_reviews/mockups/android/07.jpg",
      ],
    },
    createdDate: "June, 2023",
    // releasedDate: "February, 2026",
    featured: true,
    stats: {
      downloads: "100+",
      // rating: 5,
      // reviews: "10+",
    },
  },
  {
    id: "brokerware",
    name: "Brokerware, 3pl Systems Inc",
    description: "Brokerware is a world-class TMS platform that now has a native mobile app.",
    longDescription: "Revolutionizing the global transportation landscape with autonomous solutions, aiming to foster a more efficient, and sustainable future, where seamless integration is accessible to all.",
    tech: ["Flutter", "Dart", "REST APIs", "Real-time Tracking"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    type: "Logistics",
    bannerImage: "/images/projects/brokerware/banner.png",
    projectIcon: "/images/projects/brokerware/logo.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.brokerware.app",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/brokerware-mobile/id1612396311",
        store: "App Store",
      },
    ],
    screenshots: {
      android: [

      ],
    },
    createdDate: "Mar, 2023",
    releasedDate: "May, 2023",
    featured: true,
  },

  {
    id: "electra",
    name: "Electra",
    description: "",
    longDescription: "",
    tech: ["Flutter", "Dart", "REST APIs", "Animation"],
    platforms: ["Android", "iOS"],
    company: "Freelance Client",
    type: "Booking App",
    projectIcon: "",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_4.jpg?alt=media",
    storeLinks: [],
    screenshots: {
      iOS: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Felectra_7.jpg?alt=media",
      ],
    },
    createdDate: "Oct, 2024",
    featured: true,
  },
  {
    id: "thaqalayn-kids",
    name: "Thaqalayn Kids",
    description: "An animated story application for children with educational content and games.",
    longDescription: "Thaqalayn Kids is an animated story application for children where they can listen to animated videos to build their character and play multiple games.",
    tech: ["Flutter", "Dart", "REST APIs", "Animation", "Games"],
    platforms: ["Android", "iOS"],
    company: "Freelance Client",
    type: "Education",
    projectIcon: "/images/projects/thaqalayn_kids/logo.png",
    bannerImage: "/images/projects/thaqalayn_kids/banner.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.thaqalaynkids.app",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/thaqalayn-kids/id1623543255",
        store: "App Store",
      },
    ],
    screenshots: {
      Android: [
        "/images/projects/thaqalayn_kids/mockups/ios/01.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/02.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/03.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/04.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/05.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/06.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/07.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/08.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/09.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/10.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/11.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/12.jpg",
      ],
      iOS: [
        "/images/projects/thaqalayn_kids/mockups/ios/01.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/02.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/03.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/04.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/05.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/06.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/07.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/08.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/09.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/10.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/11.jpg",
        "/images/projects/thaqalayn_kids/mockups/ios/12.jpg",
      ],
    },
    createdDate: "Jan, 2023",
    releasedDate: "Mar, 2023",
    featured: true,
  },
  {
    id: "multi-timer-stopwatch",
    name: "Multi Timer Stopwatch",
    description: "Multi Timer Stopwatch. Create and use multiple timers simultaneously.",
    longDescription: "Multi Timer Stopwatch. Create and use multiple timers simultaneously.",
    tech: ["Android", "Kotlin", "XML", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Genetech Solutions",
    type: "Stopwatch",
    projectIcon: "/images/projects/multi_timer_stopwatch/logo.png",
    bannerImage: "/images/projects/multi_timer_stopwatch/banner.jpg",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.bit14.multicountdowntimer&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    screenshots: {
      Android: [
        "/images/projects/multi_timer_stopwatch/mockups/android/01.jpg",
        "/images/projects/multi_timer_stopwatch/mockups/android/02.jpg",
        "/images/projects/multi_timer_stopwatch/mockups/android/03.jpg",
        "/images/projects/multi_timer_stopwatch/mockups/android/04.jpg",
        "/images/projects/multi_timer_stopwatch/mockups/android/05.jpg",
        "/images/projects/multi_timer_stopwatch/mockups/android/06.jpg",
        "/images/projects/multi_timer_stopwatch/mockups/android/07.jpg",
        "/images/projects/multi_timer_stopwatch/mockups/android/08.jpg",
      ],
    },
    createdDate: "Jan, 2023",
    releasedDate: "Mar, 2023",
    featured: true,
  },
  {
    id: "amfs-online-mobile",
    name: "AMFS Online Mobile Application",
    description: "An educational app for students of Al Musleh Foundation School.",
    longDescription: "AMFS Online is an educational app where students can sharpen their skills, practice exercise and test themselves. Use can simply sign-in it with your GR #. It is designed for our kids to stay connected with their tears while remaining at home.",
    tech: ["Android", "Kotlin", "XML", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Al Musleh Foundation School",
    type: "Education",
    projectIcon: "/images/projects/amfs_online/logo.png",
    bannerImage: "/images/projects/amfs_online/banner.jpg",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.zeeshan.amfsonline&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    screenshots: {
      Android: [
        "/images/projects/amfs_online/mockups/android/01.jpg",
        "/images/projects/amfs_online/mockups/android/02.jpg",
        "/images/projects/amfs_online/mockups/android/03.jpg",
        "/images/projects/amfs_online/mockups/android/04.jpg",
        "/images/projects/amfs_online/mockups/android/05.jpg",
        "/images/projects/amfs_online/mockups/android/06.jpg",
        "/images/projects/amfs_online/mockups/android/07.jpg",
      ],
    },
    stats: {
      downloads: "500+",
      rating: 5,
      reviews: "21+",
    },
    createdDate: "Mar, 2020",
    releasedDate: "Jul, 2020",
    featured: true,
  },
  {
    id: "munaf-textile",
    name: "Munaf Textile",
    description: "",
    longDescription: "",
    tech: ["Kotlin", "XML", "REST APIs", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "/images/projects/munaf_textile/logo.png",
    bannerImage: "",
    storeLinks: [],
    type: "POS",
    screenshots: {},
    stats: {
      downloads: "10+"
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: true,
  },
  {
    id: "pocket-mpos",
    name: "Pocket MPOS",
    description: "Customized POS software solution for current business need.",
    longDescription: "Pocket MPOS is the customized software solution for current business needs. This application is especially designed for small and medium enterprises. It includes the complete solution for business management. From purchase to sales, inventory management to finance management.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "/images/projects/mpos/logo.png",
    bannerImage: "/images/projects/mpos/banner.jpg",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.minhasoft.mpos",
        store: "Google Play",
      },
    ],
    type: "POS",
    screenshots: {
      Android: [
        "/images/projects/mpos/mockups/android/01.jpg",
        "/images/projects/mpos/mockups/android/02.jpg",
        "/images/projects/mpos/mockups/android/03.jpg",
        "/images/projects/mpos/mockups/android/04.jpg",
        "/images/projects/mpos/mockups/android/05.jpg",
        "/images/projects/mpos/mockups/android/06.jpg",
      ],
    },
    stats: {
      downloads: "100+"
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: true,
  },
  {
    id: "protein-district",
    name: "Protein District",
    description: "Your friendly neighborhood nutrition store! The first guilt-free concept store in GCC! Anything nutrition? We've got you!",
    longDescription: "Protein District is a newly established company striving to keep you healthy. We are the UAE first ever to bring you all your favorite healthy high protein snacks and the best healthy alternatives to achieve your fitness goals, pretty much in one place. Enjoy our range of products that help you to get fit and guilt free.\nProtein District striving to keep you healthy by bringing you all your favorite healthy high protein snacks and the best healthy alternatives to achieve your fitness goals, pretty much in one place to enjoy our range of products that help you to get fit and guilt free.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "/images/projects/protein_district/logo.png",
    bannerImage: "/images/projects/protein_district/banner.jpg",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=pd.app&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    type: "E-Commerce",
    screenshots: {},
    stats: {
      downloads: "100+"
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: true,
  },
  {
    id: "branddose",
    name: "Branddose",
    description: "An online retailer of high-end perfumes and other luxurious commodities",
    longDescription: "Branddose aims to offer the best in original brands, through a service that has the interest of our customers at heart. We strive for high quality combined with low prices. Our staff members are highly trained and able to answer any questions you might have with regards to our service or your orders.\nBrandDose.com was founded in 2017 as an online retailer of high end perfumes and other luxurious commodities. We have become a market leader in our field, providing high profile brands at low prices for customers in all GCC countries and abroad.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "/images/projects/branddose/logo.png",
    bannerImage: "/images/projects/branddose/banner.png",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.branddose.app&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    type: "E-Commerce",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_7.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_8.jpg?alt=media",
      ],
    },
    stats: {
      downloads: "100+"
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: true,
  },
  {
    id: "razpay",
    name: "Razpay Digital Wallet",
    description: "",
    longDescription: "Introducing Razpay, your all-in-one solution for seamlessly managing and safeguarding your cryptocurrency assets. Razpay redefines the crypto wallet experience with its user-friendly interface, robust security features, and unparalleled functionality. Whether you're a seasoned crypto enthusiast or just venturing into the world of digital currencies, Razpay is designed to make your cryptocurrency transactions secure, efficient, and stress-free.",
    tech: ["Flutter", "REST APIs", "Firebase", "SqlLite", "Push Notifications"],
    platforms: ["Android"],
    company: "Freelance Client",
    projectIcon: "/images/projects/razpay/logo.png",
    storeLinks: [],
    github: "https://github.com/zeeshanayaz/razpay-wallet-app?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
    type: "Digital Wallet",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_4.jpg?alt=media",
      ],
    },
    createdDate: "2024",
    featured: true,
  },
  {
    id: "salonat_user",
    name: "Salonat - Online Beauty Home Service",
    description: "",
    longDescription: ".",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fsalonat.png?alt=media",
    bannerImage: "/images/projects/salonat/banner.jpg",
    storeLinks: [],
    type: "Life Style",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_9.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_10.png?alt=media",
      ],
    },
    createdDate: "2020",
    featured: true,
  },
  {
    id: "salonat_beautician",
    name: "Salonat - Online Beauty Home Service (Beautician)",
    description: "",
    longDescription: ".",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fsalonat.png?alt=media",
    bannerImage: "/images/projects/salonat/banner.jpg",
    storeLinks: [],
    type: "Life Style",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_9.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_10.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fsalonat_beautician_11.png?alt=media",
      ],
    },
    createdDate: "2020",
    featured: true,
  },
]

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "Python Coding Challenges",
    description:
      "A collection of coding problems and solutions in Python, useful for interview preparation and problem-solving practice.",
    url: "https://github.com/zeeshanayaz/python_coding_challenges",
    type: "Python",
    github: "https://github.com/zeeshanayaz/python_coding_challenges",
  },
  {
    name: "Sequence - Board Game Prototype",
    description:
      "A flutter app MVP for Sequence Game.",
    url: "https://github.com/zeeshanayaz/board_game_prototype",
    type: "Flutter App",
    github: "https://github.com/zeeshanayaz/board_game_prototype",
  },
  {
    name: "Custom Accordion",
    description:
      "A Flutter package that allows you to create an Expandable widget where each item can be expanded or collapsed by clicking on the header.",
    url: "https://pub.dev/packages/custom_accordion",
    type: "Flutter Package",
    github: "https://github.com/zeeshanayaz/custom_accordion",
  },
  {
    name: "Text Scaling Widget",
    description:
      "A versatile Flutter widget designed to dynamically scale text sizes based on customizable scaling factors for better accessibility and responsive design.",
    url: "https://github.com/zeeshanayaz/text_scaling_example",
    type: "Flutter Widget",
    github: "https://github.com/zeeshanayaz/text_scaling_example",
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    institution: "University of Karachi",
    year: "2018",
    location: "Karachi, Pakistan",
  },
  {
    degree: "Intermediate",
    institution: "S.M Govt Science College",
    year: "2013",
  },
  {
    degree: "Matriculation",
    institution: "Jenning's Private Secondary School",
    year: "2011",
  },
]

export const achievementsData = [
  `Launched ${projects.length}+ apps with 4+ average rating on both app stores`,
  "Expert in both Android and iOS development",
  "Proficient in multiple programming languages and frameworks",
  "Reduced post-release bugs by 50% through unit and manual testing",
  "Published open-source packages used by the Flutter community",
]

export const services: Service[] = [
  {
    id: "app-development",
    title: "App Development",
    description:
      "Full-stack mobile application development for Android and iOS platforms using modern technologies like Flutter, Kotlin, and Java.",
    icon: "Smartphone",
    features: [
      "Native Android Development (Kotlin/Java)",
      "Cross-platform Development (Flutter, React Native)",
      "iOS Development",
      "API Integration",
      "Database Design & Implementation",
      "Performance Optimization",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces with focus on user experience and modern design principles.",
    icon: "Palette",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Responsive Design",
      "Design System Creation",
      "Usability Testing",
    ],
  },
  {
    id: "app-publishing",
    title: "App Publishing",
    description: "Complete app store optimization and publishing services for Google Play Store and Apple App Store.",
    icon: "Upload",
    features: [
      "Google Play Store Publishing",
      "Apple App Store Publishing",
      "App Store Optimization (ASO)",
      "App Metadata Optimization",
      "Release Management",
      "Post-launch Support",
    ],
  },
]

export const achievements: Achievement[] = [
  {
    title: `${projects.length}+ Apps Published`,
    description:
      `Successfully launched and published over ${projects.length} mobile applications on both Google Play Store and Apple App Store`,
    icon: "Trophy",
  },
  {
    title: "4+ Average Rating",
    description: "Maintained an average rating of 4+ stars across all published applications",
    icon: "Star",
  },
  {
    title: "Team Leadership",
    description:
      "Successfully mentored junior developers and led development teams to deliver high-quality software solutions",
    icon: "Users",
  },
  {
    title: "50% Bug Reduction",
    description: "Implemented automated testing processes that resulted in 50% reduction in post-release bugs",
    icon: "Shield",
  },
  {
    title: "Open Source Contributor",
    description: "Published Flutter packages used by the developer community with positive feedback",
    icon: "GitBranch",
  },
]

export const certifications: Certification[] = [
  {
    name: "Version Control with Git",
    issuer: "Coursera",
    date: "2023",
    icon: "Award",
  },
  {
    name: "Mobile App Development Certification",
    issuer: "Self-Certified",
    date: "2022",
    icon: "Award",
  },
]
