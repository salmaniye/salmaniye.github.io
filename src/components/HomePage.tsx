import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="space-y-12">
        <div>
          <div className="flex items-center justify-between mb-6 sm:block">
            <h1 className="text-xl sm:text-2xl font-hand font-medium text-orange-700">
              Hi, I'm Salman Fatahillah
            </h1>
            <img
              src="/me_drawn.png"
              alt="Hand-drawn portrait of Salman Fatahillah"
              className="w-12 h-12 object-contain sm:hidden"
            />
          </div>
          <div className="relative">
            <div className="space-y-4 text-md text-gray-700 leading-relaxed">
              <img
                src="/me_drawn.png"
                alt="Hand-drawn portrait of Salman Fatahillah"
                className="hidden sm:block sm:float-right sm:ml-4 sm:mb-4 sm:w-32 sm:h-32 object-contain"
              />
              <p>
                I'm a software developer who turns "wouldn't it be cool if..."
                ideas into actual working software (well, I try to).
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
                , where I'm building a UK-based platform that digitizes shoe
                repair services.
              </p>
              <p>
                We're transforming the traditional shoe repair process, where
                customers upload photos of their damaged shoes and receive
                instant assessments and quotes using image recognition, then get
                matched with skilled local cobblers.
              </p>
              <p>
                I'm currently organising{" "}
                <a
                  href="https://cicon-devs.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  CICON Hack 2025
                </a>
                , an online hackathon focused on sustainability, repair-first
                systems, and creative content that spreads repair culture.
                The event is still in development and will be opening for
                registrations soon!
              </p>
              <p>
                Always exploring new tools and frameworks that could improve how
                we build software, currently diving into Deno 2's backwards
                compatibility with Node.js and learning Swift to create the
                macOS utilities I wish existed.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-100 pt-8">
          <h2 className="text-lg font-bold text-orange-700 mb-6">
            Technologies
          </h2>
          <div className="space-y-4 text-md text-gray-700 leading-relaxed">
            <p>
              I build production applications with React, Next.js, and Python.
              I'm currently expanding into Swift development for macOS -
              starting with small projects like{" "}
              <a
                href="https://github.com/salmaniye/EmojiPicker.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                EmojiPicker.app
              </a>{" "}
              as I learn the ecosystem.
            </p>
            <p>
              On the side, I run a Linux home server for media streaming,
              automated backups (with Samba for Time Machine), and experimenting
              with self-hosted services. It's a great way to stay curious about
              infrastructure and learn through hands-on tinkering.
            </p>
            <p>
              <a
                href="/resume/CV_Salman_Fatahillah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                View my resume
              </a>{" "}
              for my professional and educational background, or check out my
              projects on{" "}
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
          <h2 className="text-lg font-semibold text-orange-700 mb-6">Connect</h2>
          <div className="space-y-4 text-md text-gray-700 leading-relaxed">
            <p>
              You can also find me on{" "}
              <a
                href="https://linkedin.com/in/salmanfatahillah"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                LinkedIn
              </a>
              .
            </p>
            <p>
              I'm particularly interested in opportunities involving AI-powered
              applications, modern web development, or early-stage startups. If
              you're working on something challenging and think I'd be a good
              fit, feel free to{" "}
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
