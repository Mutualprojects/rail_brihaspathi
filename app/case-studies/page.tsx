"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Network, Shield, Train, MapPin, Bus, X, ArrowRight, CheckCircle2, ChevronRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

export type CaseStudy = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  challenge?: string;
  approach: string;
  focusAreas?: string[];
  features?: string[];
  outcome?: string[];
  bgGradient: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "02",
    title: "FnMux",
    icon: Network,
    description: "Failsafe network multiplexer architecture for railway signalling applications.",
    challenge: "Modern signalling systems require reliable and efficient interfaces for distributed field information.",
    approach: "Development of a failsafe network multiplexer architecture for railway signalling applications.",
    focusAreas: [
      "Safety",
      "Reliability",
      "Deterministic communication",
      "Field interfacing",
      "Diagnostics",
      "Scalability"
    ],
    bgGradient: "from-[#07518A] to-[#1A8FD1]",
    image: "/Railway solutions/Signalling.jpg"
  },
  {
    id: "03",
    title: "Electronic Interlocking",
    icon: Shield,
    description: "Safety-focused electronic interlocking technologies integrating vital processing, field I/O, diagnostics and communication.",
    approach: "Development of safety-focused electronic interlocking technologies integrating vital processing, field inputs/outputs, diagnostics and railway communication interfaces.",
    bgGradient: "from-[#07518A] to-[#1A8FD1]",
    image: "/Our Services/System Engineering.jpg"
  },
  {
    id: "04",
    title: "Kavach",
    icon: Train,
    description: "Technologies supporting next-generation Automatic Train Protection and Kavach applications.",
    approach: "Development of technologies supporting next-generation Automatic Train Protection and Kavach applications, combining safety-critical electronics, embedded software, communication and field interfaces.",
    bgGradient: "from-[#07518A] to-[#1A8FD1]",
    image: "/Railway solutions/Train Protection.jpg"
  },
  {
    id: "05",
    title: "Smart Destination Board",
    icon: MapPin,
    description: "Intelligent passenger information display technology for railway and public transportation.",
    approach: "Development of intelligent passenger information display technology for railway and public transportation applications.",
    features: [
      "Real-time destination information",
      "Multiple language support",
      "Network connectivity",
      "Remote configuration",
      "High-visibility LED technology",
      "Centralized monitoring"
    ],
    bgGradient: "from-[#07518A] to-[#1A8FD1]",
    image: "/Railway solutions/Passenger & Transportation.jpg"
  },
  {
    id: "06",
    title: "Smart Bus Technology",
    icon: Bus,
    description: "Connected technologies for intelligent buses, enabling improved fleet visibility and passenger information.",
    approach: "Development of connected technologies for intelligent buses, enabling improved fleet visibility, passenger information and transportation management.",
    bgGradient: "from-[#07518A] to-[#1A8FD1]",
    image: "/Railway solutions/Passenger & Transportation.jpg"
  }
];

export default function CaseStudiesPage() {
  const [selectedProject, setSelectedProject] = useState<typeof caseStudies[0] | null>(null);

  // Prevent background scrolling when off-canvas is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] pt-24 pb-20 selection:bg-[#07518A] selection:text-white">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800/50">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            Projects & Case Studies
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
            Turning Engineering Challenges into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07518A] to-[#1A8FD1]">Technology Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Our projects are focused on solving real-world challenges in railway signalling, railway monitoring, and intelligent transportation.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              whileHover={{ y: -8 }}
              className="group cursor-pointer bg-white dark:bg-[#111] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full relative"
              onClick={() => setSelectedProject(study)}
            >
              {/* Card Header with Icon */}
              <div className="p-8 pb-6 relative z-10 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center justify-center text-[#07518A] dark:text-[#1A8FD1] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <study.icon className="w-14 h-14" />
                  </div>
                  <span className="text-4xl font-black text-gray-100 dark:text-white/5 select-none transition-colors duration-500 group-hover:text-gray-200 dark:group-hover:text-white/10">
                    {study.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#07518A] dark:group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-[15px] leading-relaxed">
                  {study.description}
                </p>
              </div>
              
              {/* Card Footer */}
              <div className="px-8 py-5 border-t border-gray-100 dark:border-white/5 flex items-center justify-between bg-gray-50 dark:bg-white/[0.02] group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10 transition-colors">
                <span className="font-semibold text-sm text-[#07518A] dark:text-blue-400">View Case Study</span>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm group-hover:bg-[#07518A] group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Off-Canvas Drawer (Modal) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="fixed top-0 right-0 w-full max-w-[600px] h-full bg-white dark:bg-[#0a0a0a] z-[110] shadow-2xl flex flex-col overflow-hidden border-l border-gray-200 dark:border-white/10"
            >
              {/* Drawer Header */}
              <div className="flex-shrink-0 flex items-center justify-between p-6 md:p-8 border-b border-gray-100 dark:border-white/10 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl absolute top-0 w-full z-20">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center text-[#07518A] dark:text-[#1A8FD1]">
                    <selectedProject.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-0.5">Case Study {selectedProject.id}</div>
                    <h2 className="text-xl font-black text-gray-900 dark:text-white line-clamp-1">{selectedProject.title}</h2>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto pt-28 pb-10 px-6 md:px-10">
                
                {/* Optional Hero Image Placeholder (if applicable) */}
                <div className="w-full h-48 md:h-64 rounded-2xl bg-gray-50 dark:bg-white/[0.02] mb-8 relative overflow-hidden flex items-center justify-center group">
                   <selectedProject.icon className="w-24 h-24 text-[#07518A]/30 dark:text-[#1A8FD1]/30" />
                </div>

                <div className="space-y-10">
                  {/* Challenge */}
                  {selectedProject.challenge && (
                    <section>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
                        <span className="text-[#07518A] dark:text-blue-400">•</span> The Challenge
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg bg-gray-50 dark:bg-white/[0.02] p-5 rounded-2xl">
                        {selectedProject.challenge}
                      </p>
                    </section>
                  )}

                  {/* Approach */}
                  <section>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
                      <span className="text-[#1A8FD1]">#</span> Our Approach
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg bg-gray-50 dark:bg-white/[0.02] p-5 rounded-2xl">
                      {selectedProject.approach}
                    </p>
                  </section>

                  {/* Outcome / Features / Focus Areas */}
                  {(selectedProject.outcome || selectedProject.features || selectedProject.focusAreas) && (
                    <section>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
                        <span className="text-[#07518A] dark:text-blue-400">✦</span> 
                        {selectedProject.outcome ? "The Outcome" : selectedProject.features ? "Key Features" : "Focus Areas"}
                      </h3>
                      <div className="bg-gray-50 dark:bg-white/[0.02] p-6 rounded-2xl">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {(selectedProject.outcome || selectedProject.features || selectedProject.focusAreas)?.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#1A8FD1] shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300 text-[15px] leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}
                </div>
                
                {/* Contact CTA inside Drawer */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#07518A] to-[#042A4A] text-white flex flex-col items-center text-center">
                  <h4 className="text-xl font-bold mb-2">Have a similar challenge?</h4>
                  <p className="text-blue-100/80 mb-6 text-sm max-w-sm">Connect with our engineering team to see how we can build a technology solution for you.</p>
                  <Link href="/contact-us" onClick={() => setSelectedProject(null)} className="bg-white text-[#07518A] px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:scale-105 transition-all w-full sm:w-auto">
                    Get in Touch
                  </Link>
                </div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
