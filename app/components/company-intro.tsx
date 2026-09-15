"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CompanyIntro() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#fafcff]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px]" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#07518A 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Side: Premium Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm tracking-wide mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8">
            Empowering the Future of <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07518A] to-[#1A8FD1]">
              Transportation
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-[1.35rem] text-gray-600 leading-relaxed font-medium">
            <strong className="text-gray-900 font-bold">Brihaspathi Rail</strong> is a technology-driven railway solutions company and a proud subsidiary of <strong className="text-[#07518A] font-bold">Brihaspathi Technologies Limited</strong>. We are dedicated to delivering intelligent, reliable, and scalable technology solutions for the modern rail and transportation ecosystem.
          </p>
        </motion.div>

        {/* Right Side: Interactive Logo Showcase */}
        <motion.div 
          className="flex-1 w-full flex flex-col items-center justify-center gap-12 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {/* Parent Company Logo */}
          <motion.div 
            className="w-full max-w-[280px] flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Parent Company</div>
            <div className="relative w-full h-20">
              <Image
                src="https://brihaspathi.com/highbtlogo-tm-1.png"
                alt="Brihaspathi Technologies Limited"
                fill
                className="object-contain mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
          </motion.div>

          {/* Connecting Flow Animation */}
          <div className="relative h-20 w-8 flex justify-center overflow-hidden">
            {/* Subtle background track */}
            <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            
            {/* Flowing Arrow 1 */}
            <motion.div 
              className="absolute top-0 text-[#1A8FD1]"
              animate={{ y: [-24, 80], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(26,143,209,0.6)]">
                <path d="M12 4v16m0 0l-6-6m6 6l6-6"/>
              </svg>
            </motion.div>
            
            {/* Flowing Arrow 2 */}
            <motion.div 
              className="absolute top-0 text-[#1A8FD1]"
              animate={{ y: [-24, 80], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(26,143,209,0.6)]">
                <path d="M12 4v16m0 0l-6-6m6 6l6-6"/>
              </svg>
            </motion.div>
          </div>

          {/* Subsidiary Logo */}
          <motion.div 
            className="w-full max-w-[280px] flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xs font-bold text-[#07518A] uppercase tracking-widest mb-4">Subsidiary</div>
            <div className="relative w-full h-20">
              <Image
                src="/BTL _rail Side.png"
                alt="Brihaspathi Rail"
                fill
                className="object-contain mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
