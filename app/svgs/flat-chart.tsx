import { useState } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
const FlatChartIcon = (props: SVGMotionProps<SVGSVGElement>) => {
	const [isHoverd, setIsHoverd] = useState<boolean>(false)
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			xmlSpace='preserve'
			id='Layer_1'
			x={0}
			y={0}
			onMouseEnter={() => setIsHoverd(true)}
			onMouseLeave={() => setIsHoverd(false)}
			style={{
				background: 'new 0 0 64 64',
			}}
			viewBox='0 0 64 64'
			{...props}
		>
			<style>{'.st1{fill:#1d3050}'}</style>
			<path
				d='M45 47.2H19.1c-1.8 0-3.3-1.7-3.3-3.8V20.3h32.7v23.1c-.2 2.1-1.6 3.8-3.5 3.8z'
				style={{
					fill: 'none',
					stroke: '#1d3050',
					strokeWidth: 2,
					strokeMiterlimit: 10,
				}}
			/>
			<path
				d='M48.5 58.7c-.3.3-.8.2-1.1-.1l-8.6-10.9 1.2-1 8.6 10.9c.3.3.3.8-.1 1.1zM16.1 58.7c.3.3.8.2 1.1-.1l8.6-10.9-1.2-1L16 57.6c-.3.3-.2.8.1 1.1zM33 46.8l-.3 8.3v.1c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-.1l-.3-8.3h2z'
				className='st1'
			/>
			<path
				d='M49.7 19.1c0 1.1-.9 2.1-2 2.1h-.9l-.3 1.1c-.5 1.6-1.7 2.7-3.1 2.7H20.8c-1.4 0-2.6-1.1-3.1-2.7l-.3-1.1h-.9c-1.1 0-2-.9-2-2s.9-2 2-2h31.2c1-.1 2 .8 2 1.9z'
				style={{
					fill: '#1d3050',
					stroke: '#000',
					strokeWidth: 0.25,
					strokeMiterlimit: 10,
				}}
			/>
			<motion.path
				d='M21.9 30.7c10.5 0 10.5 6 20.9 6'
				style={{
					fill: 'none',
					stroke: '#000',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				}}
				initial={{ pathLength: -1, pathOffset: 1, display: 'none' }}
				animate={{
					display: 'block',
					pathLength: isHoverd ? 1 : 0,
					pathOffset: isHoverd ? 1 : 0,
					transition: { duration: 0.5, ease: 'easeInOut' },
				}}
			/>
		</motion.svg>
	)
}
export default FlatChartIcon
