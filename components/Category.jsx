"use client";
import React from "react";
import Product from "./Product";

const Category = (props) => {
  return (
    <div
      id={props.title}
      className="py-5 w-full h-fit gap-4 flex flex-col items-start"
    >
      <div className="flex flex-row gap-1.5 items-center">
        <div className="w-3.5 h-8 bg-orange-600 rounded-[3.5px]" />
        <h1 className="font-bold text-2xl">{props.title}</h1>
      </div>
      <div className="w-full h-fit flex gap-5 flex-row place-content-center flex-wrap">
        <Product
          title="Fifa 20"
          current={"$50"}
          former={"$30"}
          reviews={"55"}
          stars={"⭐️⭐️⭐️⭐️⭐️"}
        />
        <Product
          title="Red dead redemption"
          current={"$60"}
          former={"$34"}
          reviews={"120"}
          stars={"⭐️⭐️⭐️⭐️⭐️"}
        />
        <Product
          title="Infamous second sun"
          current={"$70"}
          former={"$40"}
          reviews={"45"}
          stars={"⭐️⭐️⭐️⭐️⭐️"}
        />
        <Product
          title="Formula 1 2024"
          current={"$80"}
          former={"48"}
          reviews={"55"}
          stars={"⭐️⭐️⭐️⭐️⭐️"}
        />
        <Product
          title="Horizon Forbidden west"
          current={"$70"}
          former={"$45"}
          reviews={"68"}
          stars={"⭐️⭐️⭐️⭐️⭐️"}
        />
        <Product
          title="Watch Dogs legion"
          current={"$60"}
          former={"$38"}
          reviews={"38"}
          stars={"⭐️⭐️⭐️⭐️⭐️"}
        />
      </div>
      <div className="w-full h-5 border-b-[1px] border-black border-opacity-15" />
    </div>
  );
};

export default Category;
