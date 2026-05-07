function PlatformSteps() {
  return (
    <div
      id="how-it-works"
      className="w-full p-6 lg:px-30 md:py-20 max-w-[2000px] mx-auto "
    >
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <p className="px-4 py-0.5 rounded-full bg-indigo-100 w-fit text-indigo-700 text-sm font-medium">
          How It Works
        </p>
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold text-center">
          Get Started in 4 Easy Steps
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center text-center">
        <div className="flex flex-col items-center max-w-xs space-y-2">
          <span className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-l from-blue-500 to-blue-700 text-white font-bold text-xl">
            1
          </span>
          <p className="font-semibold text-gray-800 text-lg">Sign Up</p>
          <p className="text-gray-500 text-sm">
            Create your free account in 2 minutes
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xs space-y-2">
          <span className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-l from-blue-500 to-blue-700 text-white font-bold text-xl">
            2
          </span>
          <p className="font-semibold text-gray-800 text-lg">Add Properties</p>
          <p className="text-gray-500 text-sm">
            Landlords list properties / Tenants browse
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xs space-y-2">
          <span className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-l from-blue-500 to-blue-700 text-white font-bold text-xl">
            3
          </span>
          <p className="font-semibold text-gray-800 text-lg">Add Tenants</p>
          <p className="text-gray-500 text-sm">
            Create digital lease agreements
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xs space-y-2">
          <span className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-l from-blue-500 to-blue-700 text-white font-bold text-xl">
            4
          </span>
          <p className="font-semibold text-gray-800 text-lg">Get Paid</p>
          <p className="text-gray-500 text-sm">
            Track payments from your dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlatformSteps;
