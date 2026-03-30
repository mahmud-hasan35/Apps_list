import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
 import img from "../assets/hero (2).png"

const Hero = () => {
  const [downloads, setDownloads] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [apps, setApps] = useState(0);

  // 🔥 AOS init + Counter
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    let d = 0,
      r = 0,
      a = 0;

    const interval = setInterval(() => {
      if (d < 29600000) {
        d += 200000;
        setDownloads(d);
      }

      if (r < 906000) {
        r += 8000;
        setReviews(r);
      }

      if (a < 132) {
        a += 2;
        setApps(a);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <div className="text-center py-12 md:py-20 px-4">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
        >
          We Build
          <span className="text-purple-600"> Productive</span> Apps
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-500 mt-4 max-w-xl mx-auto"
        >
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
        >
      <a
  href="https://play.google.com/store"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
    Google Play
  </button>
</a>

<a
  href="https://www.apple.com/app-store/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
    App Store
  </button>
</a>
        </div>

           <div className="relative flex justify-center mt-10">
        <img
          src={img}
          alt="phone"
          data-aos="zoom-in"
          className="w-80  md:w-[600px] relative z-10 translate-y-20"
        />
      </div>
      </div>

      {/* STATS */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-12 md:py-16 text-center px-4">
        <h2
          data-aos="fade-up"
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-10"
        >
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div data-aos="fade-up">
            <h3 className="text-3xl md:text-4xl font-bold">
              {formatNumber(downloads)}
            </h3>
            <p className="text-sm mt-2">Total Downloads</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl md:text-4xl font-bold">
              {formatNumber(reviews)}
            </h3>
            <p className="text-sm mt-2">Total Reviews</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-3xl md:text-4xl font-bold">
              {apps}+
            </h3>
            <p className="text-sm mt-2">Active Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;