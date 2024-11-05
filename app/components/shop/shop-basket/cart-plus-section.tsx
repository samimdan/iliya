'use client'
import React, { useCallback, useEffect } from 'react'
import CartPlus from '@/app/svgs/cart-plus'
import { useState } from 'react'
import Tooltip from '@/components/ui/iliya/tooltip'
import { BuyWord } from '@/app/enum/PersianCommonWorld'
import { cn } from '@/lib/utils'
import { useBasketStorage } from '@/app/components/globalState/store'
import Ticket from '@/app/svgs/ticket'
import Trash from '@/app/svgs/trash'
import ShoppingBasket from '@/app/svgs/shopping-basket'
export default function CartPlusSection({ productID }: { productID: string }) {
	const [isHoverd, setIsHoverd] = React.useState(false)
	const { addToBasketState, basketStorage } = useBasketStorage()

	const [basket, setBasket] = useState<boolean>(true)
	useEffect(() => {
		if (basketStorage) {
			setBasket(basketStorage.includes(productID))
		}
	}, [basketStorage])
	return (
		<Tooltip content={basket ? BuyWord.ExistedInBasket : BuyWord.AddToBasket}>
			<section
				onClick={() => addToBasketState(productID)}
				onMouseEnter={() => setIsHoverd(true)}
				onMouseLeave={() => setIsHoverd(false)}
			>
				{basket ? (
					<section className='w-full flex justify-center p-2'>
						<Ticket className='w-8 h-8' />
					</section>
				) : (
					<section className='w-full flex justify-center p-2'>
						<ShoppingBasket
							outSideHover={isHoverd}
							className='w-8 h-8'
						/>
					</section>
				)}
			</section>
		</Tooltip>
	)
}
