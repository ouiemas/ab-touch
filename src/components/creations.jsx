import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  X,
  Printer,
  Lightbulb,
  Layers,
  Code2,
  Tag,
  Sparkles,
  Handshake,
} from "lucide-react";

export default function Creations() {
  /* ---------------------------------------------------------
     البيانات: تم ربطها مباشرة بأسماء صورك الحقيقية داخل مجلد public
  --------------------------------------------------------- */
  const servicesData = [
    {
      title: "لافطات إشهارية",
      description: "تصميم وتنفيذ لافتات خارجية وداخلية بأحجام ومواد متنوعة تجذب الانتباه.",
      icon: Tag,
      images: [
        { id: "s1", title: "تصميم لافطة إعلانية مميزة", src: "/lafita1.jpg" },
        { id: "s2", title: "واجهة لافطة محل تجاري", src: "/lafita2.jpg" },
        { id: "s3", title: "لافتة إشهارية عصرية", src: "/lafita3.jpg" },
        { id: "s4", title: "لوحة إعلانية خارجية", src: "/lafitaa5.jpg" },
        { id: "s5", title: "تنفيذ لافطة متكاملة", src: "/lafitat.jpg" },
      ],
    },
    {
      title: "طباعة رقمية",
      description: "طبع رقمي عالي الدقة على جميع أنواع الدعم والملصقات الإعلانية.",
      icon: Printer,
      images: [
        { id: "p1", title: "خدمات الطباعة الرقمية والدقة العالية", src: "/impression.jpg" },
        { id: "p2", title: "ملصق إعلاني مطبوع بدقة", src: "/masrora.jpg" },
      ],
    },
    {
      title: "حروف مضيئة",
      description: "حروف بارزة ومضيئة ثلاثية الأبعاد (3D) تمنح هويتك بريقاً واحترافية.",
      icon: Lightbulb,
      images: [
        { id: "l1", title: "حروف مضيئة بارزة (نموذج 1)", src: "/horof.jpg" },
        { id: "l2", title: "واجهة حروف مضيئة 3D", src: "/horf1.jpg" },
        { id: "l3", title: "إضاءة حروف احترافية للمحلات", src: "/horof6.jpg" },
        { id: "l4", title: "شعار بارز ومضيء بدقة", src: "/horof7.jpg" },
        { id: "l5", title: "تصميم وتثبيت الحروف المضيئة", src: "/horof9.jpg" },
      ],
    },
    {
      title: "Alucobande",
      description: "تغليف وتحديث واجهات المحلات والمباني بألواح أليوكوبوند عصرية ومقاومة.",
      icon: Layers,
      images: [
        { id: "a1", title: "تغليف واجهات أليوكوبوند عصرية", src: "/aut1.jpg" },
        { id: "a2", title: "تحديث واجهة المحل الخارجي", src: "/aut2.jpg" },
        { id: "a3", title: "تغليف أليوكوبوند متكامل للمباني", src: "/auto.jpg" },
      ],
    },
    {
      title: "Développement Web & Logiciel",
      description: "برمجة وتطوير مواقع إلكترونية وتطبيقات مخصصة تلبي احتياجات نشاطك.",
      icon: Code2,
      images: [
        { id: "w1", title: "تطوير وبرمجة المواقع الإلكترونية", src: "/devlop.jpg" },
      ],
    },
    {
      title: "الرعاية (Sponsoring)",
      description: "رعاية الفعاليات والمناسبات الرياضية والثقافية بحضور بصري مدروس لعلامتك.",
      icon: Handshake,
      images: [
        { id: "sp1", title: "تجهيز وتنظيم لافتات الرعاية الرسمية", src: "/sponsor.jpg" },
      ],
    },
  ];

  const fallbackFor = (categoryId, imgId) =>
    `https://picsum.photos/seed/abtouch-${categoryId}-${imgId}/700/520`;

  const flatImages = useMemo(
    () =>
      servicesData.flatMap((service, sIdx) =>
        service.images.map((img) => ({
          ...img,
          category: service.title,
          categoryIcon: service.icon,
          fallback: fallbackFor(sIdx, img.id),
        }))
      ),
    []
  );

  const tabs = [
    { title: "الكل", icon: Sparkles, count: flatImages.length },
    ...servicesData.map((s) => ({
      title: s.title,
      icon: s.icon,
      count: s.images.length,
    })),
  ];

  const [activeTab, setActiveTab] = useState("الكل");
  const [lightbox, setLightbox] = useState(null);

  const visibleImages =
    activeTab === "الكل"
      ? flatImages
      : flatImages.filter((img) => img.category === activeTab);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section dir="rtl" className="ab-root w-full py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap');

        .ab-root{
          --ink:#14201E;
          --cream:#F8F4EC;
          --paper:#FFFFFF;
          --teal:#109DA2;
          --teal-deep:#0B7478;
          --teal-tint:#E3F2F1;
          --gold:#D9B15A;
          --gold-deep:#B98D34;
          --line: rgba(20,32,30,0.10);
          background-color: var(--cream);
          color: var(--ink);
          font-family: 'IBM Plex Sans Arabic', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ab-heading{ font-family:'Cairo', sans-serif; }

        .ab-root::before{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          opacity:0.5;
          background-image: repeating-linear-gradient(115deg, rgba(20,32,30,0.025) 0px, rgba(20,32,30,0.025) 1px, transparent 1px, transparent 10px);
        }

        .ab-eyebrow{
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid var(--teal); color:var(--teal-deep);
          background:var(--paper); font-size:12px; font-weight:600;
          letter-spacing:0.04em; padding:7px 16px; border-radius:999px;
        }
        .ab-gold-rule{
          height:3px; width:56px; margin:18px auto 0; border-radius:999px;
          background: var(--gold);
          transform-origin:center;
        }

        .ab-tabbar{
          position:sticky; top:0; z-index:20;
          background: rgba(248,244,236,0.88);
          backdrop-filter: blur(10px);
          border-top:1px solid var(--line);
          border-bottom:1px solid var(--line);
        }
        .ab-tabscroll{
          display:flex; gap:6px; overflow-x:auto; padding:14px 4px;
          scrollbar-width:none;
        }
        .ab-tabscroll::-webkit-scrollbar{ display:none; }
        .ab-tab{
          position:relative; white-space:nowrap;
          display:flex; align-items:center; gap:8px;
          padding:10px 18px; border-radius:999px;
          font-size:13.5px; font-weight:600; color:var(--ink);
          opacity:0.62; transition:opacity .25s ease;
        }
        .ab-tab.active{ opacity:1; color:var(--paper); }
        .ab-tab:hover{ opacity:1; }
        .ab-tab-pill{
          position:absolute; inset:0; border-radius:999px;
          background: var(--ink); z-index:-1;
        }
        .ab-tab-count{
          font-size:10.5px; font-weight:600; padding:1px 7px; border-radius:999px;
          background: rgba(20,32,30,0.08);
        }
        .ab-tab.active .ab-tab-count{ background: rgba(255,255,255,0.22); }

        .ab-card{
          background: var(--paper); border:1px solid var(--line);
          border-radius:14px; overflow:hidden;
        }
        .ab-tagchip{
          display:flex; align-items:center; gap:6px;
          background: rgba(20,32,30,0.55);
          backdrop-filter: blur(6px);
          color:#fff; font-size:11px; font-weight:600;
          padding:6px 11px; border-radius:8px;
        }
        .ab-icon-badge{
          width:16px; height:16px; display:flex; align-items:center; justify-content:center;
          color: var(--gold);
        }
        .ab-view-btn{
          background: var(--paper); color: var(--teal-deep);
          width:44px; height:44px; border-radius:999px;
          display:flex; align-items:center; justify-content:center;
          box-shadow: 0 8px 20px rgba(20,32,30,0.25);
        }
        .ab-card-title{
          font-size:13.5px; font-weight:600; color:var(--ink);
        }
        .ab-card-cat{
          font-size:11px; color: var(--teal-deep); font-weight:600;
        }

        .ab-lightbox-backdrop{
          position:fixed; inset:0; z-index:50;
          background: rgba(15,20,19,0.82);
          backdrop-filter: blur(4px);
          display:flex; align-items:center; justify-content:center;
          padding:24px;
        }
        .ab-lightbox-close{
          position:absolute; top:18px; left:18px;
          width:38px; height:38px; border-radius:999px;
          background: rgba(255,255,255,0.12); color:#fff;
          display:flex; align-items:center; justify-content:center;
        }

        @media (prefers-reduced-motion: reduce){
          *{ animation:none !important; transition:none !important; }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* ترويسة الصفحة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <span className="ab-eyebrow">
            <Sparkles size={13} />
            معرض الأعمال الإبداعية
          </span>
          <h2 className="ab-heading text-4xl md:text-5xl font-bold tracking-tight">
            ألبومات أعمالنا <span style={{ color: "var(--teal)" }}>حسب كل خدمة</span>
          </h2>
          <motion.div
            className="ab-gold-rule"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="max-w-xl mx-auto text-sm md:text-base" style={{ color: "rgba(20,32,30,0.65)" }}>
            اكتشف مشاريع وكالة AB TOUCH مقسمة بدقة لكي تتصفح جودة أعمالنا في كل
            تخصص على حدة.
          </p>
        </motion.div>

        {/* شريط التصفية */}
        <div className="ab-tabbar mb-12 -mx-6 sm:-mx-8 px-6 sm:px-8">
          <div className="ab-tabscroll">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.title;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(tab.title)}
                  className={`ab-tab ${active ? "active" : ""}`}
                >
                  {active && (
                    <motion.span
                      layoutId="ab-tab-pill"
                      className="ab-tab-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon size={14} />
                  {tab.title}
                  <span className="ab-tab-count">{tab.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* شبكة الأعمال */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, i) => {
              const Icon = img.categoryIcon;
              return (
                <motion.div
                  layout
                  key={img.id + img.category}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ y: -5 }}
                  className="ab-card group cursor-pointer"
                  onClick={() => setLightbox(img)}
                >
                  <div className="relative h-[260px] w-full overflow-hidden" style={{ background: "var(--teal-tint)" }}>
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = img.fallback;
                      }}
                    />

                    {/* بطاقة الفئة العلوية */}
                    <div className="absolute top-3 right-3 ab-tagchip">
                      <span className="ab-icon-badge">
                        <Icon size={12} />
                      </span>
                      {img.category}
                    </div>

                    {/* طبقة التمرير الفوقية */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(20,32,30,0) 45%, rgba(20,32,30,0.55) 100%)",
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="ab-view-btn"
                      >
                        <Eye size={18} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-5 border-t" style={{ borderColor: "var(--line)" }}>
                    <p className="ab-card-title">{img.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* صندوق العرض المكبر Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="ab-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
              style={{ background: "var(--paper)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="ab-lightbox-close" onClick={() => setLightbox(null)}>
                <X size={18} />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[70vh] object-cover"
                onError={(e) => {
                  e.target.src = lightbox.fallback;
                }}
              />
              <div className="p-6 flex items-center justify-between gap-4">
                <div>
                  <p className="ab-card-cat mb-1">{lightbox.category}</p>
                  <p className="ab-heading text-lg font-bold">{lightbox.title}</p>
                </div>
                <span className="ab-icon-badge" style={{ color: "var(--teal-deep)" }}>
                  <lightbox.categoryIcon size={22} />
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}