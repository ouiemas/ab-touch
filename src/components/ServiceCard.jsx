import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-yellow-400/60 hover:shadow-[0_0_50px_rgba(250,204,21,0.15)]"
    >
      {/* Glow */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Number */}
      <span className="absolute top-6 right-6 text-5xl font-black text-white/5 transition-all duration-500 group-hover:text-yellow-400/20">
        0
      </span>

      {/* Icon */}
      <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400/10 text-5xl transition-all duration-500 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-8 text-gray-400">
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm uppercase tracking-[3px] text-yellow-400">
          Discover
        </span>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default ServiceCard;