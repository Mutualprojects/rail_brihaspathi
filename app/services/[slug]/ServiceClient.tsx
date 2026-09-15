"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { services } from "../../data";

interface ServiceProps {
  slug: string;
}

export default function ServiceClient({ slug }: ServiceProps) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = service.icon;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      {/* 80vh Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          {/* Brand Color Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07518a] via-[#07518a]/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" /> {/* Extra darkening for text legibility */}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20"
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-100 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            {service.shortDescription}
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-14 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {/* Main Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-2 space-y-12"
          >
            <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/20 dark:shadow-none border border-gray-100 dark:border-white/5">
              <div className="flex items-center mb-8">
                <div className="w-2 h-10 bg-[#07518a] rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Overview</h2>
              </div>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {service.fullDescription}
              </p>
            </motion.div>
          </motion.div>

          {/* Sidebar / Key Features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-1"
          >
            <div className="sticky top-32">
              <motion.div variants={itemVariants} className="bg-[#07518a] rounded-[2rem] p-8 shadow-2xl overflow-hidden relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-black/20 blur-2xl"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Key Features</h3>
                <ul className="space-y-8 relative z-10">
                  {service.keyFeatures.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      variants={itemVariants}
                      className="flex items-start group"
                    >
                      <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="ml-4 text-white/90 font-medium text-lg leading-snug pt-1">
                        {feature.text}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
