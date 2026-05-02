import heroImage from "@/assets/images/home/hero.jpg";

function HeroContent() {
  return (
    <div className="mt-4 relative w-full h-[70vh] min-h-[500px] overflow-hidden rounded-2xl shadow-xl">
      {/* Background Image */}
      <img
        src={heroImage}
        loading="lazy"
        alt="Modern rental property"
        className="absolute inset-0 object-cover object-center w-full h-full"
      />

      {/* Dark gradient overlay for extreme text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Text Content & CTAs */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg max-w-6xl">
          Manage Your Rental Properties with
          <span className="text-blue-400 block mt-2">
            AI-Powered Simplicity
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-200 drop-shadow-md pb-4">
          Urugo helps landlords collect rent online, vet tenants instantly, and
          manage properties from one dashboard. Tenants pay easily and build
          rental credit history.
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-blue-600 z-1 overflow-hidden text-white relative group duration-300 transition-colors hover:text-blue-600 p-2  font-semibold px-12 cursor-pointer rounded-md  hover:border-blue-600">
            <span className="bg-white/90 absolute inset-0 translate-y-12 group-hover:translate-0 -z-1 duration-300  " />
            Get Started
          </button>
          <button className="z-1 overflow-hidden text-blue-600 relative group duration-300 transition-colors  hover:text-white p-2  font-semibold px-12 cursor-pointer rounded-md border-2 border-blue-600">
            <span className="bg-blue-600 absolute inset-0 translate-y-12 group-hover:translate-0  -z-1 duration-300  " />
            Browse Properties
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
