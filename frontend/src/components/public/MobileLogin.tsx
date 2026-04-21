import { Mail, LockIcon, PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function MobileLogin() {
  return (
    <div className="sm:hidden h-screen w-screen relative">
      <div className="bg-linear-to-br from-blue-600 to-blue-900 h-[45%] w-full">
        <h1 className="text-center space-y-2 tracking-wider text-white font-bold text-3xl  pt-14">
          <p className="uppercase">Welcome to </p>
          <p className="uppercase">
            Urugo<span className="text-xs">rw</span>
          </p>
        </h1>
      </div>
      <form className="absolute  top-[24%] left-1/2 -translate-x-1/2 ">
        <div className="relative bg-white w-[90vw] rounded-2xl p-6 pt-14 pb-16 shadow-lg">
          <h1 className="text-2xl font-semibold mb-4 text-center text-blue-900 tracking-wide uppercase ">
            Login
          </h1>
          <div className="flex  flex-col gap-3">
            <div className=" relative placeholder:text-sm bg-transparent overflow-hidden border-b-2 border-gray-400/60">
              <input
                className="w-full h-full p-4 bg-transparent  pl-10 text-md "
                type="email"
                placeholder="Email"
                autoComplete="nope"
              />
              <span className="absolute text-gray-400 fill-amber-600   top-3 block">
                <Mail size={28} />
              </span>
            </div>
            <div className="relative placeholder:text-sm bg-transparent overflow-hidden border-b-2 border-gray-400/60">
              <input
                className="w-full h-full p-4 pl-10 text-md bg-transparent"
                type="text"
                placeholder="Phone number"
                autoComplete="nope"
              />
              <span className="absolute text-gray-400 fill-amber-600   top-3 block">
                <PhoneCall size={28} />
              </span>
            </div>
            <div className="relative placeholder:text-sm bg-transparent overflow-hidden border-b-2 border-gray-400/60">
              <input
                className="w-full h-full p-4 pl-10 text-md bg-transparent"
                type="password"
                placeholder="Password"
                autoComplete="nope"
              />
              <span className="absolute text-gray-400 fill-amber-600   top-3 block">
                <LockIcon size={28} />
              </span>
            </div>
          </div>
          <Link
            to="/forgot-password"
            className="hover:underline  block text-end py-4 text-blue-900 text-sm "
          >
            Forgot your Password?
          </Link>
          <button
            type="submit"
            className="absolute translate-y-1/2 left-1/2 -translate-x-1/2 bottom-0 w-26 h-26 flex items-center bg-linear-to-l from-blue-500 to-blue-700 justify-center border-11 border-white shadow-md rounded-full"
          >
            <span className="text-white tracking-wider">
              <ArrowRight />
            </span>
          </button>
        </div>
      </form>

      <div className="fixed bottom-8 text-md text-center w-full  text-gray-600">
        <span className="mr-2">Don't have an account?</span>
        <Link
          className="font-medium text-blue-900 hover:underline"
          to="/signup"
        >
          Register here
        </Link>
      </div>
    </div>
  );
}

export default MobileLogin;
