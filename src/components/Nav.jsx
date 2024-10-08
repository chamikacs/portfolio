import React from "react";
import { BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
import { AiOutlineProject, AiOutlineRocket } from "react-icons/ai";
import { HiOutlineOfficeBuilding, HiOutlineMail } from "react-icons/hi";
import { GoHome } from "react-icons/go";


const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex
         justify-between text-2xl text-white/50 items-center"
        >
          <Link
            to="home"
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <GoHome />
          </Link>

          <Link
            to="about"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>

          <Link
            to="projects"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <AiOutlineProject />
          </Link>

          <Link
            to="contact"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
