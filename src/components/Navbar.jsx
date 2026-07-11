import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Contact", id: "contact" },
  { label: "À propos", id: "about" },
  { label: "Nos réalisations", id: "creations" },
  { label: "Services", id: "services" },
  { label: "Acceuil", id: "home" },
];

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [open, setOpen] = useState(false);

  const handleNavigation = (id) => {
    if (id === "creations") {
      setCurrentPage("creations");
    } else {
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setOpen(false);
  };

  return (
    <motion.header
      dir="rtl"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 bg-[#F8F4EC]/90 backdrop-blur-md border-b border-black/5 font-['Cairo']"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center relative">

        {/* Logo */}
        {/* Logo */}
<button
  onClick={() => handleNavigation("home")}
  className="absolute left-6 flex items-center gap-2 group bg-transparent border-none outline-none"
>
  <img
  src="/logo.png"
  alt="AB TOUCH"
  className="h-10 sm:h-12 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
/>
</button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const isActive =
              (link.id === "creations" && currentPage === "creations") ||
              (link.id !== "creations" && currentPage === "home");

            return (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`relative text-sm font-semibold transition-colors duration-300 group py-1 bg-transparent border-none outline-none ${
                  isActive
                    ? "text-[#109DA2]"
                    : "text-gray-700 hover:text-[#109DA2]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 right-0 h-[2px] bg-[#109DA2] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-6 lg:hidden text-[#14201E] hover:text-[#109DA2] transition-colors bg-transparent border-none outline-none"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-[#F8F4EC] border-t border-black/5 overflow-hidden text-right"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className="text-base font-semibold text-gray-700 hover:text-[#109DA2] py-2 transition-colors border-b border-gray-100 text-right bg-transparent border-none outline-none w-full"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;