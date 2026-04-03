import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center max-w-md w-full">
        
        {/* Icon */}
        <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4" />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          404
        </h1>

        <h2 className="text-lg md:text-xl font-semibold mt-2">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition shadow">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
}