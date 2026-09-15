"use client";

import { motion } from "framer-motion";
import { Radio, Cpu, Route } from "lucide-react";

const expertiseData = [
  {
    num: "01",
    title: "Smart Signalling",
    description: "Advanced safety-critical signalling and railway automation solutions designed to improve safety, reliability and operational efficiency.",
    icon: Radio
  },
  {
    num: "02",
    title: "IoT Solutions",
    description: "Connected railway systems that enable real-time monitoring, diagnostics, data acquisition, predictive maintenance and intelligent asset management.",
    icon: Cpu
  },
  {
    num: "03",
    title: "Intelligent Transport Solutions",
    description: "Smart transportation technologies that improve passenger information, fleet intelligence, connectivity and overall transportation experience.",
    icon: Route
  }
];

export default function Expertise() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center py-24 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-sm tracking-wide mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>OUR EXPERTISE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Strategic Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">Verticals</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            Our expertise spans three strategic technology verticals:
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.num}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-24 h-24 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <item.icon className="w-12 h-12" />
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-emerald-100 transition-colors duration-500">
                  {item.num}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Paragraph */}
        <motion.div
          className="max-w-4xl mx-auto text-center bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-emerald-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-gray-700 font-semibold leading-relaxed">
            From railway signalling equipment to connected railway assets and intelligent transportation systems, <span className="text-emerald-700 font-bold">Brihaspathi Rail</span> is building technologies for the next generation of rail and mobility infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
