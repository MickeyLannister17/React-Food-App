import { useState } from "react";
import React from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div
      className="w-full mx-auto flex justify-between items-center p-4 bg-black
    "
    >
      <div className="flex items-center gap-1">
        <div className="cursor-pointer">
          <AiOutlineMenu
            onClick={() => setNav(!nav)}
            size={30}
            className="text-white"
          />
        </div>
        <div>
          <h1 className="font-signature text-3xl sm:text-4xl lg:text-5xl text-white px-2">
            Fluppies
          </h1>
        </div>
        <div
          className="hidden md:flex items-center bg-gray-200 rounded-full
        p-1 text-[14px]"
        >
          <p className="bg-black text-white rounded-full p-2 cursor-pointer">
            Delivery
          </p>
          <p className="text-black p-2 cursor-pointer">Pickup</p>
        </div>
      </div>
      <div
        className="bg-gray-200 rounded-full flex items-center px-2 w-[200px]
      sm:w-[400px] lg:w-[500px]"
      >
        <AiOutlineSearch size={20} className="text-black" />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>
      <button
        className="bg-gray-200 text-black hidden md:flex items-center py-2
      rounded-full"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
      {/* {Mobile Menu} */}
      {/* {Overlay} */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* {Side drawer menu} */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer duration-300"
        />
        <h2 className="font-signature text-2xl p-4 font-bold">Fluppies</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
