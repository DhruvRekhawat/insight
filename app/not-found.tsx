import React from 'react'
import ImageNotFound from '@/assets/10840247_4449326.svg'
import Image from 'next/image'
const NotFound = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Image src={ImageNotFound} width={300} height={300} alt='Not Found Image' ></Image>
        <h2 className='text-xl text-lime-600 font-medium'>Under Construction</h2>
    </div>
  )
}

export default NotFound