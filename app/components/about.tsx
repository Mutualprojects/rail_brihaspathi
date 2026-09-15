"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import trainImage from "../homepage_images/modern-metro-train-vector-with-urban-rail-coaches-tracks-inspired-by-delhi-metro.png";

export default function About() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-50 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm tracking-wide mb-6 shadow-sm">
            <span>01</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>ABOUT US</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-8">
            Pioneering the Next Era of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              Railway Technology
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
            <strong className="text-gray-900 font-bold">Brihaspathi Rail Private Limited</strong> is a technology-driven engineering company focused on developing innovative solutions for the railway and transportation sectors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/solutions" className="px-8 py-3.5 rounded-full bg-gray-900 text-white font-semibold shadow-lg shadow-gray-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Discover Our Solutions
            </Link>
            <Link href="/contact-us" className="px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Image Content - without background/padding and with scroll animation */}
        <motion.div 
          className="flex-1 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <Image
              src={trainImage}
              alt="Modern Metro Train Vector"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
