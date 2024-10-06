import { create } from 'zustand'
import {
	IBasketCardState,
	IlogedUserState,
	IsearchState,
} from '@/app/Interfaces/statesInterface'
import { IProductDataBase } from '@/app/Interfaces/basketInterface'
export const useSearchState = create<IsearchState>((set) => ({
	search: false,
	setSearch: (search: boolean) => set((state) => ({ search })),
}))
export const useLogedUserState = create<IlogedUserState>((set) => ({
	user: null,
	setLogedUser: (user) => set((state) => ({ user })),
}))
export const useBasketCardState = create<IBasketCardState>((set) => ({
	basket: [],
	setBasket: (basket: Array<number>) => set((state) => ({ basket })),
}))
