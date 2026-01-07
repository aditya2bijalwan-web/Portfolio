import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

function Home() {
  return (
    <div className="bg-gray-900 text-white">

      {/* HERO SECTION */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I’m <span className="text-blue-500">Aditya</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg">
            Aspiring Full Stack Developer
          </p>

          {/* ✅ Responsive buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition font-medium"
            >
              Projects
            </Link>

            <Link
              to="/resume"
              className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-md transition font-medium"
            >
              Resume
            </Link>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-black px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 text-5xl sm:text-6xl">
          <FaHtml5 className="text-orange-500 hover:scale-110 transition" />
          <FaCss3Alt className="text-blue-500 hover:scale-110 transition" />
          <FaJs className="text-yellow-400 hover:scale-110 transition" />
          <FaReact className="text-cyan-400 hover:scale-110 transition" />
          <SiTailwindcss className="text-sky-400 hover:scale-110 transition" />
          <FaNodeJs className="text-green-500 hover:scale-110 transition" />
          <SiExpress className="text-gray-300 hover:scale-110 transition" />
          <SiMongodb className="text-green-400 hover:scale-110 transition" />
        </div>
      </section>
       <Footer />
    </div>
    
  );
}

export default Home;
