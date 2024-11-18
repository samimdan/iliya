import { useState } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
const MessageIcon = ({
	outSideHover,
	...props
}: SVGMotionProps<SVGSVGElement> & { outSideHover: boolean }) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<motion.svg
			viewBox='0 0 172.42 190.61'
			{...props}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<path
				style={{
					fill: 'none',
					stroke: '#999595',
					strokeWidth: 15,
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				}}
				d='M211.47,135.86'
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#999595',
					strokeWidth: 15,
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				}}
				d='M-12.36,135.86'
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#999595',
					strokeWidth: 15,
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				}}
				d='M211.47,97.72'
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#999595',
					strokeWidth: 15,
					strokeLinecap: 'round',
					strokeMiterlimit: 10,
				}}
				d='M-12.36,97.72'
			/>
			<motion.path
				style={{ fill: '#1E3050' }}
				d='M166.05,37.46v88.68c0,11.92-9.67,21.6-21.6,21.6H99.26c-3.5,0-6.63,1.99-8.36,5.03
		c-0.01,0.02-0.02,0.03-0.03,0.05l-13.28,23.01c-4.13,7.14-14.43,7.14-18.55,0l-13.29-23.01c-0.01-0.02-0.02-0.03-0.03-0.05
		c-1.73-3.04-4.86-5.03-8.36-5.03h-9.63c-11.93,0-21.6-9.68-21.6-21.6V37.46c0-11.93,9.67-21.6,21.6-21.6h116.72
		C156.38,15.86,166.05,25.53,166.05,37.46z'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				style={{ fill: '#fffff' }}
				animate={{
					opacity: isHover || outSideHover ? 1 : 0,
					transition: { duration: 0.2 },
				}}
				d='M134.46,111.61H89.73c-4.4,0-7.96-3.56-7.96-7.96v0c0-4.4,3.56-7.96,7.96-7.96h44.73c4.4,0,7.96,3.56,7.96,7.96
		v0C142.42,108.05,138.86,111.61,134.46,111.61z'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					opacity: isHover || outSideHover ? 1 : 0,
					transition: { duration: 0.2, delay: 0.2 },
				}}
				style={{ fill: '#fffff' }}
				d='M82.8,68.92H38.07c-4.4,0-7.96-3.56-7.96-7.96v0c0-4.4,3.56-7.96,7.96-7.96H82.8c4.4,0,7.96,3.56,7.96,7.96v0
		C90.76,65.35,87.2,68.92,82.8,68.92z'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					opacity: isHover || outSideHover ? 1 : 0,
					transition: { duration: 0.2, delay: 0.4 },
				}}
				style={{ fill: '#fffff' }}
				d='M134.46,68.16h-14.54c-4.4,0-7.96-3.56-7.96-7.96v0c0-4.4,3.56-7.96,7.96-7.96h14.54c4.4,0,7.96,3.56,7.96,7.96
		v0C142.42,64.6,138.86,68.16,134.46,68.16z'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					opacity: isHover || outSideHover ? 1 : 0,
					transition: { duration: 0.2, delay: 0.6 },
				}}
				style={{ fill: '#fffff' }}
				d='M52.61,110.22H38.07c-4.4,0-7.96-3.56-7.96-7.96v0c0-4.4,3.56-7.96,7.96-7.96h14.54c4.4,0,7.96,3.56,7.96,7.96
		v0C60.57,106.66,57.01,110.22,52.61,110.22z'
			/>
		</motion.svg>
	)
}
export default MessageIcon
