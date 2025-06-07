import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="space-y-12">
        <div>
          <div className="flex items-center justify-between mb-6 sm:block">
            <h1 className="text-xl sm:text-2xl font-hand text-gray-900">
              Hi, I'm Salman Fatahillah
            </h1>
            <img
              src="/me_drawn.png"
              alt="Hand-drawn portrait of Salman Fatahillah"
              className="w-16 h-16 object-contain sm:hidden"
            />
          </div>
          <div className="relative">
            <div className="space-y-4 text-md text-gray-700 leading-relaxed">
              <img
                src="/me_drawn.png"
                alt="Hand-drawn portrait of Salman Fatahillah"
                className="hidden sm:block sm:float-right sm:ml-4 sm:mb-4 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-contain"
              />
              <p>
                I'm a full-stack developer who turns "wouldn't it be cool if..." ideas into 
                actual working software (well, I try to). Currently exploring Deno 2.0's 
                backwards compatibility with Node.js and its built-in TypeScript support, 
                and learning Swift to create the macOS tools I wish existed.
              </p>
              <p>
                Currently working at{" "}
                <a
                  href="https://cicon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  CICON
                </a>
                , building a UK-based e-commerce platform that digitizes shoe
                repair services. Instead of visiting cobblers in person for
                quotes, customers can upload photos and receive AI-powered
                damage assessments and instant pricing, connecting them directly
                with local cobblers.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-100 pt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Technologies
          </h2>
          <div className="space-y-4 text-md text-gray-700 leading-relaxed">
            <p>
              I build production applications with React, Next.js, and Python. 
              I'm currently expanding into Swift development for macOS - starting 
              with small projects like{" "}
              <a
                href="https://github.com/salmaniye/EmojiPicker.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                EmojiPicker.app
              </a>
              {" "}as I learn the ecosystem.
            </p>
            <p>
              On the side, I run a Linux home server for media streaming,
              automated backups (with Samba for Time Machine), and experimenting
              with self-hosted services. It's a great way to stay curious about
              infrastructure and learn through hands-on tinkering outside of
              work.
            </p>
            <p>
              <strong>
                <a
                  href="/resume/CV_Salman_Fatahillah.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  View my resume
                </a>
              </strong>
              {" "}for my professional and educational background, or check out my projects on{" "}
              <a
                href="https://github.com/salmaniye"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                GitHub
              </a>
              .
            </p>
            {/* <p>
              I also write about technology, development, and data analysis on my{' '}
              <a 
                href="/blog" 
                className="underline underline-offset-4 hover:text-gray-500 transition-colors"
              >
                blog
              </a>.
            </p> */}
          </div>
        </div>

        <div className="border-t border-orange-100 pt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Connect</h2>
          <div className="space-y-4 text-md text-gray-700 leading-relaxed">
            <p>You can also find me online here:</p>
            <ul className="space-y-2 ml-6">
              <li>
                <a
                  href="https://linkedin.com/in/salmanfatahillah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  LinkedIn
                </a>
              </li>

            </ul>
            <p>
              I'm particularly interested in opportunities involving AI-powered applications, 
              modern web development, or early-stage startups. If you're working on something 
              challenging and think I'd be a good fit, feel free to{" "}
              <a
                href="mailto:fatahillah.salman@outlook.com"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                reach out
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
