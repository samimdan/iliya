import { Role } from '../enum/Roles'
import { IUser } from '../Interfaces/userInterface'
import { v4 as uuidv4 } from 'uuid'
import { Technology } from '../utilties/Technology/Technology'
import { UUID } from 'crypto'

export const userdataBase: Array<IUser> = [
	{
		id: '7d7a6eb6-8510-41f0-95fc-6dcaa0b16b1f',
		email: 'samim.danesh@gmail.com',
		name: 'صمیم دانش',
		image: '@/app/src/googleimage.jpg',
		role: Role.Admin,
	},
	{
		id: '005f9dfa-8e9f-403c-a147-88061a0d7e52',
		email: 'teacher@gmail.com',
		name: 'علی محمدی',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Amir_Haddad_2016.jpg/220px-Amir_Haddad_2016.jpg',
		role: Role.Teacher,
	},
	{
		id: 'afba6d5a-2822-4fd7-b41b-a387c85dee4b',
		email: 'reza @gmail.com',
		name: 'رضا رضایی',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Reza_Atri_2018.jpg/150px-Reza_Atri_2018.jpg',
		role: Role.User,
	},
	{
		id: '77cc1583-fe0b-4d7d-81f0-3862bb2f5988',
		email: 'mohammad @gmail.com',
		name: 'محمد محمدی',
		role: Role.Guest,
	},
]

