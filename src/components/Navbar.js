import React from "react";
import About from "./About";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-5 sticky top-0  ">
      <div className=" flex flex-shrink-0 items-center ml-8">
        <h1 className=" text-white text-3xl ">NP</h1>
      </div>

      <div className=" text-white m-8 flex items-center justify-center gap-5">
        <a href="" className=" text-white hover:text-gray-400">
          Home
        </a>
        <a href="" className=" text-white hover:text-gray-400">
          About
        </a>
        <a href="" className=" text-white hover:text-gray-400">
          Technologies
        </a>
        <a href="" className=" text-white hover:text-gray-400">
          Projects
        </a>
        <a href="" className=" text-white hover:text-gray-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
