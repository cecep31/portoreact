import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen shadow-md md:fixed bg-white">
    <div className="container mx-auto pb-4">
      <nav className="sm:flex  justify-between h-10 mb-3">
        <div className="hover:text-gray-900 font-bold text-gray-500 block mt-5">
          <NavLink exact to="/">Baleyadana</NavLink>
        </div>
        <div className="hid">
          <div className="flex items-center">
            <div className="pt-5 hover:text-red-600">
              <NavLink exact activeClassName="text-red-600" to="#main">Home</NavLink>
            </div>
            <div className="pt-5 ml-3 hover:text-red-600">
              <NavLink activeClassName="text-red-600" to="/about">About</NavLink>
            </div>
            <div className="pt-5 ml-3 hover:text-red-600">
              <NavLink activeClassName="text-red-600" to="/contact">Contact</NavLink>
            </div>
            <div className="pt-5 ml-3 hover:text-red-600">
              <a href="#foot">foot</a>
            </div>
            <div className="pt-5 ml-3 hover:text-red-600">
              <a href="#home">Home</a>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
    </div>
  );
};

export default Navbar;
