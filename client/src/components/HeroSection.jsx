import React from "react";
import logo from "../assests/Hero section.jpg";

const HeroSection = () => {
  const styles = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "520",
  };

  return (
    <>
      <div className="w-full px-6 md:px-10" style={styles}>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px] items-center">
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-10 md:py-0 md:items-start">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
              Earn Extra Cash with Local Tasks
            </h1>
            <p className="text-lg md:text-xl">
              Connect with job opportunities in your neighborhood - flexible hours, fair pay
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <button className="bg-white hover:bg-amber-800 hover:text-white duration-300 px-6 py-3 rounded-lg text-black border border-black w-40">
                Post Jobs
              </button>
              <button className="bg-white hover:bg-amber-800 hover:text-white duration-300 px-6 py-3 rounded-lg text-black border border-black w-40">
                Browse Jobs
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center overflow-hidden">
            <img
              src={logo}
              alt="People working"
              className="md:w-[90%] xl:w-[80%] w-full h-auto max-w-full rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-solid mt-10" />
    </>
  );
};

export default HeroSection;
