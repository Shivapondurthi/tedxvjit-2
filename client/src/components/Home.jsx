import React, { useState } from "react";
import tedxvjitlogo from "../images/Tedxvjit.png"; // Replace with your logo path
import backgroundVideo from "../images/homeBG3d.mp4"; // Replace with your video path

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white bg-black bg-opacity-50">
        <img className="h-36 mb-4" src={tedxvjitlogo} alt="TEDxVJIT" />
      </div>


      


    </div>
  );
};

export default Home;
