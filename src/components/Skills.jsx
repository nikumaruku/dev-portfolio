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
      className="w-full h-300 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-gray-300  py-8"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black  ">
            Skills
          </p>
          {/* <p className="py-4 text-black">
            These are the technologies I've worked with
          </p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white ">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 font-bold">HTML</p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 font-bold">CSS</p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 font-bold">JavaScript</p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 font-bold">React.js</p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 font-bold">Github</p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 font-bold">Node.js</p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 font-bold">MongoDB</p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 hover:bg-black text-black hover:text-white">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 font-bold">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
