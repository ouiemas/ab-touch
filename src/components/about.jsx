import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Star,
  Users,
  Award,
  ThumbsUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function About() {
  // Sophisticated ease curve for corporate UI
  const cubicBezier = [0.215, 0.610, 0.355, 1.000];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: cubicBezier } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section className="relative w-full bg-[#F8F4EC] text-left py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* SECTION 1: MAIN INFO & IMAGE */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full"
        >
          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-6">
            <motion.span 
              variants={fadeIn}
              className="inline-block border border-[#109DA2]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#109DA2] bg-white shadow-sm"
            >
              À propos de nous
            </motion.span>

            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900"
            >
              Une agence créative <br />
              au service de <span className="text-[#109DA2]">votre vision</span>
            </motion.h2>

            <motion.div 
              variants={fadeIn}
              className="w-16 h-1 bg-[#D9B15A] rounded-full" 
            />

            <motion.p 
              variants={fadeIn}
              className="text-slate-700 text-base md:text-lg leading-relaxed max-w-2xl font-normal"
            >
              AB TOUCH est une agence spécialisée dans la communication,
              l'impression numérique, la signalétique et les solutions
              digitales. Notre objectif est d'accompagner durablement les entreprises dans 
              le développement de leur image de marque grâce à des approches innovantes et sur mesure.
            </motion.p>

            {/* Core Pillars */}
            <motion.div variants={containerVariants} className="mt-10 space-y-6">
              {[
                { icon: Target, title: "Notre mission", text: "Déployer des solutions d'avant-garde qui maximisent l'impact commercial et la visibilité de nos partenaires." },
                { icon: Eye, title: "Notre vision", text: "S'imposer comme le partenaire stratégique de référence en ingénierie de communication et transformation digitale." },
                { icon: Star, title: "Nos valeurs", text: "Excellence opérationnelle • Créativité disruptive • Innovation continue • Transparence" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeIn}
                  className="flex gap-4 items-start group"
                >
                  <div className="bg-white shadow-sm rounded-xl p-3 text-[#109DA2] border border-slate-200/60 shrink-0 transition-all duration-300 group-hover:bg-[#109DA2] group-hover:text-white group-hover:border-transparent">
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-semibold text-lg text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image Container */}
          <motion.div 
            variants={fadeIn}
            className="w-full lg:w-[40%] relative shrink-0"
          >
            {/* Elegant, high-end accent background positioning */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#109DA2]/5 rounded-2xl transform translate-x-3 translate-y-3 -z-10 border border-[#109DA2]/10" 
            />
            <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-slate-100 w-full h-[480px]">
              <img
                src="/her.png" 
                alt="AB TOUCH Business Agency Suite"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-103"
                onError={(e) => { 
                  e.target.src = "https://images.unsplash.com/photo-1542744173-8e0ee26da7bb?q=80&w=800"; 
                }} 
              />
            </div>
          </motion.div>
        </motion.div>


        {/* SECTION 2: STATISTICS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-[#109DA2] rounded-2xl mt-28 text-white shadow-xl overflow-hidden w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border-t border-b border-white/5">
            {[
              { icon: Users, val: "500+", lbl: "Projets réalisés" },
              { icon: Award, val: "10+", lbl: "Années d'expérience" },
              { icon: ThumbsUp, val: "50+", lbl: "Clients satisfaits" },
              { icon: CheckCircle, val: "98%", lbl: "Taux de satisfaction" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="text-center py-14 px-6 space-y-1.5"
              >
                <stat.icon size={24} className="mx-auto mb-4 text-[#D9B15A] opacity-95" />
                <div className="text-4xl font-bold tracking-tight">{stat.val}</div>
                <p className="text-white/80 font-medium text-xs md:text-sm tracking-wide uppercase">{stat.lbl}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* SECTION 3: WHY CHOOSE US */}
        <div className="mt-32 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-3"
          >
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pourquoi nous choisir ?</h3>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">L'assurance d'un savoir-faire premium adapté à vos exigences de performance.</p>
            <div className="w-12 h-1 bg-[#D9B15A] mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {[
              { title: "Expertise", text: "Une équipe pluridisciplinaire hautement qualifiée pour piloter vos ambitions de marque." },
              { title: "Qualité", text: "Des finitions méticuleuses, durables et conformes aux meilleurs standards industriels." },
              { title: "Accompagnement", text: "Conseil continu et architecture personnalisée du concept jusqu'à la livraison finale." },
              { title: "Réactivité", text: "Gestion de projet agile, respect strict des délais et suivi proactif de vos requêtes." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -4, boxShadow: "0 12px 20px -3px rgb(0 0 0 / 0.04)" }}
                className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 transition-all duration-300 group"
              >
                <div className="bg-[#109DA2]/5 w-10 h-10 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#109DA2]">
                  <ArrowRight className="text-[#109DA2] transition-colors duration-300 group-hover:text-white" size={16} />
                </div>
                <h4 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* SECTION 4: CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 bg-[#14201E] rounded-2xl text-white p-10 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl w-full relative overflow-hidden border border-slate-800"
        >
          {/* Subtle design element backdrop */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#109DA2]/5 rounded-full pointer-events-none border border-[#109DA2]/10" />
          
          <div className="text-center lg:text-left max-w-xl space-y-2.5">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Vous avez un projet en perspective ?</h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Contactez nos experts dès aujourd'hui pour concevoir ensemble des solutions de communication structurantes et mémorables.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#0d878c" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#109DA2] text-white font-semibold px-7 py-3.5 rounded-lg shadow-md transition-all duration-200 shrink-0 tracking-wide text-sm"
          >
            Demander un devis
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}