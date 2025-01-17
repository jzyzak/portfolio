import React, {useState} from 'react';
import {Link} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-3 flex justify-center md:justify-between items-center '>
                <div className='text-2xl font-bold hidden md:inline'>Joshua Zyzak</div>
                <div className='text-2xl space-x-40 font-bold'>
                    <Link to="" className="text-8x1 hover:text-gray-400 cursor-pointer">Home</Link>
                    <Link to="" className="hover:text-gray-400 cursor-pointer">Work Experience</Link>
                    <Link to="" className="hover:text-gray-400 cursor-pointer">Contacts</Link>
                    <a href="https://drive.google.com/file/d/1E0BygUoReA_Xq5X-YfDzdaLDnceFp2Mh/view?usp=sharing" target="_blank"
                    className="hover:text-gray-400 cursor-pointer">Resume</a>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer'>Contact Me</button>
            </div>
        </nav>
    )
}

export default Navbar