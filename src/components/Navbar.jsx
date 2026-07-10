import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "الخدمات", href: "#services" },
  { label: "الأعمال", href: "#portfolio" },
  { label: "عن الشركة", href: "#about" },
  { label: "اتصل بنا", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <a
          href="#home"
          className="absolute right-6 flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#109DA2] flex items-center justify-center text-white font-bold text-xl shadow-md transition-transform group-hover:scale-105">
            AB
          </div>

          <span className="text-xl font-bold text-gray-800 tracking-wide hidden sm:block">
            TOUCH
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-semibold text-gray-700 hover:text-[#109DA2] transition-colors duration-300 group py-1"
            >
              {link.label}
              <span className="absolute -bottom-0.5 right-0 w-0 h-[2px] bg-[#109DA2] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Language Switch */}
        <div className="hidden lg:flex items-center absolute left-6 text-sm font-semibold">
          <button className="text-[#109DA2] hover:underline transition">
            AR
          </button>

          <span className="mx-2 text-gray-400">|</span>

          <button className="text-gray-600 hover:text-[#109DA2] transition">
            FR
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute left-6 lg:hidden text-[#14201E] hover:text-[#109DA2] transition-colors"
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
            className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-[#F8F4EC] border-t border-black/5 overflow-hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-gray-700 hover:text-[#109DA2] py-2 transition-colors border-b border-gray-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switch Mobile */}
            <div className="flex justify-center gap-4 pt-2">
              <button className="text-[#109DA2] font-semibold">AR</button>
              <span>|</span>
              <button className="text-gray-600 font-semibold">FR</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;