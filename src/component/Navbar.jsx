import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/60 text-white border-b border-b-gray-400">

      <div className="flex justify-center md:justify-between items-center px-10 h-[60px]">
        
        <div className="flex gap-15 items-center">
          <RxHamburgerMenu className=" absolute flex top-3 left-5 text-4xl md:hidden" />
          <Link to="/">
          <img src="activision_logo.png" alt="Logo" className="h-[30px]" />
          </Link> 
          <ul className="md:flex hidden gap-10 items-center text-gray-300">
            <li className="cursor-pointer hover:text-white">
             GAMES
            </li>
            <li >
              <Link to="/about" className="flex items-center gap-2 hover:text-white">
                ABOUT <IoIosArrowDown />
              </Link>
            </li>
            <li >
              <Link to="/Career" className="flex items-center gap-2 hover:text-white">
                CAREERS <IoIosArrowDown />
              </Link>
            </li>
            <li >
              <Link to="/Support" className="flex items-center gap-2 hover:text-white">
                SUPPORT <IoIosArrowDown />
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:flex items-center hidden ">
          <button className="font-bold bg-blue-300/30 hover:bg-blue-300/50 rounded-2xl border hover:border-3 border-blue-500/80 w-22 h-7 cursor-pointer ease-in duration-300 flex items-center justify-center">
            SIGN UP
          </button>
          <button className="text-gray-300 px-4 py-1 rounded cursor-pointer">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
