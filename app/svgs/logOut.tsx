import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { SVGProps } from "react"
const LogoutAnimation = (props: SVGProps<SVGSVGElement>) => {
  const [isHoverd, setIsHoverd] = useState(false)
  return (
  <motion.svg 

   className='w-7 h-5 hover:fill-rose-500 hover:cursor-pointer'
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 615 512"
  onMouseEnter={() => setIsHoverd(true)}
  onMouseLeave={() => setIsHoverd(false)}
  >
    <motion.path d="M163 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H99C46 32 3 75 3 128v256c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H99c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h64z" />
    <motion.path 
    animate={{rotate:isHoverd ? 180 :0 }}
    transition={{duration:0.5}}
    d="M480.1 278.1c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H169.5c-17.7 0-32 14.3-32 32s14.3 32 32 32h210.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128.1z" />
  </motion.svg>
)}
export default LogoutAnimation
