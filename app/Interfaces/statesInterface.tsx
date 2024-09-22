import exp from 'constants'

import { IUser } from './userInterface'

export interface IsearchState {
	search: boolean
	setSearch: (search: boolean) => void
}

export interface IlogedUserState {
	user: IUser | null
	setLogedUser: (user: IUser) => void
}
