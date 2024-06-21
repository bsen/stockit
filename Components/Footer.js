"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-4 bg-white text-center  px-16 pt-4 max-sm:pt-14 max-sm:px-2 border-2 border-gray-100 p-4">
        <div className="h-auto  pt-10  max-sm:content-center">
          <h3 className="text-center text-4xl -mt-2 text-gray-700 max-sm:text-2xl underline">
            Supported By
          </h3>
          <div className="w-full  justify-center flex max-sm:hidden">
            <img src="./supporters.jpeg" className="w-[600px]" />
          </div>
          <div className="w-full justify-center flex sm:hidden">
            <img src="./logoVert.png" className="w-[300px]" />
          </div>
        </div>
        <Link
          href="/About"
          className="text-base underline underline-offset-4 -mt-5 font-semibold text-blue-500"
        >
          About Us
        </Link>
        <div className="text-sm text-gray-700 max-sm:text-xs">
          <p>© 2024 Algabay AI Private Limited.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