export const ProductdataBase = [
	{
		id: 'bb9b8c00-0c7e-4aef-925e-a28a00e8b7b8',
		title: 'ساخت وبسایت با فروش دوچرخه',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت فروش به صورت FullStack دوچرخه آشنا می شوید',
		time: '10:30:00',
		category: [Technology.react, Technology.tailwind, Technology.typescript],
		author: ['محمد عالی'],
		price: 100000,
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/07cc504e-48df-4280-8ec3-558b4676e6b0?w=2038&cf_fit=scale-down&q=85&format=auto&s=f81b3ae45bc28febfc375644387fffa3e3182a523180b46c9e62975f20d5e1bd',
		rating: 3,
		buyer: 340,
	},
	{
		id: 'b3fc2a15-0bc8-4d39-8f63-abcb6b685c2f',
		title: 'ساخت سایت فروش با HTML و CSS و JavaScript',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت فروش   با html ,css , js آشنا می شوید',
		time: '9:30:00',
		author: ['محمد امینی'],
		category: [Technology.html, Technology.css, Technology.javaScript],
		price: 50000,
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/6c248262-6147-4c61-8c2d-e77e1dd4cb4c?w=2038&cf_fit=scale-down&q=85&format=auto&s=3defdf4c425d89d315af395f37c24d17de02cf825f790581065d99e9540bd2c2',
		rating: 2.5,
		buyer: 130,
	},
	{
		id: '68e61719-bfb6-4b99-8caa-4c8daed6c1da',
		title: 'آشنایی با  bootstrap',
		description:
			'در این دوره آموزشی شما با نحوه طراحی وبسایت با html, js , bootstrap آشنا می شوید',
		time: '5:30:00',
		category: [
			Technology.html,
			Technology.css,
			Technology.javaScript,
			Technology.bootstrap,
		],
		author: ['افسانه رضایی'],
		price: 550000,
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/b1a41c55-3d78-431f-a08d-3d879b16d3f1?w=2038&cf_fit=scale-down&q=85&format=auto&s=fe2e425f9a9f186ba73e50a39146f76f50dba54810f22becd34671f8e8018f96',
		rating: 3.5,
		buyer: 430,
	},
	{
		id: '836c74b3-d50a-4a93-bb79-45dc2790dd7a',
		title: 'آموزش ساخت وبسایت  responsive با html و css',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت responsive با html ,css آشنا می شوید',
		time: '3:00:00',
		category: [Technology.html, Technology.css],
		author: ['رضا محمدی'],
		price: 200000,
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/3385e486-888e-4104-8749-76781330f7b5?w=2038&cf_fit=scale-down&q=85&format=auto&s=b5464f323c3e601ff4281ec9ad50a644722ea9db1d7ae6251a48acd50a4b0306',
		rating: 1.5,
		buyer: 1023,
	},
	{
		id: 'bf4ee35b-04fc-4a74-938e-9c695beee4a7',
		title: 'آموزش ساخت تمپلیت سایت با Photoshop',
		description:
			'در این دوره آموزشی شما با نحوه طراحی تمپلیت سایت با فتوشاپ آشنا می شوید',
		time: '2:20:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/a980da94-403b-4c71-9e63-ed06830a734a?w=2038&cf_fit=scale-down&q=85&format=auto&s=8ade6af8c3181cbede0dfb82880c83787d1d6ac72400a2591a9e3ee40961ac4e',
		category: [Technology.photoShop],
		price: 150000,
		author: ['حسین عمادی'],
		rating: 2.5,
		buyer: 2101,
	},
	{
		id: '5de0a32b-49d6-4864-84a1-5dc886549312',
		title: 'طراحی اپلیکیشن موبایل با React Native',
		description: 'پروژه محور آموزش کامل React Native از مقدماتی تا پیشرفته',
		time: '11:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/6c930315-ceda-407b-9be7-66279a4ece7e?w=2038&cf_fit=scale-down&q=85&format=auto&s=5abacb0efc81481c7cd9cbca16de691154ed03aa8ab05dfa9367ec6be1a2a96f',
		category: [Technology.reactNative],
		price: 4500000,
		author: ['محمد امینی'],
		rating: 4,
		buyer: 1340,
	},
	{
		id: 'a5cdfd22-9c9c-49f9-a920-bdbf49b91acf',
		title: 'آموزش ساخت وبسایت با Vue',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با vue آشنا می شوید',
		time: '8:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/5684af70-a4e7-4f82-b682-188ab96006ec?w=2038&cf_fit=scale-down&q=85&format=auto&s=11a7503c12c71071bd899906c7e88bbe1384fd44d5fe11a6c31f41019a89041a',
		category: [Technology.vue],
		price: 400000,
		author: ['رضا واحدی'],
		rating: 3.5,
		buyer: 210,
	},
	{
		id: 'f1a26386-2ff0-46de-9010-de807e3c180d',
		title: 'آموزش ساخت وبسایت با Angular',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با angular آشنا می شوید',
		time: '7:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/ef78a9a1-0798-4629-b9b4-1eb1955f956f?w=2038&cf_fit=scale-down&q=85&format=auto&s=d4461fa651d24f65905784d93df0e7494920666cd7406989d1b41e485e82a791',
		category: [Technology.angular],
		author: ['رضا واحدی'],
		price: 350000,
		rating: 4,
		buyer: 3252,
	},
	{
		id: 'a687799a-8938-426b-aecd-cb6c6ec702d8',
		title: 'آموزش ساخت وبسایت با Svelte',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با svelte آشنا می شوید',
		time: '6:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/c4cff95f-af0e-4b6d-9e79-d0cf0871db34?w=2038&cf_fit=scale-down&q=85&format=auto&s=809b1baf6eccdb8258ccc7dce831efcb89313288996da0650aaa77bcffb917c5',
		category: [Technology.svelte],
		author: ['علی  مرادی'],
		price: 7000000,
		rating: 3.5,
		buyer: 290,
	},
	{
		id: '579f601b-3ba5-42fb-ba80-6068053740b1',
		title: 'آموزش ساخت وبسایت با NextJs',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با nextjs آشنا می شوید',
		time: '4:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/b32861f3-4c9a-4b14-a5a1-90153e783468?w=2038&cf_fit=scale-down&q=85&format=auto&s=b540169a3002a85a9fe629146244f60fb57d6a738da7a7f29ec24b7271a5b542',
		category: [Technology.nextjs],
		price: 800000,
		author: ['نفس یوسفی'],
		rating: 4,
		buyer: 1302,
	},
	{
		id: '921ec216-9640-42de-bcb3-21d93a27421a',
		title: 'آموزش ساخت وبسایت با Gatsby',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با gatsby آشنا می شوید',
		time: '3:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/f08f12f1-8ef8-47fd-8d88-1e04eec6eed1?w=2038&cf_fit=scale-down&q=85&format=auto&s=3d9da9896cc549c60612d63bfe3811a33aa8cc2444531032df97318281742a36',
		category: [Technology.gatsby],
		price: 900000,
		author: ['محمد امینی'],
		rating: 3.5,
		buyer: 1203,
	},
	{
		id: 'b1e5a938-c98d-48b2-af62-7776c6129c7b',
		title: 'آموزش ساخت وبسایت با NuxtJs',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با nuxtjs آشنا می شوید',
		time: '2:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/37d04333-5a3d-4c1f-8302-e7a61f62a5c1?w=2038&cf_fit=scale-down&q=85&format=auto&s=0857dfe3ef95dad13f47894515e1fffb5125b682ef99718e0f38f283f655221d',
		category: [Technology.nuxtjs],
		price: 950000,
		author: ['لیلا رضایی'],
		rating: 4,
		buyer: 230,
	},
	{
		id: '77f03031-5ecb-4190-8558-85fce4c0f84e',
		title: 'آموزش ساخت وبسایت با TailwindCss',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با tailwindcss آشنا می شوید',
		time: '1:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/0655dfdf-d13a-4123-b797-7200b519d060?w=2038&cf_fit=scale-down&q=85&format=auto&s=60242ecffd666541702204aa517dbcc62cb1f42cff313cda3898316fd6303978',
		category: [Technology.tailwind],
		price: 700000,
		author: ['حسن عمادی'],
		rating: 3.5,
		buyer: 2230,
	},
	{
		id: 'd7b3f5ae-b253-4803-b0fc-ab7eaec8b2f2',
		title: 'آموزش سات وبسایت با Bootstrap',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با bootstrap آشنا می شوید',
		time: '2:55:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/db355ee6-a5b5-4a12-97d8-88474b78092a?w=2038&cf_fit=scale-down&q=85&format=auto&s=2ba90b6889b5bd249f0724830f9390692fe21591eb47662d9c340a42036d12da',
		category: [Technology.bootstrap],
		price: 700000,
		author: ['احمد محمدی'],
		rating: 4,
		buyer: 1202,
	},
	{
		id: '4794ab9c-e7c9-451a-9c55-acfb99ae1a76',
		title: 'آموزش ساخت وبسایت با MaterialUi',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با materialui آشنا می شوید',
		time: '2:25:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/4ee1393f-31af-4693-90a8-91809e61e65b?w=2038&cf_fit=scale-down&q=85&format=auto&s=6905a00032802846e2d27193159b44c8ac2fb6b221083da23f1575faecff0317',
		category: [Technology.materialUI],
		price: 400000,
		author: ['افشین بابایی'],
		rating: 3,
		buyer: 102,
	},
	{
		id: 'ca826306-827b-4888-83c7-ad48a6b20917',
		title: 'آموزش ساخت وبسایت با AntDesign',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با antdesign آشنا می شوید',
		time: '1:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/56b249f5-9710-4e48-a3e4-10f77c61d6ea?w=2038&cf_fit=scale-down&q=85&format=auto&s=2fa668d41d0b689dbb1139b0466745cb744fa201502fdc27b9353c476f39d312',
		category: [Technology.antDesign],
		price: 450000,
		author: ['ابراهیم صمدی'],
		rating: 4.5,
		buyer: 320,
	},
	{
		id: 'ecbb3eb7-9f44-49ea-b7a5-c0646d8cae9b',
		title: 'آموزش ساخت وبسایت با ChakraUi',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با chakraui آشنا می شوید',
		time: '1:06:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/21098953-3aa2-4dab-83fa-5e0405793ca8?w=2038&cf_fit=scale-down&q=85&format=auto&s=32171c4d2ad3cde9b639e7644cdf1a4773147fef77676404c63168a8e7a2fcb3',
		category: [Technology.chakraUI],
		price: 800000,
		author: ['ماهان احمدی'],
		rating: 3.5,
		buyer: 1024,
	},
	{
		id: '485d154d-286f-4843-b191-d42787e924c0',
		title: 'آموزش ساخت وبسایت با Vuetify',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با vuetify آشنا می شوید',
		time: '1:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/8f6e86d3-ba0c-4753-871e-38ca59159800?w=2038&cf_fit=scale-down&q=85&format=auto&s=90d96d7dc07252361085c9b1a40ba1f262f8b29c246cbf5ff6352f8b1cb89ee6',
		category: [Technology.vuetify],
		price: 900000,
		author: ['نگین غلامی'],
		rating: 4.5,
		buyer: 230,
	},
	{
		id: '2da3e9c3-c5a1-40b8-8a32-58e2324c10da',
		title: 'آموزش ساخت وبسایت با Rails on Ruby',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با Rails on Ruby, آشنا می شوید',
		time: '4:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/69cb34f8-83c2-4b1c-9c70-a0ca10f63c83?w=2038&cf_fit=scale-down&q=85&format=auto&s=14313706584efe9389ce9a26107c15435785f8eca1a1d53033f2a37a9a09ad52',
		category: [Technology.rails, Technology.backend],
		price: 1000000,
		author: ['سیاوش ساریان'],
		rating: 2.5,
		buyer: 1023,
	},
	{
		id: 'b471c957-31f1-489b-83e4-c367c88f13d7',
		title: 'آموزش ساخت وبسایت با laravel',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با laravel آشنا می شوید',
		time: '5:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/6546c913-8bfd-4120-9ead-a2584ef32da6?w=2038&cf_fit=scale-down&q=85&format=auto&s=9405033bc2479186ca74aef2a4ff00ca914b6704b181662dde0a72ddc4008cb0',
		category: [Technology.laveral, Technology.backend],
		price: 1100000,
		author: ['مانی فدایی'],
		rating: 3.5,
		buyer: 1423,
	},
	{
		id: '701943ec-c028-4bf0-88f9-cd10ba18bd7f',
		title: 'آموزش ساخت وبسایت با Gridsome',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با gridsome آشنا می شوید',
		time: '7:30:00',
		img: 'https://elements-resized.envatousercontent.com/elements-cover-images/ef78a9a1-0798-4629-b9b4-1eb1955f956f?w=2038&cf_fit=scale-down&q=85&format=auto&s=d4461fa651d24f65905784d93df0e7494920666cd7406989d1b41e485e82a791',
		category: [Technology.gridSome],
		price: 1200000,
		author: ['ندا حسینی'],
		rating: 4,
		buyer: 2135,
	},
	{
		id: '34f0786e-76cd-4d0a-afbe-0ab6d2bd57dd',
		title: 'آموزش ساخت وبسایت با django',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با django آشنا می شوید',
		time: '12:30:00',
		img: 'https://blueshelltech.com/media/2021/05/python-django-1024x576.jpg',
		category: [Technology.django],
		price: 7950000,
		author: ['محمدرضا رضایی'],
		rating: 4.5,
		buyer: 2356,
	},
	{
		id: '491f8c27-81a7-414f-b91b-e2fb41975209',
		title: 'آموزش ساخت وبسایت با flask',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با flask آشنا می شوید',
		time: '1:30:00',
		img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZDXzEwWqdDwu95G374AM0g.jpeg',
		category: [Technology.flask],
		price: 1000000,
		author: ['سالار دشتی'],
		rating: 3.5,
		buyer: 1234,
	},
	{
		id: 'a43e6a7d-050c-4fd4-924c-0712b69a6699',
		title: 'آموزش ساخت وبسایت با Rails on Ruby',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با fastapi آشنا می شوید',
		time: '4:30:00',
		img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--YhHXMCNr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ykx1n1e49o9haiu5khwi.jpg',
		category: [Technology.rails],
		price: 1500000,
		author: ['امیر حسینی'],
		rating: 4,
		buyer: 1213,
	},
	{
		id: '7640ecb6-5884-4b31-aa9d-929a91e08323',
		title: 'آموزش ساخت وبسایت با GoLang',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با nodejs آشنا می شوید',
		time: '6:00:00',
		img: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Foql0u0lpw1w7db3lxeee.png',
		category: [Technology.goLang],
		price: 2000000,
		author: ['رضا عالی پور'],
		rating: 3.5,
		buyer: 134,
	},
	{
		id: 'd3399db1-0495-4782-bbc6-05c0d13b590b',
		title: 'آموزش ساخت وبسایت با Laravel',
		description:
			'در این دوره آموزشی شما با نحوه ساخت وبسایت با laravel آشنا می شوید',
		time: '1:05:00',
		img: 'https://cdn.hdwebsoft.com/wp-content/uploads/2021/11/Thiet-ke-chua-co-ten-4.jpg.webp',
		category: [Technology.laveral],
		price: 2500000,
		rating: 4,
		author: ['لیلا فرین'],
		buyer: 1564,
	},
]
