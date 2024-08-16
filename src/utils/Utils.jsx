import React, { Children, createContext, useContext } from 'react'
import { gsap } from 'gsap'
import {useGSAP} from '@gsap/react'

export const animationContext = createContext()

function Utils({children}) {

    const commonAnimation = gsap.timeline()

  return (
    <animationContext.Provider value={commonAnimation}>
      {children}
    </animationContext.Provider>
  )
}

export default Utils
