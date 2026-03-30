import { FaDownload, FaStar } from "react-icons/fa";

export default function TrendingApps({ tread }) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
        
        <img
          src={tread.image}
          alt={tread.title}
          className="h-40 w-full object-cover rounded mb-3"
        />

        <h3 className="text-sm font-semibold">
          {tread.title}
        </h3>

        <div className="flex justify-between mt-2 text-xs items-center">
          <span className="text-green-600 flex items-center gap-1">
            <FaDownload /> {tread.downloads}
          </span>

          <span className="text-orange-500 flex items-center gap-1">
            <FaStar /> {tread.ratingAvg}
          </span>
        </div>
      </div>

     
    </>
  );
}