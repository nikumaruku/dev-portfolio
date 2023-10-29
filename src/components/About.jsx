import ProfilePicture from "../assets/profile-pic.png";
import Slider from "react-slick";

const About = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      name="about"
      className="w-full md:h-screen bg-[#FCF5ED] text-gray-300 border-2 border-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="pt-8 pb-8 flex flex-col justify-center items-center space-y-5">
          <p className=" text-xl font-bold inline border-b-4 border-[#9BA4B5]-600 text-black">
            About
          </p>
          <p className="text-center text-sm text-black">
            Discover more about me!
          </p>
        </div>

        <div className="max-w-[1000px] flex flex-col w-full lg:grid lg:grid-cols-2 lg:gap-8 p-4 items-center  ">
          <div className="w-[90%] max-w-screen-md flex justify-center items-center">
            <img
              src={ProfilePicture}
              alt="Nik Syahmi"
              className="h-60 w-60 border-4 border-doubled border-black mx-auto"
            />
            {/* <p className='text-black'>Hi. I am Nik Syahmi, nice to meet you. Please take a look around.</p> */}
          </div>

          <div className="w-[95%] py-5">
            <Slider {...settings}>
              <div className="w-[95%] max-w-screen-md bg-white shadow-xl rounded p-8 my-3 border-solid border-2 border-black">
                <p className="text-black text-xs text-center ">
                  I am a 22 years old, software engineering student who loves
                  getting into the nitty-gritty of software development. This
                  passion of mine blooms during high school when I was tasked to
                  create a website by one of my closest friend as a mere
                  challenge. Little did I know, the 'challenge' is actually the
                  beginning of my wonderful journey into software development. I
                  started by learning the fundamentals (HTML, JS, CSS) using
                  whatever resources I could find online at that time.
                </p>
              </div>
              <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 border-solid border-2 border-black">
                <p className="text-black text-xs text-center ">
                  During my study in college, I was involved in various
                  courseworks which helped introduced me to the foundations of
                  web development in which we were tasked to build website using
                  HTML, CSS and Bootstrap. Fueled by curiosity, I ventured
                  further and acquired the skills to independently create
                  websites using the MERN stack. I found this stack to be
                  exceedingly approachable for beginners, thanks to the
                  abundance of learning resources available online.
                </p>
              </div>
              <div className="w-[95%] max-w-screen-md bg-white shadow-md rounded p-8 my-3 border-solid border-2 border-black">
                <p className="text-black text-xs text-center ">
                  As fun as learning by yourself seems, I believe there in so
                  much more to discover and explore in order for me to continue
                  developing myself as a competent developer. I also believe
                  that it is very much necessary for me to experience working in
                  the real world scenario in which I can collaborate with other
                  'sifus', which i believe will facilitate my growth even more.
                  I consider myself as an avid learner who will and can
                  definitely help and provide for others to grow as well.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
