"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Cpu, Globe2, Award } from "lucide-react";

/* ─── design tokens ─────────────────────────────── */
const rail   = "#07518A";
const signal = "#1A8FD1";
const ink    = "#0E1B24";
const steel  = "#5C7285";

/* ─── mission pillars ───────────────────────────── */
const pillars = [
  { icon: ShieldCheck, label: "Safety First",      text: "Safety engineered into every system we build" },
  { icon: Cpu,         label: "Smart Automation",  text: "Intelligent automation that keeps trains running on time" },
  { icon: Globe2,      label: "Global Reach",      text: "Solutions deployed across rail networks worldwide" },
  { icon: Award,       label: "20 Years of Trust", text: "Two decades of trusted transportation engineering" },
];

/* ─── hook: fires once when element enters viewport ── */
function useInView(threshold = 0.2) {
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

/* ════════════════════════════════════════════════════
   VISION SECTION
════════════════════════════════════════════════════ */
function VisionSection() {
  const badge   = useInView(0.15);
  const heading = useInView(0.15);
  const body    = useInView(0.15);
  const image   = useInView(0.15);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${rail}08 1px,transparent 1px),linear-gradient(90deg,${rail}08 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* ghost circle */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none hidden lg:block"
        style={{ background: `radial-gradient(circle, ${signal}0A 0%, transparent 70%)` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-10 lg:px-14 py-20 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-28 items-center">
        {/* LEFT — text */}
        <div>
          <div
            ref={badge.ref}
            style={{ opacity: badge.visible ? 1 : 0, transform: badge.visible ? "translateY(0)" : "translateY(28px)", transition: "all 0.7s ease" }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: `${signal}18`, color: signal }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: signal }} />
              Our Vision
            </span>
          </div>

          <div
            ref={heading.ref}
            style={{ opacity: heading.visible ? 1 : 0, transform: heading.visible ? "translateY(0)" : "translateY(32px)", transition: "all 0.7s ease 0.15s" }}
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-8" style={{ color: ink }}>
              A rail network<br />
              that{" "}
              <span style={{ background: `linear-gradient(135deg,${rail} 0%,${signal} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                thinks for itself
              </span>
            </h2>
          </div>

          <div
            ref={body.ref}
            style={{ opacity: body.visible ? 1 : 0, transform: body.visible ? "translateY(0)" : "translateY(32px)", transition: "all 0.7s ease 0.3s" }}
          >
            <p className="text-base sm:text-xl leading-relaxed mb-10" style={{ color: steel }}>
              To become a leading technology and product development company delivering
              smart, safe and intelligent solutions for railways and transportation
              systems worldwide — where every journey is safer, faster, and smarter.
            </p>
            {/* animated underline */}
            <div className="overflow-hidden h-[3px] rounded-full w-32" style={{ background: `${rail}20` }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: body.visible ? "100%" : "0%",
                  background: `linear-gradient(90deg,${rail},${signal})`,
                  transition: "width 1s ease 0.5s",
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT — image card */}
        <div
          ref={image.ref}
          style={{ opacity: image.visible ? 1 : 0, transform: image.visible ? "translateX(0) scale(1)" : "translateX(60px) scale(0.94)", transition: "all 1s ease 0.2s" }}
        >
          <div className="flex items-center justify-center p-10">
            <img
              src="https://www.clickdiji.com/_next/image?url=%2Ftop-view-paper-light-bulb-with-chat-bubble.png&w=256&q=75"
              alt="Our Vision"
              className="w-full max-w-xs object-contain drop-shadow-2xl"
              style={{ animation: "vm-float 4s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   MISSION SECTION
════════════════════════════════════════════════════ */
function MissionSection() {
  const badge   = useInView(0.1);
  const heading = useInView(0.1);
  const body    = useInView(0.1);
  const image   = useInView(0.1);
  const cards   = useInView(0.1);

  return (
    <section className="relative w-full bg-white overflow-hidden pb-16 sm:pb-24">
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: `radial-gradient(${rail}25 1px,transparent 1px)`, backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-10 lg:px-14 pt-16 sm:pt-24">
        {/* TOP — image + text */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-28 items-center mb-14 sm:mb-20">
          {/* LEFT — image */}
          <div
            ref={image.ref}
            style={{ opacity: image.visible ? 1 : 0, transform: image.visible ? "translateX(0) scale(1)" : "translateX(-60px) scale(0.94)", transition: "all 1s ease 0.1s" }}
          >
            <div className="flex items-center justify-center p-10">
              <img
                src="https://www.clickdiji.com/_next/image?url=%2Farrow-hitting-bullseye.png&w=256&q=75"
                alt="Our Mission"
                className="w-full max-w-xs object-contain drop-shadow-2xl"
                style={{ animation: "vm-float 4.5s ease-in-out infinite reverse" }}
              />
            </div>
          </div>

          {/* RIGHT — text */}
          <div>
            <div
              ref={badge.ref}
              style={{ opacity: badge.visible ? 1 : 0, transform: badge.visible ? "translateY(0)" : "translateY(28px)", transition: "all 0.7s ease" }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                style={{ background: `${rail}15`, color: rail }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: rail }} />
                Our Mission
              </span>
            </div>

            <div
              ref={heading.ref}
              style={{ opacity: heading.visible ? 1 : 0, transform: heading.visible ? "translateY(0)" : "translateY(32px)", transition: "all 0.7s ease 0.15s" }}
            >
              <h2 className="font-black leading-[1.1] mb-8" style={{ fontSize:"clamp(2rem,4.5vw,3.8rem)", color: ink }}>
                Technology railways{" "}
                <span style={{ background: `linear-gradient(135deg,${rail} 0%,${signal} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  run on
                </span>
              </h2>
            </div>

            <div
              ref={body.ref}
              style={{ opacity: body.visible ? 1 : 0, transform: body.visible ? "translateY(0)" : "translateY(32px)", transition: "all 0.7s ease 0.3s" }}
            >
              <p className="text-base sm:text-xl leading-relaxed mb-10" style={{ color: steel }}>
                We build the technology railways run on — from signal intelligence
                to passenger systems — so operators can move people safer, faster, and on time.
              </p>
              <div className="overflow-hidden h-[3px] rounded-full w-32" style={{ background: `${signal}20` }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: body.visible ? "100%" : "0%",
                    background: `linear-gradient(90deg,${signal},${rail})`,
                    transition: "width 1s ease 0.5s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM — staggered pillar cards */}
        <div ref={cards.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group relative rounded-[1.75rem] p-7 overflow-hidden cursor-default"
                style={{
                  background: "white",
                  boxShadow: `0 8px 30px -6px ${rail}18, 0 0 0 1px ${rail}0C`,
                  opacity:   cards.visible ? 1 : 0,
                  transform: cards.visible ? "translateY(0)" : "translateY(48px)",
                  transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = `0 24px 50px -8px ${rail}35, 0 0 0 1px ${rail}25`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = cards.visible ? "translateY(0)" : "translateY(48px)";
                  el.style.boxShadow = `0 8px 30px -6px ${rail}18, 0 0 0 1px ${rail}0C`;
                }}
              >
                {/* hover bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem]"
                  style={{ background: `linear-gradient(135deg,${rail}08,${signal}08)` }}
                />
                {/* icon */}
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg,${rail}15,${signal}15)`, border: `1.5px solid ${rail}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: rail }} />
                </div>
                <p className="relative z-10 text-xs font-bold tracking-widest uppercase mb-2" style={{ color: signal }}>
                  {p.label}
                </p>
                <p className="relative z-10 text-sm leading-relaxed font-medium" style={{ color: steel }}>
                  {p.text}
                </p>
                {/* bottom accent */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,${rail},${signal})` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════════ */
export default function VisionMission() {
  return (
    <>
      <style>{`
        @keyframes vm-float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          33%      { transform: translateY(-14px) rotate(1deg); }
          66%      { transform: translateY(-6px) rotate(-1deg); }
        }
      `}</style>
      <div className="w-full font-sans">
        <VisionSection />
        <MissionSection />
      </div>
    </>
  );
}
