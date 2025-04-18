'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react'

interface CarouselImage {
  id: number
  src: string
  alt: string
}

const images: CarouselImage[] = [
  {
    id: 1,
    src: '/project-images/bond wall construction .jpg',
    alt: 'Bond Wall Construction 1',
  },
  {
    id: 2,
    src: '/project-images/bond wall construction.jpg',
    alt: 'Bond Wall Construction 2',
  },
  {
    id: 3,
    src: '/project-images/foundation construction (1).jpg',
    alt: 'Foundation Construction 1',
  },
  {
    id: 4,
    src: '/project-images/foundation construction (2).jpg',
    alt: 'Foundation Construction 2',
  },
  {
    id: 5,
    src: '/project-images/foundation construction (6).jpg',
    alt: 'Foundation Construction 3',
  },
  {
    id: 6,
    src: '/project-images/foundation construction (7).jpg',
    alt: 'Foundation Construction 4',
  },
  {
    id: 7,
    src: '/project-images/gantry construction.jpg',
    alt: 'Gantry Construction',
  },
  {
    id: 8,
    src: '/project-images/Hydrant Tank Construction.jpg',
    alt: 'Hydrant Tank Construction',
  },
  {
    id: 9,
    src: '/project-images/hydrant tank stairway construction.jpg',
    alt: 'Hydrant Tank Stairway Construction',
  },
  {
    id: 10,
    src: '/project-images/product tank bridge construction.jpg',
    alt: 'Product Tank Bridge Construction',
  },
  {
    id: 11,
    src: '/project-images/product tank construction (2).jpg',
    alt: 'Product Tank Construction 1',
  },
  {
    id: 12,
    src: '/project-images/product tank construction 2.jpg',
    alt: 'Product Tank Construction 2',
  },
  {
    id: 13,
    src: '/project-images/product tank construction 3.jpg',
    alt: 'Product Tank Construction 3',
  },
  {
    id: 14,
    src: '/project-images/product tank construction.jpg',
    alt: 'Product Tank Construction 4',
  },
  {
    id: 15,
    src: '/project-images/product tank roof construction.jpg',
    alt: 'Product Tank Roof Construction',
  },
  {
    id: 16,
    src: '/project-images/product tank stairway construction.jpg',
    alt: 'Product Tank Stairway Construction',
  },
  {
    id: 17,
    src: '/project-images/product tank welding.jpg',
    alt: 'Product Tank Welding',
  },
]

export default function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState<CarouselImage>(images[0])
  const [isScrollable, setIsScrollable] = useState(false)
  const [lightbox, setLightbox] = useState<CarouselImage | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Navigation functions - Moved before useEffect
  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    let newIndex = currentIndex

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(images[newIndex])

    // Scroll thumbnail into view
    if (scrollContainerRef.current) {
      // Query selector might be fragile, consider alternative ways to get the element if issues arise
      const thumbnail = scrollContainerRef.current.querySelector(`[aria-label="View ${images[newIndex].alt}"]`) as HTMLElement
      if (thumbnail) {
        thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [selectedImage.id])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigateImage('next')
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev')
      } else if (e.key === 'Escape' && lightbox) {
        setLightbox(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightbox, navigateImage]) // navigateImage is now defined above

  // Check if thumbnail container is scrollable
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
    return () => window.removeEventListener('resize', checkScrollable)
  }, [])

  // Scroll thumbnail container
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-6"
      >
        {/* Main image display with navigation */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Image overlay with controls */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <motion.button
                  onClick={() => setLightbox(selectedImage)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/80 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="View full image"
                >
                  <ZoomIn className="w-5 h-5 text-gray-800" />
                </motion.button>
              </div>

              {/* Navigation arrows */}
              <motion.button
                onClick={() => navigateImage('prev')}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </motion.button>
              <motion.button
                onClick={() => navigateImage('next')}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image counter */}
        <div className="flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            <span className="font-bold text-gray-700">{images.findIndex(img => img.id === selectedImage.id) + 1}</span>
            <span> / {images.length}</span>
          </p>
        </div>

        {/* Thumbnails section */}
        <div className="relative bg-white/50 backdrop-blur-sm p-3 rounded-lg shadow-md">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            {images.map((image) => (
              <motion.button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all duration-200 ease-in-out ${
                  selectedImage.id === image.id
                    ? 'ring-2 ring-niketolad shadow-md'
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
          {isScrollable && (
            <>
              <motion.button
                onClick={() => scroll('left')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md z-10"
                aria-label="Scroll thumbnails left"
              >
                <ChevronLeft className="w-4 h-4 text-gray-800" />
              </motion.button>
              <motion.button
                onClick={() => scroll('right')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md z-10"
                aria-label="Scroll thumbnails right"
              >
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </motion.button>
            </>
          )}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-auto h-full max-h-[80vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 80vw"
                  className="object-contain"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}