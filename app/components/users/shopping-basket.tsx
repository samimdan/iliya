import React, { SVGProps, Ref, ForwardedRef } from 'react'
import { motion } from 'framer-motion'
export default function ShoppingBasketAnimation(
	props: SVGProps<SVGSVGElement>,
) {
	const [isHoverd, setIsHoverd] = React.useState<boolean>(false)
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			onMouseEnter={() => setIsHoverd(true)}
			onMouseLeave={() => setIsHoverd(false)}
			animate={{ x: isHoverd ? 5 : 0 }}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-shopping-cart hover:text-rose-500 hover:cursor-pointer'
		>
			<motion.circle
				cx='8'
				cy='21'
				r='1'
			/>
			<motion.circle
				cx='19'
				cy='21'
				r='1'
			/>
			<path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
		</motion.svg>
	)
}
