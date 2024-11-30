export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  summary?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "A Web Application to Display Sentiments of Pre-release Tweets on Main Series Pokemon Games",
    description: "My final project for my MSc",
    image: "/projects/pokemon-msc-project.png",
    link: "https://github.com/salmaniye/msc-project",
    summary: "Built a web application that analyzes and displays sentiment from Twitter data about Pokemon games"
  },
  {
    id: 2,
    title: "Analysing Negative Sentiment in Tweets: Insights into Pokemon Sword and Shield Concerns",
    description: "Using my web application on Pokemon tweets, I conducted an analysis of what audiences were concerned about before release",
    image: "/projects/audiences_concern.jpg",
    link: "https://drive.google.com/file/d/1j3_ugxIjaYIc3MosOfbLaE2ujIWkMnUM/view?usp=sharing"
  },
  {
    id: 3,
    title: "Flashcard Maker Web App",
    description: "Used Streamlit to create a Flashcard Maker",
    image: "/projects/flashcards.png",
    link: "https://github.com/salmaniye/flashcard-maker"
  }
]; 