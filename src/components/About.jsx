import React from "react";
import ProfilePicture from "../assets/profile-pic.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-gray-300 border-2 border-black"
    >
      <div className="flex flex-col justify-center items-center w-full h-full border-2 border-black  ">
        <div className="md:text-left pb-8 justify-center items-center border-2 border-black pt-4">
          <p className="text-5xl md:text-4xl font-bold inline text-black">
            About
          </p>
        </div>

        <div className="max-w-[1000px] flex flex-col w-full lg:grid lg:grid-cols-2 lg:gap-8 p-4 border-2 border-white items-center  ">
          <div className="w-[95%] max-w-screen-md sm:text-center text-4xl font-bold flex justify-center items-center border-2 border-black ">
            <img
              src={ProfilePicture}
              alt="Nik Syahmi"
              className="h-60 w-60 border-4 border-doubled border-black mx-auto"
            />
            {/* <p className='text-black'>Hi. I am Nik Syahmi, nice to meet you. Please take a look around.</p> */}
          </div>

          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-solid border-2 border-black border-2 border-black ">
            <p className="text-black ">
              I am a 22 years old, final year software engineering UPM student
              who loves getting into the nitty-gritty of software development.
              This passion of mine blooms during high school when I was tasked
              to create a website by one of my closest friend as a mere
              challenge. Little did I know, the 'challenge' is actually the
              beginning of my wonderful journey into software development.
            </p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-solid border-2 border-black border-2 border-black ">
            <p className="text-black">
              During my study in college, I was involved in various courseworks
              which helped introduced me to the foundations of web development
              in which we were tasked to build website using HTML, CSS and
              Bootstrap. Fueled by curiosity, I ventured further and acquired
              the skills to independently create websites using the MERN stack.
              I found this stack to be exceedingly approachable for beginners,
              thanks to the abundance of learning resources available online.
            </p>
          </div>
          <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-solid border-2 border-black">
            <p className="text-black">
              All in all, I believe there in so much more to discover and learn
              in order for me to continue developing myself as a competent
              developer. I also believe that it is very much necessary for me to
              experience working in the real world scenario in which I can
              collaborate with other 'sifus', which i believe will facilitate my
              growth even more. I consider myself as an avid learner who will
              and can definitely help and provide for others to grow as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
