import { useState } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
import path from 'path'
const OctagonAvatar = ({
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
			data-name='Layer 1'
			viewBox='0 0 132.95 121.72'
			onMouseEnter={() => setIsHoverd(true)}
			onMouseLeave={() => setIsHoverd(false)}
			{...props}
		>
			<defs>
				<clipPath id='ocatagon'>
					<path
						d='M87.44 1.5H45.52c-8.24 0-15.85 4.4-19.97 11.53L4.59 49.33a23.056 23.056 0 0 0 0 23.06l20.96 36.3a23.068 23.068 0 0 0 19.97 11.53h41.92c8.24 0 15.85-4.4 19.97-11.53l20.96-36.3a23.056 23.056 0 0 0 0-23.06l-20.96-36.3A23.068 23.068 0 0 0 87.44 1.5Z'
						style={{
							fill: 'none',
							stroke: '#000',
							strokeWidth: 10,
							strokeMiterlimit: 10,
						}}
					/>
				</clipPath>
			</defs>
			<image
				xlinkHref='https://lh3.googleusercontent.com/a/ACg8ocJpvVux687rVMiOUKLjmyK3aVal4r8pZ_9t4agmQvNMrDvu6Vee=s360-c-no'
				style={{
					clipPath: 'url(#ocatagon)',
					width: '100%',
				}}
			/>
			<motion.path
				d='M87.44 1.5H45.52c-8.24 0-15.85 4.4-19.97 11.53L4.59 49.33a23.056 23.056 0 0 0 0 23.06l20.96 36.3a23.068 23.068 0 0 0 19.97 11.53h41.92c8.24 0 15.85-4.4 19.97-11.53l20.96-36.3a23.056 23.056 0 0 0 0-23.06l-20.96-36.3A23.068 23.068 0 0 0 87.44 1.5Z'
				style={{
					fill: 'none',
					stroke: '#1e3050',

					strokeWidth: 4.5,
					strokeMiterlimit: 10,
				}}
				initial={{ stroke: '#1e3050', pathOffset: 1, pathLength: 1 }}
				animate={{
					pathOffset: (isHoverd || outSideHover) && animation ? 0 : 1,

					transition: {
						duration: 2,
						repeat: (isHoverd || outSideHover) && animation ? Infinity : 0,

						repeatDelay: 0,
					},
				}}
			/>
		</motion.svg>
	)
}
export default OctagonAvatar
