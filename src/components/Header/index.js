import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import { BiSupport } from 'react-icons/bi'
import logo from '../../assets/img/logo/vinodes-logo-dark.png'
import { Link } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import DropdownUser from "../UI/DropdownUser";
import { useEffect } from "react";
import Zoom from 'react-reveal/Zoom';
import Shake from 'react-reveal/Shake';

import Menu from "../Menu";


export default function Header() {
  const menuRef = useRef();
  

  const menuToggle = () => menuRef.current.classList.toggle("menuBoxNone");



  return (
    <div  className="flex  w-full headerChange  z-30 fixed bg-white ">
      <div className="boxCenter justify-between  w-full p-2 ">
        <div className=" w-full boxCenter  justify-between containerBox">
          <div className="boxCenter  gap-3 md:gap-0 boxCenter">
            <AiOutlineMenu
              onClick={menuToggle}
              size={18}
              className="hoverBar shadow  visible md:invisible md:w-0 "
            />
            <Zoom left>
            <div className="flex boxCenter gap-1">
              <Link to='/'>
                <img
                  src={logo}
                  alt="logo"
                  className="w-fit h-12 object-cover rounded-full"
                />
              </Link>

            </div>
            </Zoom>

          </div>

          <div className="flex md:gap-6 gap-0 items-center">

            <div className="flex gap-6  items-center justify-center">
              <div className="flex p-2 boxCenter  invisible md:visible w-0 md:w-fit gap-6 ">
              <Shake>
                <Dropdown />
                </Shake>
                <Shake>
                <div className="flex gap-1 items-center">
                  <span className="p-1 shadow rounded-full">
                    <BiSupport size={18} className='colorIcons' />
                  </span>
                  <NavLink to="#" className="hoverBar colorIcon text-sm font-semibold ">
                    Destek Merkezi
                  </NavLink>
                </div>
                </Shake>

              </div>
              <Shake>
              <DropdownUser />
              </Shake>
            </div>
          </div>
        </div>
      </div>
      <div className="flex menuBox   w-full fixed" ref={menuRef} >

        <div className="w-[70%] sm:w-[55%] p-2 flex-col gap-3 md:w-[45%] lg:w-[35%] flex h-full  bg-white ">
          <span className="flex  w-full  justify-between items-center">
            <img src={logo} alt='logo' className='object-cover w-28 h-8'/>
            <span className="p-1 crosAnime shadow-md rounded-full">
              <RxCross2 size={19} className="cursor-pointer " onClick={menuToggle} />
            </span>
          </span>
          <div className="flex w-full h-full items-center justify-center">
            <div className="flex flex-col h-full   w-full gap-4">
              <Menu />
            </div>
          </div>
        </div>
        <div
          className="w-[30%] sm:w-[45%] p-3  md:w-[55%] lg:w-[65%] flex h-full   bg-black bg-opacity-25 "
          onClick={menuToggle}
        ></div>
      </div>


    </div>
  );
}