'use client'
import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { ProductdataBase } from '@/app/Temp/database'
import ProductPreview from './product-preview'
import styled from 'styled-components'
interface IProductDataBase {
	id: number
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
export default function MainHome() {
	const [products,setProducts]=useState<Array<IProductDataBase>>()
	useEffect(()=>{
		setProducts(ProductdataBase)
	},[])
	return (
		<Grid className='flex flex-col mt-10 justify-center items-center'>
			{products?.map((product) => 
			<ProductPreview key={product.id} {...product} />
		)
			}
			</Grid>
	)
}
const Grid=styled.div
	`display:grid;
	
	grid-template-columns:repeat(auto-fill,minmax(350px,1fr));
	grid-gap:2rem;
	`
