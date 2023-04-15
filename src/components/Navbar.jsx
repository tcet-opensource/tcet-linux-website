import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => setShowNav(!showNav);

  return (
    <nav className="navbar h-[70px] ">
        <a href='https://github.com/tcet-opensource'>
            <img src='https://bafkreigdvs2ol3kny3rdfrccnb7rqn7oeopz5aegubyn5xz7ytonqxuo2m.ipfs.nftstorage.link/' alt = "Logo" className="logo navbar-logo w-full h-[110px] mt-16" />
        </a>
        <div className="navbar-container flex justify-center">
        <a href="/" className="navbar-brand text-cyan-600 ">
            
        </a>
        
        <div className={`navbar-links ${showNav ? 'active' : ''}`}>
          <a href="https://opensource.tcetmumbai.in/docs/projects/docs-site/getting-started" target='_blank' className="navbar-link">Get Started</a>
          <a href="https://opensource.tcetmumbai.in/docs/projects/docs-site/getting-started" target='_blank' className="navbar-link">Downloads</a>
          <a href="https://opensource.tcetmumbai.in/docs/projects/docs-site/about-docs" target='_blank' className="navbar-link">Documents</a>
          <a href="https://github.com/tcet-opensource/tcet-linux" target='_blank' className="navbar-link">Linux</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
