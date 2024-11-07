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
        image: '/niketolad-products/Gasoline gauging paste.png',
        text: 'Gasoline gauging paste'
    },
    {
        image: '/niketolad-products/Nozzle gauge.png',
        text: 'Nozzle gauge'
    },
    {
        image: '/niketolad-products/Milipore kit.png',
        text: 'Milipore kit'
    },
    {
        image: '/niketolad-products/progetto-senza-titolo.png',
        text: 'Progetto Senza Titolo'
    },
    {
        image: '/niketolad-products/Filter Test Membranes.png',
        text: 'Filter Test Membranes'
    },
    {
        image: '/niketolad-products/Syringe.png',
        text: 'Syringe'
    },
    {
        image: '/niketolad-products/yellow pvc grounding Cable.png',
        text: 'yellow pvc grounding Cable'
    },
]
const product_two:ProductType[] = [
    {
        image: '/placeholder.webp',
        preText: '60 Type',
        text: 'Separator Element'
    },
    {
        image: '/niketolad-products/Differential Pressure Gauge.png',
        text: 'Differential Pressure Gauge.png'
    },
    {
        image: '/niketolad-products/Automatic Air Eliminator.png',
        text: 'Automatic Air Eliminator'
    },
    {
        image: '/placeholder.webp',
        text: 'FW6-/FW6-T-TYPE'
    },
    {
        image: '/niketolad-products/hydrometer.png',
        text: 'hydrometer'
    },
    {
        image: '/niketolad-products/Expansion joint.png',
        text: 'Expansion joint'
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


export const Accessories = () => {
  return (
    <Section className="relative w-screen flex items-center flex-col justify-center overflow-hidden py-0 md:py-0 gap-6">
        <div className="w-screen p-3 bg-gradient-to-l from-slate-50 to-niketolad/60 md:pl-20">
            <Title text={"Accessories"}/>
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