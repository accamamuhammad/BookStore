"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Product = (props) => {
  const [currentData, setCurrentData] = useState([
    props.title,
    props.current,
    props.stars,
    props.reviews,
  ]);
  const productStyling = "flex flex-col gap-[2px] w-36 sm:w-48 rounded-md";

  const handlePassItemData = () => {
    console.log(currentData);
  };

  return (
    <Link href="/">
      <div className={productStyling} onClick={handlePassItemData}>
        <div className="border-[0.5px] relative border-black w-full h-44 sm:h-60 rounded-lg"></div>
        <h3 className="text-[.9rem] mt-1 font-medium">{props.title}</h3>
        <div className="flex gap-1 flex-row items-center">
          <span className="text-xs text-orange-500">{props.current}</span>
          <span className="text-xs text-gray-500 line-through">
            {props.former}
          </span>
        </div>
        <div className="flex gap-1.5 flex-row items-center">
          <p className="text-sm">{props.stars}</p>
          <p className="text-xs text-gray-500">({props.reviews})</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
