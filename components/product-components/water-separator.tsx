import React from 'react'
import { Section } from '../craft'
import { Title } from './title'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'


const product_one = [
    {
        image: '/niketolad-products/Dirt Defence Filter Vessel.png',
        text: 'Dirt Defense Filter Vessel'
    },
    {
        image: '/niketolad-products/Vertical Filter Housing (VFH).png',
        text: 'Vertical Filter Housing'
    },
    {
        image: '/niketolad-products/MF Series.png',
        text: 'MF Series'
    },
    {
        image: '/niketolad-products/FW9-S Series.png',
        text: 'FW9-S Series'
    },
    {
        image: '/niketolad-products/FW10-V Series.png',
        text: 'FW10-V Series'
    },
    {
        image: '/niketolad-products/FWS 10HT series (1).png',
        text: 'FWS-10HT Series'
    },
]
const product_two = [
    {
        image: '/niketolad-products/FWS 10HT series (2).png',
        text: 'FWS 10HT-Series'
    },
    {
        image: '/niketolad-products/FWE Series.png',
        text: 'FWE Series'
    },
    {
        image: '/niketolad-products/FWE-T Series.png',
        text: 'FWE T Series'
    },
    {
        image: '/niketolad-products/FW6-T Series.png',
        text: 'FW6-T Series'
    },
    {
        image: '/niketolad-products/FW6 Series.png',
        text: 'FW6 Series'
    },
    {
        image: '/niketolad-products/FW24-H-T Series.png',
        text: 'FW24-HT Series'
    },
]


function ProductOneCarousel() {
  return (
    <div className='w-screen flex justify-center items-center px-3'>
        <Carousel
        opts={{
            align: "start",
        }}
        className="w-4/5"
        >
        <CarouselContent>
            {product_one.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                <Card>
                    <CardContent className=" flex flex-col aspect-square items-center justify-center gap-3 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent">
                    <Image src={product.image} alt={product.text} width={300} height={300} className="object-cover mt-3" />
                    <span className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{product.text}</span>
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}

function ProductTwoCarousel() {
  return (
    <div className='w-screen flex justify-center items-center px-3'>
        <Carousel
        opts={{
            align: "start",
        }}
        className="w-4/5"
        >
        <CarouselContent>
            {product_two.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center gap-3 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent">
                    <Image src={product.image} alt={product.text} width={300} height={300} className="object-cover mt-3" />
                    <span className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{product.text}</span>
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}


export const WaterSeparator = () => {
  return (
    <Section className="relative w-screen flex items-center flex-col justify-center overflow-hidden py-0 md:py-0 gap-6">
        <div className="w-screen p-3 bg-gradient-to-l from-slate-50 to-niketolad/60 md:pl-20">
            <Title text={"Filter/Water Separator"}/>
        </div>
        <div className=''>
            <ProductOneCarousel/>
        </div>
        <div className='mb-4'>
            <ProductTwoCarousel/>
        </div>
    </Section>  
  )
}