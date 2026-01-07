import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">My</span> Portfolio
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`md:flex gap-8 text-lg absolute md:static bg-black md:bg-transparent left-0 w-full md:w-auto px-6 md:px-0 transition-all duration-300
          ${open ? "top-16" : "-top-96"}`}
        >
          {["/", "/projects", "/resume", "/contact"].map((path, i) => (
            <li key={i} className="py-2 md:py-0">
              <NavLink
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "hover:text-blue-300"
                }
              >
                {path === "/" ? "Home" : path.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
