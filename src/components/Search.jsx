import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='w-[100%] '>
        <div className='flex items-center bg-yellow-600 h-10 rounded-2xl'>
        <select  className='bg-gray-300 p-3 border text-xs xl:text-sm text-black rounded-l '>
            <option >All</option>
            <option >Deals</option>
            <option >Amazon</option>
            <option  >Fashion lin</option>
            <option >Computers</option>
        </select>
          
            <input type="text " className=' text-black flex items-center h-[100%] bg-amber-50 rounded-xl grow' />
            <button className='w-[45px]'>
            <BsSearch  size={25} className='mx-auto '/> 
            </button>
        </div>
      
    </div>
  )
}

export default Search
