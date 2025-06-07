import React from "react";

const Hero: React.FC = () => {
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
          <div className="relative sm:flex sm:items-start sm:gap-2">
            <div className="space-y-4 text-md text-gray-700 leading-relaxed sm:flex-1">
              <p>
                I'm a full-stack developer who loves building fun and challenging projects, from web applications to anything interesting!
                I enjoy pushing myself to learn new technologies - right now I'm learning Swift and Deno.
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
                , building a UK-based e-commerce platform that connects customers to
                local cobblers for shoe repair services. The platform uses AI to assess
                shoe damage from photos, making it easier for customers to get
                quick quotes and streamlining the repair process.
              </p>
            </div>
            <img
              src="/me_drawn.png"
              alt="Hand-drawn portrait of Salman Fatahillah"
              className="hidden sm:block sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-contain flex-shrink-0"
            />
          </div>
        </div>

        <div className="border-t border-orange-100 pt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Technologies
          </h2>
          <div className="space-y-4 text-md text-gray-700 leading-relaxed">
            <p>
              I enjoy working with React, Next.js, and Python, and I do most of
              my coding in VSCode. Lately, I've been learning Swift to build my
              own macOS apps - like{" "}
              <a
                href="https://github.com/salmaniye/EmojiPicker.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                EmojiPicker.app
              </a>
              , a menu bar app for quick emoji insertion.
            </p>
            <p>
              On the side, I run a Linux home server where I self-host things
              like media streaming, file syncing, and some automation, mainly
              just for fun and to see what's possible. I also mess around with
              networking, remote access, and sometimes use the server for quick
              scripting or as a testbed for random ideas.
            </p>
            <p>
              Check out my public projects on{" "}
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
            <p>
              To learn more about my professional experience, you can see my{" "}
              <a
                href="/resume/CV_Salman_Fatahillah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                resume
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
              <li>
                <a
                  href="https://github.com/salmaniye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <p>
              If you think I would be a good fit for your organization, feel
              free to send me an{" "}
              <a
                href="mailto:fatahillah.salman@outlook.com"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                email
              </a>
              .
            </p>
            <p>Let's build something amazing together!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
