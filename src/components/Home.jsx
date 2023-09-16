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
      className="md:h-screen bg-[#212A3E] p-32 border-2 border-blue"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-center space-y-5 align-center h-full pb-0 border-2 border-blue bg-[#394867] md:bg-blue rounded-lg p-5 ">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-6xl sm:text-7xl font-bold text-[#9BA4B5] hover:text-[#102C57] hover:scale-110 duration-500">
          NIK SYAHMI IRFAN
        </h1>
        <h2 className="text-3xl md:text-7xl font-sans font-semibold text-white hover:text-[#102C57] hover:scale-110 duration-300">
          Bachelor of Software Engineering (Hons.)
        </h2>
        <p className="text-white md:border-2 border-black">
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
          <div className="grid grid-cols-2 pb-5">
            <button className="rounded text-white group border-2 px-6 py-3 my-2 flex items-center bg-blue-600 hover:border-black justify-center">
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
