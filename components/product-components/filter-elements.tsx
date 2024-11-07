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

interface ProductType{
    image: string
    preText?: string
    text:string
}

const product_one:ProductType[] = [
    {
        image: '/niketolad-products/Coalescer Element P Type.png',
        preText: 'P-Type',
        text: 'Coalescer Element'
    },
    {
        image: '/niketolad-products/Coalescer Element D-Type.png',
        preText: 'D-Type',
        text: 'Coalescer Element'
    },
    {
        image: '/niketolad-products/Coalescer Element K-Type.png',
        preText: 'K-Type',
        text: 'Coalescer Element'
    },
    {
        image: '/niketolad-products/Coalescer Element Y type.png',
        preText: 'Y-Type',
        text: 'Coalescer Element'
    },
    {
        image: '/niketolad-products/Coalescer Element MIL Type.png',
        preText: 'MIL Type',
        text: 'Coalescer Element'
    },
    {
        image: '/niketolad-products/Coalescer Element P2-type.png',
        preText: 'P2-Type',
        text: 'Coalescer Element'
    },
    {
        image: '/niketolad-products/Coalescer Element MIL2-Type.png',
        preText: 'MIL2-Type',
        text: 'Coalescer Element'
    },
    {
        image: '/niketolad-products/Coalescer Element CS-Type.png',
        preText: 'CS-Type',
        text: 'Coalescer Element'
    },
]
const product_two:ProductType[] = [
    {
        image: '/niketolad-products/60 Type Sepearator Element.png',
        preText: '60 Type',
        text: 'Separator Element'
    },
    {
        image: '/niketolad-products/60 MIL Type Seperator Element.png',
        preText: '60MIL Type',
        text: 'Separator Element'
    },
    {
        image: '/niketolad-products/FWE and FWE T Type.png',
        text: 'FWE-/FWE-T-TYPE'
    },
    {
        image: '/niketolad-products/FW6 FW6 T Type.png',
        text: 'FW6-/FW6-T-TYPE'
    },
    {
        image: '/niketolad-products/6 Inches EIMF NON EI Microfilter.png',
        preText: '6"',
        text: 'Non El Microfilter'
    },
    {
        image: '/niketolad-products/6 inch EIMF Microfilter.png',
        preText: '6"',
        text: 'El Microfilter'
    },
    {
        image: '/niketolad-products/4 inches non EI microfilter.png',
        preText: '4"',
        text: 'Non El Microfilter'
    },
    {
        image: '/niketolad-products/4 inch EIMF TYPE.png',
        preText: '4"',
        text: 'El Microfilter'
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
                    <CardContent className="flex flex-col aspect-square items-center justify-center gap-3 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent">
                    <Image src={product.image} alt={product.text} width={300} height={300} className="object-cover mt-3" />
                    <div className='flex flex-col justify-center items-center mb-2 mt-2'>
                        <span className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{product.preText}</span>
                        <span className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{product.text}</span>
                    </div>
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
                        <div className='flex flex-col justify-center items-center mb-2 mt-2'>
                            <span className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{product.preText}</span>
                            <span className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{product.text}</span>
                        </div>
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


export const FilterElements = () => {
  return (
    <Section className="relative w-screen flex items-center flex-col justify-center overflow-hidden py-0 md:py-0 gap-6">
        <div className="w-screen p-3 bg-gradient-to-l from-slate-50 to-niketolad/60 md:pl-20">
            <Title text={"Filter Elements"}/>
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