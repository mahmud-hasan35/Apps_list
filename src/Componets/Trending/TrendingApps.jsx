import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function TrendingApps({ tread }) {


  const formatNumber = (num) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(".0", "") + "M";
  } 
  else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(".0", "") + "K";
  } 
  else {
    return num;
  }
};
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
          
          <Link to={`/detail/${tread.id}`}>
          <span className="text-green-600 flex items-center gap-1">
            <FaDownload /> {formatNumber(tread.downloads)}
          </span>
          </Link>

          <span className="text-orange-500 flex items-center gap-1">
            <FaStar /> {tread.ratingAvg}
          </span>
        </div>
      </div>

     
    </>
  );
}