import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Guide",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Our-Promise",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "I-Studio",
    url: links.i_Studio,
  },
  {
    id: "5",
    title: "Roadmap",
    url: links.roadmap,
  },
  {
    id: "6",
    title: "HashTag",
    url: links.sourceCode,
    onlyMobile: true,
    external: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = ['/ibm-logo-18910.png', '/pngimg.com - google_PNG102344.png', '/b4fac60a6ea261c973726d5c676d0f8f.png', '/dfbe1ada03613790c8574ed0db16a1e9.png', '/5a46bf1bf8121af08ed67db9d8c16f6b.png'];

export const brainwaveServices = [
  "Interview Generating",
  "Roadmap Genrating",
  "#Hashtag Community",
];

export const brainwaveServicesIcons = [
  '/icons8-ai-chip-48.png',
  '/icons8-ai-48.png',
  '/icons8-robot-94.png',
  '/icons8-search-engine-64 (1).png',
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Speech-to-Text",
    text: "We are constantly working on converting the User speech to text More precisly so that we can generate more and more accurate feedback and seamless experience for the user.",
    date: "-by 2026",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "#Hashtag-Community",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the community more frequently.",
    date: "-by 2026",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Roadmap-Docs",
    text: "We are building our expertised Documentation. A docs that won't demand a phd to read and the user can have evrything under one APP. ",
    date: "-by 2026",
    status: "Progrss",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Optimizing the Search-AI more and more...",
    text: "We are trying our best to optimize the Search-AI agents more and more so that the user could have the exact relevent questions that they want.",
    date: "-by 2026",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for individuals looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Interview Experience",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Python",
    icon: 'https://img.icons8.com/plasticine/100/python.png',
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "kubernetes",
    icon: "https://img.icons8.com/color/48/kubernetes.png",
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Docker",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-docker-a-set-of-coupled-software-as-a-service-logo-shadow-tal-revivo.png",
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "code",
    icon: "https://img.icons8.com/plasticine/100/code--v2.png",
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "React",
    icon: "https://img.icons8.com/clouds/100/react.png",
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "DB",
    icon: "https://img.icons8.com/liquid-glass/48/database.png",
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: "https://img.icons8.com/cute-clipart/64/server.png",
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Limited AI-Interview and Roadmap Generation",
    price: "150",
    features: [
      "An AI That Helps you Prepare for Interviews",
      "Personalized Roadmaps based on your preferences",
      "Ability to explore the EnLift-Ai and its features",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Pro",
    description: "Unlimited AI-Interview and Roadmap Generation and Resume-Site",
    price: "299",
    features: [
      "An AI That Helps you Prepare for Interviews",
      "Personalized Roadmaps based on your preferences",
      "Ability to explore the EnLift-Ai and its features",
      "Access to Resume Builder and ATS checker"
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Pro+",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: '599',
    features: [
      "An AI That Helps you Prepare for Interviews",
      "Personalized Roadmaps based on your preferences",
      "Ability to explore the EnLift-Ai and its features",
      "Access to Resume Builder and ATS checker",
      "Access o job Portal",
      "1:1 Mentorship with EnLift-AI Team"
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ace Your Interviews",
    text: "Practice real interview scenarios with AI-driven feedback and analytics designed to boost your confidence and technical depth.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Generate Your Roadmap",
    text: "Get a personalized learning and career roadmap crafted by AI — aligned to your goals, skill level, and dream role.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Join #Hashtag Community",
    text: "Write, share, and collaborate on real-world code with the Enlift community — learn faster through collaboration.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Smart AI Feedback",
    text: "Receive instant, structured feedback on your answers, code, and learning progress using Enlift’s adaptive AI engine.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Track Your Growth",
    text: "Monitor your skill progress and milestones through dynamic dashboards that evolve with your Enlift journey.",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Powered by the Community",
    text: "Connect, learn, and grow alongside other learners, developers, and AI enthusiasts who share your goals.",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://telegram.org",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com",
  },
];
