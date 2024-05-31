'use client'
import { FaQuoteLeft } from 'react-icons/fa6'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '../ui/carousel'
import { english } from '@/mocks/Home.json'
import type { Testimonial as TestimonialType } from '../../../types.d'
import { useEffect, useState } from 'react'

function Testimonials() {
  const [apiCarousel, setApiCarousel] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const { testimonials } = english

  useEffect(() => {
    if (!apiCarousel) {
      return
    }

    setCount(apiCarousel.scrollSnapList().length)
    setCurrent(apiCarousel.selectedScrollSnap() + 1)

    apiCarousel.on('select', () => {
      setCurrent(apiCarousel.selectedScrollSnap() + 1)
    })
  }, [apiCarousel])

  return (
    <section
      className="px-44 bg-neutral-50 dark:bg-neutral-950 h-screen flex flex-col justify-center items-center"
      id="testimonials"
    >
      <h2 className="mb-8 text-4xl font-extrabold text-center text-neutral-95 dark:text-white">
        Testimonials
      </h2>
      <Carousel
        setApi={setApiCarousel}
        opts={{
          align: 'start'
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => {
            return (
              <CarouselItem key={testimonial.name}>
                <CarouselContent>
                  <Testimony testimonial={testimonial} />
                </CarouselContent>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </section>
  )
}

function Testimony({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <div className=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure className="max-w-screen-md mx-auto">
        <FaQuoteLeft className="w-6 h-6 text-primary-500 dark:text-primary-400" />
        <blockquote>
          <p className="text-2xl font-medium text-gray-900 dark:text-white">
            {testimonial.comment}
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src={testimonial.img}
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">
              {testimonial.name}
            </div>
            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
              {testimonial.position}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
export default Testimonials
