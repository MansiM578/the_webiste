import React from "react";

export default function Cards() {
  return (
    <div className="py-[100px] px-2">
      <h1 className="max-w-[1240px] font-semibold hover:font-bold mx-auto grid text-center text-4xl pb-2">
        Our Clients
      </h1>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 gap-6">
        <div className="shadow-xl  h-[300px] my-4 hover:scale-105 duration-500"></div>
        <div className="shadow-xl  h-[300px] my-4 hover:scale-105 duration-500 "></div>
        <div className="shadow-xl  h-[300px] my-4 hover:scale-105 duration-500"></div>
        <div className="shadow-xl  h-[300px] my-4 hover:scale-105 duration-500"></div>
      </div>
    </div>
  );
}
