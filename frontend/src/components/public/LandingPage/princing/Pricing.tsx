function Pricing() {
  return (
    <div
      id="pricing"
      className="bg-gray-50 w-full p-6 lg:px-30 md:py-20 max-w-[2000px] mx-auto "
    >
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <p className="px-4 py-0.5 rounded-full bg-indigo-100 w-fit text-indigo-700 text-sm font-medium">
          Pricing
        </p>
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold text-center">
          Simple Transparent Pricing
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Free</h2>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">$0</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">Forever free</p>
          <ul className="flex-1 space-y-4 text-gray-600 mb-8">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Browse properties
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Basic search
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Save favorites
            </li>
          </ul>
          <button className="w-full py-2.5 px-4 rounded-lg border border-blue-700 text-blue-700 font-medium hover:bg-indigo-50 transition-colors">
            Get Started
          </button>
        </div>

        {/* Landlord Plan */}
        <div className="flex flex-col p-6 bg-white border-2 border-blue-700 rounded-2xl shadow-lg relative transform md:-translate-y-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Most Popular
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Landlord</h2>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">2%</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">Per transaction</p>
          <ul className="flex-1 space-y-4 text-gray-600 mb-8">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Unlimited properties
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Online payments
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Blacklist check
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Digital leases
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Tax reports
            </li>
          </ul>
          <button className="w-full py-2.5 px-4 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors">
            Start Free Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Enterprise</h2>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">
              Custom
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-6">Contact sales</p>
          <ul className="flex-1 space-y-4 text-gray-600 mb-8">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              50+ properties
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Dedicated support
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              API access
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Custom integration
            </li>
          </ul>
          <button className="w-full py-2.5 px-4 rounded-lg border border-blue-700 text-blue-700 font-medium hover:bg-indigo-50 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
