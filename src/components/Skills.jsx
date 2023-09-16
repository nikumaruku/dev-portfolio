import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-black py-8"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full ">
        <div className="border-2 border-black flex flex-col justify-center items-center space-y-5">
          <p className="text-xl font-bold inline border-b-4 border-[#9BA4B5]-600 text-[#9BA4B5]  ">
            Skills
          </p>
          <p className="text-black text-sm text-white pb-3">My Tech Stack</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center p-6 border-2 border-white">
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white ">
            <img className="w-10 md:w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 font-bold">HTML</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-10 md:w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 font-bold">CSS</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">JavaScript</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">React.js</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">Github</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-10 md:w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 font-bold">Node.js</p>
            <p className="text-xs">Beginner</p>
          </div>
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-10 md:w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 font-bold">MongoDB</p>
            <p className="text-xs">Beginner</p>
          </div>
          <div className="w-[90%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 md:hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img
              className="w-10 md:w-20 mx-auto"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-4 font-bold">Tailwind</p>
            <p className="text-xs">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
