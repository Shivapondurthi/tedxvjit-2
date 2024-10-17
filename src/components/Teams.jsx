import React, { useEffect, useState } from 'react';
import './teams.css'

const coreTeam = [
  { name: "Dr.E Saibaba Reddy", designation: "Principal", img: "/path/to/image/1.jpg" },
  { name: "Dr. A Padmaja", designation: "Dean", img: "/path/to/image2.jpg" },
  { name: "Mrs. G Srilatha", designation: "Academic Coordinator", img: "/path/to/image3.jpg" },
  { name: "Mr. R V Chalam", designation: "Sr Adminstrative Officer", img: "/path/to/image4.jpg" },
  { name: "Dr. G Sreeram Reddy", designation: "HOD-ME", img: "/path/to/image5.jpg" },
  { name: "Dr. A Srujana", designation: "HOD-EEE", img: "/path/to/image6.jpg" },
  { name: "Mr. B Srinivasulu", designation: "HOD-IT", img: "/path/to/image7.jpg" },
  { name: "Dr.M Rajendra Prasad", designation: "HOD-ECE", img: "/path/to/image8.jpg" },
  { name: "Dr. Pallavi Badry", designation: "HOD-CE", img: "/path/to/image9.jpg" },
];

const organizingTeam = [
  { name: "Keerthana", designation: "Licensee | Organiser", img: "/path/to/image10.jpg" },
  { name: "Akash MallaReddy", designation: "Co-Organiser", img: "/path/to/image11.jpg" },
  { name: "Dr. Ramesh Cheripelli", designation: "Faculty Coordinator", img: "/path/to/image12.jpg" },
];

// New Web Development Team data
const webDevelopmentTeam = [
  { name: "Olivia Smith", designation: "Lead", img: "/path/to/image13.jpg" },
  { name: "Noah Brown", designation: "Backend Developer", img: "/path/to/image14.jpg" },
  { name: "Emma Davis", designation: "UI/UX Designer", img: "/path/to/image15.jpg" },
  { name: "Liam Johnson", designation: "Full Stack Developer", img: "/path/to/image16.jpg" },
  { name: "Sophia Wilson", designation: "DevOps Engineer", img: "/path/to/image17.jpg" },
  { name: "James Taylor", designation: "Quality Assurance", img: "/path/to/image18.jpg" },
];

// New Marketing Team data
const marketingTeam = [
  { name: "Grace Taylor", designation: "Marketing Strategist", img: "/path/to/image19.jpg" },
  { name: "Henry Moore", designation: "Social Media Manager", img: "/path/to/image20.jpg" },
  { name: "Isabella Harris", designation: "Brand Manager", img: "/path/to/image21.jpg" },
  { name: "Jack Wilson", designation: "Content Creator", img: "/path/to/image22.jpg" },
  { name: "Sophia Lewis", designation: "SEO Specialist", img: "/path/to/image23.jpg" },
  { name: "Mason Scott", designation: "Event Coordinator", img: "/path/to/image24.jpg" },
  { name: "Evelyn White", designation: "Digital Marketing Analyst", img: "/path/to/image25.jpg" },
];

