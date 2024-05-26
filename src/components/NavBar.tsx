'use client'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'
import { Logo, LogoDark } from './Logo'

export function NavBar() {
  return (
    <header className="w-full bg-white border-gray-200 dark:bg-black/50 backdrop-blur backdrop-saturate-150 border-b border-white/10">
      <nav className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Logo className="dark:hidden" width={40} height={40} />
          <LogoDark className="hidden dark:block" width={40} height={40} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Song Repertory
          </span>
        </Link>

        <ul
          id="navbar-default"
          className="hidden lg:flex w-auto font-medium flex-col p-4 md:p-0 mt-4 border border-neutral-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-neutral-700"
        >
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-white rounded md:text-neutral-700 md:p-0 dark:text-white md:dark:text-neutral-500"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 dark:text-white md:dark:hover:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 dark:text-white md:dark:hover:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 dark:text-white md:dark:hover:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 dark:text-white md:dark:hover:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex gap-3 mr-3">
          <button
            type="button"
            className="transition dark:text-white dark:hover:text-white/50 focus:ring-4 focus:ring-neutral-300 font-medium rounded px-4 py-1 text-neutral-950 focus:outline-none dark:focus:ring-neutral-800"
          >
            Login
          </button>
          <button
            type="button"
            className="transition text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded px-4 py-1 dark:bg-white/90 dark:text-neutral-950 dark:hover:bg-white/50 focus:outline-none dark:focus:ring-neutral-800"
          >
            Sign In
          </button>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg lg:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
