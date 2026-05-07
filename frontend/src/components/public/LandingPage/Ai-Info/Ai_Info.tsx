function Ai_Info() {
  return (
    <div className="w-full p-6 lg:px-30 md:py-20 max-w-[2000px] mx-auto bg-gray-50">
      <div className="flex flex-col items-center justify-center space-y-4 pb-10">
        <p className="px-4 py-0.5 rounded-full bg-violet-100 w-fit text-violet-700 text-sm font-medium">
          AI-Powered Assistant
        </p>
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold text-center">
          Meet Your AI Rental Assistant
        </h1>
        <p className="text-gray-500 text-lg text-center max-w-2xl">
          No forms. No complicated searches. Just describe what you want in
          plain English.
        </p>
      </div>

      {/*  Chat Window */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <h3 className="font-semibold text-gray-700">Urugo AI Assistant</h3>
        </div>

        {/* Chat Messages */}
        <div className="p-6 space-y-6 bg-gray-50/50">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%] shadow-sm">
              <p>I need a 2 bedroom in Remera, around 200k</p>
            </div>
          </div>

          {/* AI Message */}
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[80%] shadow-sm space-y-2">
              <p>
                Found 8 apartments in Remera with 2 bedrooms under 200,000 RWF.
                Would you like to see:
              </p>
              <div className="flex flex-col space-y-1 text-blue-600 text-sm mt-2">
                <span className="cursor-pointer hover:underline">
                  → Cheapest first (starting at 150k)
                </span>
                <span className="cursor-pointer hover:underline">
                  → Best rated landlords
                </span>
                <span className="cursor-pointer hover:underline">
                  → Closest to Remera market
                </span>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%] shadow-sm">
              <p>Best rated</p>
            </div>
          </div>

          {/* AI Message */}
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[80%] shadow-sm">
              <p>
                Here are the top 5 with 4.5+ star landlords. The best rated is a
                beautifully maintained 2BR in Remera with 4.8 stars from 12
                reviews. Should I schedule a viewing?
              </p>
            </div>
          </div>
        </div>

        {/* Chat Input Area (Visual Only) */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <span className="text-gray-400 flex-1">Type your message...</span>
            <div className="bg-blue-600 text-white p-2 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 22.5h15a2.25 2.25 0 002.25-2.25V15M12 2.25v15m0-15l-4.5 4.5m4.5-4.5l4.5 4.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai_Info;
