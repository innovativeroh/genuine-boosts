import React from 'react'

const navigation = () => {
  return (
    <div className='border-[#233453] border-b-[1px] mt-8'>
        <div className='flex flex-wrap gap-0'>
        <button className='bg-black px-4 py-2 border-b-pink-500 text-pink-500 text-sm border-b-[2px]'>Products</button>
        <button className='bg-transparent px-4 py-2 border-transparent text-white text-sm border-b-[2px]'>F.A.Q</button>
        <button className='bg-transparent px-4 py-2 border-transparent text-white text-sm border-b-[2px]'>Feedback</button>
        <button className='bg-transparent px-4 py-2 border-transparent text-white text-sm border-b-[2px]'>Terms</button>
        <button className='bg-transparent px-4 py-2 border-transparent text-white text-sm border-b-[2px]'>Gift Cards</button>
        </div>
    </div>
  )
}

export default navigation