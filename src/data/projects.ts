export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  year: string;
  summary?: string;
}

export const projects: Project[] = [
  {
  title: "CICON - Shoe repair booking platform",
  description:
    "Two-sided marketplace for shoe repair, being rebuilt for the US market in Next.js/TypeScript with Supabase. It covers photo-based intake, AI-assisted assessment, repair selection and pricing, secure checkout, order tracking, and cobbler-side operations. Built as production software for a company product (codebase private).",
  image: "/projects/cicon.png",
  link: "https://www.linkedin.com/company/cicon-app/",
  year: "2024-Present",
  summary:
    "Something I have been working on for the last 2 years. I'm helping evolve a TypeScript/Next.js application from its legacy Prisma/PostgreSQL foundation into a Supabase-backed V3 rebuild for the US market, with AI-assisted assessment, persisted order workflows, payment and shipping integrations, notifications, and media uploads. **Private repository; high-level description only.**"
  },
  {
    title: "EmojiPicker.app",
    description: "A macOS menu bar app built with Swift for quick emoji insertion. Features keyboard shortcuts and system integration for seamless workflow enhancement.",
    image: "",
    link: "https://github.com/salmaniye/EmojiPicker.app",
    year: "2025",
    summary: "Learning native development while building something I actually use every day. Swift app that lets you quickly insert emojis anywhere by typing shortcuts like :heart or :fire. "
  },
  {
    title: "Stripes n Strides",
    description: "Tiger-themed gamified fitness app built with React for tracking running and walking activities. Winner of the PageTiger challenge at LincolnHack 2024.",
    image: "/projects/stripes-strides.webp",
    link: "https://github.com/salmaniye/stripes-n-strides",
    year: "2024",
    summary: "My first hackathon win! React web application built with an amazing team. An inspiring weekend that led to me **pivoting my career to web development**."
  },
  {
    title: "Interactive Migration Map",
    description: "Interactive map visualizing major historical migration events using Python, Streamlit, and Folium. Built in under 4 hours at Hack Pompey 2024.",
    image:  "/projects/maps.webp",
    link: "https://github.com/salmaniye/interactive_migration_map",
    year: "2024",
    summary: "My first foray into hackathons! Though the project is basic, it was a great and fun start into the hackathon world. Python web app using Streamlit and Folium to display historical population movements."
  },
  {
    title: "Flashcard Maker Web App",
    description: "A Streamlit web app that converts CSV files into interactive flashcards with customizable study sessions, search functionality, and progress tracking.",
    image: "/projects/flashcards.png",
    link: "https://github.com/salmaniye/flashcard-maker",
    year: "2024",
    summary: "Features customizable study sessions, search functionality, and the ability to split questions across multiple days. Deployed at [flashcard-maker.streamlit.app](https://flashcard-maker.streamlit.app) for easy access."
  },
  {
    title: "A Web Application to Display Sentiments of Pre-release Tweets on Main Series Pokémon Games",
    description: "Web application for sentiment analysis of pre-release gaming tweets using Python, machine learning, and data visualization. MSc final project.",
    image: "/projects/pokemon-msc-project.png",
    link: "https://github.com/salmaniye/msc-project",
    year: "2022",
    summary: "Built a web application that analyzes and displays sentiment from Twitter data about Pokémon games. My first real web development project that laid the foundation for everything that followed."
  }
]; 
