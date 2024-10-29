import exp from 'constants'

import { IUser } from './userInterface'
import { IProductDataBase } from './basketInterface'
import { UUID } from 'crypto'

export interface IsearchState {
	search: boolean
	setSearch: (search: boolean) => void
}

export interface IlogedUserState {
	user: IUser | null
	setLogedUser: (user: IUser) => void
}
export interface IBasketCardState {
	basketCartState: string[]
	addToBasketState: (newBasket: string) => void
	setBasketState: (newBasket: string[]) => void
	removeBasketState: (removeBasket: string) => void
}
