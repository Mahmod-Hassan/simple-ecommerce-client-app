import React, { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center bg-white rounded mb-5 p-4 relative">
      <h1 className="text-2xl font-bold">
        <Link to="/">Mobile-Phone</Link>
      </h1>
      <div className="hidden md:block">
        <input
          className="border outline-none max-w-md bg-gray-50 p-2"
          type="text"
          placeholder="Search.."
        />
      </div>
      <ul>
        <li
          className={`${
            open
              ? "flex flex-col md:flex-row top-16 w-full border-t md:border-none left-0 absolute md:static bg-white p-5 md:p-0"
              : "hidden md:flex"
          } items-center gap-3`}
        >
          <Link
            to="/"
            className="hover:bg-blue-500 hover:text-white bg-gray-100 py-1 px-2 rounded"
          >
            Home
          </Link>

          <button className="text-xl">
            <FaCartArrowDown />
          </button>

          {!user?.email ? (
            <Link to="/login">
              <button className="bg-gray-100 text-blue-500 font-semibold py-1 px-2 rounded hover:bg-blue-500 hover:text-white">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="px-6 py-2 text-sm text-white font-medium  transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-400"
            >
              Logout
            </button>
          )}
        </li>
        <li className="md:hidden">
          {!open ? (
            <button onClick={() => setOpen(!open)} className="text-xl">
              <FaBars />
            </button>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl font-bold"
            >
              <IoClose />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
