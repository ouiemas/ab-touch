import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  // Animation presets for staggered scroll entrances
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const text = `Bonjour,

Nom : ${form.name}
Email : ${form.email}
Téléphone : ${form.phone}
Sujet : ${form.subject}

Message :
${form.message}`;

    window.open(
      `https://wa.me/213776362308?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-[#FAF7F2] py-14 md:py-24 overflow-hidden text-center lg:text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Title Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-20"
        >
          <span className="inline-block border border-gray-300 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-700 bg-white shadow-sm">
            Contactez-nous
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mt-4 md:mt-6 leading-tight text-slate-900 px-2">
            Parlons de votre projet, <br className="hidden sm:block" />
            nous sommes <span className="text-[#0D8B8B]">à votre écoute</span>
          </h1>

          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4 md:mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column: Info Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start"
          >
            <motion.p variants={fadeIn} className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg text-center lg:text-left">
              Une question ? Un projet ou une demande de devis ?
              Contactez-nous directement ou remplissez le formulaire. Notre équipe vous répondra sous 24h.
            </motion.p>

            <div className="space-y-4 sm:space-y-5 w-full text-left">
              {[
                { icon: Phone, title: "Téléphone", desc: ["+213 (0) 776362308"] },
                { icon: Mail, title: "Email", desc: ["contact@abtouch.dz"] },
                { icon: MapPin, title: "Adresse", desc: ["Les Platanes,", "Commune Filfila, Skikda, Algérie"] },
                { icon: Clock, title: "Horaires", desc: ["Lun - Jeu : 08:30 - 18:00", "Sam : 08:30 - 13:00"] }
              ].map((info, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 sm:gap-5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md group"
                >
                  <div className="bg-[#0D8B8B] text-white p-3.5 sm:p-4 rounded-xl shrink-0 h-fit transition-transform duration-300 group-hover:scale-105">
                    <info.icon size={20} />
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {info.title}
                    </h3>
                    {info.desc.map((line, i) => (
                      <p key={i} className="text-slate-600 text-xs sm:text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-[24px] sm:rounded-[32px] shadow-xl border border-gray-100 text-left w-full"
          >
            <h2 className="font-black text-xl sm:text-2xl text-slate-900 mb-6 md:mb-8 text-center sm:text-left">
              Envoyez-nous un message
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nom complet"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 outline-none transition-all focus:bg-white focus:border-[#0D8B8B] focus:ring-2 focus:ring-[#0D8B8B]/10 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 outline-none transition-all focus:bg-white focus:border-[#0D8B8B] focus:ring-2 focus:ring-[#0D8B8B]/10 text-slate-800"
                />
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Téléphone"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 outline-none transition-all focus:bg-white focus:border-[#0D8B8B] focus:ring-2 focus:ring-[#0D8B8B]/10 text-slate-800"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Sujet"
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 outline-none transition-all focus:bg-white focus:border-[#0D8B8B] focus:ring-2 focus:ring-[#0D8B8B]/10 text-slate-800"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Votre message..."
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 outline-none transition-all focus:bg-white focus:border-[#0D8B8B] focus:ring-2 focus:ring-[#0D8B8B]/10 text-slate-800 resize-none"
              />

              <motion.button
                type="button"
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.02, backgroundColor: "#0A7272" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#0D8B8B] text-white font-bold rounded-xl py-4 flex justify-center items-center gap-2 shadow-md transition-colors text-sm sm:text-base"
              >
                <Send size={18} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 md:mt-20 overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-lg border border-gray-200"
        >
          <iframe
            title="AB TOUCH Location Map"
            src="https://www.google.com/maps?q=Les+Platanes+Filfila+Skikda&output=embed"
            className="w-full h-[300px] sm:h-[450px] border-0 filter grayscale contrast-115"
            loading="lazy"
          />
        </motion.div>

        {/* Dynamic CTA Footer Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 md:mt-20 bg-[#0D8B8B] rounded-[24px] sm:rounded-[32px] px-6 sm:px-10 py-10 md:py-12 flex flex-col lg:flex-row justify-between items-center gap-6 text-white shadow-xl relative overflow-hidden text-center lg:text-left"
        >
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
              Discutez directement avec un expert et obtenez votre devis personnalisé gratuitement.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-white text-[#0D8B8B] font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base shadow-sm"
          >
            Demander un devis
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}