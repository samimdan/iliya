export default function Basket() {
	const getFromBasketLS = () => {
		if (!localStorage.getItem('basket')) {
			return
		} else {
			const basketStateLS = JSON.parse(localStorage.getItem('basket') as string)

			console.log('🚀 ~ getFromBasketLS ~ basketStateLS:', basketStateLS)

			return basketStateLS
		}
	}
	const addToBasketLS = (newBasket: string) => {
		if (!localStorage.getItem('basket')) {
			localStorage.setItem('basket', JSON.stringify([newBasket]))
			console.log('not basket')
			return
		}
		const basketCartState = JSON.parse(localStorage.getItem('basket') as string)
		localStorage.setItem(
			'basket',
			JSON.stringify(basketCartState.concat(newBasket)),
		)
	}

	return { addToBasketLS, getFromBasketLS }
}
