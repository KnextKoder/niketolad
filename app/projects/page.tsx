import Footer from '@/components/custom/footer'
import ImageCarousel from '@/components/image-carousel'
import { NavBar } from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-300 min-h-screen'>
      <NavBar />
      <div className='mt-[69px] mb-6'>
        <ImageCarousel />
      </div>
      <Footer/>
    </div>
  )
}

export default page