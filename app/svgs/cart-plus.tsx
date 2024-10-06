import {motion,SVGMotionProps} from 'framer-motion'
import React,{useEffect, useState} from 'react'
interface CartPlusProps extends SVGMotionProps<SVGSVGElement>{
    hoverd:boolean
    }
    

export default function CartPlus(props: CartPlusProps) {
  const [isHovered, setIsHovered] = useState(false)
  useEffect(()=>{
    setIsHovered(props.hoverd)
  },[props.hoverd])
    return (
 
<motion.svg
{...props}

version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 576 651.1" enable-background="new 0 0 576 651.1" xmlSpace="preserve">
<motion.path d="M0,163.1c0-13.3,10.7-24,24-24h45.5c22,0,41.5,12.8,50.6,32h411c26.3,0,45.5,25,38.6,50.4l-41,152.3
c-8.5,31.4-37,53.3-69.5,53.3H170.7l5.4,28.5c2.2,11.3,12.1,19.5,23.6,19.5H488c13.3,0,24,10.7,24,24c0,13.3-10.7,24-24,24H199.7
c-34.6,0-64.3-24.6-70.7-58.5l-51.6-271c-0.7-3.8-4-6.5-7.9-6.5H24C10.7,187.1,0,176.4,0,163.1z M128,603.1c0-26.5,21.5-48,48-48
s48,21.5,48,48c0,26.5-21.5,48-48,48S128,629.6,128,603.1L128,603.1z M464,555.1c26.5,0,48,21.5,48,48c0,26.5-21.5,48-48,48l0,0
c-26.5,0-48-21.5-48-48C416,576.6,437.5,555.1,464,555.1z M336,383.1"/>
<motion.path
animate={{opacity:isHovered?1:0,y:isHovered?0:-200,transition:{duration:0.7,ease:'easeInOut'}}}
id="rec" d="M500.7,133.7H149.1c-14.1,0-25.6-11.5-25.6-25.6v0c0-14.1,11.5-25.6,25.6-25.6h351.7c14.1,0,25.6,11.5,25.6,25.6v0
C526.4,122.3,514.9,133.7,500.7,133.7z"/>
<motion.path
animate={{opacity:isHovered?1:0,y:isHovered?0:-200,transition:{delay:0.1,duration:0.7,ease:'easeInOut'}}}
id="rec_00000051349405208213192990000017171588697857325973_" d="M458.5,45.1H188.4c-8.7,0-15.7-7-15.7-15.7v-7.5
c0-8.7,7-15.7,15.7-15.7h270.1c8.7,0,15.7,7,15.7,15.7v7.5C474.3,38.1,467.2,45.1,458.5,45.1z"/>
</motion.svg>



  )
}





