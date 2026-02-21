import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

function Hero() {
  return (
    <section className="w-full text-wrap  py-12 lg:py-22 bg-blue-600">
      <div className="flex justify-center items-center">
        <div className="md:px-20 max-md:px-2   space-y-7 text-center ">
          <h1
            style={{ lineHeight: 1.15 }}
            className="font-bold text-wrap  text-5xl md:text-6xl   text-white "
          >
            {" "}
            <span className="block ">
              {" "}
              Rwanda's Modern Rental <br className="max-md:hidden" /> Platform.
            </span>
          </h1>
          <p className="text-lg text-white  ">
            Effortless Property Management for Landlords and Renters.
          </p>
          <div className="flex justify-center">
            <div className="flex gap-3 max-sm:flex-col ">
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer hover:text-blue-700 text-blue-600 px-13 md:py-4 lg:py-5.5 hover:-translate-y-1 duration-300 hover:shadow-sm rounded-full"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
