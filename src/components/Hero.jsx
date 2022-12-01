import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/cover.png'

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:-bottom-8 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Making sense of your event-driven architecture.
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Learn how to leverage standards and tools to tame your EDA beast.
            </p>
            <h3 className="mt-8 text-base font-medium tracking-tight text-slate-500">
              Get notified when the book is ready and <strong>receive a discount</strong>{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <form method='POST' data-netlify="true">
              <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
                <div className="relative sm:static sm:flex-auto">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    required
                    aria-label="Email address"
                    placeholder="Email address"
                    className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-black placeholder:text-black/70 focus:outline-none sm:py-3"
                  />
                  <div className="absolute inset-0 rounded-md border border-blue-500/20 peer-focus:border-blue-300 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
                </div>
                <Button
                  type="submit"
                  color="blue"
                  className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                >
                  Get a discount
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
