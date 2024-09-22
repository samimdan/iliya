'use client'
import { userdataBase } from '@/app/Temp/database'
import { useLogedUserState } from '../globalState/store'
import { IUser } from '@/app/Interfaces/userInterface'

export const Login = (id: number) => {
	const setLogedUser = useLogedUserState((state) => state.setLogedUser)
	setLogedUser(userdataBase[id])
    
}
