import React from "react";
import { FaArrowsAltV } from "react-icons/fa";

const Education = () => {
  return (
    <div
      name="education"
      className=" w-full min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 background-animation flex flex-col items-center justify-center font-poppins border-2 border-black"
    >
      <div className="pb-8 border-2 border-black flex flex-col justify-center items-center space-y-5">
        <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-black">
          Education
        </p>
        <p className="text-center">My education journey!</p>
      </div>

      <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 border-dashed border-2 border-black">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs mr-4">
            2020
          </div>
          <div className="text-lg md:text-xl font-semibold text-[#1a202c]">
            Bachelor of Software Engineering with Honours
          </div>
        </div>
        <div className="text-sm text-[#4a5568] mb-2">
          Educational Institute : <b>Universiti Putra Malaysia (UPM)</b>
        </div>
        <div className="text-sm text-[#4a5568] mb-4">
          Graduation Date : <b>September 2024</b>
        </div>
        <p className="text-[#1a202c]">
          Experience : <br /> Actively participated in several hackathons (HILTI
          IT Competition, AWS eCloudValley Challenge) <b>|</b> An active member
          of Google Developer Student Club (GDSC) <b>|</b> Collaborated with
          eCloudValley for a coursework to create a book management system.
        </p>
      </div>
      <FaArrowsAltV className="text-white" />
      <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 border-dashed border-2 border-black">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs mr-4">
            2019
          </div>
          <div className="text-lg md:text-xl font-semibold text-[#1a202c]">
            Foundation of Agricultural Science
          </div>
        </div>
        <div className="text-sm text-[#4a5568] mb-2">
          Educational institution : <b>Universiti Putra Malaysia (UPM)</b>
        </div>
        <div className="text-sm text-[#4a5568] mb-4">
          Graduated:<b> June 2020</b>
        </div>
        {/* <p className="text-[#1a202c]"></p> */}
      </div>
    </div>
  );
};

export default Education;
