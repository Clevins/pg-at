import React from 'react';
import Logo from '@logos/logo.svg';
import FacebookIcon from '@icons/facebook.svg';
import MenuIcon from '@icons/menu.svg';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // const navbarOpen = true;

  return (
    <div
      className={`flex flex-row justify-between w-full transition-all duration-500 ease-out  lg:justify-between bg-cloudBurst ${
        navbarOpen ? ' h-72' : ' h-14'
      }  `}
    >
      <div className="flex flex-col justify-start lg:items-center lg:w-full lg:justify-between lg:flex-row">
        {/* Logo */}
        <div className="p-2 w-44">
          <Logo />
        </div>

        {/* Nav Items */}
        <div>
          <ul className="flex flex-col h-auto mt-4 font-bold text-white list-none justify-evenly lg:flex-row lg:mt-0 font-Montserrat">
            <li className="my-1">
              <a
                href="/"
                className="p-2 transition duration-300 ease-in-out outline-none cursor-auto focus:outline-none hover:text-darkTurquoise"
              >
                Home
              </a>
            </li>
            <li className="my-1">
              <a
                href="./about"
                className="p-2 transition duration-300 ease-in-out outline-none cursor-auto focus:outline-none hover:text-darkTurquoise"
              >
                About Me
              </a>
            </li>
            <li className="my-1">
              <a
                href="./about"
                className="p-2 transition duration-300 ease-in-out outline-none cursor-auto focus:outline-none hover:text-darkTurquoise"
              >
                Contact
              </a>
            </li>
            <li className="my-1">
              <a
                href="./about"
                className="p-2 transition duration-300 ease-in-out outline-none cursor-auto focus:outline-none hover:text-darkTurquoise"
              >
                Videos
              </a>
            </li>
            <li className="my-1">
              <a
                href="./about"
                className="p-2 transition duration-300 ease-in-out outline-none cursor-auto focus:outline-none hover:text-darkTurquoise"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <ul className="flex flex-row my-2 lg:mt-0 lg:pr-2 ">
            <li className="w-6 h-6 m-2 transition duration-300 ease-in-out opacity-70 hover:opacity-100">
              <a href="www.facebook.com" className="text-white">
                <FacebookIcon />
              </a>
            </li>
            <li className="w-6 h-6 m-2 transition duration-300 ease-in-out opacity-70 hover:opacity-100">
              <a href="www.facebook.com" className="text-white">
                <FacebookIcon />
              </a>
            </li>
            <li className="w-6 h-6 m-2 duration-300 ease-in-out m-2transition opacity-70 hover:opacity-100">
              <a href="www.facebook.com" className="text-white">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="self-start">
        <button
          className={`outline-none focus:outline-none transition-all duration-500 ease-out cursor-auto  ${
            navbarOpen ? ' transform -rotate-90 ' : ''
          }   w-8 h-8 mx-4 mt-3 lg:hidden`}
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}
