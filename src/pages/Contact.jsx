function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-lg">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Me
        </h2>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md outline-none focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md transition font-medium"
          >
            Send Message
          </button>

        </form>
      </div>
      
    </section>
    
  );
}

export default Contact;
