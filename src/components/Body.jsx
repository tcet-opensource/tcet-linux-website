import React, { useEffect } from 'react';
import './Body.css';

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

function Body() {
  useEffect(() => {
    window.addEventListener('scroll', reveal);
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white py-2 px-4 h-[400px] w-screen p-1 text-center flex-col ">
      <div className="max-w-7xl mx-auto flex items-center flex-col">
        <div className="head_body w-full">
          <h1 className="reveal head text-lg md:text-6xl mb-8 text-cyan-800 font-serif mr-10 pr-5 font-bold">ABOUT US</h1>
        </div>
        <div className="about-tcet text-slate-300 flex mt-5 text-2xl">
          <p className="reveal">
            TCET Open Source is an organization where software is not just a commodity to be bought and sold, but a collaborative effort that brings people together to solve problems and build something greater than themselves. This is the community of open source, where the boundaries between creators and users blur, and the collective knowledge and creativity of the community combine to create something truly remarkable.
            <br /><br />
            TCET open source is more than just a movement, it's a philosophy that values transparency, inclusivity, and the power of community, having a strength of 40+ individuals currently.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Body;
