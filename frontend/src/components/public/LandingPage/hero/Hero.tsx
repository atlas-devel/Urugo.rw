import CurrentStats from "./CurrentStats";
import HeroContent from "./HeroContent";


function Hero() {
  return (
    <div className=" h-fit w-full p-2 px-6 lg:px-30  max-w-[2000px]  mx-auto">
      <HeroContent />
      <CurrentStats />
    </div>
  );
}

export default Hero;
