import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaDownload, FaStar, FaThumbsUp } from "react-icons/fa";
import {  useLoaderData, useNavigate } from "react-router";

export default function AppDetails() {
  const detail = useLoaderData();


  const formatNumber = (num) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  } else {
    return num;
  }
};



const [installed, setInstalled] = useState(false);

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("installedApps")) || [];

  const isExist = stored.find(item => item.id === detail.id);
  if (isExist) {
    setInstalled(true);
  }
}, [detail.id]);



const handleInstall = () => {
  const stored = JSON.parse(localStorage.getItem("installedApps")) || [];

  // already installed check
  if (!stored.find(item => item.id === detail.id)) {
    stored.push(detail);
    localStorage.setItem("installedApps", JSON.stringify(stored));
  }

  setInstalled(true);
  toast("Install Successful ✅");


};





  // 🔥 safe destructure
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
    ratings, // 🔥 important
  } = detail;

  return (
    <div className="bg-gray-100 min-h-screen px-4 md:px-10 py-10">
      
      {/* 🔥 Top Section */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Image */}
        <div className="bg-white p-6 rounded-xl shadow-md w-fit">
          <img
            src={image}
            alt={title}
            className="w-40 object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">
            {title}
          </h1>

          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-purple-600 font-medium">
              {companyName}
            </span>
          </p>

          <hr className="my-4" />

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            
            <div className="flex items-center gap-2">
              <FaDownload className="text-green-600 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Downloads</p>
                <h3 className="font-bold text-xl">{formatNumber(downloads)}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-orange-500 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Average Ratings</p>
                <h3 className="font-bold text-xl">{ratingAvg}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaThumbsUp className="text-purple-600 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <h3 className="font-bold text-xl">{formatNumber(reviews)}</h3>
              </div>
            </div>
          </div>

          {/* Install Button */}
        <button
  onClick={handleInstall}
  disabled={installed}
  className={`mt-6 px-6 py-2 rounded-lg transition shadow 
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
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-6">Ratings</h2>

        <div className="space-y-4">
          {ratings?.map((r, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-16 text-sm text-gray-600">
                {r.name}
              </span>

              <div className="flex-1 bg-gray-300 h-3 rounded">
                <div
                  className="bg-orange-500 h-3 rounded"
                  style={{
                    width: `${(r.count / 70000) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Description */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Description</h2>

        <p className="text-gray-600 leading-7 mb-4">
          {description}
        </p>

        <p className="text-gray-600 leading-7 mb-4">
          A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured.
        </p>

        <p className="text-gray-600 leading-7">
          For people who struggle with procrastination, the app provides motivational streaks and achievements. It is a personal trainer for your brain.
        </p>
      </div>
    </div>
  );
}