import Footer from "../components/Footer";

function Projects() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Project Card 1 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Portfolio Website
          </h2>
          <p className="text-gray-400 mb-4">
            A personal portfolio website built using React and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500">
            Tech: React, Tailwind CSS
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Todo App
          </h2>
          <p className="text-gray-400 mb-4">
            A simple todo application with add and delete functionality.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech: React, JavaScript
          </p>
          <a
            href="https://to-do-list-react-sooty-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
          >
            Live Demo
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Task Manager
          </h2>
          <p className="text-gray-400 mb-4">
            A task manager app to organize and manage daily tasks.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech: React, JavaScript
          </p>
          <a
            href="https://task-manager-beta-ebon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
          >
            Live Demo
          </a>
        </div>

        {/* Project Card 4 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Calculator App
          </h2>
          <p className="text-gray-400 mb-4">
            A simple calculator built using HTML, CSS, and JavaScript.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech: HTML, CSS, JavaScript
          </p>
          <a
            href="https://calculator-eight-dun-83.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
          >
            Live Demo
          </a>
        </div>

        {/* Project Card 5 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Weather App
          </h2>
          <p className="text-gray-400 mb-4">
            A weather application showing real-time data using React and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech: React, Tailwind CSS
          </p>
          <a
            href="https://weather-app-five-brown-hf49n9ylv5.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
          >
            Live Demo
          </a>
        </div>

        {/* Project Card 6 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            E-Commerce Website
          </h2>
          <p className="text-gray-400 mb-4">
            A basic e-commerce website with product listing and simple interactions built using HTML and CSS.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech: HTML, CSS
          </p>
          <a
            href="https://ecomerce-design-html-css-only.vercel.app/Shop.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
          >
            Live Demo
          </a>
        </div>

      </div>

      <Footer />
    </section>
  );
}

export default Projects;
