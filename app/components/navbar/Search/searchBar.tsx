'use client'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useSearchState } from '../../globalState/store'
import { motion, Variants } from 'framer-motion'
import { SearchWord } from '@/app/enum/PersianCommonWorld'
import { ISearchType } from '@/app/Interfaces/searchInterface'
import { SearchType } from '@/app/enum/GeneralEnum'
import { Search } from 'lucide-react'
const itemsVariant: Variants = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
}

export default function SearchBar({
	model,
}: {
	model: SearchType.Desktop | SearchType.Mobile
}) {
	const searchState = useSearchState((state) => state.search)

	return (
		<>
			{model === SearchType.Mobile && (
				<motion.div
					variants={itemsVariant}
					animate={searchState ? 'visible' : 'hidden'}
					className='w-[90%] mx-auto '
				>
					<input
						type='text'
						placeholder={SearchWord.SearchPlaceHolder}
						className='w-full px-2 py-2  z-10 border-2 rounded-md'
					/>
				</motion.div>
			)}
			{model === SearchType.Desktop && (
				<div className='relative  '>
					<input
						type='text'
						placeholder={SearchWord.SearchPlaceHolder}
						className={cn('w-[40rem] px-2 py-2  z-10 border-2 rounded-md', {
							'border-blue-500': searchState,
						})}
					/>
					<div className='absolute top-2 left-1 pr-1 border-r outline-none'>
						<Search
							size={22}
							className='cursor-pointer'
						/>
					</div>
				</div>
			)}
		</>
	)
}
