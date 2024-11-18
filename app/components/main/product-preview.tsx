import React, { use, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IProductDataBase } from '@/app/Interfaces/basketInterface'
import CartPlus from '@/app/svgs/cart-plus'
import { BuyWord } from '@/app/enum/PersianCommonWorld'
import { Timer, Users } from 'lucide-react'
import {
	addCommas,
	convertToPersian,
	timeToPersian,
} from '@/app/utilties/convertToPersian'
import TeacherIcon from '@/app/svgs/teacher-icon'
import RatingStar from '@/app/svgs/rating-star'
import IranCurrencyIcon from '@/app/svgs/currency'
import CartPlusSection from '../shop/shop-basket/cart-plus-section'
import { v4 as uuidv4 } from 'uuid'

export default function ProductPreview({
	products,
}: {
	products: IProductDataBase
}) {
	if (products === undefined) return null
	const price = addCommas(convertToPersian(products.price.toString()))
	return (
		<div className='flex flex-col  '>
			{products !== undefined && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='flex flex-col mt-5  justify-center w-96 border rounded-lg shadow-md '
				>
					<img
						key={uuidv4()}
						alt={products.title}
						src={products.img}
						className='bg-cover border-b-2 border-primary/10 p-1.5 pb-4  h-64 mx-auto'
					/>
					<span className='text-black text-md font-bold mt-2 w-full text-center'>
						{products.title}
					</span>
					<section className='text-center text-black text-sm p-4'>
						{products.description}
					</section>
					<section className='flex items-center text-xs p-2 w-full  gap-1 justify-between'>
						<section className='flex items-center '>
							<TeacherIcon className='w-4 h-4 fill-gray-400' />
							<p className='text-gray-400 text-xs'>{products.author}</p>
						</section>
						<section className='flex flex-row-reverse'>
							{(() => {
								let result = []
								let star = products.rating
								star = Math.floor(star)
								for (let i = 1; i <= 5; i++) {
									if (i <= star) {
										result.push(
											<RatingStar
												key={uuidv4()}
												className='w-4 h-4 fill-yellow-400'
											/>,
										)
									} else {
										result.push(
											<RatingStar
												key={uuidv4()}
												className='w-4 h-4 fill-gray-400'
											/>,
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
							<p className='text-gray-400'>{timeToPersian(products.time)}</p>
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
								{convertToPersian(products.buyer.toString())}
								{BuyWord.Person}
							</p>
						</section>

						<section className='flex items-center flex-row-reverse gap-1'>
							{products.category.map((item) => (
								<img
									key={uuidv4()}
									src={item.src}
									className='w-5 h-5'
								/>
							))}
						</section>
					</section>
					<CartPlusSection productID={products.id} />
				</motion.div>
			)}
		</div>
	)
}
