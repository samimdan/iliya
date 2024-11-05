import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {
	IUseBasketStorage,
	IlogedUserState,
	IsearchState,
} from '@/app/Interfaces/statesInterface'

export const useSearchState = create<IsearchState>((set) => ({
	search: false,
	setSearch: (search: boolean) => set((state) => ({ search })),
}))
export const useLogedUserState = create<IlogedUserState>((set) => ({
	user: null,
	setLogedUser: (user) => set((state) => ({ user })),
}))

export const useBasketStorage = create<IUseBasketStorage>()(
	persist(
		(set, get) => ({
			basketStorage: [],
			addToBasketState: (newBasket: string) =>
				set((state) => ({
					basketStorage: [...state.basketStorage, newBasket],
				})),
			removeBasketState:
				(removeBasket: string) => (state: IUseBasketStorage) => ({
					basketStorage: state.basketStorage.filter(
						(item) => item !== removeBasket,
					),
				}),
		}),
		{
			name: 'basket',
			storage: createJSONStorage(() => localStorage),
		},
	),
)
