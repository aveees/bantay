import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MapsSection from "../components/sections/MapSection";
import CharactersSection from "../components/sections/CharacterSection";
import EnemiesSection from "../components/sections/EnemySection";
import HeroSection from "../components/sections/HeroSection";
import TeaserSection from "../components/sections/TeaserSection";
// import the rest of your sections too

export default function BantayLandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0705] font-['Poppins'] text-stone-100">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: "url('/images/bantay-bg.png')",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,200,120,0.08),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(7,4,2,0.95))]" />

      <Header />

      <main>
        <HeroSection/>
        {/* AboutSection */}
        <MapsSection />
        <CharactersSection />
        <EnemiesSection />
        <TeaserSection/>
        {/* DevelopersSection */}
      </main>

      <Footer />
    </div>
  );
}