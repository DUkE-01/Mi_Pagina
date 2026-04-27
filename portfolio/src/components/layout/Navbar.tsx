import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div 
          className="text-xl font-display font-bold tracking-tighter text-primary cursor-pointer"
          onClick={() => scrollTo("#top")}
          data-testid="nav-logo"
        >
          Joel<span className="text-foreground">.dev</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`nav-item-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("#contact")}
            variant="default" 
            size="sm"
            className="rounded-full"
            data-testid="nav-cta"
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/50 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2" data-testid="nav-mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-left text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors"
              data-testid={`nav-mobile-item-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
