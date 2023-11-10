'use client'

import React from "react";
import Logo from "../logo";
import { Navlinks } from "@/constants";
import Link from "next/link";
import Login from "@/components/Login";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-between align-body sticky top-0 px-4 h-20 max-sm:bg-very-dark-blue/90 w-full ">
      <div>
        <Logo theme={'dark'} />
      </div>
      <div className="flex items-center max-sm:hidden px-5">
        {Navlinks.map((item, index) => (
          // const listItems = <li>{item.text}</li>
          <div key={index} className="flex gap-5 px-4">
            <Link href={item.link} className={`link ${pathname===item.link? 'border-b border-b-soft-red no-underline text-md text-dark-text transition-all duration-500 ease-in-out': 'text-md no-underline' }  `}>
              {item.text}
            </Link>
          </div>
        ))}
        <Login />
      </div>
      {/* ............hamburger........... */}
      <div className="md:hidden">
        <FaBars size={25} color="#fff" />
      </div>
      {/* ....mobile menu.... */}
      {/* <div className="md:hidden absolute left-0 w-full bg-very-dark-blue/90 h-[100vh] top-16">
        </div> */}
    </nav>
  );
};

export default Navbar;
