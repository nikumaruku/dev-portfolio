import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/nik-syahmi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/nikumaruku"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="mailto:niksyahmiirfan01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://docs.google.com/document/d/1o9GXQ8hMCXnbH-aZ7g0iLjfMPC0Tq1za479A3dj0J0Y/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
