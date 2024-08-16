import React, { useContext, useRef } from "react";
import { NavLink} from "react-router-dom";
import { GiStarShuriken } from "react-icons/gi";
import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";
import { Button } from "./index";
import { IoMdClose } from "react-icons/io";
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

import { animationContext } from "../utils/Utils";

function Nav() {
    const smallNavbar = useRef()
    const menuBar = useRef()
    var tl = gsap.timeline({paused:true})
   
    const commonAnimation = useContext(animationContext)
    useGSAP(()=>{
        tl.from(smallNavbar.current,{
            x:1300,
            duration:0.5,
        })


        tl.from( ".NavLink" ,{
            x:100,
            opacity:0,
            duration:0.3,
            stagger:0.2


        })

        tl.from(".quote",{
            scale:0,
            duration:0.3,
        })


        commonAnimation.from('.logo',{
            y:-70,
            opacity:0,
            duration:.7,
        })


        commonAnimation.from('.big',{
            y:-70,
            duration:.7,
            opacity:0,
            stagger:0.3
        })

        commonAnimation.from('.buts',{
            scale:0,
            duration:.7
        })
    })

    const handelMenu = ()=>{
        tl.play()
    }


    const handelClose =()=>{
        tl.reverse()
    }

  return (
    <>
      <div className="relative ">
        <nav className="flex items-center justify-between   px-10 py-4">
          <div className="logo flex items-center  ">
            <IconContext.Provider
              value={{
                style: { height: "30px", width: "30px", marginRight: "10px" },
              }}
            >
              <GiStarShuriken />
            </IconContext.Provider>
            <h1 className="text-4xl font-semibold 865:text-2xl">WizardX</h1>
          </div>

          <div className="links-container flex items-center sm:hidden gap-9">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-400" : "text-black"
                }  flex-shrink-0 text-2xl lg:text-[19px] big`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-400" : "text-black"
                } flex-shrink-0 text-2xl lg:text-[19px] big`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-400" : "text-black"
                } flex-shrink-0 text-2xl lg:text-[19px] big`
              }
            >
              Services
            </NavLink>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-400" : "text-black"
                } flex-shrink-0 text-2xl lg:text-[19px] big`
              }
            >
              Blog
            </NavLink>


            <div className="buts">

            <Button text="Request a quote" />
            </div>
          </div>

          <div ref={menuBar} onClick={handelMenu} className="800:hidden cursor-pointer">
            <IconContext.Provider
              color="black"
              value={{ style: { height: "40px", width: "40px" } }}
            >
              <IoMenu />
            </IconContext.Provider>
          </div>
        </nav>

        <div ref={smallNavbar} className="w-[35%] 800:hidden h-screen gap-[40px] p-9  bg-black absolute top-0 right-0 flex flex-col z-50 ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "text-green-400" : "text-white"
              }  flex-shrink-0  lg:text-[19px] text-5xl NavLink`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `${
                isActive ? "text-green-400" : "text-white"
              } flex-shrink-0  lg:text-[19px] text-5xl NavLink`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              `${
                isActive ? "text-green-400" : "text-white"
              } flex-shrink-0  lg:text-[19px] text-5xl NavLink`
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              `${
                isActive ? "text-green-400" : "text-white"
              } flex-shrink-0  lg:text-[19px] text-5xl NavLink`
            }
          >
            Blog
          </NavLink>
            <div className="w-full quote text-center">
                 <Button text="Request a quote" />

            </div>

            <div onClick={handelClose} className="absolute top-2 right-3">
                        <IconContext.Provider value={{style:{height:'40px' , width:'40px' ,color:'#fff' ,cursor:'pointer'}}}>
                                <IoMdClose />
                        </IconContext.Provider>
            </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
