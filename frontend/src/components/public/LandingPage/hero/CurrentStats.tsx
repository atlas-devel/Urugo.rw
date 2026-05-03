function CurrentStats() {
  return (
    <div className="grid grid-cols-2 gap-6  py-12 md:grid-cols-4 place-items-center">
      {/* active users */}
      <div className="flex flex-col justify-center  items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          12,000+
        </h1>
        <p className="text-center text-gray-500">Active Users</p>
      </div>
      {/* properties */}
      <div className="flex flex-col justify-center  items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">150+</h1>
        <p className="text-center text-gray-500">Properties Listed</p>
      </div>
      {/* payment processed */}
      <div className="flex flex-col justify-center  items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">2,500+</h1>
        <p className="text-center text-gray-500">Payments Processed</p>
      </div>
      {/* satisfaction */}
      <div className="flex flex-col justify-center  items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">98%</h1>
        <p className="text-center text-gray-500">Satisfaction Rate</p>
      </div>
    </div>
  );
}

export default CurrentStats;
