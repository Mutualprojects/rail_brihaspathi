"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./what-drives-us.module.css";
import { 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  Factory, 
  Activity, 
  Cpu, 
  Users 
} from "lucide-react";

interface CardItem {
  accentColor: string;
  icon: React.FC<any>;
  title: string;
  description: string;
}

export default function WhatDrivesUs() {
  const cards: CardItem[] = [
    {
      accentColor: "#0B374D",
      icon: ShieldCheck,
      title: "Railway Safety",
      description: "Uncompromising commitment to SIL-4 safety standards, ensuring every journey is protected by failsafe technology."
    },
    {
      accentColor: "#1286A8",
      icon: Award,
      title: "Engineering Excellence",
      description: "Precision-driven design and rigorous testing methodologies that set new benchmarks in transit infrastructure."
    },
    {
      accentColor: "#07518a",
      icon: Lightbulb,
      title: "Product Innovation",
      description: "Continuously advancing the frontier of rail tech with smart, modern, and future-proof solutions."
    },
    {
      accentColor: "#15803d",
      icon: Factory,
      title: "Indigenous Tech",
      description: "Proudly developing home-grown technologies to reduce dependencies and boost local engineering capabilities."
    },
    {
      accentColor: "#b45309",
      icon: Activity,
      title: "Reliability & Scalability",
      description: "Architecting robust systems built to perform flawlessly under extreme conditions and scale seamlessly."
    },
    {
      accentColor: "#4338ca",
      icon: Cpu,
      title: "Intelligent Automation",
      description: "Leveraging IoT and data-driven insights to automate operations and minimize human error across networks."
    },
    {
      accentColor: "#be123c",
      icon: Users,
      title: "Customer-Focused",
      description: "Designing tailored solutions that directly address the unique operational challenges of our clients."
    }
  ];

  // Roll-down animation variants
  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -80,
      rotateX: -75,
      scaleY: 0.6,
      transformOrigin: "top center"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        mass: 0.8
      }
    }
  };

  return (
    <div className={styles.container} style={{ perspective: "1200px" }}>
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-8 lg:px-14">
        
        {/* Animated Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px", amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={styles.subtitle}>
            The Brihaspathi Rail Essence
          </h2>
          <h3 className="text-center font-extrabold tracking-tight text-gray-900 mb-6"
            style={{ fontSize:"clamp(1.6rem,4vw,3rem)" }}>
            What Drives Us
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 font-medium leading-relaxed">
            A commitment to revolutionizing the railway sector through cutting-edge indigenous technologies and unwavering dedication to safety.
          </p>
        </motion.div>
        
        {/* Animated Staggered List */}
        <motion.ul 
          className={styles.list}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.1 }}
        >
          {cards.map((card, idx) => (
            <motion.li 
              key={idx} 
              className={styles.listItem}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              style={{ "--accent-color": card.accentColor } as React.CSSProperties}
            >
              <div className={styles.icon}>
                <card.icon className="w-9 h-9 opacity-95" />
              </div>
              <div className={styles.title}>{card.title}</div>
              <div className={styles.descr}>{card.description}</div>
            </motion.li>
          ))}
        </motion.ul>



      </div>
    </div>
  );
}
