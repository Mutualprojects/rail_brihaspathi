"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Globe, Shield, Zap, Radio, Wifi, Cpu, ChevronRight } from "lucide-react";
import { siteData } from "../data";
import VisionMission from "../components/vision-mission";
import Philosophy from "../components/philosophy";

const R = "#07518A";
const S = "#1A8FD1";
const INK = "#0A1628";

const verticals = [
  { icon: Radio,  name: "Smart Signalling",              blurb: "SIL-rated zero-failure signalling systems" },
  { icon: Wifi,   name: "IoT Solutions",                 blurb: "Real-time monitoring across rail corridors" },
  { icon: Cpu,    name: "Intelligent Transport Systems", blurb: "AI-powered scheduling and passenger platforms" },
];

function useInView(t = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: t });
    o.observe(el); return () => o.disconnect();
  }, [t]);
  return { ref, v };
}
export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const vertsRef = useInView(0.08);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const { companyOverview } = siteData;

  return (
    <main
      className="flex flex-col bg-white w-full overflow-hidden"
      style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >

      {/* ═══════════════════════════════════════
          HERO SECTION (Indian Railways Theme)
      ═══════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden flex-shrink-0">
        {/* Background Image */}
        <div className={`absolute inset-0 z-0 transition-transform duration-[10s] ease-out ${loaded ? 'scale-100' : 'scale-110'}`}>
          <Image
            src="/475.jpg"
            alt="Indian Railways by BTL Rail"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradients for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07518a]/40 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Globe className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100 tracking-wider uppercase">Pioneering the Future of Transit</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            The Heartbeat of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Indian Railways</span>
          </h1>

          <p
            className={`max-w-3xl text-base sm:text-lg md:text-xl text-gray-200 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ lineHeight: "1.7", textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}
          >
            For over two decades, BTL Rail has been forging the infrastructure that moves a nation—engineering world-class solutions that honor the rich legacy and power the relentless future of India's railway network. We don't just build components; we build the veins through which the nation thrives.
          </p>

          <div
            className={`mt-10 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <button className="px-8 py-4 bg-[#07518a] hover:bg-[#0a66ab] text-white rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(7,81,138,0.5)] flex items-center gap-2">
              Discover Our Legacy <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[1200ms] ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════ */}
      <VisionMission />
      <Philosophy />

      {/* ═══════════════════════════════════════
          OUR VERTICALS
      ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-14 bg-[#f8fafc] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage:`radial-gradient(${R}15 1px,transparent 1px)`, backgroundSize:"24px 24px" }} />
        
        <style>{`
          @keyframes spin-ring  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          @keyframes float-up   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        `}</style>

        <div ref={vertsRef.ref} className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16"
            style={{ opacity:vertsRef.v?1:0, transform:vertsRef.v?"translateY(0)":"translateY(28px)", transition:"all .7s ease" }}>
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase mb-3" style={{ color:S }}>Our Verticals</p>
            <h2 className="font-extrabold mb-4 text-2xl sm:text-4xl" style={{ color:R }}>
              What We Build for Railways
            </h2>
            <div className="w-14 h-[4px] rounded-full mx-auto" style={{ background:`linear-gradient(90deg,${R},${S})` }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {verticals.map((vt, i) => {
              const Icon = vt.icon;
              return (
                <div key={i}
                  className="relative rounded-3xl overflow-hidden cursor-default transition-all duration-500 bg-white"
                  style={{ padding:"40px 32px", border:`1px solid ${R}15`,
                    boxShadow:`0 10px 40px -10px ${R}10`,
                    opacity:vertsRef.v?1:0, transform:vertsRef.v?"translateY(0)":"translateY(48px)",
                    transition:`all .65s ease ${i*130}ms` }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform="translateY(-10px)";
                    el.style.boxShadow=`0 30px 60px -15px ${R}25`;
                    el.style.borderColor=`${S}40`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform="translateY(0)";
                    el.style.boxShadow=`0 10px 40px -10px ${R}10`;
                    el.style.borderColor=`${R}15`;
                  }}>
                  
                  {/* Decorative corner ring */}
                  <div className="absolute pointer-events-none"
                    style={{ top:-30, right:-30, width:140, height:140, borderRadius:"50%", border:`2px dashed ${S}25`, animation:"spin-ring 15s linear infinite" }} />
                  
                  {/* Icon Box */}
                  <div className="flex items-center justify-center mb-6 flex-shrink-0"
                    style={{ width:56, height:56, borderRadius:16, background:`linear-gradient(135deg,${R}10,${S}15)`, border:`1px solid ${R}20`, animation:"float-up 4s ease-in-out infinite" }}>
                    <Icon size={24} color={R} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-extrabold mb-3 text-lg" style={{ color:INK }}>{vt.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:"#5a7590" }}>{vt.blurb}</p>
                  
                  <div className="flex items-center gap-2 mt-6 text-xs font-extrabold uppercase tracking-wide transition-colors" style={{ color:S }}>
                    Learn More <ChevronRight size={14} strokeWidth={3} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why BTL Rail */}
      <div className="mt-16 sm:mt-20 px-5 sm:px-10 lg:px-14 pb-16 sm:pb-20 text-center">
        <p className="text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(7,81,138,0.40)" }}>
          Why BTL Rail
        </p>
        <h2 className="font-extrabold mb-8 sm:mb-10" style={{ fontSize:"clamp(1.6rem,3.5vw,2.5rem)", color: "#0d1b2a" }}>
          Built on Trust,{" "}
          <span style={{
            background: "linear-gradient(135deg, #07518a 0%, #1a8fd1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Driven by Innovation
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {[
            { icon: Shield, title: "Safety First", desc: "Every product engineered to meet stringent SIL-4 and CENELEC standards — safety is non-negotiable." },
            { icon: Zap, title: "Indigenous Innovation", desc: "Homegrown R&D capabilities reducing import dependency while delivering world-class quality." },
            { icon: Globe, title: "Global Reach", desc: "Serving rail networks across 40+ countries with round-the-clock engineering support." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-7 rounded-3xl border group transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{
                borderColor: "rgba(7,81,138,0.10)",
                background: "rgba(7,81,138,0.02)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.25)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(7,81,138,0.12)";
                (e.currentTarget as HTMLElement).style.background = "rgba(7,81,138,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.10)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.background = "rgba(7,81,138,0.02)";
              }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #07518a 0%, #1a8fd1 100%)",
                  boxShadow: "0 4px 20px rgba(7,81,138,0.25)",
                }}
              >
                <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-extrabold mb-2" style={{ color: "#0d1b2a" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b8ba4" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden mx-4 sm:mx-8 lg:mx-14 mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #07518a 0%, #0d6eaf 50%, #1a8fd1 100%)",
          boxShadow: "0 20px 60px rgba(7,81,138,0.30)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10" style={{ background: "white" }} />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-10" style={{ background: "white" }} />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-6 py-10 sm:px-10 sm:py-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Engineer the Future?
            </h3>
            <p className="text-sm text-white/70">
              Partner with BTL Rail for world-class railway engineering solutions.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact-us"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-white transition-all duration-300 hover:scale-[1.04] active:scale-95"
              style={{ color: "#07518a" }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
