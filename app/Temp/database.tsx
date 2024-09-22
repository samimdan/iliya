import { Role } from '../enum/Roles'
import { IUser } from '../Interfaces/userInterface'
import { v4 as uuidv4 } from 'uuid'
export const userdataBase: Array<IUser> = [
	{
		id: uuidv4(),
		email: 'samim.danesh@gmail.com',
		name: 'صمیم دانش',
		image:
			'https://lh3.googleusercontent.com/a/ACg8ocJpvVux687rVMiOUKLjmyK3aVal4r8pZ_9t4agmQvNMrDvu6Vee=s360-c-no',
		role: Role.Admin,
	},
	{
		id: uuidv4(),
		email: 'teacher@gmail.com',
		name: 'علی محمدی',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Amir_Haddad_2016.jpg/220px-Amir_Haddad_2016.jpg',
		role: Role.Teacher,
	},
	{
		id: uuidv4(),
		email: 'reza @gmail.com',
		name: 'رضا رضایی',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Reza_Atri_2018.jpg/150px-Reza_Atri_2018.jpg',
		role: Role.User,
	},
	{
		id: uuidv4(),
		email: 'mohammad @gmail.com',
		name: 'محمد محمدی',
		role: Role.Guest,
	},
]
