"use client";

import React, { useEffect, useRef, useState } from "react";
import { Lightbulb, GitMerge, Flame } from "lucide-react";

/* ─── tokens ─── */
const rail   = "#07518A";
const signal = "#1A8FD1";
const ink    = "#0E1B24";
const steel  = "#5C7285";

/* ─── pillars ─── */
const pillars = [
  {
    icon: Lightbulb,
    word: "Innovate",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg,#F59E0B22,#F59E0B08)",
    border: "#F59E0B30",
    glow: "#F59E0B40",
    desc: "We push the boundaries of what's possible — designing intelligent systems that anticipate the demands of tomorrow's railways before they arrive.",
  },
  {
    icon: GitMerge,
    word: "Integrate",
    color: signal,
    gradient: `linear-gradient(135deg,${signal}22,${signal}08)`,
    border: `${signal}30`,
    glow: `${signal}40`,
    desc: "Electronics, software, IoT and embedded intelligence — unified into seamless, end-to-end solutions that work in perfect harmony across every rail network.",
  },
  {
    icon: Flame,
    word: "Inspire",
    color: "#EF4444",
    gradient: "linear-gradient(135deg,#EF444422,#EF444408)",
    border: "#EF444430",
    glow: "#EF444440",
    desc: "We ignite a new standard for transportation engineering — empowering operators, engineers and communities to imagine a smarter, safer world in motion.",
  },
];

/* ─── inView hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Philosophy() {
  const header  = useInView(0.1);
  const tag     = useInView(0.1);
  const cards   = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ph-pulse {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes ph-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <section className="relative w-full bg-white overflow-hidden py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-14">

        {/* ── background grid ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${rail}12 1.5px, transparent 1.5px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── large ghost circle ── */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${signal}06 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── HEADER ── */}
          <div className="text-center mb-20">

            {/* eyebrow badge */}
            <div
              ref={header.ref}
              style={{
                opacity: header.visible ? 1 : 0,
                transform: header.visible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.7s ease",
              }}
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-8"
                style={{ background: `${rail}12`, color: rail }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: rail, animation: "ph-pulse 2s ease-in-out infinite" }}
                />
                Our Philosophy
              </span>
            </div>

            {/* tagline */}
            <div
              ref={tag.ref}
              style={{
                opacity: tag.visible ? 1 : 0,
                transform: tag.visible ? "translateY(0)" : "translateY(32px)",
                transition: "all 0.8s ease 0.15s",
              }}
            >
              <h2 className="font-black leading-[1.05] mb-5" style={{ fontSize:"clamp(2rem,5vw,4rem)", color: ink }}>
                {"Innovate. Integrate.".split("").map((ch, i) => (
                  <span key={i}>{ch}</span>
                ))}
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, ${rail} 0%, ${signal} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Inspire.
                </span>
              </h2>

              <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: steel }}>
                Three words. One relentless commitment. The principles that drive every
                decision we make — from component to system, from blueprint to rail.
              </p>
            </div>
          </div>

          {/* ── CARDS ── */}
          <div
            ref={cards.ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-[2rem] p-9 overflow-hidden cursor-default"
                  style={{
                    background: "white",
                    border: `1.5px solid ${p.border}`,
                    boxShadow: `0 10px 40px -10px ${p.glow}`,
                    opacity:   cards.visible ? 1 : 0,
                    transform: cards.visible ? "translateY(0) scale(1)" : "translateY(56px) scale(0.96)",
                    transition: `opacity 0.7s ease ${i * 140}ms, transform 0.7s ease ${i * 140}ms, box-shadow 0.4s ease`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 28px 60px -10px ${p.glow}, 0 0 0 1.5px ${p.border}`;
                    el.style.transform = "translateY(-8px) scale(1.01)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 10px 40px -10px ${p.glow}`;
                    el.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  {/* hover fill */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                    style={{ background: p.gradient }}
                  />

                  {/* spinning ring on hover */}
                  <div
                    className="absolute -top-8 -right-8 w-36 h-36 rounded-full border-[3px] border-dashed opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      borderColor: p.color,
                      animation: "ph-spin-slow 8s linear infinite",
                    }}
                  />

                  {/* icon */}
                  <div className="relative z-10 mb-7">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `${p.color}18`,
                        border: `1.5px solid ${p.color}30`,
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-all duration-500"
                        style={{ color: p.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* number + word */}
                  <div className="relative z-10 mb-4">
                    <span
                      className="text-xs font-black tracking-[0.2em] uppercase block mb-2"
                      style={{ color: p.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-3xl font-black leading-tight"
                      style={{ color: ink }}
                    >
                      {p.word}
                    </h3>
                  </div>

                  {/* desc */}
                  <p className="relative z-10 text-sm sm:text-[15px] leading-relaxed" style={{ color: steel }}>
                    {p.desc}
                  </p>

                  {/* bottom accent bar */}
                  <div
                    className="absolute bottom-0 left-8 right-8 h-[2.5px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
