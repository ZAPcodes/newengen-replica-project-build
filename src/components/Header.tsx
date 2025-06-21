import { useState, useEffect } from "react";
import { Menu, X, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Verify Certificate", href: "/verify-certificate" },
    { name: "What's Special", href: "/whats-special" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-dark/95 backdrop-blur-md border-b border-primary-medium' : 'bg-primary-dark/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-cyan to-primary-medium rounded-xl flex items-center justify-center group-hover:animate-glow-pulse">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-rust rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-white text-xl font-tech font-bold tracking-wider">INLIGHN TECH</span>
                <div className="text-xs text-secondary-cyan font-code">TECH.INTERNSHIPS</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActiveLink(item.href)
                      ? "text-secondary-cyan bg-secondary-cyan/10"
                      : "text-light-blue hover:text-secondary-cyan hover:bg-primary-medium/50"
                  }`}
                >
                  {item.name}
                  {isActiveLink(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary-cyan rounded-full"></div>
                  )}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary-cyan/0 via-secondary-cyan/5 to-accent-rust/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              
              {/* Apply button */}
              <button className="ml-4 bg-gradient-to-r from-secondary-cyan to-primary-medium hover:from-secondary-cyan/90 hover:to-primary-medium/90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
                <Zap className="w-4 h-4" />
                <span>Apply Now</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-blue hover:text-secondary-cyan p-2 rounded-lg hover:bg-primary-medium/50 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-dark/95 backdrop-blur-md border-t border-primary-medium rounded-b-lg">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActiveLink(item.href)
                      ? "text-secondary-cyan bg-secondary-cyan/10"
                      : "text-light-blue hover:text-secondary-cyan hover:bg-primary-medium/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    {isActiveLink(item.href) && (
                      <div className="w-2 h-2 bg-secondary-cyan rounded-full"></div>
                    )}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <div className="pt-2">
                <button className="w-full bg-gradient-to-r from-secondary-cyan to-primary-medium text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                  <Zap className="w-4 h-4" />
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;