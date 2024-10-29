import type { UUID } from 'crypto'
export interface IProductDataBase {
	id: string
	title: string
	description: string
	time: string
	category: any[]
	author: string[]
	price: number
	img: string
	rating: number
	buyer: number
}
