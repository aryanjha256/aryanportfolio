import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 bg-slate-900 text-gray-50 ">
      <div className="container mx-auto flex items-center justify-center border-b-2 border-gray-500 py-4 px-4 md:justify-between md:py-6 lg:max-w-4xl">
        <Link href="/">
          <a
            className={
              'font-medium uppercase tracking-wider transition-colors hover:text-sky-500'
            }
          >
            Aryan
          </a>
        </Link>
        <div className="hidden space-x-4 md:block">
          <Link href="#about">
            <a
              className={
                'font-medium uppercase tracking-wider transition-colors hover:text-sky-500'
              }
            >
              About
            </a>
          </Link>
          <Link href="#projects">
            <a
              className={
                'font-medium uppercase tracking-wider transition-colors hover:text-sky-500'
              }
            >
              Projects
            </a>
          </Link>
          <Link href="#contact">
            <a
              className={
                'font-medium uppercase tracking-wider transition-colors hover:text-sky-500'
              }
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
