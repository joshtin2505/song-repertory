import Image from 'next/image'
import { english } from '@/mocks/Home.json'
import { FaArrowRight } from 'react-icons/fa6'
function CTA() {
  const { CTA } = english
  return (
    <section className="bg-white dark:bg-gradient-to-b from-black to-neutral-950 min-h-screen flex justify-center">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image
          width={1000}
          height={1000}
          className="w-full dark:hidden grayscale shadow-2xl"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <Image
          width={1000}
          height={1000}
          className="w-full hidden dark:block grayscale shadow-2xl shadow-neutral-700"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white">
            {CTA.title}
          </h2>
          <p className="mb-6 font-light text-neutral-500 md:text-lg dark:text-neutral-400">
            {CTA.description}
          </p>
          <a
            href="/register"
            className="inline-flex items-center transition-colors text-white bg-neutral-700 dark:bg-white dark:hover:bg-white/70 dark:text-black hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-neutral-900"
          >
            {CTA.button}
            <FaArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
