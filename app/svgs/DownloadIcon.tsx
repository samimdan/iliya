import { motion, SVGMotionProps } from 'framer-motion'
import { useEffect, useState } from 'react'
const DownloadIcon = ({
	outSideHover,
	animation = true,
	...props
}: SVGMotionProps<SVGSVGElement> & {
	outSideHover?: boolean
	animation?: boolean
}) => {
	const [isHoverd, setIsHoverd] = useState<boolean>(false)

	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			xmlSpace='preserve'
			id='Layer_1'
			x={0}
			y={0}
			style={{
				background: 'new 0 0 399 366.7',
			}}
			onMouseEnter={() => {
				setIsHoverd(true)
			}}
			onMouseLeave={() => {
				setIsHoverd(false)
			}}
			viewBox='0 0 399 366.7'
			{...props}
		>
			<path
				style={{ fill: '#1e3050' }}
				d='M282.2,187.8L212.1,282c-6.2,8.4-18.8,8.4-25.1,0l-70.1-94.1c-7.7-10.3-0.4-25.1,12.6-25.1h34.2v-48.3
	c0-20,16.2-36,36-36l0,0c20,0,36,16.2,36,36v48.3h34.2C282.4,162.9,289.9,177.6,282.2,187.8z'
			/>
			<motion.circle
				style={{
					fill: 'none',
					stroke: '#000000',
					strokeWidth: 31,
					strokeMiterlimit: 20,
				}}
				initial={{
					opacity: 0,
					pathLength: 0,
					pathOffset: 0,
					pathSpacing: 1,
				}}
				animate={{
					opacity: (isHoverd || outSideHover) && animation ? 1 : 0,
					pathLength: 0.07,
					pathSpacing: (isHoverd || outSideHover) && animation ? 0 : 1,

					transition: { duration: 1, damping: 100, mass: 1 },
				}}
				cx='199.5'
				cy='183.4'
				r='163.3'
			/>
		</motion.svg>
	)
}
export default DownloadIcon
