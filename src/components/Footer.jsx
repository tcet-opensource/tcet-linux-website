import React from 'react'
import './Footer.css'
import { FaTwitter,FaGoogle,FaLinkedin, FaGithub, FaBlog} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
         <footer className="footer flex flex-col bottom-0 mt-20 h-full bg-slate-900">
  	 <div className="container bottom-0">
  	 	<div className="row ml-16 mt-0 mr-5">
  	 		<div className="footer-col">
  	 			<h4 className='head'>TCET</h4>
  	 			<ul>
  	 				<li><a href="https://opensource.tcetmumbai.in/docs/about-tcetopensource" target='_blank'>About Us</a></li>
  	 				<li><a href="https://opensource.tcetmumbai.in/docs/category/projects" target='_blank'>Downloads</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
  	 		
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 className='head'>Get Help</h4>
  	 			<ul>
  	 				<li><a href="https://opensource.tcetmumbai.in/docs/about-tcetopensource" target='_blank'>Tutorial</a></li>
  	 				<li><a href="https://opensource.tcetmumbai.in/" target='_blank'>TCET Open Source</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 className='head'>Contact us</h4>
  	 			<ul>
            
  	 				<li><a onclick="window.location.href='mailto:tcet@thakureducation.org';" href="#">Gmail</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 className='head'>Follow Us</h4>
  	 			<div className="social-links">
  	 				<a href="https://opensource.tcetmumbai.in/blog" target='_blank'><FaBlog className=' mx-auto mt-3 scale-125'/></a>
  	 				<a href="#"><FaTwitter className=' mx-auto mt-3 scale-125'/></a>
                    <a href="https://github.com/tcet-opensource/tcet-linux" target='_blank'><FaGithub className=' mx-auto mt-3 scale-125'/></a>
  	 				<a href="#"><FaLinkedin className=' mx-auto mt-3 scale-125'/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer
