import { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navStyle = ({ isActive }) =>
  isActive
    ? "text-purple-600 font-bold border-b-2 border-purple-600"
    : "hover:text-purple-600";

  return (
    <div className="bg-white shadow-sm px-4 md:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-lg text-blue-600">HERO.IO</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600">
          <NavLink to={'/'} className={navStyle}>Home</NavLink>
          <NavLink to={'/Apps'} className={navStyle}>Apps</NavLink>
          <NavLink to={'/installed'} className={navStyle}>
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
  {open ? <FaTimes /> : <FaBars />}
</div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-600">
          <NavLink to={'/'} className={navStyle}>Home</NavLink>
          <NavLink to={'/Apps'} className={navStyle}>Apps</NavLink>
          <NavLink to={'/installed'} className={navStyle}>Installation</NavLink>


        </div>
      )}
    </div>
  );
};

export default Navbar;