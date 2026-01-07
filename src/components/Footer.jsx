function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Aditya Bijalwan. All rights reserved.
        </p>

        {/* Right - Navigation */}
        <div className="flex gap-6 text-sm">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">Projects</span>
          <span className="hover:text-white cursor-pointer">Resume</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
