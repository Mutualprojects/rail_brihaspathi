"use client";

import { ChevronDown, ArrowRight } from "lucide-react";
import ParticlesBg from "./particles-bg";

// Hand-drawn line icons so each quadrant reads clearly at a glance
function SignallingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="15" width="21" height="17" rx="5" />
      <path d="M5 23h21" />
      <circle cx="11" cy="36" r="2.2" />
      <circle cx="20" cy="36" r="2.2" />
      <path d="M2 15l3-5h15l3 5" />
      <path d="M30 10a13 13 0 0 1 10 10" />
      <path d="M32.5 16a7 7 0 0 1 5.5 5.5" />
      <circle cx="35" cy="24" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="24" cy="24" r="4.2" />
      <circle cx="24" cy="7" r="3" />
      <circle cx="39" cy="15.5" r="3" />
      <circle cx="39" cy="32.5" r="3" />
      <circle cx="24" cy="41" r="3" />
      <circle cx="9" cy="32.5" r="3" />
      <circle cx="9" cy="15.5" r="3" />
      <path d="M24 19.8V10M27.4 21.8l9.3-6.3M27.4 26.2l9.3 6.3M24 28.2V38M20.6 26.2l-9.3 6.3M20.6 21.8l-9.3-6.3" />
    </svg>
  );
}
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M24 5l15 5.5V21c0 11-6.5 17.5-15 22-8.5-4.5-15-11-15-22v-10.5z" />
      <path d="M16.5 23.5l5.5 5.5 10-11" />
    </svg>
  );
}
function AxleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 34a17 17 0 0 1 34 0" />
      <path d="M24 34l9-12" />
      <circle cx="24" cy="34" r="2.4" fill="currentColor" stroke="none" />
      <path d="M4 41h40" />
      <path d="M10 41v-3M17 41v-3M31 41v-3M38 41v-3" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    key: "signalling",
    label: "Smart\nSignalling",
    href: "/solutions/smart-signalling",
    from: "#0a6cb3",
    to: "#073e66",
    corner: "tl" as const,
    Icon: SignallingIcon,
  },
  {
    key: "iot",
    label: "IoT\nSolutions",
    href: "/solutions/iot-solutions",
    from: "#fbb03b",
    to: "#e07c00",
    corner: "tr" as const,
    Icon: IotIcon,
  },
  {
    key: "safety",
    label: "Safety &\nReliability",
    href: "/services/safety-reliability-engineering",
    from: "#33a9e8",
    to: "#0f6fad",
    corner: "bl" as const,
    Icon: ShieldIcon,
  },
  {
    key: "axle",
    label: "FnMux\nSystem",
    href: "/products/non-vital-multiplexer",
    from: "#3ecf6a",
    to: "#118a3e",
    corner: "br" as const,
    Icon: AxleIcon,
  },
];

const FLY: Record<string, { from: string; rot: string }> = {
  tl: { from: "-65vw, -55vh", rot: "-10deg" },
  tr: { from: "65vw, -55vh", rot: "10deg" },
  bl: { from: "-65vw, 55vh", rot: "10deg" },
  br: { from: "65vw, 55vh", rot: "-10deg" },
};

