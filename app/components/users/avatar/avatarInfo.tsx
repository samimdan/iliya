'use client'
import React from 'react'
import { useLogedUserState } from '../../globalState/store'
import { RoleObject } from '@/app/enum/Roles'
export default function AvatarInfo() {
	const user = useLogedUserState((state) => state.user)
	const userRole = RoleObject(14)
	const emailSplit = user?.email.split('@')
	return (
		<>
			{user && (
				<div className='flex w-32 flex-col justify-center items-center font-normal text-xs gap-2 pt-2'>
					<span>{user.name}</span>
					{emailSplit && emailSplit.length > 1 && (
						<>
							<span>{emailSplit[0]}</span>
						</>
					)}
					<div className='flex text-xs justify-center items-center w-full gap-1 p-0.5 border rounded-sm'>
						<span>{userRole.Admin.RoleText}</span>
						<span>{userRole.Admin.RoleIcon}</span>
					</div>
				</div>
			)}
		</>
	)
}
