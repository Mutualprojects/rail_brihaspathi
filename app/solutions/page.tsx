import Link from "next/link";
import Image from "next/image";
import { solutions } from "../data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Solutions | BTL Rail",
  description: "Innovative safety-critical solutions modernizing railway infrastructure.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="font-bold text-gray-900 dark:text-white mb-5"
            style={{ fontSize:"clamp(1.8rem,4.5vw,3.2rem)" }}>
            Our Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Innovative, safety-critical solutions modernizing railway infrastructure and ensuring uncompromising reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <Link 
              key={idx} 
              href={`/solutions/${solution.slug}`}
              className="group bg-white dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-2">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {solution.shortDescription}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                  Explore Solution <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
