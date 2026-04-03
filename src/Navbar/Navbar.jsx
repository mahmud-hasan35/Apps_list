import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm px-4 md:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-lg text-blue-600">HERO.IO</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600">
          <NavLink to={'/'} className="text-purple-600 font-medium cursor-pointer">Home</NavLink>
          <NavLink to={'/Apps'} className="list-none">Apps</NavLink>
          <NavLink to={'/installed'} className="cursor-pointer hover:text-purple-600">
            Installation
          </NavLink>
        </ul>

        {/* Desktop Button */}
                  <a
  href="https://github.com/mahmud-hasan35"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center cursor-pointer gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg w-fit hover:bg-purple-700 transition">
    <FaGithub className="text-lg" />
    Contribute
  </button>
</a>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-600">
          <NavLink to={'/'} className="list-none text-purple-600 font-medium">Home</NavLink>
          <NavLink to={'/Apps'} className="list-none">Apps</NavLink>
          <NavLink to={'/'} className="list-none">Installation</NavLink>

          <a
  href="https://github.com/mahmud-hasan35"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center cursor-pointer gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg w-fit hover:bg-purple-700 transition">
    <FaGithub className="text-lg" />
    Contribute
  </button>
</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;