import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop
} from '@/lib/motion'

function Hero() {
  return (
    <section className="heroContainer magicpattern flex ">
      <motion.div
        initial="hidden"
        animate="visible"
        className=" grid place-items-center lg:grid-cols-12 max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-10"
      >
        <article className="mr-auto place-self-center lg:col-span-7">
          <motion.span
            variants={slideInFromTop}
            className="w-full text-base font-thin whitespace-nowrap border rounded-full px-2 py-1 dark:text-white dark:border-white/50 bg-neutral-400/30"
          >
            Developing...
          </motion.span>
          <motion.h1
            variants={slideInFromLeft(0.3)}
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-balance"
          >
            Repertoire manager for musicians.
            {/* Repertoire management for musicians */}
          </motion.h1>
          <motion.p
            variants={slideInFromLeft(0.5)}
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-balance"
          >
            Manage and organize your songs with details such as notes and short
            audios. Ideal for bands and solo musicians.
          </motion.p>
          <motion.footer variants={slideInFromBottom}>
            <Link
              href="/login"
              className="transition-colors inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white dark:text-black dark:bg-white rounded bg-black hover:bg-black/80 dark:hover:bg-white/50 focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-900"
            >
              Get started
              <FaArrowRight className="w-5 h-5 ml-2 " />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black/90 border border-neutral-300 rounded hover:bg-neutral-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-900"
            >
              Pricing
            </Link>
          </motion.footer>
        </article>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
        >
          <Image
            className=""
            src="/images/degr2.png"
            alt="mockup"
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
