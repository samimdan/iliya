import exp from 'constants'

import { IUser } from './userInterface'
import { IProductDataBase } from './basketInterface'

export interface IsearchState {
	search: boolean
	setSearch: (search: boolean) => void
}

export interface IlogedUserState {
	user: IUser | null
	setLogedUser: (user: IUser) => void
}
export interface IBasketCardState {
	basket: Array<number>
	setBasket: (basket: Array<number>) => void
}
