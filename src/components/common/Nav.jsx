import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PersonIcon from "../../../public/images/image-avatar.png";
import CartIcon from "../../../public/images/icon-cart.svg";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const listItems =
    "text-sm text-gray-700 hover:text-gray-500 font-medium cursor-pointer";

  const handletoggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="w-full h-20 border-b-[1px] border-black border-opacity-10 flex items-center justify-between bg-white">
      <div className="flex gap-4 md:gap-7 flex-row items-center">
        <FontAwesomeIcon
          icon={toggleNav ? faXmark : faBars}
          size="lg"
          onClick={handletoggleNav}
          className="mt-1 cursor-pointer flex md:hidden"
        />
        <h1 className="font-bold text-2xl">Books</h1>
        <ul
          className={`${
            toggleNav
              ? "w-64 h-fit py-6 flex-col left-20 flex items-center justify-center rounded-lg absolute top-20 bg-gray-200 shadow-xl md:flex md:flex-row  md:relative md:top-0 md:left-14 md:bg-white md:shadow-none"
              : "hidden md:flex"
          } ${"gap-6 flex flex-row mt-1"}`}
        >
          <li className={listItems}>Horror</li>
          <li className={listItems}>Fantasy</li>
          <li className={listItems}>Mystery</li>
          <li className={listItems}>Romance</li>
          <li className={listItems}>Finance</li>
        </ul>
      </div>
      <div className="flex gap-8 items-center justify-center">
        <img src={CartIcon} alt="cart" className="cursor-pointer" />
        <img
          src={PersonIcon}
          className="w-9 h-9 rounded-full cursor-pointer bg-gray-200"
        />
      </div>
    </nav>
  );
};

export default Nav;
