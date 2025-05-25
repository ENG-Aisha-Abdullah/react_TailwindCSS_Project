import React from "react";
import VideoCarousel from "./homeSections/VideoCarousel";
import NewsTaps from "./homeSections/NewsTaps";
import HeroButtom from "./homeSections/HeroButtom";
function Home() {
  return (
    <div>
      <VideoCarousel />
      <NewsTaps />
      <HeroButtom />
    </div>
  );
}

export default Home;
