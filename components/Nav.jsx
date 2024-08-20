"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Bars from "../public/images/icon-menu.svg";
import Xmark from "../public/images/icon-close.svg";
import PersonIcon from "../public/images/image-avatar.png";
import CartIcon from "../public/images/icon-cart.svg";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const listItems =
    "text-sm text-gray-700 hover:text-gray-500 font-medium cursor-pointer";

  const handletoggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const handletoggleCart = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <nav className="fixed top-0 z-10 right-0 px-7 sm:px-14 w-full h-20 flex flex-col items-center justify-between bg-white">
      <div className="w-full h-full flex flex-row justify-between">
        <div className="flex gap-4 md:gap-7 flex-row items-center">
          <Image
            width={16}
            height={16}
            src={toggleNav ? Xmark : Bars}
            alt="nav"
            onClick={handletoggleNav}
            className="mt-1 cursor-pointer flex md:hidden"
          />
          <h1 className="font-bold text-2xl">Books</h1>
          <ul
            className={`${
              toggleNav
                ? "w-[235px] md:w-fit h-fit py-6 flex-col left-5 sm:left-14 md:left-14 flex items-center justify-center rounded-lg absolute top-[85px] bg-gray-200 shadow-xl md:flex md:flex-row  md:relative md:top-0 md:bg-white md:shadow-none"
                : "hidden md:flex"
            } ${"gap-6 flex flex-row mt-1"}`}
          >
            <li className={listItems}>Games</li>
            <li className={listItems}>Fridges</li>
            <li className={listItems}>Microwaves</li>
            <li className={listItems}>Tv</li>
            <li className={listItems}>Lights</li>
          </ul>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <Image
            width={20}
            height={20}
            alt="cart"
            src={CartIcon}
            onClick={handletoggleCart}
            className="cursor-pointer"
          />
          <Image
            width={30}
            height={30}
            alt="avatar"
            src={PersonIcon}
            className="rounded-full cursor-pointer bg-gray-200"
          />
          <div
            className={`${
              toggleCart
                ? "absolute z-10 top-[88px] right-7 sm:right-10 w-60 h-44 rounded-lg bg-red-500"
                : "hidden"
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
