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
      className="relative bg-[#F8F4EC] overflow-hidden min-h-screen lg:min-h-[88vh] flex items-center"
    >
      {/* Background/Right Image Layer */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0 opacity-20 lg:opacity-100">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full overflow-hidden rounded-none lg:rounded-tl-[160px]
            shadow-[0_0_80px_rgba(255,205,80,0.2)] lg:shadow-[0_0_80px_rgba(255,205,80,0.35)]
            before:absolute before:inset-0 before:rounded-[inherit]
            before:shadow-[0_0_120px_rgba(255,200,70,0.5)] lg:before:shadow-[0_0_120px_rgba(255,200,70,0.75)]
            before:pointer-events-none"
        >
          <img
            src="/her.png"
            alt="Enseigne AB TOUCH"
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0 rounded-none lg:rounded-tl-[160px]
              border border-[#FFD86B]/20 lg:border-[#FFD86B]/40
              shadow-[0_0_35px_#FFD86B,0_0_70px_rgba(255,216,107,0.5)]
              pointer-events-none"
          />
          {/* Smooth modern fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EC] via-[#F8F4EC]/10 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-[#F8F4EC]/80 lg:hidden block" /> {/* Mobile overlay improved readability */}
        </motion.div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-6"
          >
            {/* Tag/Badge */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#109DA2]/30 bg-white px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#0B6367] shadow-sm"
              >
                <Megaphone size={15} className="text-[#109DA2]" />
                Agence de publicité
              </motion.span>
            </div>

            {/* Main Heading - التعديل هنا لضبط تداخل الخطوط والـ SVG */}
            <h1 className="flex flex-col items-center lg:items-start gap-1 text-3xl sm:text-5xl lg:text-7xl font-black leading-none sm:leading-tight text-slate-900">
              <span className="block text-slate-900 tracking-wide font-sans">وكالة إشهار</span>
              <span className="relative inline-block text-[#109DA2] w-fit mt-2 pb-2">
                AB TOUCH
                <motion.svg
                  viewBox="0 0 220 12"
                  className="absolute bottom-0 left-0 w-full h-2 sm:h-3 text-[#D9B15A]"
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
            <p dir="rtl" className="text-base sm:text-xl text-slate-700 font-medium tracking-normal font-sans px-2 sm:px-0">
              تصميم وتنفيذ لافتاتكم وحلول الإشهار المبتكرة
            </p>

            {/* Action Buttons - تعديل العرض ليصبح متناسق على الهواتف */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 max-w-md mx-auto lg:mx-0">
              <motion.a
                href="https://wa.me/2130776362308?text=Bonjour,%0AJe%20souhaite%20demander%20un%20devis%20pour%20mon%20projet.%0A%0ANom%20:%0AService%20souhaité%20:%0ADescription%20du%20projet%20:"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#109DA2] text-white font-bold shadow-lg shadow-[#109DA2]/30 hover:bg-[#0d878c] transition-colors duration-300"
              >
                Demander un devis
              </motion.a>
              
              <motion.button
                onClick={() => setCurrentPage("creations")}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-300 bg-white/80 backdrop-blur-sm text-slate-800 font-bold flex items-center justify-center gap-3 hover:border-[#109DA2] hover:bg-white transition-all duration-300 shadow-sm"
              >
                Voir nos réalisations
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>

            {/* Stats Counter Row - تعديل المسافات وأحجام الأيقونات */}
            <div className="pt-6 mt-8 border-t border-slate-200/60 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="space-y-1 flex flex-col items-center lg:items-start"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#109DA2] justify-center lg:justify-start">
                    <stat.icon size={14} strokeWidth={2.5} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-slate-500 text-[9px] sm:text-xs md:text-sm font-medium leading-tight">
                    {stat.label}
                  </p>
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