import Footer from "../components/Footer";
function Resume() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Aditya Bijalwan
          </h1>
          <p className="text-gray-400 mt-2">
            Aspiring Full Stack Developer
          </p>
        </div>

        {/* About */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-1">
            About Me
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I am a BCA student with a strong interest in web development.
            I enjoy building clean and user-friendly interfaces using
            modern web technologies.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-1">
            Skills
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-400">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-1">
            Education
          </h2>
          <div className="text-gray-400">
            <p className="font-medium text-white">
              Bachelor of Computer Applications (BCA)
            </p>
            <p>Graphic Era Hill University</p>
            <p className="text-sm">2022 – Present</p>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-1">
            Projects
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li>• Portfolio Website (React, Tailwind CSS)</li>
            <li>• Todo App (React, JavaScript)</li>
            <li>• Contact Form UI (React, Tailwind CSS)</li>
            <li>• Calculator App (HTML, CSS, JavaScript)</li>
            <li>• Weather App (React, Tailwind CSS)</li>
            <li>• E-Commerce Website (HTML, CSS, JavaScript)</li>
          </ul>
        </div>

      </div>
       <Footer />
    </section>
  );
}

export default Resume;
