import React, { useContext, useEffect } from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { animationContext } from '../utils/Utils';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Cards() {
    const cardArr = [
        {text:'Search Engine Optimization' , img:'https://ocspd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.0acb3fed.png&w=1080&q=75' , bgColor: 'bg-white' , bgSmall:'#000', hColor:'bg-green-500' ,color:'white'},
        {text:'Pay Per Click Advertisment' , img:'https://ocspd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial%20marketing.41a0956c.png&w=1920&q=75' , bgColor: 'bg-black' , bgSmall:'#FFF', hColor:'bg-white' ,color:'black'},
        {text:'Social-Media Marketing' , img:'https://ocspd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial%20marketing.41a0956c.png&w=1920&q=75' , bgColor: 'bg-black' , bgSmall:'#fff', hColor:'bg-white' ,color:'black'},
        {text:'E-Mail Marketing' , img:'https://ocspd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.0acb3fed.png&w=1080&q=75' , bgColor: 'bg-white' , bgSmall:'#000', hColor:'bg-green-500' ,color:'white'},
    ]
    


    


    useGSAP(()=>{
        gsap.from('.a' , {
            x:-1200,
            duration:1,
            opacity:0,
            scrollTrigger:{
                scroller:'body',
                trigger:'.hell',
                scrub:2,
                
                end:'top 10%',
                start:'top 90%'
            }
        })
        gsap.from('.b' , {
            x:1200,
            duration:1,
            opacity:0,
            scrollTrigger:{
                scroller:'body',
                trigger:'.hell',
                scrub:2,
                
                end:'top 10%',
                start:'top 90%'
            }
        })
    })
    
    
    
    
  return (
    <>

        <div
          className="w-[90%] hell mx-auto mt-[70px] flex flex-wrap 865:items-start  gap-6 items-center justify-between py-10 
                     865:flex-col "
        >
            {
                 cardArr.map((items , index)=>(
                    <div key={index} className={`${index%2===0? 'a' : 'b'} container w-[45%] 865:w-[100%] h-[300px] overflow-hidden flex-shrink-0 flex gap-7 rounded-xl p-9  ${items.bgColor? items.bgColor : 'bg-white'} border-2 border-black`}>
                    <div className='w-[50%] flex flex-col justify-between'>
                        <h1 className={`text-3xl px-3 py-2 rounded-lg ${items.hColor? items.hColor : 'bg-green-500'}`}>{items.text}</h1>
                        <div className='flex gap-5 items-center'>
    
                            <IconContext.Provider  value={{color:items.color , style:{width:'40px' , height:'40px' , backgroundColor:items.bgSmall ,borderRadius:'50%' ,padding:'10px'}}}>
                            <FaArrowTrendUp />
    
                            </IconContext.Provider>
                            <p style={{color:items.bgSmall}} className={`text-xl`}>Learn More</p>
                        </div>
                    </div>
                    <div className='w-[50%]  '>
                            <img className='w-full  object-contain object-center' src={items.img} />
                    </div>
            </div>
                 ))   
            }
            
        </div>

        
        
    </>
  )
}

export default Cards
