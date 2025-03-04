import React, { useEffect, useRef } from "react";
import '../style.css';
import '../responsive.css';
// import tedxvjitlogo from "../images/Tedxvjit.png"; // Replace with your logo path
// import tedxvjit from "../images/TEDxVJIT_Navbar_About.png"; // Replace with your logo path
// import backgroundVideo from "../images/homeBG3d.mp4"; // Replace with your video path
// import Power_of_Persistence from "../images/Power_of_Persistence.png"; // Replace with your video path

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
        <source src="/primary/homeBG3d.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white ">
        <img className="h-36 mb-4" src="/primary/Tedxvjit.png" alt="TEDxVJIT" />
        {/*========================participate button ================================= */}
      </div>
      <div className="relative flex flex-col md:flex-row h-screen">
        {/* Left Div - Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/primary/Power_of_Persistence.png" // Replace with your image URL
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
                  src="/primary/TEDxVJIT_Navbar_About.png"
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

      <section className="speakers reveal">
        <div className="container">
          <div className="speakers-heading mt-10" style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className='mt-5'>MEDIA</h1>
          </div>
          <div className="containers">
            <div className="slider-container">
              {[
                "/Resources/media/1.jpg",
                "/Resources/media/2.jpg",
                "/Resources/media/3.jpg",
                "/Resources/media/4.jpg",
                "/Resources/media/5.jpg",
                "/Resources/media/6.jpg",
                "/Resources/media/7.jpg",
                "/Resources/media/8.jpg",
                "/Resources/media/9.jpg",
                "/Resources/media/10.jpg"
              ].map((imageSrc, index) => (
                <div className="single-team" key={index} style={{ backgroundColor: 'transparent', width: '350px' }}>
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    src={imageSrc}
                    alt={`media-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

            {/* Map and Registration Section */}
            <section className="map-registration reveal" id="maps">
  <div className="container mx-auto text-center">
    <div className="flex flex-wrap justify-center">
      {/* Buttons Section */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <p className="head-1 text-xl font-semibold">Participate Now</p>
        <div className="pt-4">
          <a
            href="javascript:void( window.open( 'https://konfhub.com/tedxvjit', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )"
            className="hover-btn-change-color"
          >
            <button
              type="button"
              className="btn btn-custom bg-transparent text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              As Attendee
            </button>
          </a>
        </div>
        <div className="pt-4">
          <a
            href="javascript:void( window.open( 'https://forms.gle/gQ96sCnS3idoYLiL9', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )"
            className="hover-btn-change-color"
          >
            <button
              type="button"
              className="btn btn-custom bg-transparent text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              As Sponsor
            </button>
          </a>
        </div>
        <div className="pt-4">
          <a
            href="javascript:void( window.open( 'https://forms.gle/j9xivk5LCN6Qz7Wn6', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )"
            className="hover-btn-change-color"
          >
            <button
              type="button"
              className="btn btn-custom bg-transparent text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              As Speaker
            </button>
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="map_box_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121832.2780266916!2d78.28233073667944!3d17.399368808179574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95a278ecef95%3A0x6cd763949617029a!2sVidya%20Jyothi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1715679876574!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="border border-gray-300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Venue Section */}
      <div className="w-full lg:w-1/3">
        <p className="venue-text text-center text-xl font-semibold">Venue</p>
        <div className="bg-transparent shadow-lg rounded-lg mt-4 p-4">
          <p className="text-lg text-center">
            Vidya Jyothi Institute of Technology, Aziz Nagar, C.B. post, Chilkur
            Road, Hyderabad – 500075, Telangana
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
