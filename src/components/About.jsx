import React from "react";
import ReviewOnScroll from "./ReviewOnScroll";

const About = () => {
  const frontendSkills = ["React", "Bootstrap", "EJS", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express.js", "Python", "AI-ML", "Flask", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            I’m a developer who enjoys building thoughtful, functional solutions with a focus on web and AI technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech. in Computer Science </strong> -IGDTUW
                  (2022-2026)
                </li>

                <li>
                  <strong>Revelant Coursework:</strong> Data Structures, Analysis of Alogrithms, Operating System, Object Oriented Programming, Database Management System, Computer Networks.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
<div className="space-y-4 text-gray-300">
  <div>
    <h4 className="font-semibold">AI-ML Intern at DRDO – SAG Lab (Jun 2024 - Jul 2024)</h4>
    <p>Worked on fairness in AI models using bias detection and mitigation techniques.</p>
    <p>Improved model accuracy and fairness using IBM AIF360 toolkit.</p>
  </div>

  <div>
    <h4 className="font-semibold">Python & ML Intern – IGDTUW (Jun 2023 - Jul 2023)</h4>
    <p>Completed 8-week training on Python and Machine Learning.</p>
    <p>Built 10+ ML models using various algorithms and tools.</p>
  </div>
</div>

            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default About;
