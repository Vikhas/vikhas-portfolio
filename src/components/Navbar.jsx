import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navItems = ["About", "Skills", "Experience", "Education", "Projects", "Publications", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-slate-900/95 shadow-md" : "bg-slate-900/60 backdrop-blur"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 onClick={() => scrollTo("hero")} className="text-2xl font-extrabold tracking-wide text-white cursor-pointer">Vikhas</h1>

        <div className="hidden md:flex gap-8">
          {navItems.map(item => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}
              className="relative text-gray-200 hover:text-blue-400 font-medium transition group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-200 text-2xl">☰</button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur border-t border-gray-700">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-200 hover:text-blue-400 font-medium text-lg transition">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
