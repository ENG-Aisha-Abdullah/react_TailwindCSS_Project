import React from "react";

function HeroButtom() {
  return (
    <div>
      <div className="flex w-full bg-black flex-col-reverse md:flex-row border-t-1 border-b-2 border-gray-600 pb-5 ">
        <div className="bg-black md:w-[30%] flex items-center justify-center md:justify-start px-10 ">
          <div className="flex flex-col md:justify-start md:items-start items-center">
            <h3 className="text-gray-300 font-bold text-2xl py-2 flex justify-center items-center uppercase">
              We're here to help!
            </h3>
            <p className="text-gray-400 flex text-center pb-5 md:text-start">
              Get answers to frequently asked questions, check server status,
              and engage with a support expert.
            </p>
            <button className="btn-hoverBlue flex justify-center md:justify-start max-lg:!w-[190px] max-md:!w-[225px]">
              VISIT SUPPORT
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center md:w-[70%] text-gray-300 md:h-75 h-50  gap-4 bg-black">
          <div className="bg-[url('/homeCards/support-banner-v3.jpg')]  md:bg-left h-full w-full bg-cover bg-center "></div>
        </div>
      </div>
      {/* <section-2>*/}
      <div className="flex flex-col md:flex-row w-full bg-black text-white">
        <div className="relative w-full md:w-[70%] md:h-75 h-50 order-1 md:order-1">
          <div className="absolute inset-0 bg-[url('/homeCards/joinus-banner-img-spyro.png')] h-full w-full bg-cover bg-center "></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-transparent to-black/100"></div>
          <div className="hidden md:flex flex-col justify-center h-full px-10 gap-3 relative z-20">
            <h2 className="text-4xl font-bold text-blue-500 opacity-80">
              HAVE FUN
            </h2>
            <p className="text-lg max-w-xs">
              Learn More About Job Opportunities
            </p>
            <button className="btn-hoverBlue">JOIN US</button>
          </div>
        </div>
        <div className="md:hidden flex flex-col px-6 py-6 order-2 text-center justify-center items-center">
          <h2 className="text-3xl font-bold text-blue-500 opacity-80">
            HAVE FUN
          </h2>
          <p className="text-base max-w-xs mt-2">
            Learn More About Job Opportunities
          </p>
          <button className="btn-hoverBlue mt-4 ">JOIN US</button>
        </div>
        <div className="w-full md:w-[30%] flex flex-col justify-center px-6 py-6 bg-black order-3">
          <h3 className="text-xl font-bold mb-4 text-center md:text-left">
            OUR TEAMS
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-2 text-sm text-left w-full gap-x-3 md:gap-1">
            <p>GAME DESIGN</p>
            <p>STUDIO OPERATIONS</p>
            <p>ART & ANIMATION</p>
            <p>PROGRAMMING</p>
            <p>BRAND MANAGEMENT</p>
            <p>FINANCE & ACCOUNTING</p>
            <p>PRODUCTION</p>
            <p>HUMAN RESOURCES</p>
            <p>QUALITY ASSURANCE</p>
            <p>CUSTOMER SUPPORT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroButtom;
