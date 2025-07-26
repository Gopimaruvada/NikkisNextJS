'use client'

import backgroundLineSvg from '@/images/Moon.svg'
import heroImage1 from '@/images/nikkis.jpg'
import heroImage2 from '@/images/nikki2.jpeg'
import heroImage3 from '@/images/nikki3.jpeg'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useInterval } from 'react-use'

// DEMO DATA
const data = [
  {
    id: 1,
    imageUrl: heroImage1.src,
    heading: 'The best pet store in hyderabad',
    subHeading: 'In this season, find the best 🔥',
    btnText: 'Explore shop now',
    btnHref: 'https://mybillbook.in/store/nikkispetworld',
  },
  {
    id: 2,
    imageUrl: heroImage2.src,
    heading: 'Best pet store in India with top brands of pet supplies.',
    subHeading: 'In this season, find the best 🔥',
    btnText: 'Explore shop now',
    btnHref: 'https://mybillbook.in/store/nikkispetworld',
  },
  {
    id: 3,
    imageUrl: heroImage3.src,
    heading: 'Exclusive collection <br /> for everyone',
    subHeading: 'In this season, find the best 🔥',
    btnText: 'Explore shop now',
    btnHref: 'https://mybillbook.in/store/nikkispetworld',
  },
]

interface Props {
  className?: string
}

let TIME_OUT: NodeJS.Timeout | null = null

const SectionHero2: FC<Props> = ({ className = '' }) => {
  const [isSlided, setIsSlided] = useState(false)
  const [indexActive, setIndexActive] = useState(0)
  const [isRunning, toggleIsRunning] = useState(true)
  const [iframeUrl, setIframeUrl] = useState<string | null>(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClickNext(),
    onSwipedRight: () => handleClickPrev(),
    trackMouse: true,
  })

  useEffect(() => {
    if (isSlided || !indexActive) return
    setIsSlided(true)
  }, [indexActive, isSlided])

  useInterval(() => handleAutoNext(), isRunning ? 5000 : null)

  const handleAutoNext = () =>
    setIndexActive((s) => (s >= data.length - 1 ? 0 : s + 1))

  const handleClickNext = () => {
    setIndexActive((s) => (s >= data.length - 1 ? 0 : s + 1))
    afterClick()
  }

  const handleClickPrev = () => {
    setIndexActive((s) => (s === 0 ? data.length - 1 : s - 1))
    afterClick()
  }

  const afterClick = () => {
    toggleIsRunning(false)
    if (TIME_OUT) clearTimeout(TIME_OUT)
    TIME_OUT = setTimeout(() => toggleIsRunning(true), 1000)
  }

  const renderItem = (index: number) => {
    const item = data[index]
    const isActive = indexActive === index

    return (
      <div
        key={index}
        className={clsx(
          'fade--animation relative flex flex-col gap-10 overflow-hidden py-14 pl-container sm:py-20 lg:flex-row lg:items-center',
          isActive ? 'flex' : 'hidden'
        )}
      >
        <div className="absolute inset-0 -z-10 bg-[#E3FFE6]">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute h-full w-full object-contain"
            src={backgroundLineSvg}
            alt="hero"
          />
        </div>

        <div className="absolute start-1/2 bottom-4 flex -translate-x-1/2 justify-center rtl:translate-x-1/2">
          {data.map((_, idx) => {
            const activeDot = indexActive === idx
            return (
              <div
                key={idx}
                onClick={() => {
                  setIndexActive(idx)
                  afterClick()
                }}
                className="relative cursor-pointer px-1 py-1.5"
              >
                <div className="relative h-1 w-20 rounded-md bg-white shadow-xs">
                  {activeDot && (
                    <div className="absolute inset-0 rounded-md bg-neutral-900 fade--animation__dot" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative flex max-w-5xl flex-1/2 flex-col items-start fade--animation__left">
          <span className="block text-base font-medium text-neutral-700 fade--animation__subheading md:text-xl">
            {item.subHeading}
          </span>
          <h2
            className="mt-5 text-4xl font-semibold text-neutral-900 fade--animation__heading sm:mt-6 md:text-5xl xl:text-6xl xl:leading-[1.2] 2xl:text-7xl"
            dangerouslySetInnerHTML={{ __html: item.heading }}
          />

          <ButtonPrimary
            className="mt-10 fade--animation__button sm:mt-20"
            onClick={() => setIframeUrl(item.btnHref)}
          >
            <span className="me-2">{item.btnText}</span>
            <HugeiconsIcon icon={Search01Icon} size={20} />
          </ButtonPrimary>
        </div>

        <div className="relative -z-10 flex-1/2 lg:pr-10">
          <Image
            sizes="(max-width: 768px) 100vw, 60vw"
            className="h-auto w-full max-w-[40rem] object-contain fade--animation__image select-none"
            src={item.imageUrl}
            alt={item.heading}
            width={790}
            height={790}
            priority
          />
        </div>
      </div>
    )
  }

  return (
    <div className={clsx('relative z-[1]', className)} {...handlers}>
      {data.map((_, idx) => renderItem(idx))}

      <button
        type="button"
        className="absolute inset-y-px end-0 z-10 hidden items-center justify-center px-10 text-neutral-700 lg:flex"
        onClick={handleClickNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.6}
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute inset-y-px start-0 z-10 hidden items-center justify-center px-10 text-neutral-700 lg:flex"
        onClick={handleClickPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.6}
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Iframe Modal Overlay */}
      {iframeUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative h-[90vh] w-[90vw] bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 end-2 text-xl font-bold p-2 z-40"
              onClick={() => setIframeUrl(null)}
            >
              ✕
            </button>
            <iframe
              src={iframeUrl}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default SectionHero2
