import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a full-stack developer who enjoys solving problems with practical
          and well-thought-out solutions. At CICON, I developed an AI-driven
          platform for managing shoe repairs, integrating tools like Next.js,
          FastAPI, Stripe, and Twilio to create a seamless and secure user
          experience. My work often focuses on building scalable backends,
          intuitive frontends, and systems that are easy to maintain. I also
          enjoy working on projects that have a real-world impact, like Skylark
          SMS, a health solution designed for underserved communities. I'm
          always keen to learn, improve, and work on meaningful projects with
          others.
        </p>
      </div>
    </div>
  );
};

export default About;
