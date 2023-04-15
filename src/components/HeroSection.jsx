import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 h-[550px] w-screen p-0 ">
      <div className="max-w-7xl ml-[500px] flex flex-row ">
      <div className="w-full justify-center mt-16">
          <h1 className="head text-4xl md:text-8xl text-cyan-800 font-serif mr-10 animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-5 font-bold mt-42 justify-center">TCET-LINUX</h1>
          <p className="foss text-xl md:text-4xl mb-3 hover:scale-105 transition-transform ml-26 mt-5">Powered by FOSS</p>
        </div>
        {/*<div className="hero-pic w-full md:w-3/2 ml-30">
          <img src="https://bafkreigdvs2ol3kny3rdfrccnb7rqn7oeopz5aegubyn5xz7ytonqxuo2m.ipfs.nftstorage.link/" alt="open-source-logo" className="w-[300px] md:ml-36 h-[300px]" />
  </div>*/}
        
      </div>
    </section>
  );
}

export default HeroSection;
