"use client";

import { motion } from "framer-motion";
import { solutions } from "../data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SolutionsHome() {
  return (
    <section className="relative w-full flex flex-col justify-center bg-white overflow-hidden py-16 md:py-20 md:h-screen md:min-h-[800px]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full md:h-full flex flex-col">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-12 flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-sm tracking-wide mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>OUR SOLUTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight mb-4">
            Our <span className="text-emerald-600">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Innovative, safety-critical solutions modernizing railway infrastructure.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:flex-grow">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl shadow-gray-200/50 aspect-[4/3] sm:aspect-[16/11] md:aspect-auto md:h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 backdrop-blur-md text-emerald-300 flex items-center justify-center mb-6 border border-emerald-500/30">
                    <solution.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-300 font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                    {solution.shortDescription}
                  </p>

                  <Link 
                    href={`/solutions/${solution.slug}`}
                    className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300 transition-colors duration-300"
                  >
                    Explore Solution
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
