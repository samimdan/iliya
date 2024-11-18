import React, { useState } from 'react'
import AvatarMenu from '../users/avatar/avatar'
import { LogOut, Search, ShoppingCart, Tally4 } from 'lucide-react'
import SearchMobileIcon from './mobile/searchMobileIcon'

import SearchBar from './Search/searchBar'
import { NavMenu } from '@/app/enum/PersianCommonWorld'
import { SearchType } from '@/app/enum/GeneralEnum'

import LogoAnimation from '../users/logo-animation'
import PersianLogo from '@/app/svgs/persian-logo'
import Logo from './Logo'
const NavBar = () => {
	return (
		<div className='flex flex-col '>
			<div className='w-full p-4  flex justify-between items-center   '>
				<section className='flex items-center gap-3 text-xl'>
					<LogoAnimation />
					<Logo />
				</section>
				<section className='hidden md:flex'>
					<SearchBar model={SearchType.Desktop} />
				</section>

				<AvatarMenu />

				<Tally4
					size={24}
					className='rotate-90 md:hidden'
					strokeWidth={2.5}
				/>

				<div className='flex  gap-12 md:hidden'>
					<SearchMobileIcon />
					<ShoppingCart
						size={24}
						strokeWidth={2.5}
					/>
				</div>
			</div>
			<SearchBar model={SearchType.Mobile} />
			<div className='hidden md:flex '>
				<ul className='flex  gap-5 transition hover:cursor-pointer'>
					<li className='hover:text-primary'>{NavMenu.Home}</li>
					<li className='hover:text-primary'>{NavMenu.Learning}</li>
					<li className='hover:text-primary'>{NavMenu.Shop}</li>
					<li className='hover:text-primary'>{NavMenu.Projects}</li>
					<li className='hover:text-primary'>
						{NavMenu.AritificialIntelligence}
					</li>
					<li className='hover:text-primary'>{NavMenu.Artical}</li>
					<li className='hover:text-primary'>{NavMenu.About}</li>
					<li className='hover:text-primary'>{NavMenu.ContactUs}</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar
