import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-black/80 backdrop-blur text-white fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-cyan-400">JD's Portfolio</h1>

        <div className="hidden md:flex gap-6">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
      </div>

      {open && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;