const designTeam = [
    { name: "Michael Johnson", designation: "Creative Director", img: "/path/to/image26.jpg" },
    { name: "Sarah Brown", designation: "Graphic Designer", img: "/path/to/image27.jpg" },
    { name: "David Smith", designation: "UX/UI Designer", img: "/path/to/image28.jpg" },
    { name: "Emily Davis", designation: "Visual Designer", img: "/path/to/image29.jpg" },
    { name: "Matthew Wilson", designation: "Product Designer", img: "/path/to/image30.jpg" },
    { name: "Jessica Taylor", designation: "Illustrator", img: "/path/to/image31.jpg" },
    { name: "Chris Lee", designation: "Web Designer", img: "/path/to/image32.jpg" },
    { name: "Sophia White", designation: "Brand Designer", img: "/path/to/image33.jpg" },
    { name: "James Brown", designation: "Motion Designer", img: "/path/to/image34.jpg" },
  ];

  const partnershipsAndCollaborations = [
    { name: "Partner A", designation: "Title A", img: "/path/to/image35.jpg" },
    { name: "Partner B", designation: "Title B", img: "/path/to/image36.jpg" },
    { name: "Partner C", designation: "Title C", img: "/path/to/image37.jpg" },
    { name: "Partner D", designation: "Title D", img: "/path/to/image38.jpg" },
    { name: "Partner E", designation: "Title E", img: "/path/to/image39.jpg" },
    { name: "Partner F", designation: "Title F", img: "/path/to/image40.jpg" },
    { name: "Partner G", designation: "Title G", img: "/path/to/image41.jpg" },
    { name: "Partner H", designation: "Title H", img: "/path/to/image42.jpg" },
  ];

  const communicationsAndContent = [
    { name: "Partner A", designation: "Lead", img: "/path/to/image35.jpg" },
    { name: "Partner B", designation: "Title B", img: "/path/to/image36.jpg" },
    { name: "Partner C", designation: "Title C", img: "/path/to/image37.jpg" },
    { name: "Partner D", designation: "Title D", img: "/path/to/image38.jpg" },
    { name: "Partner E", designation: "Title E", img: "/path/to/image39.jpg" },
    { name: "Partner F", designation: "Title F", img: "/path/to/image40.jpg" },
    { name: "Partner G", designation: "Title G", img: "/path/to/image41.jpg" },
    { name: "Partner H", designation: "Title H", img: "/path/to/image42.jpg" },
  ];
  
  const ExperienceTeam = [
    { name: "Michael Johnson", designation: "Creative Director", img: "/path/to/image26.jpg" },
    { name: "Sarah Brown", designation: "Graphic Designer", img: "/path/to/image27.jpg" },
    { name: "David Smith", designation: "UX/UI Designer", img: "/path/to/image28.jpg" },
    { name: "Emily Davis", designation: "Visual Designer", img: "/path/to/image29.jpg" },
    { name: "Matthew Wilson", designation: "Product Designer", img: "/path/to/image30.jpg" },
    { name: "Jessica Taylor", designation: "Illustrator", img: "/path/to/image31.jpg" },
    { name: "Chris Lee", designation: "Web Designer", img: "/path/to/image32.jpg" },
    { name: "Sophia White", designation: "Brand Designer", img: "/path/to/image33.jpg" },
    { name: "James Brown", designation: "Motion Designer", img: "/path/to/image34.jpg" },
  ];

  const productionsTeam = [
    { name: "Amanda Brooks", designation: "Production Manager", img: "/path/to/image43.jpg" },
    { name: "Brian Kelly", designation: "Video Editor", img: "/path/to/image44.jpg" },
    { name: "Catherine Jones", designation: "Audio Engineer", img: "/path/to/image45.jpg" },
    { name: "Daniel Garcia", designation: "Lighting Technician", img: "/path/to/image46.jpg" },
    { name: "Erica Martinez", designation: "Set Designer", img: "/path/to/image47.jpg" },
    { name: "Frank Adams", designation: "Stage Manager", img: "/path/to/image48.jpg" },
    { name: "Gina White", designation: "Visual Effects Artist", img: "/path/to/image49.jpg" },
    { name: "Harry Evans", designation: "Cinematographer", img: "/path/to/image50.jpg" },
    { name: "Isabel Moore", designation: "Script Supervisor", img: "/path/to/image51.jpg" },
    { name: "Jackie Brown", designation: "Director", img: "/path/to/image52.jpg" },
    { name: "Kevin Young", designation: "Sound Designer", img: "/path/to/image53.jpg" },
    { name: "Laura Scott", designation: "Costume Designer", img: "/path/to/image54.jpg" },
  ];

