import { useState } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
const ShoppingBasket = ({
	outSideHover,
	...props
}: SVGMotionProps<SVGSVGElement> & { outSideHover?: boolean }) => {
	const [hover, setHover] = useState(false)

	return (
		<motion.svg
			whileHover={{ cursor: 'pointer' }}
			onMouseEnter={() => {
				setHover(true)
			}}
			onMouseLeave={() => {
				setHover(false)
			}}
			xmlns='http://www.w3.org/2000/svg'
			xmlSpace='preserve'
			y={0}
			style={{
				background: 'new 0 0 61.8 67.6',
			}}
			viewBox='0 0 61.8 67.6'
			{...props}
		>
			<style>{'.st0{fill:#231f20}.st2{fill:#1e3050}'}</style>
			<path
				d='M28.1-179.9z'
				className='st0'
			/>
			<path
				d='M19.8 47.7c.2 1.1 1.1 1.8 2.2 1.8h26.3c2.4 0 4.3 1.9 4.3 4.3H19.4c-1.7-.2-3.2-1.6-3.5-3.4l-5-28.3c-.1-.4-.4-.7-.8-.7H5.7c-1.2 0-2.3-.9-2.4-2.1 0-.7.2-1.3.7-1.8.4-.4 1-.7 1.6-.7h5c2.2 0 4 1.6 4.4 3.6'
				className='st2'
			/>
			<path d='M20.4 53.8h-.8.8zM19.6 53.8h-.2.2z' />
			<circle
				cx={21.6}
				cy={61.5}
				r={4.6}
				className='st2'
			/>
			<circle
				cx={48.5}
				cy={61.8}
				r={4.6}
				className='st2'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					y: hover || outSideHover ? 0 : -10,
					opacity: hover || outSideHover ? 1 : 0,
					transition: { duration: 0.2, delay: 0.4 },
				}}
				id='rec1'
				d='M41.3 1.4H25.6c-.9 0-1.7.7-1.7 1.7 0 .9.7 1.7 1.7 1.7h15.6c.9 0 1.7-.7 1.7-1.7s-.7-1.7-1.6-1.7z'
				className='st2'
			/>
			<motion.path
				//SECONDE RECTANGLE
				initial={{ opacity: 1 }}
				animate={{
					y: hover || outSideHover ? 0 : -10,
					opacity: hover || outSideHover ? 1 : 0,
					transition: { duration: 0.2, delay: 0.2 },
				}}
				id='rect2'
				d='M45 8.4H22c-.9 0-1.7.7-1.7 1.7 0 .9.7 1.7 1.7 1.7h23c.9 0 1.7-.7 1.7-1.7s-.8-1.7-1.7-1.7z'
				className='st2'
			/>
			<motion.path
				initial={{ opacity: 0 }}
				animate={{
					y: hover || outSideHover ? 0 : -10,
					opacity: hover || outSideHover ? 1 : 0,
					transition: { duration: 0.2 },
				}}
				id='rect3'
				d='M48.9 15.2H17.7c-.9 0-1.7.7-1.7 1.7v.2c0 .9.7 1.7 1.7 1.7h31.2c.9 0 1.7-.7 1.7-1.7v-.2c0-.9-.8-1.7-1.7-1.7z'
				className='st2'
			/>
			<path
				d='M46 42.7H19l-3.8-21.6h38.3c2.4 0 4.1 2 3.5 4.1l-3.4 12.1c-.8 3.2-4 5.4-7.6 5.4z'
				style={{
					fill: '#a5acb9',
				}}
			/>
			<path
				d='M81.3 103.3h.3v.3h-.3z'
				className='st0'
			/>
		</motion.svg>
	)
}
export default ShoppingBasket
