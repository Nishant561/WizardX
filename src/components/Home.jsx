import React, { useContext, useEffect, useRef } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../App.css";
import { animationContext } from "../utils/Utils";
import Services from "./Services";
import Cards from "./Cards";
function Home() {
    const commonAnimation = useContext(animationContext)
    const hero = useRef()
    const l_para = useRef()
    const but = useRef()
  const marks = useRef();
  const img = [
    "https://www.brandium.nl/wp-content/uploads/2023/03/11.png",
    "https://www.brandium.nl/wp-content/uploads/loop-earplugs.png",
    "https://www.brandium.nl/wp-content/uploads/apostrophe-logo.png",
    "https://www.brandium.nl/wp-content/uploads/Panchos-amsterdam.png",
    "https://www.brandium.nl/wp-content/uploads/2023/03/22.png",
    "https://www.brandium.nl/wp-content/uploads/Roxit-by-Visma.png",
    "https://www.brandium.nl/wp-content/uploads/2023/02/3.png",
    "https://www.brandium.nl/wp-content/uploads/2023/03/13.png",
  ];

    

useEffect(()=>{
    commonAnimation.from(hero.current ,{
        x: -90,
        opacity:0,
        duration:.6
    })

    commonAnimation.from(l_para.current , {
        x: -90,
        opacity:0,
        duration:.6
    })

    commonAnimation.from(but.current,{
        scale:0,
        duration:.5,
        opacity:0
    })



    commonAnimation.from('.right-container',{
        scale:0,
        duration:.5,
        opacity:0
    },"-=.3")

    commonAnimation.from('.marquee',{
        duration:.2,
        opacity:0,
    })
})
  





  return (
    <>
      <div className="w-[100%] h-[100%] ">
        <div className="w-[90%] mx-auto  items-center flex-nowrap  flex pt-6 mb-12 944:flex-col 944:items-start ">
          <div className="left-container flex flex-col flex-shrink-0 w-[50%] h-[75%] p-7 944:order-2 944:w-[100%]">
            <h1 ref={hero} className="text-[60px] flex-shrink-0 font-semibold  leading-[75px] 1286:leading-[50px] 1286:text-[40px]">
              Navigating the digital Landscape for Success
            </h1>
            <p ref={l_para} className="mt-9 flex-shrink-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quaerat et corrupti velit deserunt accusamus rerum! Officiis ea
              aut eaque in maiores quibusdam dignissimos maxime.
            </p>

            <div ref={but} className="mt-5 flex-shrink-0">
              <Button color="black" textC="#fff" text="Book a consultation" />
            </div>
          </div>

          <div className="right-container  w-[50%] h-[40%] 944:w-full 944:mx-auto 944:self-center flex justify-center items-center">
            <img
              className="w-[60%]  h-auto object-contain flex-shrink-0 944:w-[80%]"
              src="https://ocspd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.0acb3fed.png&w=1080&q=75"
              alt="Illustration"
            />
          </div>
        </div>

        <div className="marquee mt-3 flex ">
          <div
            ref={marks}
            className="flex mar flex-shrink-0 items-center justify-around"
          >
            {img.map((items, index) => (
              <img
                key={index}
                className="w-[10%] flex-shrink-0 object-contain object-center"
                src={items}
              />
            ))}
          </div>
          <div
            ref={marks}
            className="flex mar flex-shrink-0 items-center justify-around"
          >
            {img.map((items, index) => (
              <img
                key={index}
                className="w-[10%] flex-shrink-0 object-contain object-center"
                src={items}
              />
            ))}
          </div>
        </div>

        <Services />

        {/* <div
          className="w-[90%] hell-card mx-auto mt-[70px] flex flex-wrap 865:items-start  gap-6 items-center justify-between py-10 
                     865:flex-col "
        >
           {cardArr.map((items, index) => (
            <Cards key={index} ind={index} item={items} />
          ))} 
        </div> */}

        <Cards />

        
      </div>
    </>
  );
}

export default Home;
