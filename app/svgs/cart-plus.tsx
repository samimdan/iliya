import { motion, SVGMotionProps } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface ICartPlusProps {
	className: string
	hoverd: boolean
}

export default function CartPlus({ className, hoverd }: ICartPlusProps) {
	const [isHovered, setIsHovered] = useState(false)
	useEffect(() => {
		setIsHovered(hoverd)
	}, [hoverd])
	return (
		<motion.svg
			className={className}
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			x='0px'
			y='0px'
			viewBox='0 0 24 28.4'
			enableBackground='new 0 0 24 28.4'
			xmlSpace='preserve'
		>
			<circle
				cx='9.6'
				cy='25.1'
				r='2.4'
			/>
			<circle
				cx='18.5'
				cy='25.1'
				r='2.4'
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000000',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
				d='M2,6.5h2l2.7,12.4
	c0.2,0.9,1,1.6,2,1.6h9.8c0.9,0,1.7-0.7,2-1.6l1.6-7.4h-17'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					opacity: isHovered ? 1 : 0,
					y: isHovered ? 0 : -50,
					transition: { duration: 0.7, ease: 'easeInOut' },
				}}
				id='rec_00000138545625988828629340000003365921331788100226_'
				d='M19.9,8.7H7.4c-0.5,0-0.9-0.4-0.9-0.9v0
	c0-0.5,0.4-0.9,0.9-0.9h12.6c0.5,0,0.9,0.4,0.9,0.9v0C20.9,8.3,20.5,8.7,19.9,8.7z'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					opacity: isHovered ? 1 : 0,
					y: isHovered ? 0 : -50,
					transition: { duration: 0.7, delay: 0.1, ease: 'easeInOut' },
				}}
				id='rec'
				d='M20,4.4H7.4c-0.5,0-0.9-0.4-0.9-0.9v0c0-0.5,0.4-0.9,0.9-0.9H20c0.5,0,0.9,0.4,0.9,0.9v0C20.9,3.9,20.5,4.4,20,4.4
	z'
			/>
		</motion.svg>
	)
}
