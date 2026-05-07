import { Building, Users, Search } from "lucide-react";

function ExistingProblems() {
  return (
    <div className="bg-gray-50 w-full  p-6  md:py-20 lg:px-30 max-w-[2000px]  mx-auto ">
      <div className="flex flex-col items-center justify-center space-y-3 pb-12">
        <h1 className="text-4xl text-gray-800 font-bold">
          Time to Fix Rentals
        </h1>
        <p className="text-gray-500 px-4 text-lg text-center ">
          Here's what landlords and tenants face every day
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8  ">
        <div className=" bg-white  p-6 rounded-xl shadow-sm">
          <span className="rounded-lg mb-2 text-red-500 bg-red-100 w-fit block p-2 md:p-4 ">
            <Building size={30} />
          </span>
          <p className="font-semibold text-2xl">For Landlords</p>
          <ul className="list-disc ml-5 space-y-1 mt-2  text-gray-600">
            <li>Cash payment hassles</li>
            <li>No way to check bad tenants</li>
            <li>Manual tracking in notebooks</li>
            <li>Communication issues</li>
          </ul>
        </div>
        <div className="bg-white  p-8 rounded-xl shadow-sm">
          <span className="rounded-lg mb-2 text-green-500 bg-green-100 w-fit block p-2 md:p-4 ">
            <Users size={30} />
          </span>
          <p className="font-semibold text-2xl">For Tenants</p>
          <ul className="list-disc ml-5 space-y-1 mt-2  text-gray-600">
            <li>Must visit landlord to pay </li>
            <li>No payment history proof</li>
            <li>Unclear lease terms</li>
            <li>Trust and dispute problems</li>
          </ul>
        </div>
        <div className="bg-white  p-8 rounded-xl shadow-sm ">
          <span className="rounded-lg mb-2 text-blue-500 bg-blue-100 w-fit block p-2 md:p-4 ">
            <Search size={30} />
          </span>
          <p className="font-semibold text-2xl">For Property Seekers</p>

          <ul className="list-disc ml-5 space-y-1 mt-2  text-gray-600">
            <li>Hard to find properties</li>
            <li>No landlord reviews</li>
            <li>Hidden costs</li>
            <li>Waste time visiting unsuitable places</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExistingProblems;
