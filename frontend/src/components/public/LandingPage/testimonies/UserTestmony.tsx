import { Link } from "react-router-dom";

function UserTestmony() {
  return (
    <div
      id="testmonials"
      className=" w-full p-6 lg:px-30 md:py-20 max-w-[2000px] mx-auto "
    >
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <p className="px-4 py-0.5 rounded-full bg-blue-100 w-fit text-blue-700 text-sm font-medium">
          Testmonies
        </p>
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold text-center">
          What Our Users Say
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between space-y-6">
          <p className="text-gray-600 italic leading-relaxed">
            "Before Urugo, I used to run kilometers across Kigali with brokers.
            We would walk for hours, they would show me houses that didn't match
            what I wanted, and sometimes after that long run, I'd leave without
            finding anything. It was exhausting and frustrating. With Urugo's AI
            assistant, I described what I wanted from my phone, saw photos
            first, and only visited properties I actually liked. I found my
            apartment in Kimironko in just 3 days instead of 3 months!"
          </p>
          <div>
            <h4 className="font-bold text-gray-900">Marie Claire</h4>
            <p className="text-sm text-gray-500 mb-2">
              Property Seeker, Found home in Kimironko
            </p>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
              Saved over 50km of unnecessary visits
            </span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between space-y-6">
          <p className="text-gray-600 italic leading-relaxed">
            "Urugo saved me hours of tracking payments manually across my 45
            properties. Before, I used notebooks and Excel, and I'd often forget
            who paid and who didn't. Now I see everything on my dashboard - blue
            for paid, yellow for grace period, red for overdue. The automatic
            reminders to tenants have reduced late payments by 70%."
          </p>
          <div>
            <h4 className="font-bold text-gray-900">Jean Mugisha</h4>
            <p className="text-sm text-gray-500 mb-2">
              Landlord, 45 properties
            </p>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
              70% reduction in late payments
            </span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between space-y-6">
          <p className="text-gray-600 italic leading-relaxed">
            "Paying rent used to be a nightmare. I had to take time off work,
            travel across town, and hope my landlord was available. Sometimes
            I'd find him closed and waste the whole day. Now I pay from my phone
            in 30 seconds. I get an instant receipt, and I'm building credit
            history for my next rental. No more blocked days and travel
            expenses."
          </p>
          <div>
            <h4 className="font-bold text-gray-900">Alice Uwase</h4>
            <p className="text-sm text-gray-500 mb-2">Tenant, Remera</p>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
              Saves 4+ hours every month
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 md:p-12 items-center justify-center space-y-4 mt-16 bg-linear-to-l from-blue-600 to-blue-700 rounded-2xl text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          Ready to Simplify Your Rental Management?
        </h1>
        <p className="text-gray-200 md:px-30">
          Join hundreds of landlords and tenants using Urugo to make renting
          easier. No more endless walks with brokers. <br className="hidden xl:block"/> No more cash payment
          hassles.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            to="/login"
            className="text-nowrap bg-blue-700 z-1 overflow-hidden text-white relative group duration-300 transition-colors hover:text-blue-700 p-1.5 font-semibold lg:px-8 cursor-pointer rounded-md border-2 border-white hover:border-blue-700"
          >
            <span className="bg-white absolute inset-0 translate-y-12 group-hover:translate-0 -z-1 duration-300  " />
            Get Started Now
          </Link>
        </div>
        <p className="max-md:text-xs text-center text-gray-300">
          No credit card required. Free for tenants forever.
        </p>
      </div>
    </div>
  );
}

export default UserTestmony;
