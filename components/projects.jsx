import data from '../work.json'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Image from 'next/image'

const projects = data.projects

const Projects = ({}) => {
  return (
    <div className="mt-4" id="projects">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Projects</h2>
      <div className="mt-6 flex w-full flex-wrap justify-around py-2 lg:max-w-4xl">
        {projects.map((projectdata, index) => {
          return (
            <div
              key={index}
              className="mb-4 border-2 border-gray-600 md:mb-5 lg:mb-6"
            >
              <div className="h-full max-w-[400px] p-1">
                <div>
                  <Image
                    src={projectdata.imgurl}
                    width={400}
                    height={200}
                    className="w-96 cursor-pointer object-cover object-center transition hover:scale-110"
                  />
                </div>
                <div className="flex flex-col  justify-between">
                  <div>
                    <h2 className="text-center text-2xl font-semibold text-slate-300">
                      {projectdata.name}
                    </h2>
                    <p className="my-3 text-center ">
                      {projectdata.descripton}
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-4 pb-3">
                    <a
                      href={projectdata.sourcecodeurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 transition-colors hover:text-yellow-500"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={projectdata.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 transition-colors hover:text-yellow-500"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
