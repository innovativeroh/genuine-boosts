import React from 'react'
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div className='w-full p-4 bg-black border-[#233453] border-b-[1px]'>
      <div className='m-auto max-w-[1200px]'>
        <div className='flex flex-wrap items-center justify-between'>
          <div>
            <p className='text-pink-500 font-semibold text-2xl'>NomNom-Boosts</p>
          </div>
          <div>
            <button className='text-white'><BsCart3 size={28} /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header