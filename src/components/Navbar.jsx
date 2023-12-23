import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center bg-white rounded mb-5 p-4">
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
        <li className="space-x-4">
          <Link to="/">Home</Link>
          {!user?.email ? (
            <Link to="/login">
              <button className="px-6 py-2 text-sm text-white font-medium  transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 ">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="px-6 py-2 text-sm text-white font-medium  transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-400 "
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
