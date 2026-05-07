import { CheckCircle } from "lucide-react";

function ProcessFeaturesTenants() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:gap-2 lg:gap-14 bg-white w-full  p-6  md:py-20 lg:px-30 max-w-[2000px]  mx-auto ">
      {/* info */}
      <div>
        <div className="space-y-6 mb-10">
          <p className="px-4 py-0.5 rounded-full bg-green-100 w-fit text-green-700 text-sm font-medium">
            For Tenants
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold ">
            Rent Smarter, Not Harder
          </h1>
          <p className="text-gray-600  md:pr-20">
            Pay rent from anywhere. Build credit history. Never lose a receipt
            again.
          </p>
        </div>
        <div className="text-md md:text-base lg:text-lg ">
          <div className="flex  items-start md:items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Pay Anywhere - Pay rent via mobile money from home, work, or
              traveling
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Build Credit History - Good payment record helps you rent better
              properties
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Digital Receipts - Instant payment proof. No more disputes
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              View Lease Online - Access your contract anytime from your phone
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Fair Treatment - Standard grace period. Clear late fee calculation
            </p>
          </div>
        </div>
      </div>
      {/* layout scheme */}
      <div className="md:w-[60%] mt-4 md:mt-0 lg:w-[55%]  flex items-center ">
        <img
          className="w-full mx-auto rounded-lg shadow-sm"
          loading="lazy"
          src="/payment.jpg"
          alt="current users on dashboard"
        />
      </div>
    </div>
  );
}

export default ProcessFeaturesTenants;
