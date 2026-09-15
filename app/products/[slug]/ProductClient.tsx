"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { products } from "../../data";

interface ProductProps {
  slug: string;
}

export default function ProductClient({ slug }: ProductProps) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const Icon = product.icon;

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
            src={product.image}
            alt={product.title}
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
            {product.title}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-100 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            {product.shortDescription}
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Product Overview</h2>
              </div>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-12">
                {product.fullDescription}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app, idx) => (
                  <motion.div 
                    variants={itemVariants}
                    key={idx} 
                    className="flex items-center p-4 bg-white dark:bg-[#222] border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#07518a] mr-3"></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{app.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar / Specs & Features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-1 space-y-12"
          >
            {/* Technical Specs */}
            <motion.div variants={itemVariants} className="bg-[#07518a] rounded-[2rem] p-8 shadow-2xl overflow-hidden relative">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Technical Specs</h3>
              <div className="space-y-4 relative z-10">
                {product.technicalSpecs.map((spec, idx) => (
                  <motion.div variants={itemVariants} key={idx} className="border-b border-white/20 pb-4 last:border-0 last:pb-0">
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">{spec.label}</p>
                    <p className="text-white font-semibold text-lg">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
              <ul className="space-y-6">
                {product.capabilities.map((feature, idx) => (
                  <motion.li variants={itemVariants} key={idx} className="flex items-start">
                    <feature.icon className="w-6 h-6 text-[#07518a] flex-shrink-0 mt-1" />
                    <p className="ml-4 text-gray-700 dark:text-gray-300 font-medium">
                      {feature.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
