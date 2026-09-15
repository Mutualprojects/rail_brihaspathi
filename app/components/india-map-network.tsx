"use client";

import Image from "next/image";
import { Train, ShieldCheck, Cpu, Activity, Radio, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

// Nodes representing different solutions geographically distributed
const nodes = [
  { id: "delhi", x: 35, y: 32, name: "Intelligent Transport System", icon: Cpu },
  { id: "kolkata", x: 67, y: 53, name: "SIL-4 Signalling Hub", icon: ShieldCheck },
  { id: "mumbai", x: 23, y: 64, name: "Real-Time IoT Center", icon: Radio },
  { id: "hyderabad", x: 39, y: 67, name: "Traffic Management", icon: Cpu },
  { id: "bengaluru", x: 35, y: 81, name: "Predictive Maintenance", icon: Radio },
  { id: "chennai", x: 43, y: 79, name: "Network Modernization", icon: Activity },
  { id: "nagpur", x: 42, y: 55, name: "Central Analytics", icon: Activity },
  { id: "ahmedabad", x: 20, y: 50, name: "Safety Engineering", icon: ShieldCheck },
  { id: "guwahati", x: 80, y: 41, name: "Control & Command", icon: Train },
];

const routes = [
  { from: "delhi", to: "kolkata", duration: 6 },
  { from: "kolkata", to: "guwahati", duration: 4 },
  { from: "delhi", to: "ahmedabad", duration: 5 },
  { from: "ahmedabad", to: "mumbai", duration: 4 },
  { from: "mumbai", to: "bengaluru", duration: 5 },
  { from: "bengaluru", to: "chennai", duration: 3 },
  { from: "chennai", to: "hyderabad", duration: 4 },
  { from: "hyderabad", to: "nagpur", duration: 4 },
  { from: "nagpur", to: "delhi", duration: 5 },
  { from: "mumbai", to: "hyderabad", duration: 5 },
  { from: "hyderabad", to: "kolkata", duration: 6 },
  { from: "nagpur", to: "kolkata", duration: 5 },
  // Reverse paths for dynamic traffic
  { from: "kolkata", to: "delhi", duration: 7 },
  { from: "hyderabad", to: "mumbai", duration: 5 },
  { from: "bengaluru", to: "mumbai", duration: 6 },
  { from: "chennai", to: "bengaluru", duration: 3 },
];

export default function IndiaMapNetwork() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-[#07518A]/10">
      {/* Background soft glow effects for light theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#07518A]/5 rounded-full mix-blend-multiply filter blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#07518A]/5 rounded-full mix-blend-multiply filter blur-[100px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(7,81,138,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.8 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Side: Text and Solutions */}
        <div className="flex-1 text-center lg:text-left w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4"
            style={{ background: `rgba(7, 81, 138, 0.1)`, border: `1px solid rgba(7, 81, 138, 0.2)`, color: '#07518A' }}>
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#07518A] mb-4 sm:mb-6 leading-tight tracking-tight">
            Delivering Transformative <br className="hidden sm:block" />
            <span className="text-[#07518A]">Railway Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#07518A]/80 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            We don't just connect destinations; we engineer the intelligent systems that make those connections possible. Our safety-critical solutions form the invisible backbone of India's railway infrastructure.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#07518A]/10 shadow-[0_4px_20px_rgba(7,81,138,0.05)] hover:shadow-[0_8px_30px_rgba(7,81,138,0.15)] transition-all duration-300 group text-left">
              <div className="p-2.5 sm:p-3 bg-[#07518A] text-white rounded-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <ShieldCheck size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#07518A] mb-1 text-sm sm:text-base">SIL-4 Signalling</h4>
                <p className="text-xs sm:text-sm text-[#07518A]/70 leading-relaxed">Fail-safe interlocking & transit signaling systems.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#07518A]/10 shadow-[0_4px_20px_rgba(7,81,138,0.05)] hover:shadow-[0_8px_30px_rgba(7,81,138,0.15)] transition-all duration-300 group text-left">
              <div className="p-2.5 sm:p-3 bg-[#07518A] text-white rounded-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Cpu size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#07518A] mb-1 text-sm sm:text-base">Intelligent Transport</h4>
                <p className="text-xs sm:text-sm text-[#07518A]/70 leading-relaxed">Automated traffic management & smart logistics.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#07518A]/10 shadow-[0_4px_20px_rgba(7,81,138,0.05)] hover:shadow-[0_8px_30px_rgba(7,81,138,0.15)] transition-all duration-300 group text-left">
              <div className="p-2.5 sm:p-3 bg-[#07518A] text-white rounded-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Radio size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#07518A] mb-1 text-sm sm:text-base">Real-Time IoT</h4>
                <p className="text-xs sm:text-sm text-[#07518A]/70 leading-relaxed">24/7 condition monitoring & predictive maintenance.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#07518A]/10 shadow-[0_4px_20px_rgba(7,81,138,0.05)] hover:shadow-[0_8px_30px_rgba(7,81,138,0.15)] transition-all duration-300 group text-left">
              <div className="p-2.5 sm:p-3 bg-[#07518A] text-white rounded-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Activity size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#07518A] mb-1 text-sm sm:text-base">Network Modernization</h4>
                <p className="text-xs sm:text-sm text-[#07518A]/70 leading-relaxed">Turnkey engineering for upgrading legacy networks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Map Visualization */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-2xl mx-auto relative mt-8 lg:mt-0">
          <style>{`
            @keyframes pulse-node {
              0%, 100% { opacity: 0.1; transform: scale(1); }
              50% { opacity: 0.3; transform: scale(1.6); }
            }
            ${routes.map((r, i) => {
              const from = nodes.find(n => n.id === r.from);
              const to = nodes.find(n => n.id === r.to);
              if (!from || !to) return '';
              return `
                @keyframes route-move-${i} {
                  0% { left: ${from.x}%; top: ${from.y}%; opacity: 0; transform: scale(0.3); }
                  5% { opacity: 1; transform: scale(1); }
                  95% { opacity: 1; transform: scale(1); }
                  100% { left: ${to.x}%; top: ${to.y}%; opacity: 0; transform: scale(0.3); }
                }
              `;
            }).join('\n')}
          `}</style>

          <div className="relative w-full aspect-[1/1.1] rounded-3xl">
            {/* The Map Image - Exact original without any overlays/filters/opacity */}
            <Image
              src="/highly-detailed-india-map-with-outline-state-country-borders-vector-illustration.png"
              alt="India Rail Network Map"
              fill
              priority
              className="object-contain pointer-events-none"
            />

            {/* Moving Packets / Trains */}
            {mounted && routes.map((route, i) => (
              <div key={i} className="absolute flex items-center justify-center pointer-events-none z-10"
                style={{
                  width: 12, height: 12, marginLeft: -6, marginTop: -6,
                  animation: `route-move-${i} ${route.duration + (i % 3)}s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) ${(i * 0.7) % 3}s`
                }}
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#07518A] rounded-full shadow-[0_0_8px_rgba(7,81,138,0.8)]" />
                <div className="absolute w-full h-full bg-[#07518A] rounded-full blur-[4px] opacity-50" />
              </div>
            ))}

            {/* Nodes with Solution Icons */}
            {mounted && nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div key={node.id} 
                  className="absolute flex items-center justify-center group cursor-pointer z-20"
                  style={{ left: `${node.x}%`, top: `${node.y}%`, width: 32, height: 32, marginLeft: -16, marginTop: -16 }}
                >
                  {/* Icon Container - Pure White Icon */}
                  <div className={`relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10 drop-shadow-md`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  {/* Premium Tooltip */}
                  <div className="absolute bottom-10 sm:bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white border border-[#07518A]/20 rounded-xl shadow-[0_10px_40px_rgba(7,81,138,0.15)] p-3 min-w-[160px] sm:min-w-[180px] z-30 pointer-events-none">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1.5 rounded-lg bg-gray-50`}>
                        <Icon size={12} className="text-[#07518A]" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#07518A]/60 uppercase tracking-wider flex items-center gap-1">
                        Solution Node
                      </span>
                    </div>
                    <div className="text-sm font-bold text-[#07518A] leading-tight">
                      {node.name}
                    </div>
                    
                    {/* Tooltip Triangle */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#07518A]/20 rotate-45" />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
