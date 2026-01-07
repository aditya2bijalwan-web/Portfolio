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
          <p className="text-sm text-gray-500">
            Tech: React, JavaScript
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Contact Form
          </h2>
          <p className="text-gray-400 mb-4">
            A contact form UI built using React and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500">
            Tech: React, Tailwind CSS
          </p>
        </div>

        {/* Project Card 4 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Calculator App
          </h2>
          <p className="text-gray-400 mb-4">
            A simple calculator built using HTML, CSS, and JavaScript.
          </p>
          <p className="text-sm text-gray-500">
            Tech: HTML, CSS, JavaScript
          </p>
        </div>

        {/* Project Card 5 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Weather App
          </h2>
          <p className="text-gray-400 mb-4">
            A weather application showing real-time data using React and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500">
            Tech: React, Tailwind CSS
          </p>
        </div>

        {/* Project Card 6 */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            E-Commerce Website
          </h2>
          <p className="text-gray-400 mb-4">
            A basic e-commerce website with product listing and simple interactions built using HTML, CSS, and JavaScript.
          </p>
          <p className="text-sm text-gray-500">
            Tech: HTML, CSS, JavaScript
          </p>
        </div>

      </div>
       <Footer />
    </section>
  );
}

export default Projects;
