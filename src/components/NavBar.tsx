'use client'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'
import { Logo, LogoDark } from './Logo'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/lib/motion'
export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      className="w-full bg-white border-gray-200 dark:bg-black/50 backdrop-blur backdrop-saturate-150 border-b dark:border-white/10"
    >
      <motion.nav className="flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link
          href="/"
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
          className={
            ' lg:flex w-auto font-medium flex-col p-4 lg:p-0 mt-4 border border-neutral-100 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:border-neutral-700 ' +
            (isMenuOpen
              ? 'max-lg:flex max-lg:absolute max-lg:top-16 max-lg:right-4 max-lg:bg-black/90 max-lg:backdrop-blur-md max-lg:backdrop-saturate-150'
              : 'max-lg:hidden')
          }
        >
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-white rounded lg:text-neutral-700 lg:p-0 dark:text-white lg:dark:text-neutral-500"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-neutral-700 lg:p-0 dark:text-white lg:dark:hover:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white lg:dark:hover:bg-transparent"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-neutral-700 lg:p-0 dark:text-white lg:dark:hover:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white lg:dark:hover:bg-transparent"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#support"
              className="block py-2 px-3 text-neutral-900 rounded hover:bg-neutral-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-neutral-700 lg:p-0 dark:text-white lg:dark:hover:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white lg:dark:hover:bg-transparent"
            >
              Contact Support
            </Link>
          </li>
          <hr className="hidden max-sm:block border-t-white/30" />
          <div className="flex flex-col py-2 gap-2 sm:hidden">
            <Link
              href="/login"
              className="sm:hidden transition dark:text-white dark:hover:text-white/50 focus:ring-4 focus:ring-neutral-300 font-medium rounded px-4 py-1 text-neutral-950 focus:outline-none dark:focus:ring-neutral-800"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="sm:hidden transition text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded px-4 py-1 dark:bg-white/90 dark:text-neutral-950 dark:hover:bg-white/50 focus:outline-none dark:focus:ring-neutral-800"
            >
              Sign In
            </Link>
          </div>
        </ul>
        <div className="flex gap-3 mr-3">
          <Link
            href="/register"
            className="max-sm:hidden transition dark:text-white dark:hover:text-white/50 focus:ring-4 focus:ring-neutral-300 font-medium rounded px-4 py-1 text-neutral-950 focus:outline-none dark:focus:ring-neutral-800"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="max-sm:hidden transition text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded px-4 py-1 dark:bg-white/90 dark:text-neutral-950 dark:hover:bg-white/50 focus:outline-none dark:focus:ring-neutral-800"
          >
            Sign In
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      </motion.nav>
    </motion.header>
  )
}

export default NavBar
