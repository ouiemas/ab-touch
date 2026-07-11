import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/about";
import Contact from "./components/contact";
// 1. تم تغيير اسم الاستيراد ليبدأ بحرف كبير ليعمل الـ Component بشكل صحيح
import Creations from "./components/creations"; 
import "./index.css";

function App() {
  // 2. إضافة State للتحكم في التنقل بين الصفحة الرئيسية وسطح الأعمال
  // القيمة الافتراضية 'home' لعرض الموقع كاملاً
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="relative overflow-hidden bg-[#080808] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        {/* Main Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-[180px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[160px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* 3. نمرر setCurrentPage للـ Navbar لتتمكن من تغيير الصفحة عند الضغط على الأزرار */}
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main>
        {currentPage === "home" ? (
          /* المعاينة عند اختيار الصفحة الرئيسية */
          <>
            <section id="home" className="scroll-mt-24">
              {/* نمرر الـ Function للـ Hero ليتمكن زر "Voir nos réalisations" من فتح صفحة الأعمال */}
              <Hero setCurrentPage={setCurrentPage} />
            </section>

            <section id="services" className="scroll-mt-24">
              <Services />
            </section>

            <section id="about" className="scroll-mt-24">
              <About />
            </section>

            <section id="contact" className="scroll-mt-24">
              <Contact />
            </section>
          </>
        ) : (
          /* المعاينة المستقلة لصفحة أعمالنا فقط وتظهر منفصلة تماماً */
          <section id="creations" className="min-h-screen pt-24">
            <Creations setCurrentPage={setCurrentPage} />
          </section>
        )}
      </main>

      <footer className="relative border-t border-yellow-400/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-black tracking-wider">
                AB <span className="text-white">TOUCH</span>
              </h2>

              <p className="mt-4 max-w-md text-gray-400 leading-7">
                Agence spécialisée en publicité, communication visuelle,
                marketing digital, développement web et logiciels sur mesure.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-500">© 2020 AB TOUCH</p>

              <p className="mt-2 text-sm text-green-400 tracking-[4px] uppercase">
                Creative Agency
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;