import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { solutions } from "../data";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#07518A] to-[#042A4A] text-white pt-20 pb-10 border-t border-[#1A8FD1]/30 mt-auto overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#1A8FD1]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Brihaspathi Rail
            </h3>
            <p className="text-blue-100/80 text-[15px] leading-relaxed max-w-sm">
              Pioneering the next era of railway technology with SIL-rated safety, intelligent transport systems, and innovative engineering solutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#07518A] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <FaLinkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#07518A] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#07518A] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 text-white tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Solutions", href: "/solutions" },
                { name: "Products", href: "/products" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="group flex items-center text-blue-100/80 hover:text-white transition-colors text-[15px] font-medium">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-2 transition-all duration-300 text-[#1A8FD1]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold mb-6 text-white tracking-widest uppercase">Our Solutions</h4>
            <ul className="space-y-4">
              {solutions.slice(0, 5).map((sol, i) => (
                <li key={i}>
                  <Link href={`/solutions/${sol.slug}`} className="group flex items-start text-blue-100/80 hover:text-white transition-colors text-[15px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A8FD1] mt-2 mr-3 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span className="line-clamp-2">{sol.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold mb-6 text-white tracking-widest uppercase">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#1A8FD1] group-hover:border-[#1A8FD1] transition-colors duration-300">
                  <MapPin size={20} className="text-[#1A8FD1] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-blue-100/80 text-[15px] leading-relaxed pt-1.5 group-hover:text-white transition-colors">
                  4th Floor, Sattva Galleria, New Airport Road,<br />
                  Byatarayanapura Village, Yelahanka Hobli,<br />
                  Bangalore - 560092, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#1A8FD1] group-hover:border-[#1A8FD1] transition-colors duration-300">
                  <Phone size={20} className="text-[#1A8FD1] group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="tel:+914023315555" className="text-blue-100/80 hover:text-white transition-colors text-[15px] pt-1 tracking-wide">+91 40 2331 5555</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#1A8FD1] group-hover:border-[#1A8FD1] transition-colors duration-300">
                  <Mail size={20} className="text-[#1A8FD1] group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="mailto:info@brihaspathirail.com" className="text-blue-100/80 hover:text-white transition-colors text-[15px] pt-1">info@brihaspathirail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Brihaspathi Rail Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
