import React from "react";
import printer from "../assets/printer.jpg";
import { Link } from "react-router-dom";
export default function Experts() {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2">
      <div className="border-[blue]  col-span-1 md:w-[80%] text-center">
        <img src={printer} alt="" className="inline" />
      </div>
      <div className="border-[blue]  col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] text-4xl font-bold my-2">
          Lorem, ipsum dolor.
        </h1>
        <p className="my-2 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vitae,
          repellat voluptatem magnam nulla praesentium repudiandae atque,
          pariatur, inventore laborum voluptatibus quisquam optio perspiciatis
          maiores. Sit et odit amet beatae?
        </p>
        <Link to="/services">
          <button className=" w-[30%] bg-black text-white p-3 rounded">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
}
