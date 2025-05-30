import React from "react";
import ReviewOnScroll from "./ReviewOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl max-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] active:-translate-y-1 active:border-blue-500/30 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">IGDTUW LMS</h3>
              <p className="text-gray-400 mb-4">
                A full-stack web application designed to streamline academic workflows at IGDTUW. It features role-based access for administrators, faculty, and students, enabling efficient subject management, faculty assignments, and distribution of course materials. Built using MERN Stack, the system facilitates organized access to educational resources across departments and semesters.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express", "React", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm active:bg-blue-500/20 active:shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://igms.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 active:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition active:border-blue-500/30 active:-translate-y-1 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">NeruaBlog</h3>
              <p className="text-gray-400 mb-4">
                NeruaBlog is a full-stack blogging application built using the MERN stack. It allows users to register, log in, update or delete profiles, and create, edit, or delete blog posts. Features include category-based filtering, post search, and a responsive, user-friendly React interface. The project showcases complete CRUD operations, secure authentication, and effective content management.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React", "Node.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] active:bg-blue-500/20 active:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://blog-app-frontend-jhla.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 active:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] active:border-blue-500/30 active:-translate-y-1 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                SnapNote – Chrome Extension
              </h3>
              <p className="text-gray-400 mb-4">
                Browser extension to highlight, save, and manage notes from any
                webpage with persistent storage and easy editing features.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] active:bg-blue-500/20 active:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ruchi3105/SnapNote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 active:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] active:-translate-y-1 active:border-blue-500/30 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Text Summarizer</h3>
              <p className="text-gray-400 mb-4">
                Built an NLP-based tool that condenses long-form text into
                meaningful summaries, improving content readability and
                understanding.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] active:bg-blue-500/20 active:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ruchi3105/Text-Summarizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 active:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] active:-translate-y-1 active:border-blue-500/30 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">CleanCoder</h3>
              <p className="text-gray-400 mb-4">
                AI-powered system that reviews code across multiple languages,
                offering suggestions and improvements based on best practices.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Gemini API", "Express.js", "React", "Node.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] active:bg-blue-500/20 active:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://cleancoder-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 active:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] active:-translate-y-1 active:border-blue-500/30 active:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">CryptoLens</h3>
              <p className="text-gray-400 mb-4">
                Developed a user-friendly cryptocurrency tracking website using
                React JS and CoinGecko API with real-time price updates, charts,
                search, and price unit switching for improved decision-making.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Bootstrap", "CoinGecko API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] active:bg-blue-500/20 active:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ruchi3105/CryptoLens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 active:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
