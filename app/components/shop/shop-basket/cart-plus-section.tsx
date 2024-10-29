'use client'
import React, { useEffect } from 'react'
import CartPlus from '@/app/svgs/cart-plus'
import { useState } from 'react'
import Tooltip from '@/components/ui/iliya/tooltip'
import { BuyWord } from '@/app/enum/PersianCommonWorld'
import { cn } from '@/lib/utils'
import Basket from '@/app/local-storage/basket'
import { useBasketState } from '@/app/components/globalState/store'
import { UUID } from 'crypto'
export default function CartPlusSection({ productID }: { productID: string }) {
	const [isHoverd, setIsHoverd] = React.useState(false)
	const { basketCartState, addToBasketState } = useBasketState()
	const { basketStateLS, addToBasketLS } = Basket()
	const [basket, setBasket] = useState<Array<string>>()

	return (
		<Tooltip content={basket ? BuyWord.ExistedInBasket : BuyWord.AddToBasket}>
			<section
				onClick={() => addToBasketLS(productID)}
				onMouseEnter={() => setIsHoverd(true)}
				onMouseLeave={() => setIsHoverd(false)}
				className={cn(
					'w-full flex item-center justify-center p-1 mx-auto my-2 hover:cursor-pointer border bg-primary/5  ',
					basket ? 'bg-primary-foreground' : 'bg-primary/5',
				)}
			>
				{basket ? (
					<p className='p-1 text-lime-500 text-[0.7rem] '>
						{BuyWord.ExistedInBasket}
					</p>
				) : (
					<CartPlus
						className='w-8 h-8 '
						hoverd={isHoverd}
					/>
				)}
			</section>
		</Tooltip>
	)
}
