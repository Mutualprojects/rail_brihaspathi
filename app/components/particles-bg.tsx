"use client";

import { useEffect, useCallback } from "react";

export default function ParticlesBg() {
  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector("#particles-hero canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p: any) => p.pJS.fn.vendors.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    // @ts-ignore
    window.particlesJS("particles-hero", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 1000 } },
        color: { value: ["#07518a", "#0d6eaf", "#1a8fd1", "#2aa8e0", "#0e4f85"] },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#07518a" },
        },
        opacity: {
          value: 0.55,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.15, sync: false },
        },
        size: {
          value: 4,
          random: true,
          anim: { enable: true, speed: 1.5, size_min: 1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#07518a",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        // "window" = particles react everywhere, even under text/buttons
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: ["grab", "bubble"] },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 240,
            line_linked: { opacity: 0.9 },
          },
          bubble: {
            distance: 180,
            size: 7,
            duration: 0.3,
            opacity: 0.8,
            speed: 3,
          },
          push: { particles_nb: 6 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = document.querySelector(
      'script[src*="particles.min.js"]'
    );
    if (existing) {
      // Already loaded
      initParticles();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => initParticles();

    return () => {
      // only remove if we added it
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [initParticles]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/0_Journey_Green_1920x1080.mp4" type="video/mp4" />
      </video>
      {/* Overlay to make particles visible */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      <div
        id="particles-hero"
        className="absolute inset-0 w-full h-full"
        style={{ background: "transparent", pointerEvents: "none" }}
      />
    </div>
  );
}
