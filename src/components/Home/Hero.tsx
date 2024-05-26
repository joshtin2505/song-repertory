import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function Hero() {
  return (
    <section className="h-[88vh] flex ">
      <div className="grid place-items-center lg:grid-cols-12 max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-10">
        <article className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-balance">
            Repertoire manager for musicians.
            {/* Repertoire management for musicians */}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-balance">
            Manage and organize your songs with details such as notes and short
            audios. Ideal for bands and solo musicians.
          </p>
          <Link
            href="#"
            className="transition-colors inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white dark:text-black dark:bg-white rounded bg-black hover:bg-black/80 dark:hover:bg-white/50 focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-900"
          >
            Get started
            <FaArrowRight className="w-5 h-5 ml-2 " />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black/90 border border-neutral-300 rounded hover:bg-neutral-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-900"
          >
            Pricing
          </Link>
        </article>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            className=""
            src="/images/degr2.png"
            alt="mockup"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
