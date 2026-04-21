import { Link } from "react-router-dom";

function DesktopLogin() {
  return (
    <div className="max-sm:hidden flex shadow-lg rounded-xl overflow-hidden max-w-5xl">
      <div className="p-12">
        <h1 className="text-3xl font-bold mb-4 text-center py-10 pt-5 text-gray-800 ">
          Sign In
        </h1>
        <form className="space-y-6">
          <div className="  bg-blue-50  rounded-2xl min-w-100 w-full overflow-hidden">
            <input
              className="p-4 px-4 w-full placeholder:text-gray-500  h-full border-none outline-none"
              type="email"
              placeholder="Email Address"
              autoComplete="off"
            />
          </div>
          <div className="  bg-blue-50  rounded-2xl min-w-100 w-full overflow-hidden">
            <input
              className="p-4 px-4 w-full placeholder:text-gray-500  h-full border-none outline-none"
              type="text"
              placeholder="Phone number"
              autoComplete="off"
            />
          </div>
          <div className="  bg-blue-50  rounded-2xl min-w-100 w-full overflow-hidden">
            <input
              className="p-4 px-4 w-full placeholder:text-gray-500  h-full border-none outline-none"
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <Link
            to="/forgot-password"
            className="hover:underline  block text-center text-blue-900 text-sm font-medium"
          >
            Forgot your Password?
          </Link>
          <div className="flex items-center justify-center">
            <button className="p-2 my-2 mt-0.5  px-8 rounded-full font-semibold cursor-pointer bg-linear-to-r from-blue-500 to-blue-800  text-white">
              SIGN IN
            </button>
          </div>{" "}
        </form>
      </div>
      <div className="max-lg:hidden bg-linear-to-br from-blue-600 to-blue-900 space-y-4 text-white p-12 py-30 fle-1 flex flex-col items-center justify-center ">
        <h1 className="font-semibold text-3xl">Hey There!</h1>
        <p className="text-center text-gray-100 ">
          Begin your amazing journey by creating <br />
          an account with us today
        </p>
        <button className="z-1 overflow-hidden text-white relative group duraion-300 transition-colors hover:text-gray-800 p-2 mt-4 font-semibold px-10 cursor-pointer rounded-full border-2 border-white">
          <span className="bg-white absolute inset-0 translate-y-12 group-hover:translate-0 -z-1 duration-300  " />
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default DesktopLogin;
