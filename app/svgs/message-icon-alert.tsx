import { useState } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
const MessageIconAlert = ({
	outSideHover,
	...props
}: SVGMotionProps<SVGSVGElement> & { outSideHover?: boolean }) => {
	const [isHover, setIsHover] = useState<boolean>(false)
	return (
		<motion.svg
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			x='0px'
			y='0px'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => {
				setIsHover(false)
			}}
			viewBox='0 0 399 349'
			style={{}}
			xmlSpace='preserve'
			{...props}
		>
			<path
				style={{
					fill: '#1e3050',
				}}
				d='M50.7,73.9c-16.7,0-30.3,12.4-30.3,27.7v157.7c0,15.3,13.6,27.7,30.3,27.7h42.5c9.3,0,16.9,6.9,16.9,15.4v25.6
	c0,3.1,1.9,5.9,4.9,7.3c3,1.4,6.7,1.1,9.4-0.8l64.8-44.4c2.9-2,6.5-3.1,10.1-3.1h77.7c16.7,0,30.3-12.4,30.3-27.7V101.6
	c0-15.3-13.6-27.7-30.3-27.7H50.7z'
			/>
			<motion.path
				id='quarter_circle'
				initial={{ opacity: 0 }}
				animate={{
					opacity: isHover || outSideHover ? 1 : 0,
					transition: {
						duration: 0.3,
						ease: 'easeInOut',
						delay: isHover || outSideHover ? 0 : 0.3,
					},
				}}
				d='M347,72.6c5.3,13.9,5.8,28.2,2.4,40.8c-0.7,2.8-3.5,4-6,2.7l-8-4.4c-2.1-1.2-3.3-3.9-2.7-6.3
	c2.1-8.3,1.6-17.6-1.8-26.7c-7.5-19.8-26.6-31.2-44-27c-2.2,0.5-4.5-0.9-5.5-3.4l-3.5-9.1c-1.1-2.8,0.2-5.8,2.8-6.5
	C306.9,25.9,335.8,42.9,347,72.6z'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					opacity: isHover || outSideHover ? 1 : 0,
					transition: {
						duration: 0.3,
						ease: 'easeInOut',
						delay: isHover || outSideHover ? 0.3 : 0,
					},
				}}
				id='quarter_circle_00000161600669022284576620000015760131209466731947_'
				d='M384,47.6c5.3,13.9,5.8,28.2,2.4,40.8
	c-0.7,2.8-3.5,4-6,2.7l-8-4.4c-2.1-1.2-3.3-3.9-2.7-6.3c2.1-8.3,1.6-17.6-1.8-26.7c-7.5-19.8-26.6-31.2-44-27
	c-2.2,0.5-4.5-0.9-5.5-3.4l-3.5-9.1c-1.1-2.8,0.2-5.8,2.8-6.5C343.9,0.8,372.8,17.8,384,47.6z'
			/>
		</motion.svg>
	)
}
export default MessageIconAlert
