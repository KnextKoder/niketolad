'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

const clients = [
  { name: 'Client 1', logo: '/nikentolad-clients-png-logos/11plc.png' },
  { name: 'Client 2', logo: '/nikentolad-clients-png-logos/Clearnserve.png' },
  { name: 'Client 3', logo: '/nikentolad-clients-png-logos/conoil png.png' },
  { name: 'Client 4', logo: '/nikentolad-clients-png-logos/cybernetics logo.png' },
]

const clients2 = [
  { name: 'Client 1', logo: '/nikentolad-clients-png-logos/geometric synergy logo.png' },
  { name: 'Client 2', logo: '/nikentolad-clients-png-logos/image 3 (1).png' },
  { name: 'Client 3', logo: '/nikentolad-clients-png-logos/image 5 (1).png' },
  { name: 'Client 4', logo: '/nikentolad-clients-png-logos/image 6.png' },
]

const clients3 = [
  { name: 'Client 1', logo: '/nikentolad-clients-png-logos/image 7 (1).png' },
  { name: 'Client 2', logo: '/nikentolad-clients-png-logos/image88.png' },
  { name: 'Client 3', logo: '/nikentolad-clients-png-logos/image 10.png' },
  { name: 'Client 4', logo: '/nikentolad-clients-png-logos/image 11.png' },
]

const clients4 = [
  { name: 'Client 1', logo: '/nikentolad-clients-png-logos/Juhi 2 logo.png' },
  { name: 'Client 2', logo: '/nikentolad-clients-png-logos/jushad.png' },
  { name: 'Client 3', logo: '/nikentolad-clients-png-logos/nepal.png' },
  { name: 'Client 4', logo: '/nikentolad-clients-png-logos/Nigerian_Air_Force_emblem.png' },
  { name: 'Client 5', logo: '/nikentolad-clients-png-logos/NNPC logo.png' },
]

const partners1 = [
    { name: 'Client 1', logo: '/nikentolad-partners/gammon logo.png' },
    { name: 'Client 2', logo: '/nikentolad-partners/isoil logo.png' },
    { name: 'Client 3', logo: '/nikentolad-partners/proflo1.png' },
    { name: 'Client 4', logo: '/nikentolad-partners/searle logo.png' },
]

const partners2 = [
  { name: 'Client 1', logo: '/nikentolad-partners/Aljac logo.png' },
  { name: 'Client 2', logo: '/nikentolad-partners/silea-LOGO.png' },
  { name: 'Client 3', logo: '/nikentolad-partners/elaflex-logo.png' },
  { name: 'Client 4', logo: '/nikentolad-partners/Faudi logo.png' },
  { name: 'Client 5', logo: '/nikentolad-partners/Badge_of_the_Nigerian_Navy 1.svg.png' },
]

export function Clients() {
  const swiperParams = {
    modules: [Autoplay],
    slidesPerView: 4,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
    },
  }

  const swiperParamsReverse = {
    ...swiperParams,
    autoplay: {
      ...swiperParams.autoplay,
      reverseDirection: true,
    },
  }

  return (
    <section className="py-16 pt-14 flex flex-col bg-gray-300">
      <div className="container mx-auto px-4 h-full">
        <h2 className="mb-12 text-center text-3xl md:text-5xl font-bold my-3">Our Clients Trust Us</h2>
        <div className="space-y-8 h-full">
          <Swiper {...swiperParams}>
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center h-full">
                <Image src={client.logo} alt={`${client.name} logo`} className="mx-auto object-cover" width={150} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...swiperParamsReverse}>
            {clients2.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center h-full">
                <Image src={client.logo} alt={`${client.name} logo`} className="mx-auto object-cover" width={150} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...swiperParams}>
            {clients3.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center h-full">
                <Image src={client.logo} alt={`${client.name} logo`} className="mx-auto object-cover" width={150} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...swiperParamsReverse}>
            {clients4.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center h-full">
                <Image src={client.logo} alt={`${client.name} logo`} className="mx-auto object-cover" width={150} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    {/* ================================================================================================================================================================= */}
      <div className="container mx-auto px-4 h-full mt-9">
        <h2 className="mb-12 text-center text-3xl md:text-5xl font-bold my-3">Our Partners</h2>
        <div className="space-y-8 h-full">
          <Swiper {...swiperParams}>
            {partners1.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center h-full">
                <Image src={client.logo} alt={`${client.name} logo`} className="mx-auto object-cover" width={150} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...swiperParamsReverse}>
            {partners2.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center h-full">
                <Image src={client.logo} alt={`${client.name} logo`} className="mx-auto object-cover" width={150} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}