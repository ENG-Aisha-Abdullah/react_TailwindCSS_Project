import { Carousel } from "flowbite";
// import React, { useState } from "react";

function VideoCarousel() {
  //   const videos = [
  //     {
  //       src: "https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4",
  //       title: "Call of Duty: Black Ops 6"
  //     },
  //     {
  //       src: "https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4",
  //       title: "Tony Hawk’s Pro Skater 3+4"
  //     },
  //     {
  //       src: "https://www.activision.com/cdn/crash/crash_team_rumble.mp4",
  //       title: "Crash Team Rumble"
  //     },
  //     {
  //       src: "https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4",
  //       title: "Call of Duty: Mobile"
  //     },
  //     {
  //       src: "https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4",
  //       title: "Tony Hawk’s Pro Skater 1+2"
  //     }
  //   ];

  //   const [index, setIndex] = useState(0);

  //   const handleVideoEnd = () => {
  //     if (index < videos.length - 1) {
  //       setIndex(index + 1);
  //     } else {
  //       setIndex(0);
  //     }
  //   };

  //   return (
  //     <div className="relative w-full h-screen">
  //       {/* الفيديو */}
  //       <video
  //         key={videos[index].src}
  //         src={videos[index].src}
  //         autoPlay
  //         muted
  //         playsInline
  //         onEnded={handleVideoEnd}
  //         className="w-full h-full object-cover"
  //       />

  //       {/*  خلفية سوداء شفافة */}
  //       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  //       {/* المحتوى الخاص بكل فيديو */}
  //       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
  //         <h1 className="text-white text-4xl font-bold text-center px-4">
  //           {videos[0].title}
  //         </h1>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="relative w-full h-screen min-h-[630px] max-h-[1024px] ">
      <div
        id="video-carousel"
        className="relative w-full h-full  "
        data-carousel="slide"
        data-carousel-interval="8000"
      >
        {/* Slides 1 */}
        <div className="relative h-full overflow-hidden">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <video
              src="https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen min-h-[630px] max-h-[1024px] object-cover "
            />
            <div className="absolute inset-0 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:px-10  justify-center text-center text-white z-20 px-4">
              <img src="/black-ops-6-full-logo.png" alt="Logo" className="w-150 h-40 mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
              </h2>
              <p className="text-lg md:text-xl mb-4 max-w-md">
                Forced to go rogue. Hunted from within. this is Black Ops 6.
              </p>
              <div className="flex gap-3">
              <button className=" visiteMore  uppercase">play with game pass</button>
                <button className="btn-hoverBlue uppercase">visit site</button>
              </div>
            </div>
          </div>
          {/* Slides 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <video
              src="https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen min-h-[630px] max-h-[1024px] object-cover"
            />
              <div className="absolute inset-0 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:px-10  justify-center text-center text-white z-20 px-4">
              <img src="/black-ops-6-full-logo.png" alt="Logo" className="w-150 h-40 mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
              </h2>
              <p className="text-lg md:text-xl mb-4 max-w-md">
                Forced to go rogue. Hunted from within. this is Black Ops 6.
              </p>
              <div className="flex gap-3">
              <button className=" visiteMore  uppercase">play with game pass</button>
                <button className="btn-hoverBlue uppercase">visit site</button>
              </div>
            </div>
          </div>
          {/* Slides 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <video
              src="https://www.activision.com/cdn/crash/crash_team_rumble.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen min-h-[630px] max-h-[1024px] object-cover"
            />
              <div className="absolute inset-0 z-10"></div>
           <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:px-10  justify-center text-center text-white z-20 px-4">
              <img src="/black-ops-6-full-logo.png" alt="Logo" className="w-150 h-40 mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
              </h2>
              <p className="text-lg md:text-xl mb-4 max-w-md">
                Forced to go rogue. Hunted from within. this is Black Ops 6.
              </p>
              <div className="flex gap-3">
              <button className=" visiteMore  uppercase">play with game pass</button>
                <button className="btn-hoverBlue uppercase">visit site</button>
              </div>
            </div>
          </div>
          {/* Slides 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <video
              src="https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen min-h-[630px] max-h-[1024px] object-cover"
            />
              <div className="absolute inset-0 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:px-10  justify-center text-center text-white z-20 px-4">
              <img src="/black-ops-6-full-logo.png" alt="Logo" className="w-150 h-40 mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
              </h2>
              <p className="text-lg md:text-xl mb-4 max-w-md">
                Forced to go rogue. Hunted from within. this is Black Ops 6.
              </p>
              <div className="flex gap-3">
              <button className=" visiteMore  uppercase">play with game pass</button>
                <button className="btn-hoverBlue uppercase">visit site</button>
              </div>
            </div>
          </div>
              {/* Slides 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <video
              src="https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen min-h-[630px] max-h-[1024px] object-cover"
            />
              <div className="absolute inset-0 z-10"></div>
           <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:px-10  justify-center text-center text-white z-20 px-4">
              <img src="/black-ops-6-full-logo.png" alt="Logo" className="w-150 h-40 mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
              </h2>
              <p className="text-lg md:text-xl mb-4 max-w-md">
                Forced to go rogue. Hunted from within. this is Black Ops 6.
              </p>
              <div className="flex gap-3">
              <button className=" visiteMore  uppercase">play with game pass</button>
                <button className="btn-hoverBlue uppercase">visit site</button>
              </div>
            </div>
          </div>
        </div>

        {/* Controls (optional) */}
        {/* <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            ❮
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            ❯
          </span>
        </button> */}
      </div>
    </div>
  );
}

export default VideoCarousel;
