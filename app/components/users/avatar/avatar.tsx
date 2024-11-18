'use client'
import ShoppingBasket from '@/app/svgs/shopping-basket'
import { motion } from 'framer-motion'
import React, { useState, useRef } from 'react'
import UserAvatar from './userAvatar'
import OcatagonAvatar from '@/app/svgs/octagon'
import { MenuObject } from '@/app/enum/Menus'
import { addCommas, convertToPersian } from '@/app/utilties/convertToPersian'
import IranCurrencyIcon from '@/app/svgs/currency'
import FlatChartIcon from '@/app/svgs/flat-chart'
import styles from './css/avatarMenu.module.css'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserMenu } from '@/app/enum/PersianCommonWorld'

import LogoutAnimation from '@/app/svgs/logOut'
import MessageIcon from '@/app/svgs/message-icon'
import TicketIcon from '@/app/svgs/ticket-icon'
import MessageIconAlert from '@/app/svgs/message-icon-alert'
import { b } from 'framer-motion/client'
import DownloadIcon from '@/app/svgs/DownloadIcon'
import OctagonAvatar from '@/app/svgs/octagon'

const Menu = MenuObject(20)

const persianTotalProjects = addCommas(convertToPersian('6410000'))
const persianTotalCourse = addCommas(convertToPersian('120000'))
const newTicketPersian = convertToPersian('3')
export default function Avatar() {
	const [menu, setMenu] = React.useState<boolean>(false)
	const [ticketHoverd, setTicketHoverd] = useState<boolean>(false)
	const [downloadHoverd, setDownloadHoverd] = useState<boolean>(false)
	return (
		<div className='flex flex-col items-center z-10  relative w-48'>
			<section
				className='flex flex-row-reverse  items-center justify-end
			 gap-5'
			>
				<section onClick={() => setMenu(!menu)}>
					<OcatagonAvatar className='w-14 h-14' />
				</section>
				<ShoppingBasket className='w-8 h-8' />
			</section>
			<div
				className={cn(
					'absolute shadow-lg  border  rounded-md bg-white top-14 ',
				)}
			>
				<div className='flex flex-col w-[93%] mx-auto my-2 p-1 items-center justify-center  rounded-sm border   '>
					<div>
						{
							<OctagonAvatar
								animation={false}
								className='w-8 h-8'
							/>
						}
					</div>
					<div></div>
					<div></div>
				</div>
				<motion.div
					className='flex flex-col   rounded-md w-52'
					onMouseEnter={() => setTicketHoverd(true)}
					onMouseLeave={() => {
						setTicketHoverd(false)
					}}
				>
					<motion.div
						className='flex items-center  cursor-pointer p-2 justify-end  '
						initial={{ background: '#F1F5F900' }}
						whileHover={{
							cursor: 'pointer',
							background: '#F1F5F9ff',
						}}
						transition={{ duration: 0.5, ease: 'linear' }}
					>
						<div>
							<MessageIconAlert
								outSideHover={ticketHoverd}
								className='w-6 h-6'
							/>
						</div>
						<div className='w-full text-start pr-2 text-xs'>
							{UserMenu.Tickets}
						</div>
					</motion.div>
				</motion.div>
				{/* ------------------------------------ - ----------------------------------- */}
				<motion.div className='flex flex-col  rounded-md w-52'>
					<motion.div
						className='flex items-center  cursor-pointer p-2 justify-end  '
						onMouseEnter={() => setDownloadHoverd(true)}
						onMouseLeave={() => setDownloadHoverd(false)}
						initial={{ background: '#F1F5F900' }}
						whileHover={{
							cursor: 'pointer',
							background: '#F1F5F9ff',
						}}
						transition={{ duration: 0.3, ease: 'linear' }}
					>
						<div>
							<DownloadIcon
								outSideHover={downloadHoverd}
								className='w-6 h-6'
							/>
						</div>
						<div className='w-full text-start pr-2 text-xs'>
							{UserMenu.Downloads}
						</div>
					</motion.div>
				</motion.div>
				{/* ------------------------------------ - ----------------------------------- */}
				<motion.div className='flex flex-col  rounded-md w-52'>
					<motion.div
						className='flex items-center  cursor-pointer p-2 justify-end  '
						onMouseEnter={() => setDownloadHoverd(true)}
						onMouseLeave={() => setDownloadHoverd(false)}
						initial={{ background: '#F1F5F900' }}
						whileHover={{
							cursor: 'pointer',
							background: '#F1F5F9ff',
						}}
						transition={{ duration: 0.3, ease: 'linear' }}
					>
						<div>
							<DownloadIcon
								outSideHover={downloadHoverd}
								className='w-6 h-6'
							/>
						</div>
						<div className='w-full text-start pr-2 text-xs'>
							{UserMenu.Orders}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
