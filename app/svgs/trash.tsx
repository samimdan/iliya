import { motion, SVGMotionProps } from 'framer-motion'
import React, { useState } from 'react'
export default function Trash(props: SVGMotionProps<SVGSVGElement>) {
	const [hover, setHover] = useState<boolean>(false)

	return (
		<motion.svg
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			x='0px'
			y='0px'
			viewBox='0 0 61.8 81.1'
			style={{ background: 'new 0 0 61.8 81.1' }}
			xmlSpace='preserve'
			{...props}
		>
			<path
				style={{ fill: '#1E3050' }}
				d='M13.4,35.9l2.3,26.5h16.5c5.3,0,9.6-4.1,9.8-9.4l1-17.1H13.4z'
			/>
			<g>
				<g>
					<path
						style={{ fill: '#231F20' }}
						d='M28.1-166.5L28.1-166.5z'
					/>
				</g>
				<g>
					<path
						style={{ fill: 'none' }}
						d='M123.2,265.3'
					/>
				</g>
			</g>
			<motion.path
				initial={{ fill: '#A5ACB9' }}
				animate={{
					fill: hover ? '#f58b01' : '#A5ACB9',
					transition: { duration: 2, ease: 'easeInOut' },
				}}
				d='M13.5,35.9h29.6L42,53c-0.3,5.2-4.6,9.4-9.8,9.4H15.7l0.2,2.9c0.2,0,0.4,0,0.6,0c3.7,0,6.8,3,6.8,6.8
            c0,0.8-0.1,1.6-0.4,2.3h18.7c2.3,0,4.2-1.7,4.3-3.9l2.9-35H13.4L13.5,35.9z'
			/>
			<path
				style={{ fill: '#1E3050' }}
				d='M10.4,32.2v1.1c0,1.1,0.9,2.1,2.1,2.1h37.4c1.1,0,2.1-0.9,2.1-2.1v-1.1c0-1.2-0.9-2.1-2.1-2.1H12.3
            C11.2,30.1,10.4,31,10.4,32.2z'
			/>
			<path
				style={{ fill: '#1E3050' }}
				d='M9.8,72c0,3.7,3,6.8,6.8,6.8c2.9,0,5.4-1.9,6.4-4.5c0.2-0.7,0.4-1.5,0.4-2.3c0-3.7-3-6.8-6.8-6.8
            c-0.2,0-0.4,0-0.6,0C12.5,65.6,9.8,68.4,9.8,72z'
			/>
			<path
				style={{ fill: '#1E3050' }}
				d='M36.4,74.2v2.9c0,0.9,0.7,1.6,1.6,1.6h2c0.9,0,1.6-0.7,1.6-1.6v-2.9H36.4z'
			/>
			<circle
				style={{ fill: '#A5ACB9' }}
				cx='16.6'
				cy='72'
				r='2.1'
			/>
			<motion.path
				initial={{ originX: 0, originY: 2 }}
				animate={{
					rotate: hover ? -60 : 0,
					transition: { duration: 2, ease: 'easeInOut' },
				}}
				style={{ fill: '#A5ACB9' }}
				d='M16.1,24.5h32.5c1.5,0,2.7,1.2,2.7,2.7v2.1h-38v-2.1C13.4,25.7,14.6,24.5,16.1,24.5z'
			/>
		</motion.svg>
	)
}
