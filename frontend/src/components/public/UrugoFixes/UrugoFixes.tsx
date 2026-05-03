import { CreditCard, MessageSquare, Shield } from "lucide-react";

function UrugoFixes() {
  return (
    <div className=" w-full p-6 lg:px-24 md:py-20 max-w-[2000px]  mx-auto ">
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <h1 className="text-3xl sm:text-4xl  text-gray-800 font-bold text-center">
          Urugo Fixes Everything
        </h1>
        <p className="text-gray-500 text-lg text-center ">
          One platform. Three solutions for everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 py-4">
        <div className="flex flex-col items-center justify-center px-10">
          <span className="mb-4 p-4 block text-white bg-linear-to-l from-blue-500 to-blue-700 w-fit rounded-full">
            <CreditCard size={28} />
          </span>
          <div className="text-center">
            <h1 className="font-semibold text-xl pb-4">
              Online Rent Collection
            </h1>
            <p className=" text-gray-600">
              Pay via MTN Mobile Money or Airtel Money. Automatic receipts. No
              cash. No travel.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-10">
          <span className="mb-4 p-4 block text-white bg-linear-to-l from-blue-500 to-blue-700 w-fit rounded-full">
            <Shield size={28} />
          </span>
          <div className="text-center">
            <h1 className="font-semibold text-xl pb-4">
              Tenant Blacklist System
            </h1>
            <p className=" text-gray-600">
              Check tenant history before renting. Report bad tenants. Build
              trusted community.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-10 ">
          <span className="mb-4 p-4 block text-white bg-linear-to-l from-blue-500 to-blue-700 w-fit rounded-full">
            <MessageSquare size={28} />
          </span>
          <div className="text-center">
            <h1 className="font-semibold text-xl pb-4">AI Assistant</h1>
            <p className=" text-gray-600">
              Find properties by describing what you want. Calculate
              affordability. Get neighborhood guides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrugoFixes;
