"use client";

import { useEffect, useRef, useState } from "react";
import {
  Radio, Wifi, Cpu, ArrowRight, Mail, Phone, MapPin,
  Send, CheckCircle, Train, ChevronRight, Loader2,
  Building2, Factory, ExternalLink, ShieldCheck, Compass
} from "lucide-react";

const R = "#07518A";
const S = "#1A8FD1";
const INK = "#0A1628";

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

const verticals = [
  { icon: Radio, name: "Smart Signalling", blurb: "SIL-rated zero-failure signalling systems" },
  { icon: Wifi, name: "IoT Solutions", blurb: "Real-time monitoring across rail corridors" },
  { icon: Cpu, name: "Intelligent Transport Systems", blurb: "AI-powered scheduling and passenger platforms" },
];

const facilities = [
  {
    type: "REGISTERED OFFICE & MANUFACTURING",
    title: "Registered Office & Manufacturing Plant",
    company: "Brihaspathi Rail Pvt. Ltd",
    icon: Factory,
    badgeColor: "#07518A",
    address: "Regd Office: Sy.No.340, Plot No.198/2, 201,202,203,204, Tuniki Bollaram, Siddipet, Telangana, India, 502279",
    city: "Tuniki Bollaram, Siddipet",
    desc: "Our state-of-the-art facility for indigenous railway signalling design, SIL-4 hardware engineering, and FNMUX production.",
    tags: ["Embedded Signalling R&D", "FNMUX Assembly", "ISO & SIL Compliant", "IoT Software Lab"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tuniki+Bollaram+Siddipet+Telangana+India",
  },
];

const contactMeta = [
  { icon: Phone, label: "Call / WhatsApp", val: "+91 92475 58003", href: "tel:+919247558003" },
  { icon: Mail, label: "Email Us", val: "info@brihaspathirail.com", href: "mailto:info@brihaspathirail.com" },
  { icon: Building2, label: "Registered Office", val: "Tuniki Bollaram, TS", href: "#facilities" },
];

export default function ContactUsPage() {
  const [ready, setReady] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", vertical: "", message: "" });

  useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

  const heroRef = useInView(0.05);
  const formRef = useInView(0.08);
  const panelRef = useInView(0.08);
  const vertsRef = useInView(0.08);
  const facRef = useInView(0.08);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1600);
  }

  return (
    <main
      className="min-h-screen bg-white"
      style={{ opacity: ready ? 1 : 0, transition: "opacity 0.5s ease", fontFamily: "'Inter','Segoe UI',sans-serif" }}
    >
      <style>{`
        @keyframes rail-move  { from{transform:translateX(-100%)} to{transform:translateX(500%)} }
        @keyframes glow-pulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }
        @keyframes float-up   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes spin-ring  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes tick-pop   { 0%{transform:scale(0) rotate(-20deg);opacity:0} 70%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }
        .ci { width:100%; padding:13px 16px; border-radius:12px; border:1.5px solid #e2eaf2;
              background:#f6f9fc; font-size:14px; color:${INK}; outline:none;
              transition:border-color .2s,box-shadow .2s; box-sizing:border-box; }
        .ci:focus { border-color:${S}; box-shadow:0 0 0 3px ${S}22; background:#fff; }
        .ci::placeholder { color:#9bb0c5; }
      `}</style>

      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative overflow-hidden flex pt-24 h-[60vh] min-h-[500px]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.88) 0%, rgba(7, 81, 138, 0.72) 100%), url('/20156.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)`, backgroundSize: "56px 56px" }} />

        {/* rail stripe */}
        <div className="absolute left-0 right-0 overflow-hidden pointer-events-none"
          style={{ top: "40%", height: "1.5px", background: `linear-gradient(90deg,transparent,${S}60,transparent)` }}>
          <div style={{
            position: "absolute", top: 0, bottom: 0, width: 200,
            background: `linear-gradient(90deg,transparent,${S},white,${S},transparent)`,
            animation: "rail-move 3.5s linear infinite"
          }} />
        </div>

        {/* Bottom wave - moved here so image can sit OVER it */}
        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 72L60 62C120 52 240 32 360 24C480 16 600 20 720 28C840 36 960 48 1080 50C1200 52 1320 44 1380 40L1440 36V72H0Z" fill="white" />
          </svg>
        </div>

        <div ref={heroRef.ref}
          className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-10 h-full pb-4">

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center h-full pb-10">
            {/* badge */}
            <div style={{ opacity: heroRef.v ? 1 : 0, transform: heroRef.v ? "translateY(0)" : "translateY(20px)", transition: "all .7s ease" }}>
              <span className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase"
                style={{ background: `${S}1A`, border: `1px solid ${S}40`, color: S }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: S, animation: "glow-pulse 2s ease-in-out infinite" }} />
                Contact Us
              </span>
            </div>

            {/* headline */}
            <h1 className="font-black text-white mb-0 leading-[1.1] tracking-tight"
              style={{
                fontSize: "clamp(2.5rem,5vw,3.75rem)",
                opacity: heroRef.v ? 1 : 0, transform: heroRef.v ? "translateY(0)" : "translateY(36px)", transition: "all .8s ease .12s"
              }}>
              Let's Build the Future of<br />
              <span style={{ background: `linear-gradient(135deg,${S} 0%,#6dd5fa 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Railways Together
              </span>
            </h1>
          </div>

          {/* Right Image - Anchored to bottom */}
          <div className="w-full md:w-1/2 flex justify-end items-end h-full relative"
            style={{ opacity: heroRef.v ? 1 : 0, transform: heroRef.v ? "translateX(0)" : "translateX(36px)", transition: "all .8s ease .24s" }}>
            <img src="/ChatGPT Image Sep 15, 2026, 05_13_01 PM.png" alt="Contact BTL Rail" 
                 className="w-full max-w-[500px] object-contain origin-bottom mb-12 lg:mb-20" 
                 style={{ filter: "drop-shadow(0 25px 40px rgba(0,0,0,0.6))", transform: "scale(1.05)" }} />
          </div>
        </div>
      </section>

      {/* ═══════════ OUR FACILITIES & LOCATIONS ═══════════ */}
      <section id="facilities" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-14 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: `radial-gradient(${R}18 1.5px,transparent 1.5px)`, backgroundSize: "32px 32px" }} />

        <div ref={facRef.ref} className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16"
            style={{ opacity: facRef.v ? 1 : 0, transform: facRef.v ? "translateY(0)" : "translateY(28px)", transition: "all .7s ease" }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-3"
              style={{ background: `${R}12`, border: `1px solid ${R}25`, color: R }}>
              <MapPin size={13} color={R} /> Our Office & Production Hub
            </span>
            <h2 className="font-black text-2xl sm:text-4xl mb-3" style={{ color: R }}>
              Where Innovation Meets Precision Manufacturing
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "#5a7590" }}>
              Our state-of-the-art manufacturing and R&D plant in Telangana powers our mission to build SIL-4 certified railway technology.
            </p>
            <div className="w-16 h-[3.5px] rounded-full mx-auto mt-4" style={{ background: `linear-gradient(90deg,${R},${S})` }} />
          </div>

          {/* 1 Facility Card */}
          <div className="grid grid-cols-1 max-w-3xl mx-auto gap-8 lg:gap-10">
            {facilities.map((fac, i) => {
              const Icon = fac.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white p-7 sm:p-9 flex flex-col justify-between transition-all duration-500 border relative group overflow-hidden"
                  style={{
                    borderColor: `${R}18`,
                    boxShadow: `0 16px 48px -12px ${R}12`,
                    opacity: facRef.v ? 1 : 0,
                    transform: facRef.v ? "translateY(0)" : "translateY(40px)",
                    transition: `all .7s ease ${i * 160}ms`,
                  }}
                >
                  {/* Background aura on hover */}
                  <div
                    className="absolute -right-20 -top-20 w-60 h-60 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${fac.badgeColor}15 0%, transparent 70%)` }}
                  />

                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-[11px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full"
                        style={{ background: `${fac.badgeColor}15`, color: fac.badgeColor, border: `1px solid ${fac.badgeColor}30` }}
                      >
                        {fac.type}
                      </span>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `linear-gradient(135deg, ${fac.badgeColor}1A, ${fac.badgeColor}0A)`, border: `1.5px solid ${fac.badgeColor}25` }}
                      >
                        <Icon size={22} color={fac.badgeColor} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl sm:text-2xl font-black mb-1" style={{ color: INK }}>
                      {fac.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: S }}>
                      {fac.company}
                    </p>

                    {/* Address Box */}
                    <div
                      className="p-4 rounded-2xl mb-5 flex items-start gap-3 border"
                      style={{ background: "#f8fafc", borderColor: "#e2eaf2" }}
                    >
                      <MapPin size={18} color={fac.badgeColor} className="flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold leading-relaxed" style={{ color: INK }}>
                        {fac.address}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: "#5a7590" }}>
                      {fac.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fac.tags.map((tag, tidx) => (
                        <span
                          key={tidx}
                          className="text-xs font-semibold px-3 py-1 rounded-lg"
                          style={{ background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <ShieldCheck size={14} color={fac.badgeColor} /> Verified Location
                    </span>
                    <a
                      href={fac.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 no-underline"
                      style={{ background: `${fac.badgeColor}12`, color: fac.badgeColor, border: `1px solid ${fac.badgeColor}25` }}
                    >
                      Get Directions <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ═══════════ FORM + PANEL ═══════════ */}
      <section id="form" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-14 relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-15"
          style={{ backgroundImage: `radial-gradient(${R}22 1.5px,transparent 1.5px)`, backgroundSize: "30px 30px" }} />

        {/* responsive grid: stacks on mobile, side-by-side on lg+ */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 lg:gap-10 items-start">

          {/* FORM CARD */}
          <div ref={formRef.ref}
            className="rounded-[2rem] bg-white w-full border"
            style={{
              padding: "clamp(24px,5vw,48px)", boxShadow: `0 24px 70px -12px ${R}15`, borderColor: `${R}15`,
              opacity: formRef.v ? 1 : 0, transform: formRef.v ? "translateX(0)" : "translateX(-48px)", transition: "all .8s ease"
            }}>
            <h2 className="font-black mb-1.5 text-2xl sm:text-3xl" style={{ color: R }}>Send Us a Message</h2>
            <p className="text-sm mb-8 sm:mb-10 leading-relaxed" style={{ color: "#7a95b0" }}>Our engineering team responds within 24 hours.</p>

            {sent ? (
              <div className="flex flex-col items-center text-center py-12 sm:py-16">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: `${S}18`, animation: "tick-pop .6s cubic-bezier(.34,1.56,.64,1) both" }}>
                  <CheckCircle size={40} color={S} />
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: INK }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#7a95b0" }}>Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Full Name *", ph: "John Smith", type: "text", req: true },
                    { name: "company", label: "Company", ph: "Railway Authority Ltd.", type: "text", req: false },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-black tracking-widest uppercase mb-2" style={{ color: "#8aa4be" }}>{f.label}</label>
                      <input name={f.name} type={f.type} placeholder={f.ph} required={f.req}
                        value={(form as any)[f.name]} onChange={handleChange} className="ci" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "email", label: "Email Address *", ph: "you@company.com", type: "email", req: true },
                    { name: "phone", label: "Phone Number", ph: "+91 92475 58003", type: "tel", req: false },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-black tracking-widest uppercase mb-2" style={{ color: "#8aa4be" }}>{f.label}</label>
                      <input name={f.name} type={f.type} placeholder={f.ph} required={f.req}
                        value={(form as any)[f.name]} onChange={handleChange} className="ci" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-black tracking-widest uppercase mb-2" style={{ color: "#8aa4be" }}>Vertical of Interest</label>
                  <select name="vertical" value={form.vertical} onChange={handleChange} className="ci" style={{ appearance: "none" }}>
                    <option value="">Select a vertical…</option>
                    {verticals.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
                    <option value="Other">Other / Custom Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black tracking-widest uppercase mb-2" style={{ color: "#8aa4be" }}>How Can We Help? *</label>
                  <textarea name="message" required rows={5}
                    placeholder="Describe your requirement — signalling, IoT, custom product development…"
                    value={form.message} onChange={handleChange} className="ci" style={{ resize: "none" }} />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-white text-sm sm:text-base border-none cursor-pointer transition-all duration-300"
                  style={{ background: `linear-gradient(135deg,${R},${S})`, boxShadow: `0 10px 36px ${R}40`, opacity: sending ? 0.8 : 1 }}
                  onMouseEnter={e => { if (!sending) { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; } }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                  {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* SIDE PANEL */}
          <div ref={panelRef.ref} className="flex flex-col gap-5"
            style={{ opacity: panelRef.v ? 1 : 0, transform: panelRef.v ? "translateX(0)" : "translateX(48px)", transition: "all .8s ease .15s" }}>

            {/* dark card */}
            <div className="rounded-[1.75rem] p-7"
              style={{ background: `linear-gradient(145deg,${INK} 0%,#0c3358 100%)`, boxShadow: `0 24px 60px ${R}40` }}>
              <div className="flex items-center gap-2.5 mb-4">
                <Train size={15} color={S} />
                <p className="text-xs font-black tracking-widest uppercase" style={{ color: `${S}CC`, fontSize: 9 }}>Brihaspathi Rail Private Limited</p>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mb-3 leading-snug">Smart Technology for Smarter Railways</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>
                Indigenous product development company delivering reliable, safe and intelligent railway technology worldwide.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["SIL-4 Certified", "Indigenous R&D", "40+ Countries"].map(tag => (
                  <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${S}22`, color: S, border: `1px solid ${S}33` }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* contact items */}
            {contactMeta.map((c, i) => {
              const Icon = c.icon;
              return (
                <a key={i} href={c.href}
                  className="flex items-center gap-4 rounded-2xl no-underline transition-all duration-300 hover:-translate-y-1"
                  style={{ padding: "18px 20px", background: "#fff", border: `1.5px solid ${R}14`, boxShadow: `0 4px 20px -6px ${R}10` }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${S}44`; el.style.boxShadow = `0 16px 40px -8px ${R}22`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${R}14`; el.style.boxShadow = `0 4px 20px -6px ${R}10`; }}>
                  <div className="flex-shrink-0 flex items-center justify-center rounded-xl"
                    style={{ width: 42, height: 42, background: `linear-gradient(135deg,${R}18,${S}18)`, border: `1.5px solid ${R}20` }}>
                    <Icon size={17} color={R} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-black tracking-widest uppercase mb-0.5" style={{ fontSize: 9, color: "#8aa4be" }}>{c.label}</p>
                    <p className="text-sm font-bold" style={{ color: INK }}>{c.val}</p>
                  </div>
                </a>
              );
            })}

            {/* verticals mini */}
            <div className="rounded-2xl p-6" style={{ background: "#fff", border: `1.5px solid ${R}14`, boxShadow: `0 4px 20px -6px ${R}10` }}>
              <p className="font-black tracking-widest uppercase mb-4" style={{ fontSize: 9, color: "#8aa4be" }}>Our Verticals</p>
              <div className="flex flex-col gap-3">
                {verticals.map((vt, i) => {
                  const Icon = vt.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center rounded-lg"
                        style={{ width: 32, height: 32, background: `${R}0E` }}>
                        <Icon size={14} color={R} strokeWidth={1.5} />
                      </div>
                      <p className="text-sm font-bold" style={{ color: INK }}>{vt.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

