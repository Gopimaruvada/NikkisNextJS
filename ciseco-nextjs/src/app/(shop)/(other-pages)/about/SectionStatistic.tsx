import Heading from '@/components/Heading/Heading'
import { FC } from 'react'

export interface Statistic {
  id: string
  heading: string
  subHeading: string
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: '1',
    heading: 'Nikkis Pet world',
    subHeading: 'Expert dog training in Hyderabad',
  },
  {
    id: '2',
    heading: 'Best pets available in Hyderabad',
    subHeading: 'dog care tips - best dog beds 2025 best - dog groomers in Hyderabad',
  },
  {
    id: '3',
    heading: 'Dog dental care - vaccinations for dogs',
    subHeading: 'Dog dental care - vaccinations for dogs',
  },
  {
    id: '4',
    heading: 'We are best pet shop in hyderabad',
    subHeading: 'Hyderabad•pet shop•pets',
  },
  {
    id: '5',
    heading: 'Best dog groomers in  hyderabad',
    subHeading: 'Hyderabad•pet shop•pets',
  },
  {
    id: '5',
    heading: 'Eco-friendly dog products',
    subHeading: 'Hyderabad•pet shop•pets',
  },
]

export interface SectionStatisticProps {
  className?: string
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = '' }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        description=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        🚀 Fast Facts
      </Heading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="rounded-2xl bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-800">
            <h3 className="text-1xl leading-none font-semibold text-neutral-900 md:text-2xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="mt-10 block max-w-sm text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionStatistic
