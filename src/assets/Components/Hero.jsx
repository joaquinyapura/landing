import React from "react";
import img1 from "../img/img1.webp";

export const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="container flex flex-col items-center justify-center mt-6 lg:mt-20 p-4">
        <h1 className="text-3xl lg:text-6xl font-semibold ">
          Virtual VR for developers
        </h1>
        <span className="text-3xl lg:text-6xl bg-gradient-to-r from-orange-700 to-orange-800 font-bold text-transparent bg-clip-text">
          All in one
        </span>
        <p className="text-gray-500 text-center mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          repudiandae enim vero impedit expedita itaque magnam voluptates vel
          autem, iusto optio rem labore eos dolorum obcaecati animi et
          recusandae soluta?
        </p>

        <div className="flex mt-4 gap-4">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-700 to-orange-800  rounded-md px-4 py-3 "
          >
            Start For FREE!
          </a>
          <a
            href="#"
            className="border-gray-400 border-2 rounded-md px-4 py-3 "
          >
            Documentation
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-4 lg:mt-16">
          <div className="w-[400px] lg:w-[600px] border border-dashed border-orange-900 border-w-2">
            <img src={img1} alt="" srcset="" />
          </div>
          <div className="w-[400px] lg:w-[600px] border border-dashed border-orange-900 border-w-2">
            <img src={img1} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};
