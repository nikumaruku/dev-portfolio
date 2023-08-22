import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='w-[95%] max-w-screen-md sm:text-center text-4xl font-bold border-4 p-8 pt-10 line border-dashed'>
              <p className='text-black'>Hi. I am Nik Syahmi, nice to meet you. Please take a look around.</p>
            </div>
            <div className='w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-solid border-2 border-black'>
              <p className='text-black'>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
            <div className='w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-solid border-2 border-black'>
              <p className='text-black'>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
            <div className='w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 hover:scale-110 duration-500 border-solid border-2 border-black'>
              <p className='text-black'>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
