const fs = require('fs');
let content = fs.readFileSync('app/about/page.tsx', 'utf8');

// Update imports
content = content.replace(
  /import \{\n  ArrowRight, Award, Globe, Shield, Zap, Users,\n  Target, CheckCircle, TrendingUp, ChevronDown,\n\} from "lucide-react";/,
  `import {
  ArrowRight, Award, Globe, Shield, Zap, Users,
  Target, CheckCircle, TrendingUp, ChevronDown,
  Lightbulb, Rocket, Cpu, LineChart, BarChart, RefreshCw, Eye
} from "lucide-react";`
);

// Add missionPoints array
content = content.replace(
  /  const \{ companyOverview \} = siteData;/g,
  `  const { companyOverview } = siteData;

  const missionPoints = [
    { text: "Develop innovative railway and transportation technologies.", icon: Lightbulb },
    { text: "Build reliable and safety-focused products for critical infrastructure.", icon: Shield },
    { text: "Accelerate indigenous product development and engineering.", icon: Rocket },
    { text: "Integrate electronics, embedded systems, IoT and software into intelligent solutions.", icon: Cpu },
    { text: "Enable data-driven railway operations and predictive maintenance.", icon: LineChart },
    { text: "Deliver scalable technologies that reduce lifecycle cost and improve operational efficiency.", icon: BarChart },
    { text: "Continuously innovate to address the evolving needs of modern transportation.", icon: RefreshCw },
  ];`
);

// Replace Mission & Vision section
const oldSection = `      {/* ═══════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "rgba(7,81,138,0.12)",
              background: "rgba(7,81,138,0.03)",
              boxShadow: "0 2px 20px rgba(7,81,138,0.05)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(7,81,138,0.12)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(7,81,138,0.05)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.12)";
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
              style={{ background: "linear-gradient(135deg, #07518a 0%, #1a8fd1 100%)" }}
            >
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="w-8 h-[2px] mb-4" style={{ background: "#07518a" }} />
            <h2 className="text-xl font-extrabold mb-4 uppercase tracking-wide" style={{ color: "#07518a" }}>
              Our Mission
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#4a6580" }}>
              {companyOverview.mission}
            </p>
          </div>

          {/* Vision */}
          <div
            className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "rgba(7,81,138,0.12)",
              background: "rgba(7,81,138,0.03)",
              boxShadow: "0 2px 20px rgba(7,81,138,0.05)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(7,81,138,0.12)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(7,81,138,0.05)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.12)";
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
              style={{ background: "linear-gradient(135deg, #07518a 0%, #1a8fd1 100%)" }}
            >
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="w-8 h-[2px] mb-4" style={{ background: "#1a8fd1" }} />
            <h2 className="text-xl font-extrabold mb-4 uppercase tracking-wide" style={{ color: "#07518a" }}>
              Our Vision
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#4a6580" }}>
              {companyOverview.vision}
            </p>
          </div>
        </div>`;

const newSection = \`      {/* ═══════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Vision */}
          <div className="lg:col-span-5">
            <div
              className="sticky top-28 group relative p-8 md:p-10 rounded-3xl border transition-all duration-500 overflow-hidden"
              style={{
                borderColor: "rgba(7,81,138,0.15)",
                background: "linear-gradient(145deg, rgba(7,81,138,0.02) 0%, rgba(26,143,209,0.05) 100%)",
              }}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Eye size={120} color="#07518a" />
              </div>
              <div className="relative z-10">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #07518a 0%, #1a8fd1 100%)" }}
                >
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-extrabold mb-4 uppercase tracking-wide" style={{ color: "#07518a" }}>
                  Our Vision
                </h2>
                <div className="w-12 h-[3px] mb-6 rounded-full" style={{ background: "#1a8fd1" }} />
                <p className="text-lg leading-relaxed font-medium" style={{ color: "#334a60" }}>
                  To become a leading technology and product development company delivering smart, safe and intelligent solutions for railways and transportation systems worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold mb-4 uppercase tracking-wide flex items-center gap-3" style={{ color: "#07518a" }}>
                <Target className="w-7 h-7" style={{ color: "#1a8fd1" }} />
                Our Mission
              </h2>
              <div className="w-12 h-[3px] rounded-full" style={{ background: "#07518a" }} />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {missionPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 bg-white cursor-default"
                    style={{
                      borderColor: "rgba(7,81,138,0.08)",
                      boxShadow: "0 4px 15px rgba(7,81,138,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(7,81,138,0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 15px rgba(7,81,138,0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,81,138,0.08)";
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                      style={{ background: "rgba(7,81,138,0.06)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#07518a" }} />
                    </div>
                    <p className="text-sm font-medium leading-relaxed" style={{ color: "#4a6580" }}>
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>\`;

content = content.replace(oldSection, newSection);
fs.writeFileSync('app/about/page.tsx', content);
console.log("Updated!");
