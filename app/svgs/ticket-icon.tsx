import { useState } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
const TicketIcon = ({
	outSideHover,
	...props
}: SVGMotionProps<SVGSVGElement> & { outSideHover: boolean }) => {
	const [isHoverd, setIsHoverd] = useState(false)
	return (
		<motion.svg
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			x='0px'
			y='0px'
			viewBox='0 0 66.69 72.76'
			xmlSpace='preserve'
			onMouseEnter={() => setIsHoverd(true)}
			onMouseLeave={() => setIsHoverd(false)}
			{...props}
		>
			<g>
				<path
					style={{ fill: '#1D3050' }}
					d='M57.6,9.84v4.12H44.01V9.84c0-1.52,1.23-2.75,2.75-2.75h8.09C56.37,7.09,57.6,8.32,57.6,9.84z'
				/>
				<rect
					x='44.01'
					y='13.96'
					style={{ fill: '#A5ACB9' }}
					width='13.59'
					height='5.96'
				/>
				<path
					style={{ fill: '#1D3050' }}
					d='M57.6,19.92v25.41c0,1.52-1.23,2.75-2.75,2.75h-8.09c-1.52,0-2.75-1.23-2.75-2.75V19.92H57.6z'
				/>
				<line
					style={{
						stroke: '#A5ACB9',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					x1='50.8'
					y1='27.58'
					x2='50.8'
					y2='37.25'
				/>
			</g>
			<motion.g
				animate={{ y: isHoverd ? -10 : 0, transition: { duration: 0.2 } }}
			>
				<path
					style={{ fill: '#1D3050' }}
					d='M40.67,9.83v4.12H27.08V9.83c0-1.52,1.23-2.75,2.75-2.75h8.09C39.44,7.08,40.67,8.31,40.67,9.83z'
				/>
				<rect
					x='27.08'
					y='13.95'
					style={{ fill: '#A5ACB9' }}
					width='13.59'
					height='5.96'
				/>
				<path
					style={{ fill: '#1D3050' }}
					d='M40.67,19.91v25.41c0,1.52-1.23,2.75-2.75,2.75h-8.09c-1.52,0-2.75-1.23-2.75-2.75V19.91H40.67z'
				/>
				<line
					style={{
						stroke: '#A5ACB9',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					x1='33.88'
					y1='27.58'
					x2='33.88'
					y2='37.25'
				/>
			</motion.g>
			<g>
				<path
					style={{ fill: '#1D3050' }}
					d='M23.74,9.83v4.12H10.15V9.83c0-1.52,1.23-2.75,2.75-2.75h8.09C22.51,7.08,23.74,8.31,23.74,9.83z'
				/>
				<rect
					x='10.15'
					y='13.95'
					style={{ fill: '#A5ACB9' }}
					width='13.59'
					height='5.96'
				/>
				<path
					style={{ fill: '#1D3050' }}
					d='M23.74,19.91v25.41c0,1.52-1.23,2.75-2.75,2.75H12.9c-1.52,0-2.75-1.23-2.75-2.75V19.91H23.74z'
				/>
				<line
					style={{
						stroke: '#A5ACB9',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					x1='16.95'
					y1='27.58'
					x2='16.95'
					y2='37.25'
				/>
			</g>
			<g>
				<path
					style={{ fill: '#1D3050' }}
					d='M55.06,64.02h-4.12V50.43h4.12c1.52,0,2.75,1.23,2.75,2.75v8.09C57.81,62.79,56.58,64.02,55.06,64.02z'
				/>
				<rect
					x='44.98'
					y='50.43'
					style={{ fill: '#A5ACB9' }}
					width='5.96'
					height='13.59'
				/>
				<path
					style={{ fill: '#1D3050' }}
					d='M44.98,64.02l-33.07,0c-1.52,0-2.75-1.23-2.75-2.75v-8.09c0-1.52,1.23-2.75,2.75-2.75l33.07,0V64.02z'
				/>
				<line
					style={{
						stroke: '#A5ACB9',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					x1='33.65'
					y1='57.22'
					x2='23.98'
					y2='57.22'
				/>
			</g>
		</motion.svg>
	)
}
export default TicketIcon
