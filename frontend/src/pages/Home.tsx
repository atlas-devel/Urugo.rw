import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <section className="w-full text-wrap ">
      <div className="flex justify-center items-center">
        <div className="pt-25 max-md:pt-35 md:px-20   space-y-7 text-center ">
          <h1
            style={{ lineHeight: 1.15 }}
            className="font-bold text-wrap max-sm:text-4xl text-5xl md:text-6xl   text-blue-700/86 "
          >
            {" "}
            {/* <span className="block lg:hidden"> Urugo.rw </span> */}
            <span className="block ">
              {" "}
              Rwanda's Modern Rental <br className="max-md:hidden" /> Platform.
            </span>
          </h1>
          <p className="text-lg text-blue-900/50  ">
            Effortless Property Management for Landlords and Renters.
          </p>
          <div className="flex justify-center">
            <div className="flex gap-3 max-sm:flex-col ">
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer hover:text-blue-700 text-blue-700 px-13 md:py-4 lg:py-6 rounded-full"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-700/90 cursor-pointer px-13 md:py-4 lg:py-6 rounded-full"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
