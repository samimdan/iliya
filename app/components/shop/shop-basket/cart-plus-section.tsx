'use client'
import React from 'react'
import CartPlus from '@/app/svgs/cart-plus'
import { useBasketCardState } from '../../globalState/store'
import Tooltip from '@/components/ui/iliya/tooltip'

export default function CartPlusSection({productID}:{productID:number}) {
    const [isHoverd, setIsHoverd] = React.useState(false)
   const addProductToBasket=()=>{
    const checkProduct = useBasketCardState.getState().basket.find((id)=>id===productID)

    useBasketCardState.setState((state) => ({
      ...state,
      basket: [...state.basket, productID]
    }));
    console.log(useBasketCardState.getState().basket)
   }
  return (
    <Tooltip content='salm' >
    <section 
    onClick={addProductToBasket}
    onMouseEnter={()=>setIsHoverd(true)}
    onMouseLeave={()=>setIsHoverd(false)}
    className='w-full flex item-center justify-center p-1 mx-auto my-2 hover:cursor-pointer border bg-primary/5  hover:shadow-sm hover:shadow-purple-400/40'>
    
    <CartPlus className='w-6 h-6 ' hoverd={isHoverd}/>
</section>
</Tooltip>
  )
}
