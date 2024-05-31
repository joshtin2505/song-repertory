import React from 'react'
import { english, español } from '@/mocks/Home.json'
function Features() {
  const { features } = english.featuresSection
  return (
    <section
      id="features"
      className="bg-gradient-to-br to-neutral-300 from-white dark:bg-gradient-to-b  dark:to-neutral-900 dark:from-black"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white">
            {english.featuresSection.title}
          </h2>
          <p className="text-neutral-500 sm:text-xl dark:text-neutral-400">
            {english.featuresSection.description}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features &&
            features.length > 0 &&
            features.map((feature) => Feature(feature))}
        </div>
      </div>
    </section>
  )
}

function Feature({
  title,
  description,
  icon
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-300 lg:h-12 lg:w-12 dark:bg-neutral-700">
        <div
          className="w-6 h-6 dark:text-white"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-neutral-500 dark:text-neutral-400">{description}</p>
    </div>
  )
}

export default Features
