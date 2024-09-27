import { animate, stagger } from 'framer-motion/dom'
import { motion, SVGMotionProps } from 'framer-motion'
//NewIcon  AddToBasketIcon
export const AddToBasketIcon = (props: SVGMotionProps<SVGSVGElement>) => {
	return (
		<motion.svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			whileHover={{ scale: 1.1 }}
			{...props}
			onMouseEnter={() => console.log('hover')}
		>
			<path
				d='M10 29C10.5523 29 11 28.5523 11 28C11 27.4477 10.5523 27 10 27C9.44772 27 9 27.4477 9 28C9 28.5523 9.44772 29 10 29Z'
				stroke='black'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M21 29C21.5523 29 22 28.5523 22 28C22 27.4477 21.5523 27 21 27C20.4477 27 20 27.4477 20 28C20 28.5523 20.4477 29 21 29Z'
				stroke='black'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M4.05 9.05H6.05L8.71 21.47C8.80758 21.9249 9.06067 22.3315 9.42571 22.6199C9.79076 22.9082 10.2449 23.0604 10.71 23.05H20.49C20.9452 23.0493 21.3865 22.8933 21.741 22.6078C22.0956 22.3224 22.3421 21.9245 22.44 21.48L24.09 14.05H7.12'
				stroke='black'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<rect
				x='10.8905'
				y='5.94888'
				width='4.59134'
				height='4.59134'
				transform='rotate(25.0169 10.8905 5.94888)'
				fill='#0B0B0B'
			/>
			<rect
				x='19.9795'
				y='5.94011'
				width='4.59134'
				height='4.59134'
				transform='rotate(61.6161 19.9795 5.94011)'
				fill='#0B0B0B'
			/>
			<rect
				x='19.3494'
				y='3.34158'
				width='4.59134'
				height='4.59134'
				transform='rotate(139.073 19.3494 3.34158)'
				fill='#0B0B0B'
			/>
		</motion.svg>
	)
}
