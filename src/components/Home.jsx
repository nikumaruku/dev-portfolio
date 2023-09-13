import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 background-animation "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-0">
        <p className="text-[#102C57]">Hi, my name is</p>
        <h1 className="text-6xl sm:text-7xl font-bold text-black hover:text-[#102C57] hover:scale-110 duration-500">
          NIK SYAHMI IRFAN
        </h1>
        <h2 className="text-4xl sm:text-7xl font-sans font-semibold text-black hover:text-[#102C57] hover:scale-110 duration-300">
          Bachelor of Software Engineering (Hons.)
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a{" "}
          <span className="underline decoration-4 decoration-sky-500 font-semibold">
            self taught full-stack developer
          </span>{" "}
          who specialises in building (and occasionally designing) websites.
          Currently, I’m focused on building responsive full-stack{" "}
          <span className="underline decoration-4 decoration-indigo-500 font-semibold">
            web applications.
          </span>
        </p>

        {/* Socials */}
        {isMobile && (
          <div className="grid grid-cols-2 m-0">
            <button className="rounded text-white group border-2 px-6 py-3 my-2 flex items-center bg-blue-600 hover:border-pink-600 justify-center">
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

            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:border-pink-600 justify-center ">
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

            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-[#6fc2b0] hover:border-pink-600 justify-center ">
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
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-[#565f69] hover:border-pink-600 justify-center ">
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
