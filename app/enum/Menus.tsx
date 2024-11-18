import {
	BookMarked,
	ChevronsLeftRightEllipsisIcon,
	Download,
	Home,
	LogOut,
	Mail,
	Phone,
	Settings,
	ShoppingCart,
	User,
	Users,
	Wallet,
} from 'lucide-react'
import { NavMenu, UserMenu } from './PersianCommonWorld'
import MessageIcon from '../svgs/message-icon'

export const MenuObject = (iconSize: number) => {
	return {
		Home: {
			Menu: 'Home',
			MenuText: NavMenu.Home,
			MenuIcon: <Home size={iconSize} />,
		},
		About: {
			Menu: 'About',
			MenuText: NavMenu.About,
			MenuIcon: <Users size={iconSize} />,
		},
		Contact: {
			Menu: 'Contact',
			MenuText: 'تماس با ما',
			MenuIcon: <Phone size={iconSize} />,
		},
		Setting: {
			Menu: 'Setting',
			MenuText: UserMenu.Setting,
			MenuIcon: <Settings size={iconSize} />,
		},
		Profile: {
			Menu: 'Profile',
			MenuText: UserMenu.Profile,
			MenuIcon: <User size={iconSize} />,
		},
		SignOut: {
			Menu: 'SignOut',
			MenuText: UserMenu.SignOut,

			MenuIcon: <LogOut size={iconSize} />,
		},
		Downloads: {
			Menu: 'Downloads',
			MenuText: UserMenu.Downloads,
			MenuIcon: <Download size={iconSize} />,
		},
		Tickets: {
			Menu: 'Tickets',
			MenuText: UserMenu.Tickets,
		},
		Basket: {
			Menu: 'Basket',
			MenuText: UserMenu.Basket,
			MenuIcon: <ShoppingCart size={iconSize} />,
		},
		MyCourses: {
			Menu: 'MyCourses',
			MenuText: 'دوره های من',
			MenuIcon: <BookMarked size={iconSize} />,
		},
		PaymentDetail: {
			Menu: 'PaymentDetail',
			MenuText: 'جزییات حساب',
			MenuIcon: <Wallet size={iconSize} />,
		},
		MyProjects: {
			Menu: 'MyProjects',
			MenuText: UserMenu.MyProjects,
			MenuIcon: <ChevronsLeftRightEllipsisIcon size={iconSize} />,
		},
		Projects: {
			Menu: 'Projects',
			MenuText: NavMenu.Projects,
			MenuIcon: <ChevronsLeftRightEllipsisIcon size={iconSize} />,
		},
	}
}
