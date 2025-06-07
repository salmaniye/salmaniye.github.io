export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  year: number;
  summary?: string;
}

export const projects: Project[] = [
  {
    title: "EmojiPicker.app",
    description: "A macOS menu bar app built with Swift for quick emoji insertion. Features keyboard shortcuts and system integration for seamless workflow enhancement.",
    image: "",
    link: "https://github.com/salmaniye/EmojiPicker.app",
    year: 2025,
    summary: "Swift app that lets you quickly insert emojis anywhere by typing shortcuts like :heart or :fire. Learning native development while building something I actually use every day."
  },
  {
    title: "Stripes n Strides",
    description: "Tiger-themed gamified fitness app built with React for tracking running and walking activities. Winner of the PageTiger challenge at LincolnHack 2024.",
    image: "/projects/stripes-strides.png",
    link: "https://github.com/salmaniye/stripes-n-strides",
    year: 2024,
    summary: "My first hackathon win! React web application built with an amazing team. An inspiring weekend that led to me **pivoting my career to web development**."
  },
  {
    title: "Interactive Migration Map",
    description: "Interactive map visualizing major historical migration events using Python, Streamlit, and Folium. Built in under 4 hours at Hack Pompey 2024.",
    image: "",
    link: "https://github.com/salmaniye/interactive_migration_map",
    year: 2024,
    summary: "My first foray into hackathons! Though the project is basic, it was a great and fun start into the hackathon world. Python web app using Streamlit and Folium to display historical population movements."
  },
  {
    title: "Flashcard Maker Web App",
    description: "A Streamlit web app that converts CSV files into interactive flashcards with customizable study sessions, search functionality, and progress tracking.",
    image: "/projects/flashcards.png",
    link: "https://github.com/salmaniye/flashcard-maker",
    year: 2024,
    summary: "Features customizable study sessions, search functionality, and the ability to split questions across multiple days. Deployed at [flashcard-maker.streamlit.app](https://flashcard-maker.streamlit.app) for easy access."
  },
  // {
  //   title: "Analysing Negative Sentiment in Tweets: Insights into Pokemon Sword and Shield Concerns",
  //   description: "Using my web application on Pokemon tweets, I conducted an analysis of what audiences were concerned about before release",
  //   image: "/projects/audiences_concern.jpg",
  //   link: "https://drive.google.com/file/d/1j3_ugxIjaYIc3MosOfbLaE2ujIWkMnUM/view?usp=sharing",
  //   year: 2023
  // },
  {
    title: "A Web Application to Display Sentiments of Pre-release Tweets on Main Series Pokémon Games",
    description: "Web application for sentiment analysis of pre-release gaming tweets using Python, machine learning, and data visualization. MSc final project.",
    image: "/projects/pokemon-msc-project.png",
    link: "https://github.com/salmaniye/msc-project",
    year: 2022,
    summary: "Built a web application that analyzes and displays sentiment from Twitter data about Pokémon games. My first real web development project that laid the foundation for everything that followed."
  }
]; 