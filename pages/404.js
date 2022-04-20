import Head from 'next/head'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="bg-slate-900 text-gray-50">
        <div className="container mx-auto flex h-[600px] flex-col items-center justify-center ">
          <h1 className="text-center text-4xl font-semibold">
            404 - Page Not Found
          </h1>
          <h2 className="p-8 pb-0 text-4xl">
            <Link href="/">
              <a className="cursor-pointer transition-colors hover:text-sky-500">
                <FiHome />
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </>
  )
}
