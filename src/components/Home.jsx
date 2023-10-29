import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CoderBg from "../assets/coder.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700); // Adjust the width as needed for your definition of "mobile"
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div name="home" className="md:h-screen bg-[#FCF5ED] pt-32 pb-12 md:p-32">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-center space-y-5 align-center h-full pb-0 border-2 border-blue bg-white shadow-2xl md:bg-blue rounded-lg p-5 ">
        <p className="text-black">Hi, my name is</p>
        <h1 className=" text-6xl md:text-7xl font-bold text-[#9BA4B5] hover:text-black duration-500">
          NIK SYAHMI IRFAN
        </h1>
        {/* <h2 className="text-sm md:text-7xl font-sans font-semibold text-white hover:text-[#102C57] hover:scale-110 duration-300">
          Bachelor of Software Engineering (Hons.)
        </h2> */}
        <div className="flex justify-center items-center ">
          <div className="w-[50%] flex justify-center items-center bg-white rounded-full">
            <img src={CoderBg} alt="" className="h-20 w-20" />
          </div>
        </div>
        <p className="text-black text-sm">
          I’m a self-taught{" "}
          <span className="underline decoration-4 decoration-sky-500 font-semibold">
            full-stack developer.
          </span>{" "}
          who usually codes as a hobby. <br />I love{" "}
          <span className="underline decoration-4 decoration-indigo-500 font-semibold">
            building
          </span>{" "}
          and occasionally{" "}
          <span className="underline decoration-4 decoration-indigo-500 font-semibold">
            designing
          </span>{" "}
          websites.
        </p>

        {/* Socials */}
        {isMobile && (
          <div className="grid grid-cols-2 pb-5">
            <button className="rounded text-white text-xs group border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-gray-700 via-gray-900 border-black hover:border-white justify-center">
              <a
                href="https://www.linkedin.com/in/nik-syahmi/"
                className="mr-3 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <span className="group-hover:rotate-180 duration-300 mr-3">
                <FaLinkedin />
              </span>
            </button>

            <button className="text-white text-xs group border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-gray-700 via-gray-900 border-black hover:border-white justify-center ">
              <a
                href="https://github.com/nikumaruku"
                className="mr-3 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <span className="group-hover:rotate-180 duration-300 mr-3">
                <FaGithub />
              </span>
            </button>

            <button className="text-white text-xs group border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-gray-700 via-gray-900 border-black hover:border-white justify-center ">
              <a
                href="mailto:niksyahmiirfan01@gmail.com"
                className="mr-3 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <span className="group-hover:rotate-180 duration-300 mr-3">
                <HiOutlineMail />
              </span>
            </button>
            <button className="text-white text-xs group border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-gray-700 via-gray-900 border-black hover:border-white justify-center ">
              <a
                href="https://docs.google.com/document/d/1o9GXQ8hMCXnbH-aZ7g0iLjfMPC0Tq1za479A3dj0J0Y/edit?usp=sharing"
                className="mr-3 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <span className="group-hover:rotate-180 duration-300 mr-3">
                <BsFillPersonLinesFill />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
