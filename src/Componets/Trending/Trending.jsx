import { NavLink } from "react-router";
import TrendingApps from "./TrendingApps";

const Trending = ({ data }) => {
  
  
  return (
    <div className="py-16 bg-gray-100 px-10">
      <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
      <p className="text-center text-gray-500 mt-2 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {
            data.slice(0,8.).map(tread => <TrendingApps key={tread.id} tread={tread}></TrendingApps>)
        }

        
      </div>
      <div className="text-center mt-10">
        <NavLink to={'/apps'}>
   <button className="bg-purple-600 text-white px-6 py-2 cursor-pointer rounded-lg hover:bg-purple-700 transition">
          Show All
        </button>
        </NavLink>
       
      </div>
    </div>
  );
};

export default Trending;
