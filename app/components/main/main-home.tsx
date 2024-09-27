'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ProductdataBase } from '@/app/Temp/database'
import TeacherIcon from '@/app/svgs/teacher-icon'
import UserIcon from '@/app/svgs/users-solid'
import RatingStar from '@/app/svgs/rating-star'
import { ShoppingBasket, Star, Timer, Users } from 'lucide-react'
import {
	addCommas,
	convertToPersian,
	timeToPersian,
} from '@/app/utilties/convertToPersian'
import IranCurrencyIcon from '@/app/svgs/currency'
import { Technology } from '@/app/utilties/Technology/Technology'
import { BuyWord } from '@/app/enum/PersianCommonWorld'
import { AddToBasketIcon } from '@/app/svgs/iliya-icons'
interface IProductDataBase {
	id: number
	title: string
	description: string
	time: string
	category: any[]
	author: string[]
	price: number
	img: string
	rating: number
	buyer: number
}
export default function MainHome() {
	const [products, setProducts] = React.useState<Array<IProductDataBase>>()
	const produt = products ? products[0] : undefined
	React.useEffect(() => {
		if (ProductdataBase !== undefined) setProducts(ProductdataBase)
	}, [])
	if (produt === undefined) return null
	const price = addCommas(convertToPersian(produt.price.toString()))

	return (
		<div className='flex flex-col  '>
			{produt !== undefined && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='flex flex-col mt-5  justify-center w-96 border rounded-lg shadow-md '
				>
					<img
						src={produt.img}
						alt={produt.title}
						className='  border-b rounded-lg p-1.5'
					/>
					<span className='text-black text-md font-bold mt-2 w-full text-center'>
						{produt.title}
					</span>
					<section className='text-center text-black text-sm p-4'>
						{produt.description}
					</section>
					<section className='flex items-center text-xs p-2 w-full  gap-1 justify-between'>
						<section className='flex items-center '>
							<TeacherIcon className='w-4 h-4 fill-gray-400' />
							<p className='text-gray-400 text-xs'>{produt.author}</p>
						</section>
						<section className='flex flex-row-reverse'>
							{(() => {
								let result = []
								let star = produt.rating
								star = Math.floor(star)
								for (let i = 1; i <= 5; i++) {
									if (i <= star) {
										result.push(
											<RatingStar className='w-4 h-4 fill-yellow-400' />,
										)
									} else {
										result.push(
											<RatingStar className='w-4 h-4 fill-gray-400' />,
										)
									}
								}
								return result
							})()}
						</section>
					</section>
					<section className='flex items-center text-xs p-2 justify-between'>
						<section className='flex items-center '>
							<Timer className='w-4 h-4  text-gray-400' />
							<p className='text-gray-400'>{timeToPersian(produt.time)}</p>
						</section>
						<section className='flex items-center gap-1'>
							<section className='font-bold text-xl'>{price}</section>
							<IranCurrencyIcon className='w-4 h-4 ' />
						</section>
					</section>
					<section className='flex items-center p-2 fill-gray-400 text-gray-400 text-xs justify-between'>
						<section className='flex items-center '>
							<Users className='w-4 h-4' />
							<p>
								{convertToPersian(produt.buyer.toString())}
								{BuyWord.Person}
							</p>
						</section>

						<section className='flex items-center flex-row-reverse gap-1'>
							{produt.category.map((item, index) => (
								<img
									key={index}
									src={item.src}
									className='w-5 h-5'
								/>
							))}
						</section>
					</section>
					<section className='w-[90%] flex item-center justify-center p-1 mx-auto my-2 rounded-xl border bg-primary/5'>
						<AddToBasketIcon className='w-8 h-8' />
					</section>
				</motion.div>
			)}
		</div>
	)
}