const Card = ({ img, name, designation }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 h-80 relative transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img src={img} alt={name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-gray-300">{designation}</p>
    </div>
  </div>
);

const TeamPage = () => {
  const [fadeInFirstSection, setFadeInFirstSection] = useState(false);
  const [fadeInSections, setFadeInSections] = useState({
    coreTeam: false,
    organizingTeam: false,
    webDevelopmentTeam: false,
    marketingTeam: false,
    designTeam: false,
    partnerships: false,
    communications: false,
    experience: false,
    productions: false,
  });

  useEffect(() => {
    setFadeInFirstSection(true);
  
    const handleScroll = () => {
      const coreTeamSection = document.getElementById('core-team-section');
      const organizingTeamSection = document.getElementById('organizing-team-section');
      const webDevTeamSection = document.getElementById('web-development-team-section');
      const marketingTeamSection = document.getElementById('marketing-team-section');
      const designTeamSection = document.getElementById('design-team-section');
      const partnershipsSection = document.getElementById('partnerships-section');
      const communicationsSection = document.getElementById('communications-section');
      const experienceSection = document.getElementById('experience-section');
      const productionsTeamSection = document.getElementById('productions-team-section');
  
      if (coreTeamSection && coreTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, coreTeam: true }));
      }
      if (organizingTeamSection && organizingTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, organizingTeam: true }));
      }
      if (webDevTeamSection && webDevTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, webDevelopmentTeam: true }));
      }
      if (marketingTeamSection && marketingTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, marketingTeam: true }));
      }
      if (designTeamSection && designTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, designTeam: true })); // Add this line for the Design Team section
      }
      if (partnershipsSection && partnershipsSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, partnerships: true })); // Add this line for partnerships section
      } 
      if (communicationsSection && communicationsSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, communications: true }));
      }
      if (experienceSection && experienceSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, experience: true }));
      }
      if (productionsTeamSection && productionsTeamSection.getBoundingClientRect().top < window.innerHeight) {
        setFadeInSections(prev => ({ ...prev, productions: true }));
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="min-h-screen text-white relative flex flex-col items-center">
      <video
        autoPlay
        loop
        muted
        className="video-background"
        src="/homeBG3d.mp4"
      ></video>

      <section className={`flex flex-col items-center justify-center px-4 text-center custom-height ${fadeInFirstSection ? 'fade-in' : 'hidden'}`}>
        <h1 className="text-4xl font-bold mb-4">The Team</h1>
        <p className="text-center max-w-2xl px-4 mt-2">
          The TEDxVJIT team is a dynamic collective of visionaries, thinkers, and doers committed to igniting curiosity and inspiring action. United by a shared passion for ideas worth spreading, we meticulously curate transformative experiences that challenge the status quo and empower our community. Our diverse team, composed of innovative students and dedicated faculty, collaborates tirelessly to bring together thought leaders from various fields, ensuring each event is a beacon of knowledge, creativity, and persistence. At TEDxVJIT, we believe in the power of persistence to shape a brighter future, one idea at a time.
        </p>
      </section>

      <section id="core-team-section" className={`min-h-screen px-10 py-16 ${fadeInSections.coreTeam ? 'fade-in' : 'scroll-fade'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
          {coreTeam.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
      </section>

      <section id="organizing-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.organizingTeam ? 'fade-in' : 'scroll-fade'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center">Organizing Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
          {organizingTeam.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
      </section>

      {/* New Web Development Team Section */}
      <section id="web-development-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.webDevelopmentTeam ? 'fade-in' : 'scroll-fade'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center">Web Development Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
          {webDevelopmentTeam.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
      </section>

      {/* New Marketing Team Section */}
      <section id="marketing-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.marketingTeam ? 'fade-in' : 'scroll-fade'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center">Marketing Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
          {/* First Row */}
          {marketingTeam.slice(0, 6).map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
        <div className="flex justify-center mt-24"> {/* Increased margin-top to mt-12 */}
          {/* Centered 7th Card */}
          <Card {...marketingTeam[6]} />
        </div>
      </section>

      <section id="design-team-section" className={`min-h-screen px-4 py-16 ${fadeInSections.designTeam ? 'fade-in' : 'scroll-fade'}`}>
  <h2 className="text-4xl font-bold mb-8 text-center">Design Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
    {designTeam.map((member, index) => (
      <Card key={index} {...member} />
    ))}
  </div>
</section>

<section id="partnerships-section" className={`min-h-screen px-4 py-16 ${fadeInSections.partnerships ? 'fade-in' : 'scroll-fade'}`}>
  <h2 className="text-4xl font-bold mb-8 text-center">Partnerships and Collaborations</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
    {partnershipsAndCollaborations.slice(0, 6).map((partner, index) => (
      <Card key={index} {...partner} />
    ))}
  </div>
  {/* Separate div to center the last two cards */}
  <div className="flex justify-center gap-24 mt-24">
    {partnershipsAndCollaborations.slice(6).map((partner, index) => (
      <Card key={index} {...partner} />
    ))}
  </div>
</section>

<section id="communications-section" className={`min-h-screen px-4 py-16 ${fadeInSections.communications ? 'fade-in' : 'scroll-fade'}`}>
  <h2 className="text-4xl font-bold mb-8 text-center">Communications and Content</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
    {communicationsAndContent.slice(0, 6).map((partner, index) => (
      <Card key={index} {...partner} />
    ))}
  </div>
  {/* Separate div to center the last two cards */}
  <div className="flex justify-center gap-24 mt-24">
    {communicationsAndContent.slice(6).map((partner, index) => (
      <Card key={index} {...partner} />
    ))}
  </div>
</section>

<section id="experience-section" className={`min-h-screen px-4 py-16 ${fadeInSections.experience ? 'fade-in' : 'scroll-fade'}`}>
  <h2 className="text-4xl font-bold mb-8 text-center">Experience and Hospitality</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
    {ExperienceTeam.map((member, index) => (
      <Card key={index} {...member} />
    ))}
  </div>
</section>

<section 
  id="productions-team-section" 
  className={`min-h-screen px-4 py-16 ${fadeInSections.productions ? 'fade-in' : 'scroll-fade'}`}
>
  <h2 className="text-4xl font-bold mb-8 text-center">Productions</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto max-w-screen-lg">
    {productionsTeam.map((member, index) => (
      <Card key={index} {...member} />
    ))}
  </div>
</section>

    </div>
  );
};

export default TeamPage;
