import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaDownload, FaStar } from "react-icons/fa";

export default function InstalledApps() {
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("");
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(stored);
  }, []);

  const handleUninstall = (id) => {
    const updated = apps.filter(app => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.error("App Uninstalled ❌");
  };

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  const sortedApps = [...apps].sort((a, b) => {
    if (sortType === "high") return b.downloads - a.downloads;
    if (sortType === "low") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white p-4 rounded-lg shadow mb-6 relative">
        
        <h2 className="text-lg md:text-xl font-bold text-purple-600">
          {apps.length} Apps Found
        </h2>

        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setShowSort(!showSort)}
            className="w-full sm:w-auto bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600"
          >
            Sort by Downloads
          </button>

          {showSort && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow w-full sm:w-40 z-10">
              <button
                onClick={() => {
                  setSortType("high");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                High → Low
              </button>

              <button
                onClick={() => {
                  setSortType("low");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Low → High
              </button>
            </div>
          )}
        </div>
      </div>

      {/* App List */}
      <div className="space-y-4">
        {apps.length === 0 ? (
          <p className="text-center text-gray-500">No apps installed 😢</p>
        ) : (
          sortedApps.map(app => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              {/* Left Side */}
              <div className="flex items-center gap-3 sm:gap-4">
                
                {/* Image */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded"
                />

                {/* Info */}
                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    {app.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 mt-1">

                    <span className="flex items-center gap-1">
                      <FaDownload className="text-green-500" />
                      {formatNumber(app.downloads)}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaStar className="text-orange-500" />
                      {app.ratingAvg}
                    </span>

                    <span>
                      {formatNumber(app.reviews)} reviews
                    </span>

                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}