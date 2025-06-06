import React from "react";
import ReviewOnScroll from "./ReviewOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <ReviewOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Ruchi
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg  max-auto">
          Hi, I’m a passionate Computer Science student at IGDTUW, driven by a love for problem-solving and building impactful solutions.
          From personal projects to an enriching internships, I’m constantly evolving as a developer.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition  relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="flex items-center border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 cursor-pointer"
            >
              Contacts
            </a>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;
