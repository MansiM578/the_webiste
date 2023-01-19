/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4 ">
      <div className="max-w-[1440px] py-[12px] items-center mx-auto flex justify-between">
        <div className="text-3xl font-bold">
          <Link to="/">Icon Copier Care</Link>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
            ${toggle ? "left-[0]" : "left-[-100%]"}
            `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">About Us</li>
          <li className="p-5">Products</li>
          <li className="p-5">Clients</li>
          <li className="p-5">FAQs</li>
          <li className="p-5">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default header;
