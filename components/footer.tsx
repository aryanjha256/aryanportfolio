import React from 'react'

const Footer = () => {
  return (
    <div className="lg:mt-18 bg-slate-900 py-6 px-4 text-gray-50 sm:py-12">
      <div className="mx-auto max-w-4xl ">
        <div className="dark:border-white-300 mb-2 border-t-2 border-gray-500 pb-8"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p>Design &amp; Built by Aryan Kumar</p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="https://twitter.com/aryanjha256"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/aryanjha256"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aryanjha256"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
