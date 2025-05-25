import React from "react";
// import VideoCarousel from "../homeSections/VideoCarousel.jsx";
import { IoMdArrowDropright } from "react-icons/io";
function NewsTaps() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r bg-black-gray py-20">
        <h1 className="text-3xl font-bold text-center uppercase text-white">
          Latest News & Articles
        </h1>
        <ul className="border-y-1 border-gray-300 flex justify-center items-center w-full max-w-[90%] mt-5 text-gray-300 h-20 gap-4 ">
          <li className="cursor-pointer text-white border-b-4 border-blue-500 font-semibold h-full flex items-center justify-center bg-blue-300/30 px-5 text-lg">
            ALL NEWS
          </li>

          {/* other Taps */}
          <li className="cursor-pointer hover:text-white h-full flex items-center justify-center hover:bg-blue-300/30 ease-in duration-300 hover:border-b-5 hover:border-b-blue-500 brightness-80 hover:brightness-100 ">
            <img
              src="/activision_logo.png"
              alt="Logo"
              className="h-[30px] w-[100px] my-5 mx-5 "
            />
          </li>
          <li className="cursor-pointer hover:text-white h-full flex items-center justify-center hover:bg-blue-300/30 ease-in duration-300 hover:border-b-5 hover:border-b-blue-500 brightness-80 hover:brightness-100 ">
            <img
              src="/cod-logo.svg"
              alt="Logo"
              className="h-[30px] w-[100px] my-5 mx-5  "
            />
          </li>
          <li className="cursor-pointer hover:text-white h-full flex items-center justify-center hover:bg-blue-300/30 ease-in duration-300 hover:border-b-5 hover:border-b-blue-500 grayscale hover:grayscale-0 px-1 ">
            <img
              src="/THPS3+4_Logo.svg"
              alt="Logo"
              className="h-[50px] w-[120px] "
            />
          </li>
          <li className="cursor-pointer hover:text-white h-full flex items-center justify-center hover:bg-blue-300/30 ease-in duration-300 hover:border-b-5 hover:border-b-blue-500  grayscale hover:grayscale-0 px-1">
            <img
              src="/crash-bandicoot-logo.png"
              alt="Logo"
              className="h-[50px] w-[120px] brightness-80 hover:brightness-100 "
            />
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[90%] pt-5 mx-auto">
          {/* card-1 */}
          <div className=" card">
            <a href="#">
              <img
                className=""
                src="/homeCards/BO6-SEASON-04-NARRATIVE-TOUT.jpg"
                alt=""
              />
            </a>
            <div className="flex flex-col p-5 gap-3">
              <small className="text-gray-300">May 20, 2025</small>
              <h3 className="text-gray-300 font-bold text-xl">Stitch Returns in Season 04</h3>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase font-bold text-gray-300 hover:text-blue-300 "
              >
                Read more
                <IoMdArrowDropright className="text-2xl text-gray-300 hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* card-2 */}

          <div className=" card">
            <a href="#">
              <img
                className=""
                src="/homeCards/CODE-MAM-GY6-TOUT.jpg"
                alt=""
              />
            </a>
            <div className="flex flex-col  p-5 gap-3">
              <small className="text-gray-300">May 15, 2025</small>
              <h3 className="text-gray-300 font-bold text-xl">Support C.O.D.E. Military Appreciation Month with USAA</h3>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase font-bold text-gray-300 hover:text-blue-300 "
              >
                Read more
                <IoMdArrowDropright className="text-2xl text-gray-300 hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* card-3 */}

          <div className=" card">
            <a href="#">
              <img
                className=""
                src="public/homeCards/THPS-ELREY-IMAGE-TOUT.jpg"
                alt=""
              />
            </a>
            <div className="flex flex-col  p-5 gap-3">
              <small className="text-gray-300">May 09, 2025</small>
              <h3 className="text-gray-300 font-bold text-xl">Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre</h3>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase font-bold text-gray-300 hover:text-blue-300 "
              >
                Read more
                <IoMdArrowDropright className="text-2xl text-gray-300 hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* card-4 */}

          <div className=" card">
            <a href="#">
              <img
                className=""
                src="/homeCards/COD-BO6-RICOCHET-S03R-TOUT-A.webp"
                alt=""
              />
            </a>
            <div className="flex flex-col  p-5 gap-3">
              <small className="text-gray-300">May 07, 2025</small>
              <h3 className="text-gray-300 font-bold text-xl">#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone </h3>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase font-bold text-gray-300 hover:text-blue-300 "
              >
                Read more
                <IoMdArrowDropright className="text-2xl text-gray-300 hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* card-5 */}

          <div className=" card">
            <a href="#">
              <img
                className=""
                src="/homeCards/CODE-MAM-2025-IMAGE-TOUT.webp"
                alt=""
              />
            </a>
            <div className="flex flex-col  p-5 gap-3">
              <small className="text-gray-300">May 01, 2025</small>
              <h3 className="text-gray-300 font-bold text-xl">C.O.D.E. celebrates Military Appreciation Month with USAA</h3>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase font-bold text-gray-300 hover:text-blue-300 "
              >
                Read more
                <IoMdArrowDropright className="text-2xl text-gray-300 hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* card-6 */}

          <div className=" card">
            <a href="#">
              <img
                className=""
                src="/homeCards/BO6-S03R-ANNOUNCEMENT-TOUT.webp"
                alt=""
              />
            </a>
            <div className="flex flex-col  p-5 gap-3">
              <small className="text-gray-300">Apr 29, 2025</small>
              <h3 className="text-gray-300 font-bold text-xl">lack Ops 6 Season 03 Reloaded: All the Details</h3>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase font-bold text-gray-300 hover:text-blue-300 "
              >
                Read more
                <IoMdArrowDropright className="text-2xl text-gray-300 hover:text-blue-300" />
              </a>
            </div>
          </div>
          {/* ends */}
         
        </div>
         <button className="btn-hoverBlue">VIEW ALL</button>
      </div>
    </div>

  );
}

export default NewsTaps;

// May 20, 2025
// Stitch Returns in Season 04

//  <div className="blog-copy">
//                   Following a daring jailbreak conducted by his former
//                   adversary, Stitch’s clandestine resurrection is achieved and
//                   he returns to the fray with orders to crack the codes needed
//                   to uncover the Pantheon moles. Get the backstory on his
//                   intense rivalry turned uneasy alliance with Russell Adler and
//                   deploy as the menacing ex-Perseus agent arriving in the Season
//                   04 Battle Pass.
//                 </div>
