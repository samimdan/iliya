import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import UserAvatar from './userAvatar'
import AvatarInfo from './avatarInfo'
import { MenuObject } from '@/app/enum/Menus'
import { addCommas, convertToPersian } from '@/app/utilties/convertToPersian'
import IranCurrencyIcon from '@/app/svgs/currency'
import { Currency, User } from 'lucide-react'
import styles from './css/avatarMenu.module.css'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserMenu } from '@/app/enum/PersianCommonWorld'
const Menu = MenuObject(20)

const persianTotalProjects = addCommas(convertToPersian('6410000'))
const persianTotalCourse = addCommas(convertToPersian('64100000000'))

export default function AvatarMenu() {
	return (
		<div className='flex flex-col items-center relative w-48'>
			<UserAvatar
				size={40}
				hover
			/>
			<div
				className={cn(
					'absolute top-11 border shadow-md  rounded-md ',
					styles.menuGrid,
				)}
			>
				<section className='gap-1 p-1 bg-primary/5'>
					<section>{Menu.Tickets.MenuIcon}</section>
					<section>{Menu.Tickets.MenuText}</section>
				</section>
				<section className='gap-1 p-1 bg-primary/5'>
					<section>{Menu.Basket.MenuIcon}</section>
					<section>{Menu.Basket.MenuText}</section>
				</section>
				<section className='gap-1 p-1 bg-primary/5'>
					<section>{Menu.MyCourses.MenuIcon}</section>
					<section>{Menu.MyCourses.MenuText}</section>
				</section>
				<section className='gap-1 p-1 bg-primary/5'>
					<section>{Menu.MyProjects.MenuIcon}</section>
					<section>{Menu.MyProjects.MenuText}</section>
				</section>
				<section className='gap-1 p-1 bg-primary/5'>
					<section>{Menu.Setting.MenuIcon}</section>
					<section>{Menu.Setting.MenuText}</section>
				</section>
				<section className='gap-1 p-1 bg-primary/5'>
					<section>{Menu.Profile.MenuIcon}</section>
					<section>{Menu.Profile.MenuText}</section>
				</section>

				<section
					className={cn(styles.paymentDetail, 'gap-1 p-1 bg-primary/5  ')}
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
						</span>
					</div>
				</section>

				<Button
					variant='destructive'
					size='sm'
				>
					{UserMenu.SignOut}
				</Button>
			</div>
		</div>
	)
}
