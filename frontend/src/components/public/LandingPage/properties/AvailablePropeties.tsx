import { ArrowRight, Home } from "lucide-react";
import prop1 from "@/assets/landingPage/prop.jpg";
import prop2 from "@/assets/landingPage/prop1.jpg";
import prop3 from "@/assets/landingPage/prop2.jpg";
import prop5 from "@/assets/landingPage/prop4.jpg";
import prop6 from "@/assets/landingPage/prop5.jpg";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const featuredData = [
  {
    image: prop2,
    title: "Cozy Studio Apartment",
    location: "Kacyiru, Kigali",
    price: "100,000",
    amenities: ["Wifi", "Water"],
  },
  {
    image: prop3,
    title: "Spacious 3BR House",
    location: "Nyarutarama, Kigali",
    price: "300,000",
    amenities: ["Parking", "Garden", "Security"],
  },
  {
    image: prop5,
    title: "Furnished 1BR",
    location: "Kicukiro, Kigali",
    price: "200,000",
    amenities: ["Furnished", "Wifi"],
  },
  {
    image: prop6,
    title: "Modern 4BR Villa",
    location: "Gacuriro, Kigali",
    price: "500,000",
    amenities: ["Pool", "Parking", "Security"],
  },
  {
    image: prop1,
    title: "Modern 4BR Villa",
    location: "Gacuriro, Kigali",
    price: "500,000",
    amenities: ["Pool", "Parking", "Security"],
  },
];

function AvailablePropeties({
  setIsRegisterOpen,
}: {
  setIsRegisterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className=" w-full p-6 lg:px-30 md:py-20 max-w-[2000px]  mx-auto ">
      <div className=" flex items-center gap-3 mx-auto my-6 px-4 py-0.5 rounded-full bg-green-100 w-fit text-green-700 text-sm font-medium">
        <span>
          <Home />
        </span>
        <p>Property Previews</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <h1 className="text-3xl sm:text-4xl  text-gray-800 font-bold text-center">
          See What's Available
        </h1>
        <p className="text-gray-500 text-lg text-center ">
          Browse properties near you. Sign up to contact landlords and see full
          details.
        </p>
      </div>
      {/* featured properties */}

      <div className="prop-scroll overflow-hidden py-6 px-2">
        <div className="auto-scroll flex animate-infinite-scroll">
          {/* First set of items */}
          <div className="flex gap-6 pr-6">
            {featuredData.map((prop, idx) => (
              <div
                key={`first-${idx}`}
                className="shrink-0 w-[320px] md:w-95 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="h-56 bg-gray-200 overflow-hidden relative">
                  <img
                    src={prop.image}
                    loading="lazy"
                    alt="Available property for rent"
                    className="hover:scale-105 transition-transform duration-500 h-full w-full object-cover"
                  />
                  <div className="absolute -top-3 left-2 my-6 px-4 py-0.5 rounded-full bg-blue-700 w-fit text-white text-sm font-medium">
                    <p>Available</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
                      {prop.title}
                    </h2>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      {prop.location}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {prop.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => setIsRegisterOpen(true)}
                      className="w-full cursor-pointer flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group "
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated set of items for seamless transition */}
          <div className="flex gap-6 pr-6">
            {featuredData.map((prop, idx) => (
              <div
                key={`second-${idx}`}
                className="shrink-0 w-[320px] md:w-95 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="h-56 bg-gray-200 overflow-hidden relative">
                  <img
                    src={prop.image}
                    loading="lazy"
                    alt="Available property for rent"
                    className="hover:scale-105 transition-transform duration-500 h-full w-full object-cover"
                  />
                  <div className="absolute -top-3 left-2 my-6 px-4 py-0.5 rounded-full bg-blue-700 w-fit text-white text-sm font-medium">
                    <p>Available</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
                      {prop.title}
                    </h2>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      {prop.location}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {prop.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => setIsRegisterOpen(true)}
                      className="w-full cursor-pointer flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group "
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-6">
        <Link
          to="/register"
          className="text-nowrap z-1 overflow-hidden text-blue-700 relative group duration-300 transition-colors  hover:text-white p-1.5 font-semibold lg:px-6 cursor-pointer rounded-md border-2 border-blue-700 hover:border-white"
        >
          <span className="flex bg-blue-700 absolute inset-0 translate-y-12 group-hover:translate-0  -z-1 duration-300  " />
          Browse All Properties
          <ArrowRight className="inline ml-2" />
        </Link>
      </div>
      {/* sign in/up */}
      <div className="flex flex-col p-6 md:p-12 items-center justify-center space-y-4 mt-16 bg-linear-to-l from-blue-600 to-blue-700 rounded-2xl text-center">
        <span className="text-white">
          <Lock />
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          Want to see full property details?
        </h1>
        <p className="text-gray-200">
          Create a free account to view landlord contact, schedule viewings, and
          apply for properties.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            to="/login"
            className="text-nowrap bg-blue-700 z-1 overflow-hidden text-white relative group duration-300 transition-colors hover:text-blue-700 p-1.5 font-semibold lg:px-8 cursor-pointer rounded-md border-2 border-white hover:border-blue-700"
          >
            <span className="bg-white absolute inset-0 translate-y-12 group-hover:translate-0 -z-1 duration-300  " />
            Sign Up Free
          </Link>
          <Link
            to="/login"
            className="text-nowrap bg-blue-700 z-1 overflow-hidden text-white relative group duration-300 transition-colors hover:text-blue-700 p-1.5 font-semibold lg:px-8 cursor-pointer rounded-md border-2 border-white hover:border-blue-700"
          >
            <span className="bg-white absolute inset-0 translate-y-12 group-hover:translate-0 -z-1 duration-300  " />
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AvailablePropeties;
