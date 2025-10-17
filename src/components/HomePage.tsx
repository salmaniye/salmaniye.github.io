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
                I'm the technical lead and fullstack developer at{" "}
                <a
                  href="https://cicon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  CICON
                </a>
                , where I'm building a UK platform that connects shoe products
                to post-sale services.
              </p>
              <p>
                On the backend I lead our Next.js/PostgreSQL stack that handles
                orders, payments, notifications, and hooks into Stripe,
                ShipStation, and Twilio. On the frontend I design multi-step
                customer journeys that take people from photo uploads to
                checkout on any device. I'm also responsible for the infrastructure
                and CI/CD pipeline that ensures the platform is always available
                and scalable.
              </p>
              <p>
                I'm also cofounding{" "}
                <a
                  href="https://loko.health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  Loko
                </a>
                , a telehealth initiative using the Community Health Toolkit to
                help community health workers monitor tuberculosis treatment in
                Indonesia. We're keeping the stack accessible and low-cost so it
                can run in resource constrained environments.
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
              I build production applications with React, Next.js, TypeScript,
              and Python, and lean on Tailwind, Prisma, and Postgres for the
              ergonomics they give product teams.
            </p>
            {/* <p>
              I'm expanding into Swift for macOS (building things like{" "}
              <a
                href="https://github.com/salmaniye/EmojiPicker.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                EmojiPicker.app
              </a>
              ) and constantly tinkering with a self-hosted Linux lab for
              backups, media, and automation experiments.
            </p> */}
            <p>
              Recent highlights include three 24-hour hackathon wins in 2024 for
              AI health coaching, orchestral data storytelling, and a playful
              fitness prototype. Please see my <a
              href="/projects"
              className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >projects</a> page for more details.
            </p>
            <p>
              <a
                href="/resume/CV_Salman_Fatahillah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-orange-600 hover:text-orange-700 transition-colors"
              >
                View my latest resume
              </a>{" "}
              for a deeper look, or drop into my projects on{" "}
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
          </div>
        </div>

        <div className="border-t border-orange-100 pt-8">
          <h2 className="text-lg font-semibold text-orange-700 mb-6">
            Connect
          </h2>
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
