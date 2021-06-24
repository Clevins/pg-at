import React from 'react';
import Logo from '@logos/logo.svg';
import FacebookIcon from '@icons/facebook.svg';
import MenuIcon from '@icons/menu.svg';
import { useRouter } from 'next/router';

// TODO
// Add Socil Links as Strapi Resort with Max 4 assets
// Add Scrolll to Anchors on blogs and videos, or link them to relevent pages.
// Add tranparent sruff when hero image is in.
// Make navbar absoulte for hero image

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const router = useRouter();

  interface INavItems {
    name: string;
    url: string;
    active: boolean;
  }

  const navItems: INavItems[] = [
    { name: 'Home', url: '/', active: router.asPath === '/' },
    {
      name: 'About Me',
      url: '/about',
      active: router.asPath === '/about',
    },
    {
      name: 'Contact',
      url: '/contact',
      active: false,
    },
    {
      name: 'Videos',
      url: '/',
      active: false,
    },
    {
      name: 'Blogs',
      url: '/',
      active: false,
    },
  ];

  return (
    // Transparenrt NAv into bavkground nav animation on movile
    //   <div
    // eslint-disable-next-line max-len
    //   className={`flex flex-row justify-between overflow-hidden w-full transition-all duration-500 ease-out text-white lg:justify-between  bg-transparent ${
    //     mobileNavOpen ? ' h-72 bg-cloudBurst' : ' h-14 '
    //   }  `}
    // >
    <div
      className={`flex flex-row justify-between overflow-hidden w-full transition-all duration-500 ease-out text-white bg-cloudBurst  ${
        mobileNavOpen ? ' h-72 ' : ' h-14 '
      }  `}
    >
      <div className="flex flex-col justify-start lg:items-center lg:w-full lg:justify-between lg:flex-row">
        {/* Logo */}
        <div className="p-2 w-44">
          <a href="/">
            <Logo />
          </a>
        </div>

        {/* Nav Items */}
        <div>
          <ul className="flex flex-col h-auto mt-4 font-bold list-none justify-evenly lg:flex-row lg:mt-0 font-Montserrat">
            {navItems.map(({ name, url, active }) => (
              <li className="my-1" key={`${name}`}>
                <a
                  href={`${url}`}
                  className={`p-2 transition duration-300 ease-in-out outline-none cursor focus:outline-none hover:text-darkTurquoise 
                    ${active && 'text-darkTurquoise'} 
                    ${!mobileNavOpen && ''} `}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="pr-2 w-44">
          <ul className="flex flex-row mt-2 lg:justify-end lg:mt-0 ">
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
            <li className="w-6 h-6 m-2 duration-300 ease-in-out m-2transition opacity-70 hover:opacity-100">
              <a href="www.facebook.com" className="text-white">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <button
          className={` outline-none focus:outline-none transition-all duration-500 ease-out cursor-auto  ${
            mobileNavOpen ? ' transform -rotate-90 ' : ''
          }   w-8 h-8 mx-4 mt-3 lg:hidden`}
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}
