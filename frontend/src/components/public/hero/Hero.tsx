import CurrentStats from "./CurrentStats";
import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="min-h-screen w-full p-2 px-6 lg:px-24   max-w-[2000px]  mx-auto">
      <Navbar />
      <HeroContent />
      <CurrentStats />
    </div>
  );
}

export default Hero;
