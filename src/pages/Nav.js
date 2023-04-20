import React, { useState }  from 'react'
import { FaFacebookF,FaTwitter } from "react-icons/fa";

const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <main id="nav">
      <div className="container mx-auto p-4">
        <nav className="flex flex-wrap items-center justify-between md:justify-around">
          <div className="px-3 py-2">
            <img className="w-32" src="https://htmlrev.com/preview/sena/images/logo.svg" alt="Logo" />
          </div>
          <div className="hidden md:flex lg:flex">
            <ul className="flex items-center space-x-2">
              <li className="px-3 py-2 hover:text-[#e8505b]"><a href="#home">Home</a></li>
              <li className="px-3 py-2 hover:text-[#e8505b]"><a href="#services"> Services</a></li>
              <li className="px-3 py-2 hover:text-[#e8505b]"><a href="#about">About</a></li>
              <li className="px-3 py-2 hover:text-[#e8505b]"><a href="#pricing">Pricing</a></li>
              <li className="px-3 py-2 hover:text-[#e8505b]"><a href="#contact">Contact</a></li>
              <li className="p-2 text-white rounded-full bg-[#e8505b] hover:text-[#e8505b] hover:bg-white"><a href="/contact"><FaFacebookF/></a></li>
              <li className="p-2 text-white rounded-full bg-[#e8505b] hover:text-[#e8505b] hover:bg-white"><a href="/contact"><FaTwitter/></a></li>
            </ul>
          </div>

          {!navIsShown ? (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7 z-50' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          )}

          {navIsShown && (
            <div className='absolute z-10 top-12 left-0 w-full text-black'>
              <ul className='mb-2 bg-white p-2 mx-10'>
                <li className="px-3 py-2 hover:text-[#e8505b] border-b border-t border-slate-300"><a href="#home">Home</a></li>
                <li className="px-3 py-2 hover:text-[#e8505b] border-b border-slate-300"><a href="#services">Services</a></li>
                <li className="px-3 py-2 hover:text-[#e8505b] border-b border-slate-300"><a href="#about">Pricing</a></li>
                <li className="px-3 py-2 hover:text-[#e8505b] border-b border-slate-300"><a href="#pricing">Pricing</a></li>
                <li className="px-3 py-2 hover:text-[#e8505b]"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </main>
  )
}

export default Nav
