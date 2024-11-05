'use client'
import ShoppingBasket from '@/app/svgs/shopping-basket'

import React, { useRef } from 'react'
import UserAvatar from './userAvatar'

import { MenuObject } from '@/app/enum/Menus'
import { addCommas, convertToPersian } from '@/app/utilties/convertToPersian'
import IranCurrencyIcon from '@/app/svgs/currency'

import styles from './css/avatarMenu.module.css'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserMenu } from '@/app/enum/PersianCommonWorld'

import LogoutAnimation from '@/app/svgs/logOut'
const Menu = MenuObject(20)

const persianTotalProjects = addCommas(convertToPersian('6410000'))
const persianTotalCourse = addCommas(convertToPersian('120000'))

export default function AvatarMenu() {
	const [menu, setMenu] = React.useState<boolean>(false)

	return (
		<div className='flex flex-col items-center z-10  relative w-48'>
			<section
				className='flex flex-row-reverse  items-center justify-end
			 gap-5'
			>
				<section onClick={() => setMenu(!menu)}>
					<UserAvatar
						size={40}
						hover
					/>
				</section>
				<ShoppingBasket className='w-8 h-8' />
				<LogoutAnimation />
			</section>
			<div
				className={cn(
					'absolute hidden top-11 border shadow-md bg-white rounded-md transition-all duration-500 ease-in-out',
					styles.menuGrid,
					{ '!hidden': !menu },
				)}
			>
				<section className='gap-1 relative p-1 border border-primary/10 shadow-sm cursor-pointer hover:bg-primary/15'>
					<section>{Menu.Tickets.MenuIcon}</section>
					<section>{Menu.Tickets.MenuText}</section>
					<section className=' absolute w-4 h-4 rounded-full flex justify-center items-center top-2 left-2 pt-0.5 bg-rose-500 text-white text-xs'>
						{convertToPersian('1')}
					</section>
				</section>
				<section className=' relative  p-1 border border-primary/10 shadow-sm cursor-pointer hover:bg-primary/15'>
					<section>{Menu.Basket.MenuIcon}</section>
					<section>{Menu.Basket.MenuText}</section>
					<section className='absolute w-4 h-4 bg-rose-500 flex justify-center items-center rounded-full text-white text-xs  top-2 left-2 pt-0.5'>
						{convertToPersian('3')}
					</section>
				</section>
				<section className='gap-1 p-1 border border-primary/10 shadow-sm cursor-pointer hover:bg-primary/15'>
					<section>{Menu.MyCourses.MenuIcon}</section>
					<section>{Menu.MyCourses.MenuText}</section>
				</section>
				<section className='gap-1 p-1 border border-primary/10 shadow-sm cursor-pointer hover:bg-primary/15'>
					<section>{Menu.MyProjects.MenuIcon}</section>
					<section>{Menu.MyProjects.MenuText}</section>
				</section>
				<section className='gap-1 p-1 border border-primary/10 shadow-sm cursor-pointer hover:bg-primary/15'>
					<section>{Menu.Setting.MenuIcon}</section>
					<section>{Menu.Setting.MenuText}</section>
				</section>
				<section className='gap-1 p-1 border border-primary/10 shadow-sm cursor-pointer hover:bg-primary/15'>
					<section>{Menu.Profile.MenuIcon}</section>
					<section>{Menu.Profile.MenuText}</section>
				</section>

				<section
					className={cn(
						styles.paymentDetail,
						'gap-1 p-1 border border-primary/10 shadow-sm cursor-pointer hover:bg-primary/15  ',
					)}
				>
					<div className='px-2 w-full h-full flex justify-between items-center'>
						<span className='flex flex-col justify-center items-center gap-1'>
							<section>{Menu.PaymentDetail.MenuIcon}</section>
							<section>{Menu.PaymentDetail.MenuText}</section>
						</span>
						<span className='flex flex-col justify-center items-center gap-1'>
							<section>{Menu.Projects.MenuText}</section>
							<section className='text-xs text-green-500 border-green-500'>
								{persianTotalProjects}
							</section>
							<section>
								{<IranCurrencyIcon className='w-5 h-5 fill-green-500' />}
							</section>
						</span>
						<span className='flex flex-col justify-center items-center gap-1'>
							<section>{Menu.MyCourses.MenuText}</section>

							<section className='text-xs text-green-500 '>
								{persianTotalCourse}
							</section>
							<section>
								{<IranCurrencyIcon className='w-5 h-5 fill-green-500 ' />}
							</section>
						</span>
					</div>
				</section>

				<Button
					className='w-full'
					onClick={() => setMenu(false)}
					variant='destructive'
					size='sm'
				>
					{UserMenu.SignOut}
				</Button>
			</div>
		</div>
	)
}
