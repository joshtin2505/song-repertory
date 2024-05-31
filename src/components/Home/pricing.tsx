import React from 'react'
import { english } from '@/mocks/Home.json'
import type { Plan as PlanType } from '../../../types.d'
import { FaCheck, FaXmark } from 'react-icons/fa6'

function Pricing() {
  const { pricing } = english

  return (
    <section
      className="bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black"
      id="pricing"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold first-letter:capitalize text-neutral-900 dark:text-white">
            {pricing.title}
          </h2>
          <p className="mb-5 font-light text-neutral-500 sm:text-xl dark:text-neutral-400">
            {pricing.description}
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricing.plans.map((plan) => {
            return <Plan key={plan.name} plan={plan} />
          })}
        </div>
      </div>
    </section>
  )
}

function Plan({ plan }: { plan: PlanType }) {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-neutral-900 bg-white rounded-lg border border-neutral-100 shadow dark:border-neutral-600 xl:p-8 dark:bg-neutral-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold first-letter:capitalize">
        {plan.name}
      </h3>
      <p className="font-light text-neutral-500 sm:text-lg dark:text-neutral-400">
        {plan.description}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">
          {plan.price ? `$${plan.price}` : 'Free'}
        </span>
        <span className="text-neutral-500 dark:text-neutral-400">
          {plan.price ? '/month' : '/forever'}
        </span>
      </div>
      <ul role="list" className="mb-8 flex flex-col gap-y-4 text-left">
        {plan.features.map((feature) => {
          return (
            <li key={feature.feature} className="flex gap-x-3 items-center ">
              <FaCheck
                className={
                  'flex-shrink-0 w-4 h-4 fill-green-500 dark:fill-green-400' +
                  (feature.thereIs ? '' : ' hidden')
                }
              />
              <FaXmark
                className={
                  'ml-0 w-4 h-4 fill-red-500 dark:fill-red-400' +
                  (feature.thereIs ? ' hidden' : '')
                }
              />
              <span className={!feature.thereIs ? ' line-through' : ''}>
                {feature.feature}
              </span>
            </li>
          )
        })}
      </ul>
      <a
        href="#"
        className="text-white bg-neutral-600 hover:bg-neutral-700 focus:ring-4 focus:ring-neutral-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-neutral-900"
      >
        Get started
      </a>
    </div>
  )
}

export default Pricing