export default function MainHero() {
  return (
    <section
      className="relative w-full flex flex-col overflow-hidden bg-white min-h-[calc(100dvh-var(--nav-h,84px))]"
    >
      <ParticlesBg />

      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[280px] h-[280px] sm:w-[520px] sm:h-[520px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #07518a 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #07518a 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(7,81,138,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Hero content — side by side on desktop, stacked on mobile ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center flex-1 min-h-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full gap-8 sm:gap-10 lg:gap-16 pt-4 sm:pt-8 lg:pt-0 lg:mt-[-3vh] pb-6 lg:pb-0">

        {/* Left side: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 min-h-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50/90 border border-sky-200/80 text-[#07518a] text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-3 sm:mb-4 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#1a8fd1] animate-ping" />
            <span>NEXT-GEN RAILWAY AUTOMATION & SAFETY</span>
          </div>

          <h1
            className="font-extrabold tracking-tight max-w-2xl text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
            style={{
              background: "linear-gradient(135deg, #0d1b2a 0%, #07518a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Powering the Future of Rail Safety
          </h1>

          <p className="mt-3 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#4a6580] font-medium">
            BTL Rail Pvt Ltd delivers railway automation, signalling, and
            monitoring solutions engineered for the demands of modern rail
            infrastructure.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full">
            <a
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07518a] to-[#1a8fd1] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:text-[#07518a] hover:border-[#1a8fd1]/40 font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right side: Capability Disc */}
        <div className="flex-1 flex justify-center items-center shrink-0 w-full lg:w-auto">
          <div className="relative shrink-0 mt-2 sm:mt-4 lg:mt-0 bth-disc-size">
            {/* Ambient glow behind disc */}
            <div className="absolute -inset-3 sm:-inset-5 rounded-full bg-gradient-to-tr from-sky-400/20 via-blue-600/15 to-amber-400/20 blur-xl opacity-70 animate-pulse pointer-events-none" />

            <div
              className="absolute inset-0 rounded-full overflow-hidden bth-disc"
              style={{
                boxShadow:
                  "0 20px 60px rgba(7,81,138,0.22), 0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              {CAPABILITIES.map((c, i) => {
                const posClass =
                  c.corner === "tl"
                    ? "top-0 left-0 items-center justify-center"
                    : c.corner === "tr"
                      ? "top-0 right-0 items-center justify-center"
                      : c.corner === "bl"
                        ? "bottom-0 left-0 items-center justify-center"
                        : "bottom-0 right-0 items-center justify-center";
                return (
                  <a
                    key={c.key}
                    href={c.href}
                    className={`group absolute w-1/2 h-1/2 flex flex-col ${posClass} transition-[filter] duration-300 hover:brightness-[1.08] bth-quadrant p-1.5 xs:p-2 sm:p-4`}
                    style={{
                      background: `linear-gradient(145deg, ${c.from} 0%, ${c.to} 100%)`,
                      // @ts-expect-error -- custom properties consumed by the keyframes below
                      "--fly-from": FLY[c.corner].from,
                      "--fly-rot": FLY[c.corner].rot,
                      animationDelay: `${i * 0.09}s`,
                    }}
                  >
                    <c.Icon className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white/95 drop-shadow-sm transition-transform duration-300 group-hover:scale-110 shrink-0" />
                    <span className="mt-1 sm:mt-2 text-white font-extrabold uppercase leading-tight whitespace-pre-line drop-shadow-sm text-center text-[10px] xs:text-xs sm:text-sm lg:text-base px-1">
                      {c.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Thin dividing cross */}
            <div className="absolute inset-0 rounded-full pointer-events-none z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] sm:w-[4px] h-full bg-white/90" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] sm:h-[4px] w-full bg-white/90" />
            </div>

            {/* Circular Image fixed in center of disc */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[42%] h-[42%] flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full rounded-full bg-white p-1 sm:p-1.5 shadow-2xl border-2 sm:border-4 border-white flex items-center justify-center overflow-hidden pointer-events-auto">
                <img 
                  src="/railway1.png" 
                  alt="BTL Railway" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="relative z-10 flex flex-col items-center gap-0.5 pb-2 mx-auto transition-colors duration-300 group shrink-0"
        style={{ color: "rgba(7,81,138,0.35)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(7,81,138,0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(7,81,138,0.35)")}
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>

      <style>{`
        .bth-disc-size {
          width: min(78vw, 290px, 36vh);
          height: min(78vw, 290px, 36vh);
        }
        @media (min-width: 480px) {
          .bth-disc-size {
            width: min(68vw, 360px, 40vh);
            height: min(68vw, 360px, 40vh);
          }
        }
        @media (min-width: 640px) {
          .bth-disc-size {
            width: min(60vw, 440px, 46vh);
            height: min(60vw, 440px, 46vh);
          }
        }
        @media (min-width: 1024px) {
          .bth-disc-size {
            width: min(52vh, 520px);
            height: min(52vh, 520px);
          }
        }
        @media (min-width: 1440px) {
          .bth-disc-size {
            width: min(56vh, 580px);
            height: min(56vh, 580px);
          }
        }
        .bth-disc {
          opacity: 0;
          animation: bth-disc-in 0.4s ease-out 0.5s forwards;
        }
        @keyframes bth-disc-in { to { opacity: 1; } }
        .bth-quadrant {
          animation: bth-fly-in 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes bth-fly-in {
          0% {
            opacity: 0;
            transform: translate(var(--fly-from)) rotate(var(--fly-rot)) scale(0.55);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
        .bth-hub {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.4);
          animation: bth-hub-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.75s forwards;
        }
        @keyframes bth-hub-in {
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .bth-ping {
          opacity: 0;
          animation: bth-ping-ring 2.6s ease-out 1.3s infinite;
        }
        @keyframes bth-ping-ring {
          0% { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(2); opacity: 0; }
        }
        .bth-spin {
          animation: bth-rotate 14s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes bth-rotate {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bth-disc, .bth-quadrant, .bth-hub, .bth-ping, .bth-spin {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .bth-hub { transform: translate(-50%, -50%) !important; }
        }
      `}</style>
    </section>
  );
}
 