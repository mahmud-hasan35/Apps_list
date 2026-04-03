import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaDownload, FaStar, FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router";

export default function AppDetails() {
  const detail = useLoaderData();
  const [installed, setInstalled] = useState(false);

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    const isExist = stored.find(item => item.id === detail.id);
    if (isExist) setInstalled(true);
  }, [detail.id]);

  const handleInstall = () => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];

    if (!stored.find(item => item.id === detail.id)) {
      stored.push(detail);
      localStorage.setItem("installedApps", JSON.stringify(stored));
    }

    setInstalled(true);
    toast.success("Install Successful ✅");
  };

  if (!detail) return <p className="text-center mt-10">Loading...</p>;

  const {
    title,
    image,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = detail;

  return (
    <div className="bg-gray-100 min-h-screen px-4 md:px-8 lg:px-16 py-8 md:py-12">

      {/* 🔥 Top Section */}
      <div className="bg-white rounded-xl shadow p-5 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
        
        {/* Image */}
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-32 sm:w-40 md:w-48 object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {title}
          </h1>

          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Developed by{" "}
            <span className="text-purple-600 font-medium">
              {companyName}
            </span>
          </p>

          <hr className="my-4" />

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8">

            <div className="flex items-center gap-2">
              <FaDownload className="text-green-600 text-lg sm:text-xl" />
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Downloads</p>
                <h3 className="font-bold text-lg sm:text-xl">
                  {formatNumber(downloads)}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-orange-500 text-lg sm:text-xl" />
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Rating</p>
                <h3 className="font-bold text-lg sm:text-xl">
                  {ratingAvg}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaThumbsUp className="text-purple-600 text-lg sm:text-xl" />
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Reviews</p>
                <h3 className="font-bold text-lg sm:text-xl">
                  {formatNumber(reviews)}
                </h3>
              </div>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 w-full sm:w-auto px-6 py-3 rounded-lg transition shadow text-sm sm:text-base
              ${
                installed
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
          >
            {installed ? "Installed ✅" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      {/* 🔥 Ratings */}
<div className="mt-10 bg-white p-5 md:p-8 rounded-xl shadow overflow-hidden">
  <h2 className="text-lg sm:text-xl font-semibold mb-6">Ratings</h2>

  <div className="space-y-4">
    {ratings?.map((r, i) => {
      const percentage = Math.min((r.count / 70000) * 100, 100); // 🔥 fix overflow

      return (
        <div
          key={i}
          className="flex items-center gap-2 sm:gap-4"
        >
          {/* Label */}
          <span className="w-12 sm:w-16 text-xs sm:text-sm text-gray-600 shrink-0">
            {r.name}
          </span>

          {/* Progress Bar */}
          <div className="flex-1 bg-gray-300 h-2 sm:h-3 rounded overflow-hidden">
            <div
              className="bg-orange-500 h-full rounded transition-all duration-500"
              style={{
                width: `${percentage}%`,
              }}
            ></div>
          </div>
        </div>
      );
    })}
  </div>
</div>

      {/* 🔥 Description */}
      <div className="mt-10 bg-white p-5 md:p-8 rounded-xl shadow">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Description</h2>

        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7 mb-4">
          {description}
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7 mb-4">
          A unique feature of this app is the integration of task lists with timers.
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
          It helps overcome procrastination with streaks and achievements.
        </p>
      </div>
    </div>
  );
}