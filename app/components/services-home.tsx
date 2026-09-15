"use client";

import { motion } from "framer-motion";
import { services } from "../data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesHome() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[30vw] h-[30vw] bg-[#07518a]/5 rounded-full blur-[80px] opacity-80" />
        <div className="absolute bottom-1/4 left-0 w-[30vw] h-[30vw] bg-[#07518a]/5 rounded-full blur-[80px] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 w-full">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm tracking-wide mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#07518a] animate-pulse" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="font-extrabold text-gray-900 leading-tight mb-4"
            style={{ fontSize:"clamp(1.6rem,3.5vw,3rem)" }}>
            End-to-End <span className="text-[#07518a]">Engineering</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Comprehensive services tailored for the railway and transportation sectors.
          </p>
        </motion.div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="h-full"
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="group h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#07518a]/10 hover:border-[#07518a]/20 transition-all duration-300 flex flex-col relative overflow-hidden">
                  
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#07518a]/0 to-[#07518a]/0 group-hover:from-[#07518a]/5 group-hover:to-transparent transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-start h-full w-full">
                    <div className="w-12 h-12 rounded-xl bg-[#07518a]/5 border border-[#07518a]/10 text-[#07518a] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#07518a] group-hover:text-white group-hover:border-[#07518a] transition-all duration-500 shadow-sm">
                      <service.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-[1.1rem] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#07518a] transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-semibold text-[#07518a]">Explore</span>
                      <div className="w-8 h-8 rounded-full bg-[#07518a]/10 flex items-center justify-center text-[#07518a]">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
