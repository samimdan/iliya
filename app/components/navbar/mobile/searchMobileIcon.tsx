"use client";
import { CircleX, Search } from "lucide-react";
import React, { useEffect } from "react";
import { useSearchState } from "../../globalState/store";
export default function SearchMobileIcon() {
 const searchState= useSearchState((state)=>state.search);

 const setSearchState= useSearchState((state)=>state.setSearch);

  return (
    <div className='flex flex-col items-center  justify-between '>
      <div className='transition duration-500'>
        {searchState &&<span onClick={()=> setSearchState(!searchState)}>
          <CircleX size={24} strokeWidth={2.5} className='text-rose-400 cursor-pointer' />
        </span>}
        {!searchState && <span onClick={()=> setSearchState(!searchState)}>
      
      <Search size={24} strokeWidth={2.5}  className='cursor-pointer'  />
        </span>}
      </div>
         
    </div>
        );
}
