'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

const images: CarouselImage[] = [
  {
    id: 1,
    src: '/project-images/bond wall construction .jpg',
    alt: 'Image 1',
    title: 'Bond Wall Construction 1',
    description: 'A serene view of mountains and a lake.'
  },
  {
    id: 2,
    src: '/project-images/bond wall construction.jpg',
    alt: 'Image 2',
    title: 'Bond Wall Construction 2',
    description: 'A stunning cityscape at night.'
  },
  {
    id: 3,
    src: '/project-images/foundation construction (1).jpg',
    alt: 'Image 3',
    title: 'Foundation Construction 1',
    description: 'Crystal clear waters and white sand beaches.'
  },
  {
    id: 4,
    src: '/project-images/foundation construction (2).jpg',
    alt: 'Image 4',
    title: 'Foundation Construction 2',
    description: 'A winding path through a lush green forest.'
  },
  {
    id: 5,
    src: '/project-images/foundation construction (6).jpg',
    alt: 'Image 5',
    title: 'Foundation Construction 3',
    description: 'A snow-capped mountain peak touching the clouds.'
  },
  {
    id: 6,
    src: '/project-images/foundation construction (7).jpg',
    alt: 'Image 6',
    title: 'Foundation Construction 4',
    description: 'A lush oasis in the middle of a vast desert.'
  },
  {
    id: 7,
    src: '/project-images/gantry construction.jpg',
    alt: 'Image 1',
    title: 'Gantry Construction',
    description: 'A serene view of mountains and a lake.'
  },
  {
    id: 8,
    src: '/project-images/Hydrant Tank Construction.jpg',
    alt: 'Image 2',
    title: 'Hydrant Tank Construction',
    description: 'A stunning cityscape at night.'
  },
  {
    id: 9,
    src: '/project-images/hydrant tank stairway construction.jpg',
    alt: 'Image 3',
    title: 'Hydrant Tank Stairway Construction',
    description: 'Crystal clear waters and white sand beaches.'
  },
  {
    id: 10,
    src: '/project-images/product tank bridge construction.jpg',
    alt: 'Image 4',
    title: 'Product Tank Bridge Construction',
    description: 'A winding path through a lush green forest.'
  },
  {
    id: 11,
    src: '/project-images/product tank construction (2).jpg',
    alt: 'Image 5',
    title: 'Product Tank Construction 1',
    description: 'A snow-capped mountain peak touching the clouds.'
  },
  {
    id: 12,
    src: '/project-images/product tank construction 2.jpg',
    alt: 'Image 6',
    title: 'Product Tank Construction 2',
    description: 'A lush oasis in the middle of a vast desert.'
  },
  {
    id: 13,
    src: '/project-images/product tank construction 3.jpg',
    alt: 'Image 6',
    title: 'Product Tank Construction 3',
    description: 'A lush oasis in the middle of a vast desert.'
  },
  {
    id: 14,
    src: '/project-images/product tank construction.jpg',
    alt: 'Image 6',
    title: 'Product Tank Construction 4',
    description: 'A lush oasis in the middle of a vast desert.'
  },
  {
    id: 15,
    src: '/project-images/product tank roof construction.jpg',
    alt: 'Image 6',
    title: 'Product Tank Roof Construction',
    description: 'A lush oasis in the middle of a vast desert.'
  },
  {
    id: 16,
    src: '/project-images/product tank stairway construction.jpg',
    alt: 'Image 6',
    title: 'Product Tank Stairway Construction',
    description: 'A lush oasis in the middle of a vast desert.'
  },
  {
    id: 17,
    src: '/project-images/product tank welding.jpg',
    alt: 'Image 6',
    title: 'Product Tank Welding',
    description: 'A lush oasis in the middle of a vast desert.'
  },
]

export default function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState<CarouselImage>(images[0])
  const [isScrollable, setIsScrollable] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        setIsScrollable(
          scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
        )
      }
    }

    checkScrollable()
    window.addEventListener('resize', checkScrollable)

    return () => {
      window.removeEventListener('resize', checkScrollable)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="container mx-auto p-4 h-full bg-gray-300">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main image display */}
        <div className="lg:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails and info section */}
        <div className="flex justify-center items-center w-full lg:w-1/4">
          <div className="w-full md:w-1/2 lg:w-full flex flex-col gap-6 lg:h-full">
            {/* Thumbnails */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide p-3"
              >
                {images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all duration-200 ease-in-out ${
                      selectedImage.id === image.id
                        ? 'ring-2 ring-primary scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              {isScrollable && (
                <>
                  <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Image information */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 p-4 rounded-lg shadow-md lg:h-2/3"
              >
                <h2 className="text-xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-600">{selectedImage.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}