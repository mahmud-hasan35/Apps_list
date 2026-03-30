const apps = new Array(8).fill(0);
import { FaDownload, FaStar } from "react-icons/fa";

const Trending = () => {
  return (
    <div className="py-16 bg-gray-100 px-10">
      <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
      <p className="text-center text-gray-500 mt-2 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {apps.map((_, i) => (
    <div key={i} className="bg-white p-4 rounded-lg shadow">
      
      {/* 🔥 Image */}
      <img
        src="https://via.placeholder.com/300x200"
        alt="app"
        className="h-40 w-full object-cover rounded mb-3"
      />

      <h3 className="text-sm font-semibold">
        App Name Example
      </h3>

    <div className="flex justify-between mt-2 text-xs items-center">
  <span className="text-green-600 flex items-center gap-1">
    <FaDownload /> 9M
  </span>

  <span className="text-orange-500 flex items-center gap-1">
    <FaStar /> 5
  </span>
</div>
    </div>
  ))}
</div>

      <div className="text-center mt-10">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Trending;