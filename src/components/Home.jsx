import React, { useEffect, useRef } from "react";
import tedxvjitlogo from "../images/Tedxvjit.png"; // Replace with your logo path
import tedxvjit from "../images/TEDxVJIT_Navbar_About.png"; // Replace with your logo path
import backgroundVideo from "../images/homeBG3d.mp4"; // Replace with your video path
import Power_of_Persistence from "../images/Power_of_Persistence.png"; // Replace with your video path

const Home = () => {
  // carosuell

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Video */}
      <video
        className="fixed top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white ">
        <img className="h-36 mb-4" src={tedxvjitlogo} alt="TEDxVJIT" />
        {/*========================participate button ================================= */}
      </div>
      <div className="relative flex flex-col md:flex-row h-screen">
        {/* Left Div - Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <img
            src={Power_of_Persistence} // Replace with your image URL
            alt="Placeholder"
            className="max-h-full max-w-full object-cover"
          />
        </div>

        {/* Right Div - Text */}
        <div className="flex items-center justify-center w-full md:w-1/2 bg-transparent">
          <div className="hero-content w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0 order-2 md:order-1">
            <h1 className="heading-pop text-3xl md:text-5xl font-bold mb-4 text-white">
              POWER OF <em className="text-red-600">PERSISTENCE</em>
            </h1>
            <p className="paragraph-pop text-lg md:text-xl font-light mb-6 text-white">
              The theme "<em className="text-red-500">Power of Persistence</em>"
              represents the strength and dedication needed to overcome
              obstacles and achieve greatness.
            </p>
            <a
              href="#"
              className="learn-more-btn inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              LEARN MORE →
            </a>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto px-4 text-white">
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="w-full md:w-2/3">
            <div className="about-section-content">
              <div className="about-heading flex flex-col md:flex-row items-center justify-center md:justify-start">
                <p className="text-3xl md:text-4xl mt-4 md:mt-0">What is</p>
                <img
                  className="ml-0 md:ml-4 mt-4 md:mt-0 w-48 h-10"
                  src={tedxvjit}
                  alt="TEDx VJIT"
                />
              </div>

              <div className="text-box text-center md:text-left mt-6">
                <p className="py-2 text-base md:text-lg font-light text-justify">
                  We are thrilled to announce VJIT's very own TEDx VJIT
                  community! TEDx is a program of local, self-organized events
                  that bring people together to share ideas and inspire action
                  through powerful talks. Promises to be a day filled with
                  thought-provoking presentations, inspiring stories, and
                  engaging discussions.
                </p>
                <p className="py-2 text-base md:text-lg font-light text-justify">
                  Whether you're a budding entrepreneur, a passionate artist, or
                  simply someone with a unique perspective to share, we
                  encourage you to be a part of TEDx VJIT. This is your chance
                  to be part of a movement that's sparking innovation and change
                  around the world. Stay tuned for more information about
                  speaker announcements, registration details, and exciting
                  activities planned for the event!
                </p>
                <h3 className="wevjit text-red-600 text-3xl mt-6">
                  We The VJIT . . .
                </h3>
                <p className="py-2 text-lg md:text-lg font-light text-justify">
                  Vidya Jyothi Institute of Technology is an Autonomous
                  Institution, Approved by AICTE and Affiliated to JNTUH. VJIT
                  is offering B. Tech, M. Tech and MBA programs. The institution
                  is accredited by NAAC A+ grade. All the eligible B. tech
                  programs are accredited by NBA under Tier I. In NIRF 2023,
                  VJIT is in the band of 151-300 under Innovation Ranking. In
                  2022 VJIT is ranked 200 under Engineering Category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
