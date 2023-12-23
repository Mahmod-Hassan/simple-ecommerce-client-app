import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
