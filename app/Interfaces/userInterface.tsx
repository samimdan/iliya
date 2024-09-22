import { ReferrerEnum } from 'next/dist/lib/metadata/types/metadata-types'
import { HTMLProps } from 'react'
import { Role } from '../enum/Roles'
export interface IUser {
	name: string
	email: string
	image?: string
	role: Role.Admin | Role.User | Role.Guest | Role.Teacher
	id: string
}
export interface IUserAvatar {
	image: string
	alt: string
}
export interface IUserAvatarProps {
	userAvatar: IUserAvatar
}
