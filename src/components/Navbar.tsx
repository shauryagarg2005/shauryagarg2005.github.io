
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="font-display text-xl font-medium tracking-tight"
          >
            Shaurya Garg
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center text-sm font-medium underline-animation"
              aria-label="Home"
            >
              <Home size={18} className="mr-1" />
              <span>Home</span>
            </Link>
            <Link 
              to="/projects" 
              className="text-sm font-medium underline-animation"
            >
              Projects
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium underline-animation"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium underline-animation"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium underline-animation"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            <Link 
              to="/" 
              className="flex items-center py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home size={18} className="mr-2" />
              Home
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
