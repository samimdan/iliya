'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import style from './avatar.module.css'
import Image from 'next/image'

import { Login } from '@/app/components/auth/Login'
import { useLogedUserState } from '../../globalState/store'
import { cn } from '@/lib/utils'

export default function UserAvatar({
	size,
	hover = false,
}: {
	size: number
	hover?: boolean
}) {
	Login(0)
	const user = useLogedUserState((state) => state.user)

	return (
		<>
			{user && user.image ? (
				<Image
					className={cn('rounded-full  transition duration-300  ', {
						'hover:scale-110 cursor-pointer': hover,
					})}
					src={user.image}
					alt={user.name}
					width={size}
					height={size}
				/>
			) : (
				''
			)}
		</>
	)
}
