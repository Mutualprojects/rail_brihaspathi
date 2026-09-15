"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const R = "#07518A";
const S = "#1A8FD1";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  about: string;
  linkdin_link: string;
  order: string;
  image?: {
    url: string;
  };
}

export default function TeamCarousel() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch("/api/strapi/bri-rails?populate=*");
        const json = await res.json();

        if (json?.data) {
          // Sort by order
          const sorted = json.data.sort((a: TeamMember, b: TeamMember) =>
            parseInt(a.order || "0") - parseInt(b.order || "0")
          );
          setMembers(sorted);
        }
      } catch (err) {
        console.error("Failed to fetch team:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="w-full py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: S }}></div>
      </div>
    );
  }

  if (!members || members.length === 0) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] opacity-30 rounded-3xl pointer-events-none blur-3xl" style={{ background: `linear-gradient(135deg, ${R}22, ${S}22)` }} />

      <div className="relative z-10 bg-white rounded-3xl shadow-[0_20px_50px_rgba(7,81,138,0.08)] border border-[#e2eaf2] overflow-hidden flex flex-col md:flex-row">

        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] h-[350px] md:h-[450px] relative bg-[#f8fafc] overflow-hidden flex-shrink-0">
          {members.map((member, idx) => (
            <div
              key={member.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              {member.image?.url ? (
                <img
                  src={member.image.url}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                  No Image
                </div>
              )}
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-80" />
            </div>
          ))}

          {/* Navigation Controls over image */}
          <div className="absolute bottom-6 right-6 z-20 flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#07518a] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#07518a] transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white">
          {/* Subtle quote icon background */}
          <div className="absolute top-8 right-10 opacity-5 text-9xl font-serif leading-none" style={{ color: R }}>&quot;</div>

          <div className="relative z-10">
            {members.map((member, idx) => (
              <div
                key={member.id}
                className={`transition-all duration-700 ease-in-out ${idx === currentIndex ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4"}`}
              >
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4"
                  style={{ background: `${S}15`, color: S }}>
                  Leadership Team
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: "#0d1b2a" }}>
                  {member.name}
                </h3>

                <p className="text-sm font-semibold mb-6 tracking-wide" style={{ color: S }}>
                  {member.designation}
                </p>

                <div className="w-12 h-1 rounded-full mb-6" style={{ background: `linear-gradient(90deg, ${R}, ${S})` }} />

                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                  {member.about}
                </p>

                {member.linkdin_link && (
                  <a
                    href={member.linkdin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:opacity-80"
                    style={{ color: R }}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${R}15` }}>
                      <FaLinkedin size={16} />
                    </div>
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-2 mt-10">
            {members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${idx === currentIndex ? "w-8 h-2" : "w-2 h-2 opacity-40 hover:opacity-100"}`}
                style={{ background: idx === currentIndex ? `linear-gradient(90deg, ${R}, ${S})` : R }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
