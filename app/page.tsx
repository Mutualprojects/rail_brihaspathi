import MainHero from "./components/mainhero";
import About from "./components/about";
import CompanyIntro from "./components/company-intro";
import SolutionsHome from "./components/solutions-home";
import ServicesHome from "./components/services-home";
import WhatDrivesUs from "./components/what-drives-us";
import MusicHero from "./components/music-hero";
import IndiaMapNetwork from "./components/india-map-network";

export default function Home() {
  return (
    <main>

      <MainHero />
      <About />
      <CompanyIntro />
      <SolutionsHome />
      <ServicesHome />
      <IndiaMapNetwork />
      <WhatDrivesUs />

    </main>
  );
}
