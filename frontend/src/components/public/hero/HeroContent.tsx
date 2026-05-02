import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div className="mt-4 relative w-full h-[70vh] min-h-[500px] overflow-hidden rounded-2xl bg-blue-700  ">
      {/* Text Content & CTAs */}
      <div className="absolute space-y-2 inset-0 flex flex-col items-center justify-center text-center  px-4 sm:px-6 lg:px-8">
        {/* Ai symbol */}

        <div className="mb-6 text-xs md:text-sm flex items-center gap-2 p-1 px-4 bg-blue-100 rounded-full font-medium text-blue-600">
          <span className="animate-pulse">
            <Sparkles size={16} />
          </span>
          <p>AI-Powered Rental Management</p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-6xl">
          Manage Your Rental Properties with
          <span className="text-white block mt-2">AI-Powered Simplicity</span>
        </h1>

        <p className="mt-6 max-w-2xl text-md text-white pb-4">
          Urugo helps landlords collect rent online, vet tenants instantly, and
          manage properties from one dashboard. Tenants pay easily and build
          rental credit history.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <Link
            to="/register"
            className="bg-blue-700 z-1 overflow-hidden text-white relative group duration-300 transition-colors hover:text-blue-700 p-2  font-semibold px-6 cursor-pointer rounded-md border-2  hover:border-blue-700"
          >
            <span className=" bg-white/90 absolute inset-0 translate-y-12 group-hover:translate-0 -z-1 duration-300  " />
            <span className="text-nowrap flex items-center  justify-center gap-2">
              <p>Get Started</p>
              <ArrowRight size={18} />
            </span>
          </Link>
          <Link
            to="/properties-overview"
            className="text-nowrap  bg-white z-1 overflow-hidden text-blue-700 relative group duration-300 transition-colors  hover:text-white p-2  font-semibold px-6 md:px-12 cursor-pointer rounded-md border-2 border-white"
          >
            <span className="bg-blue-700 absolute inset-0 translate-y-12 group-hover:translate-0  -z-1 duration-300  " />
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
