import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a full-stack developer who loves building web apps that are both
          intuitive and scalable. I’ve worked with tools like Next.js, React,
          and FastAPI to create everything from secure payment systems to
          AI-powered features. I'm all about finding practical solutions to
          tricky problems and turning ideas into products that people enjoy
          using.
        </p>
      </div>
    </div>
  );
};

export default About;
