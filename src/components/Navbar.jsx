import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navlinks = [
    {
        title: "Downloads",
        link: "/Downloads",
    },
    {
        title: "Documnets",
        link: "/Documents",
    },
    {
        title: "Linux",
        link: "/Linux",
    },
    {
        title: "About Us",
        link: "/About Us",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
        console.log(open);
    };
    return (
        <div className='bg-[#101828] font-sans'>
            <div className="mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href='/' className='text-white'>
                            <img src="tcet-opensource-logo.png" alt="" srcSet="" />
                        </a>
                    </div>
                    {/* Navlinks */}
                    <div className="hidden md:flex">
                        <div className="text-base 2xl:text-lg ml-10 flex items-baseline space-x-2">
                            {navlinks.map((link, index) => (
                                <a
                                    key={index}
                                    className="text-[#E4E7EC] transition-all duration-500 hover:bg-[#475467] hover:text-[#E0EAFF] px-2 py-1 rounded-md text-md font-medium"
                                    href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}

                            <div className="ml-4 border-2 border-[#475467] rounded-lg">
                                <button className="inline-flex items-center text-[#E0EAFF] border-1 border-white py-1 px-2 focus:outline-none rounded md:mt-0 hover:underline text-base 2xl:text-lg"><a href='/Get Started'>Get Started</a>
                               </button>
                            </div>
                        </div>
                    </div>
                    {/* hamburger */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            onClick={handleMenu}
                            className='inline-flex items-center justify-center p-2 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white'
                        >
                            <span className="sr-only">Open main menu</span>
                            {open === true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Nav */}
            {open ? (
                <div className='flex flex-col  md:hidden'>
                    <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
                        {navlinks.map((link, index) => (
                            <a
                                key={index}
                                className="text-center cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                href={link.link}
                            >
                                {link.title}
                            </a>
                        ))}
                        <a href='/Get Started' className="text-center cursor-pointer text-[#E0EAFF] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Get Started
                        </a>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Navbar;