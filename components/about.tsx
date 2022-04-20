import React from 'react'
import Image from 'next/image'
import profile from '../public/profile.jpg'

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-3xl font-bold text-gray-50 lg:text-5xl">
            Hey, I am{' '}
            <span className="bg-gradient-to-br from-cyan-700 to-emerald-500 bg-clip-text text-transparent">
              Aryan
            </span>
          </h1>
          <div className="mt-6 text-gray-50">
            <p className="mb-4">
              Hey! My name is<strong> Aryan </strong>and I'm a
              <strong> Python </strong>and
              <strong> JavaScript </strong> developer with a passion for
              <strong> Machine Learning </strong>and
              <strong> Web 3.0</strong>.
            </p>
            <p className="mb-4">
              I'm currently a second year student at{' '}
              <a
                href="https://www.lpu.in/"
                target="_blank"
                className="cursor-pointer underline decoration-yellow-600 decoration-2 hover:decoration-emerald-700"
                rel="noopener noreferrer"
              >
                Lovely Professional University
              </a>{' '}
              pursuing a degree in{' '}
              <a
                href="https://www.lpu.in/programmes/engineering/b-tech-computer-science"
                target="_blank"
                className="cursor-pointer underline decoration-yellow-600 decoration-2 hover:decoration-emerald-700"
                rel="noopener noreferrer"
              >
                Computer Science &amp; Engineering
              </a>
              .
            </p>
            <p>
              I aspire toward a career that will allow me to channel my
              creativity through crafting beautiful software and engaging
              experiences.
            </p>
          </div>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full object-cover saturate-200"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default About
