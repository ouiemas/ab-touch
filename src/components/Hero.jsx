import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Megaphone, BarChart3, Medal, ThumbsUp } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Projets réalisés", icon: BarChart3 },
  { value: 10, suffix: "+", label: "Années d'expérience", icon: Medal },
  { value: 98, suffix: "%", label: "Clients satisfaits", icon: ThumbsUp },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
const Hero = ({ setCurrentPage }) => {
  return (
    <section
      id="home"
      className="relative bg-[#F8F4EC] overflow-hidden min-h-[88vh] flex items-center"
    >
      {/* Background/Right Image Layer */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full rounded-tl-[100px] rounded-bl-[40px] overflow-hidden lg:rounded-tl-[160px] lg:rounded-bl-[0px]"
        >
          <img
            src="/her.png"
            alt="Enseigne AB TOUCH"
            className="h-full w-full object-cover object-center"
          />
          {/* Smooth modern fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EC] via-[#F8F4EC]/40 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-[#F8F4EC]/70 lg:hidden block" /> {/* Mobile overlay for readability */}
        </motion.div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <div className="grid lg:grid-cols-2 items-center gap-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-left space-y-6"
          >
            {/* Tag/Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#109DA2]/30 bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#0B6367] shadow-sm"
            >
              <Megaphone size={15} className="text-[#109DA2]" />
              Agence de publicité
            </motion.span>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900 flex flex-col gap-2">
              <span className="block text-slate-900 tracking-wide font-sans">وكالة إشهار</span>
              <span className="relative inline-block text-[#109DA2] w-fit mt-1">
                AB TOUCH
                <motion.svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D9B15A]"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  <motion.path
                    d="M2 9C40 3 160 3 218 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </h1>

            {/* Arabic Subtitle */}
            <p
              dir="rtl"
              className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed text-right lg:text-left"
            >
              تصميم وتنفيذ لافتاتكم وحلول الإشهار المبتكرة
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="https://wa.me/2130776362308?text=Bonjour,%0AJe%20souhaite%20demander%20un%20devis%20pour%20mon%20projet.%0A%0ANom%20:%0AService%20souhaité%20:%0ADescription%20du%20projet%20:"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#109DA2] text-white font-bold shadow-lg shadow-[#109DA2]/30 hover:bg-[#0d878c] transition-colors duration-300"
              >
                Demander un devis
              </motion.a>
<motion.button
  onClick={() => setCurrentPage("creations")}
  whileHover={{ scale: 1.03, y: -2 }}
  whileTap={{ scale: 0.97 }}
  className="group px-8 py-4 rounded-xl border border-slate-300 bg-white/80 backdrop-blur-sm text-slate-800 font-bold flex items-center gap-3 hover:border-[#109DA2] hover:bg-white transition-all duration-300 shadow-sm"
>
  Voir nos réalisations
  <ArrowUpRight
    size={18}
    className="text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#109DA2]"
  />
</motion.button>
            </div>

            {/* Stats Counter Row */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200/60 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2 text-[#109DA2]">
                    <stat.icon size={18} strokeWidth={2.5} />
                    <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;