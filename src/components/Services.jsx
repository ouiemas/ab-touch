import { motion } from "framer-motion";

const Services = [
  {
    title: "طباعة رقمية",
    desc: "Impressions numériques de haute qualité sur tous types de supports.",
    image: "/impression.jpg",
  },
  {
    title: "حروف مضيئة",
    desc: "Lettres et enseignes lumineuses pour une visibilité remarquable.",
    image: "/horof.jpg",
  },
  {
    title: "لافتات إشهارية",
    desc: "Impressions grand format pour tous vos supports publicitaires.",
    image: "/lafitat.jpg",
  },
  {
    title: "Alucobande",
    desc: "Habillage et panneaux en Alucobond pour façades modernes.",
    image: "/auto.jpg",
  },
  {
    title: "Développement Web & Logiciel",
    desc: "Création de sites web et applications sur mesure adaptées à votre activité.",
    image: "/devlop.jpg",
  },
  {
    title: "Sponsor",
    desc: "Soutien et partenariat pour vos événements, projets et initiatives.",
    image: "/sponsor.jpg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // استعملت نفس الـ Ease اللي في كود الـ Hero باش تكون الحركة متناسقة
    },
  },
};

export default function ServicesSection() {
  return (
    // هنا تم توحيد لون الخلفية إلى #F8F4EC ليتطابق تماماً مع الـ Hero
    <section className="relative overflow-hidden bg-[#F8F4EC] py-24">
      {/* دمج أشكال الخلفية الناعمة لتتناسق مع هوية الألوان الجديدة */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#109DA2]/10 to-[#D9B15A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#D9B15A]/5 to-[#109DA2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* تم تعديل الألوان هنا لتطابق الـ Teal المعتمد في الـ Hero وهو #109DA2 */}
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#109DA2] mb-3">
            Nos Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#14201E] tracking-tight">
            Des solutions sur mesure <br />
            <span className="bg-gradient-to-r from-[#109DA2] to-[#0B6367] text-transparent bg-clip-text">
              pour booster votre marque
            </span>
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            AB TOUCH vous accompagne avec des solutions créatives et digitales pour développer votre image et votre communication.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Services.slice(0, 4).map((service, index) => (
            <Card key={index} {...service} />
          ))}

          {/* الكروت الكبيرة في الأسفل */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Card {...Services[4]} isLarge={true} />
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <Card {...Services[5]} isLarge={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ title, desc, image, isLarge = false }) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ y: -8 }}
      // تم تعديل بوردر الكارت والظلال لتناسب الخلفية الكريمية بشكل ناعم وراقي جداً
      className={`group relative bg-white rounded-2xl border border-gray-200/50 shadow-[0_4px_20px_-4px_rgba(20,32,30,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(16,157,162,0.12)] transition-all duration-500 overflow-hidden flex flex-col h-full ${
        isLarge ? "sm:flex-row sm:items-center text-left" : "text-center"
      }`}
    >
      {/* حاوي الصور العلوي أو الجانبي */}
      <div className={`relative overflow-hidden bg-gray-100 ${
        isLarge ? "w-full sm:w-48 h-48 sm:h-full shrink-0" : "w-full h-44"
      }`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14201E]/20 to-transparent" />
      </div>

      {/* محتوى الكارت */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="font-bold text-xl text-[#14201E] mb-3 relative inline-block">
            {title}
            {/* أنيميشن الخط السفلي بلون هويّة الوكالة */}
            <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#109DA2] to-[#D9B15A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed font-normal">
            {desc}
          </p>
        </div>
        
        {/* زر "اقرأ المزيد" يظهر بسلاسة عند تمرير الماوس */}
        <div className="mt-5 flex items-center justify-center sm:justify-start text-xs font-semibold text-[#109DA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          En savoir plus <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}