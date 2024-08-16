import React, { useRef } from 'react'
import { gsap } from 'gsap'
function Button({color='#fff',textC ='#000' , text = 'button'}) {

    
  return (
    <>
      
        <button style={{backgroundColor: color , color: textC}} className={`px-5 shrink-0 py-3  border relative  border-black rounded-lg lg:px-3 lg:py-2`}>
            <div  className='absolute  flex justify-center  h-full left-0  top-0 rounded-lg bg-red-500'>

            </div>
            {text}
        </button>

    </>
  )
}

export default Button
