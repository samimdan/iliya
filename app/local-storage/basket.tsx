import { useEffect, useState } from 'react'

import { useBasketState } from '@/app/components/globalState/store'

export default function Basket() {
	const { addToBasketState, setBasketState, basketCartState } = useBasketState()
	const getFromBasketLS = () => {
		if (!localStorage.getItem('basket')) {
		} else {
			const basketStateLS = JSON.parse(localStorage.getItem('basket') as string)
			return basketStateLS
		}
	}
	const addToBasketLS = (newBasket: string) => {
		addToBasketState(newBasket)
		localStorage.setItem('basket', JSON.stringify(basketCartState))

		console.log(basketCartState)
		console.log('Basketchanged')
	}

	return { addToBasketLS }
}
