'use client'
import * as React from 'react'
import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ITooltipProps } from '@/app/Interfaces/tooltipInterface'
import { motion } from 'framer-motion'
const Tooltip = ({ children, content, className }: ITooltipProps) => {
	const childRef = useRef<HTMLSpanElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = React.useState(false)
	const [childrenWidth, setChildrenWidth] = React.useState<number>(0)
	const [childrenHeight, setChildrenHeight] = React.useState<number>(0)
	const [contentWidth, setContentWidth] = React.useState<number>(0)
	const [contentHeight, setContentHeight] = React.useState<number>(0)

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className='relative'
		>
			<span ref={childRef}>{children}</span>

			{open && (
				<motion.div
					initial={{
						x: '-50%',
						opacity: 0,
					}}
					animate={{
						opacity: 1,

						transition: { duration: 0.5 },
					}}
					ref={contentRef}
					className={cn(
						'absolute z-10 bg-black/40  text-primary-foreground p-1 text-xs   left-[50%] transform translate-x-[-50%]  rounded-md',
						`mt-[${-(childrenHeight - contentHeight)}px]`,
					)}
				>
					{content}
				</motion.div>
			)}
		</div>
	)
}
export default Tooltip
