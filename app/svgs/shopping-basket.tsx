import {motion, SVGMotionProps} from 'framer-motion';

import React from 'react'

export default function ShoppoingBasket(props: SVGMotionProps<SVGSVGElement>) {
  return (
	<motion.svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  xmlSpace="preserve" {...props}>
<path d="M120.1,27C111,7.8,91.6-5,69.5-5H24C10.7-5,0,5.7,0,19s10.7,24,24,24h45.5c3.8,0,7.1,2.7,7.9,6.5l51.6,271
	c6.5,34,36.2,58.5,70.7,58.5H488c13.3,0,24-10.7,24-24s-10.7-24-24-24H199.7c-11.5,0-21.4-8.2-23.6-19.5l-5.4-28.5h288.5
	c32.6,0,61.1-21.8,69.5-53.3l41-152.3C576.6,52,557.4,27,531.1,27 M176,507c26.5,0,48-21.5,48-48s-21.5-48-48-48s-48,21.5-48,48
	S149.5,507,176,507z M512,459c0-26.5-21.5-48-48-48s-48,21.5-48,48s21.5,48,48,48S512,485.5,512,459L512,459z"/>
<path id="arrowDown" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M340,29.9c0,34,0,68.1,0,102.1l23-23
	c9.4-9.4,24.6-9.4,33.9,0c9.3,9.4,9.4,24.6,0,33.9l-64,64c-9.4,9.4-24.6,9.4-33.9,0l-64-64c-9.4-9.4-9.4-24.6,0-33.9
	c9.4-9.3,24.6-9.4,33.9,0l23,23c0-34,0.1-68.1,0.1-102.1C308,29.9,324,29.9,340,29.9z"/>
</motion.svg>
	
  )
}
