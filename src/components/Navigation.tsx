import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/tingbei-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "首页" },
    { href: "/features", label: "功能特点" },
    { href: "/scenarios", label: "使用场景" },
    { href: "/about", label: "关于我们" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="听呗" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    isActive(link.href) ? "text-secondary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-secondary/10 text-secondary"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
