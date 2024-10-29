/**
 * Zustand store for managing the state of the basket card.
 *
 * @remarks
 * This store provides the state and actions to manage the basket card in the application.
 *
 * @example
 * ```typescript
 * const { basket, fillBasket } = useBaketCardState();
 * fillBasket(newBasket);
 * ```
 *
 * @returns
 * - `basket`: An array of `IProductDataBase` representing the items in the basket.
 * - `fillBasket`: A function to update the basket with new items.
 *
 * @public
 */
import { create } from 'zustand'
import {
	IBasketCardState,
	IlogedUserState,
	IsearchState,
} from '@/app/Interfaces/statesInterface'
import { IProductDataBase } from '@/app/Interfaces/basketInterface'
import { UUID } from 'crypto'
export const useSearchState = create<IsearchState>((set) => ({
	search: false,
	setSearch: (search: boolean) => set((state) => ({ search })),
}))
export const useLogedUserState = create<IlogedUserState>((set) => ({
	user: null,
	setLogedUser: (user) => set((state) => ({ user })),
}))
export const useBasketState = create<IBasketCardState>((set) => ({
	basketState: [],
	addToBasketState: (newBasket: string) =>
		set((state) => ({ basketState: [...state.basketState, newBasket] })),

	setBasketState: (newBasket: string[]) => {
		set((state) => ({
			basketState: newBasket,
		}))
	},
	removeBasketState: (removeBasket: string) => {
		set((state) => ({
			basketState: state.basketState.filter((item) => item !== removeBasket),
		}))
	},
}))
