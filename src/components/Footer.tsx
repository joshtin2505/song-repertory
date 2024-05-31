import React from 'react'
import { Logo, LogoDark } from './Logo'
import { english } from '@/mocks/Home.json'

function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 border-gray-200 dark:bg-black/50 backdrop-blur backdrop-saturate-150 border-t dark:border-white/30">
      <div className="mx-auto max-w-screen-xl text-center flex items-center flex-col">
        <header className="flex items-center gap-2">
          <a
            href="#"
            className=" flex gap-2 justify-center items-center text-2xl font-semibold text-neutral-900 dark:text-white"
          >
            <Logo className="dark:hidden" width={40} height={40} />
            <LogoDark className="hidden dark:block" width={40} height={40} />
            Song Repertory
          </a>
          <hr className="rotate-90 w-5" />
          <p className="my-6 max-w-[600px] text-start text-neutral-500 dark:text-neutral-400">
            {english.featuresSection.description}
          </p>
        </header>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-neutral-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
          © 2021-2022{' '}
          <a href="#" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
