import { create } from 'zustand'
import { IlogedUserState, IsearchState } from '@/app/Interfaces/statesInterface'
export const useSearchState = create<IsearchState>((set) => ({
	search: false,
	setSearch: (search: boolean) => set((state) => ({ search })),
}))
export const useLogedUserState = create<IlogedUserState>((set) => ({
	user: null,
	setLogedUser: (user) => set((state) => ({ user })),
}))
