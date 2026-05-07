import { CheckCircle } from "lucide-react";

function ProcessFeaturesLandLord() {
  return (
    <div
      id="features"
      className="flex flex-col md:flex-row md:gap-2 lg:gap-8 bg-gray-50 w-full  p-6  md:py-20 lg:px-30 max-w-[2000px]  mx-auto "
    >
      {/* info */}
      <div className="text-md md:text-base lg:text-lg   ">
        <div className="space-y-6 mb-10">
          <p className="px-4 py-0.5 rounded-full bg-blue-100 w-fit text-blue-700 text-sm font-medium">
            For Landlords
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold ">
            Everything You Need to Manage Your Properties
          </h1>
          <p className="text-gray-600  md:pr-20">
            Stop using notebooks and Excel. Get a complete property management
            dashboard.
          </p>
        </div>
        <div>
          <div className="flex  items-start md:items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Dashboard Overview - See all properties and payment status at a
              glance
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Online Payments - Tenants pay via mobile money, you receive in
              bank
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Blacklist Check - Search tenant history before signing lease
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Automated Reminders - SMS and email reminders before due date
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Digital Lease Agreements - Sign online, store in cloud
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
            <span className="text-green-500 bg-green-100 rounded-full p-1.5">
              <CheckCircle size={18} />
            </span>
            <p className=" md:pr-10 text-gray-700">
              Tax Reports - Generate income reports with one click
            </p>
          </div>
        </div>
      </div>
      {/* layout scheme */}
      <div className="md:w-[60%] mt-4 md:mt-0 lg:w-[55%]  flex items-center ">
        <img
          className="w-full mx-auto rounded-lg shadow-sm"
          loading="lazy"
          src="/dashboard.png"
          alt="current users on dashboard"
        />
      </div>
    </div>
  );
}

export default ProcessFeaturesLandLord;
