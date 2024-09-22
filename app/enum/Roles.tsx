import { RoleWord } from './PersianCommonWorld'
import { UserCog } from 'lucide-react'
export enum Role {
	Admin,
	User,
	Teacher,
	Student,
	Guest,
}
export const RoleObject = (iconSize: number) => {
	return {
		Admin: {
			Role: Role.Admin,
			RoleText: RoleWord.Admin,
			RoleIcon: <UserCog size={iconSize} />,
		},
		User: {
			Role: Role.User,
			RoleText: RoleWord.User,
			RoleIcon: <UserCog size={iconSize} />,
		},
		Teacher: {
			Role: Role.Teacher,
			RoleText: RoleWord.Teacher,
			RoleIcon: (
				<UserCog
					size={iconSize}
					className='border'
				/>
			),
		},
		Student: {
			Role: Role.Student,
			RoleText: RoleWord.Student,
			RoleIcon: <UserCog size={iconSize} />,
		},
	}
}
