import React from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
export default function Ticket(props: SVGMotionProps<SVGSVGElement>) {
	return (
		<motion.svg
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			x='0px'
			y='0px'
			viewBox='0 0 61.8 63.3'
			style={{ enableBackground: 'new 0 0 61.8 63.3' } as React.CSSProperties}
			xmlSpace='preserve'
			{...props}
		>
			<g id='circle'>
				<motion.path
					style={{
						fill: 'none',
						stroke: '#6BBD45',
						strokeWidth: 5,
						strokeMiterlimit: 10,
					}}
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
						duration: 2 ,
						ease: 'easeInOut',
						delay: 1,
					}}
					d='M59.5,32.5c0,2.7-4.3,4.8-5.1,7.3
		c-0.8,2.6,1.5,6.8-0.1,8.9c-1.6,2.2-6.3,1.3-8.4,2.8c-2.1,1.6-2.7,6.3-5.3,7.1c-2.5,0.8-5.7-2.7-8.5-2.7c-2.7,0-6,3.5-8.5,2.7
		c-2.6-0.8-3.2-5.6-5.3-7.1c-2.2-1.6-6.9-0.7-8.4-2.8c-1.6-2.1,0.7-6.3-0.1-8.9c-0.8-2.5-5.1-4.5-5.1-7.3c0-2.7,4.3-4.8,5.1-7.3
		c0.8-2.6-1.5-6.8,0.1-8.9c1.6-2.2,6.3-1.3,8.4-2.8c2.1-1.6,2.7-6.3,5.3-7.1C26,5.5,29.3,9,32,9c2.7,0,6-3.5,8.5-2.7
		c2.6,0.8,3.2,5.6,5.3,7.1c2.2,1.6,6.9,0.7,8.4,2.8c1.6,2.1-0.7,6.3,0.1,8.9C55.1,27.7,59.5,29.7,59.5,32.5z'
				/>
			</g>
			<motion.polyline
				initial={{ pathLength: 0 }}
				animate={{ pathLength: 1 }}
				transition={{
					duration: 1,
					ease: 'easeInOut',
				}}
				id='tick'
				style={{
					fill: 'none',
					stroke: '#6BBD45',
					strokeWidth: 5,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				points='
	20.3,34.2 27.3,41.5 44.5,24.2 '
			/>
		</motion.svg>
	)
}
