import React from "react";
import ReviewOnScroll from "./ReviewOnScroll";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-white">
            {/* Languages */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JAVA", "Python", "C", "C++", "JavaScript", "SQL", "R Programming"].map((lang, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-300 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Express", "Node JS", "Flask"].map((fw, key) => (
                  <span
                    key={key}
                    className="bg-indigo-500/10 text-indigo-300 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 transition"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "MongoDB", "GIT", "VS Code", "Eclipse", "Jupyter Notebook"].map((tool, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(6,182,212,0.2)] transition">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Teamwork", "Planning and Coordination", "Creativity", "Writing"].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-cyan-500/10 text-cyan-300 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Skills;
