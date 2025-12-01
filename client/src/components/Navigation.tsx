import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Преимущества", href: "#solution" },
    { name: "Экономика", href: "#economy" },
    { name: "Как это работает", href: "#process" },
    { name: "Наука", href: "#science" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="MCT - Meta Cell Technology"
            className="h-10 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a href="https://portal.metacell.ru" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full border-2 border-primary bg-transparent hover:bg-primary/10 text-primary px-6">
              Портал поддержки
            </Button>
          </a>
          <Button className="rounded-full bg-primary hover:bg-[#066a7e] text-white shadow-lg shadow-primary/20 px-6">
            Связаться с нами
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://portal.metacell.ru" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full border-2 border-primary bg-transparent text-primary">
                  Портал поддержки
                </Button>
              </a>
              <Button className="w-full bg-primary">Связаться с нами</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
