import React, { useContext } from 'react'
import { animationContext } from '../utils/Utils'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Services() {

  const commonAnimation = useContext(animationContext)

  useGSAP(()=>{
    gsap.from('.services',{
      y:100,
      opacity:0,
      duration:0.5,
      scrollTrigger:{
        trigger:'.services',
        scroller:'body',
        scrub:2
      }
    })
  })

  return (
    <>
        <div className='services mt-10 w-[90%] gap-5 flex m-auto'>
          <h1 className='bg-green-500 text-white text-2xl font-semibold px-3 py-2'>Services</h1>
          <p className='w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae molestiae dignissimos accusantium illo quaerat quos voluptatum similique obcaecati nam magnam.</p>
        </div>
    </>
  )
}

export default Services
