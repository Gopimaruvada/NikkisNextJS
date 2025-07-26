import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import ButtonSecondary from '@/shared/Button/ButtonSecondary'
import { CheckIcon } from '@heroicons/react/24/solid'

export interface PricingItem {
  isPopular: boolean
  name: string
  pricing: string
  desc: string
  per: string
  features: string[]
}

const pricings: PricingItem[] = [
  {
    isPopular: false,
    name: 'Starter',
    pricing: '$5',
    per: '/mo',
    features: ['Automated Reporting', 'Faster Processing', 'Customizations'],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: true,
    name: 'Basic',
    pricing: '$15',
    per: '/mo',
    features: ['Everything in Starter', '100 Builds', 'Progress Reports', 'Premium Support'],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: false,
    name: 'Plus',
    pricing: '$25',
    per: '/mo',
    features: ['Everything in Basic', 'Unlimited Builds', 'Advanced Analytics', 'Company Evaluations'],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
]

export const metadata = {
  title: 'Subscription',
  description: 'Subscription page for products',
}

const PageSubcription = () => {
  const renderPricingItem = (pricing: PricingItem, index: number) => {
    return (
      <div
        key={index}
        className={`relative flex h-full flex-col overflow-hidden rounded-3xl border-2 px-6 py-8 ${
          pricing.isPopular ? 'border-primary-500' : 'border-neutral-100 dark:border-neutral-700'
        }`}
      >
        {pricing.isPopular && (
          <span className="absolute top-3 right-3 z-10 rounded-full bg-primary-500 px-3 py-1 text-xs tracking-widest text-white">
            POPULAR
          </span>
        )}
        <div className="mb-8">
          <h3 className="mb-2 block text-sm font-medium tracking-widest text-neutral-600 uppercase dark:text-neutral-300">
            {pricing.name}
          </h3>
          <h2 className="flex items-center text-5xl leading-none text-neutral-800 dark:text-neutral-200">
            <span>{pricing.pricing}</span>
            <span className="ml-1 text-lg font-normal text-neutral-500">{pricing.per}</span>
          </h2>
        </div>
        <nav className="mb-8 space-y-4">
          {pricing.features.map((item, index) => (
            <li className="flex items-center" key={index}>
              <span className="mr-4 inline-flex shrink-0 text-primary-600">
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
            </li>
          ))}
        </nav>
        <div className="mt-auto flex flex-col">
          {pricing.isPopular ? (
            <ButtonPrimary>Submit</ButtonPrimary>
          ) : (
            <ButtonSecondary>
              <span className="font-medium">Submit</span>
            </ButtonSecondary>
          )}
          <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">{pricing.desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container pb-24 lg:pb-32">
      <header className="mx-auto my-20 max-w-2xl text-center">
       
      </header>
      <section className="overflow-hidden text-sm text-neutral-600 md:text-base">
      <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-2">Grooming Services</h2>
      <p className="text-center text-gray-700 mb-6">
        Dogs Grooming Salon, Day Spa, Pet Meals, Doggy Day Care, Dog Boarding.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2">PUPPIES / KITTENS (0-3 M)</th>
              <th className="border px-4 py-2">Small Breeds Cats</th>
              <th className="border px-4 py-2">Medium Breeds</th>
              <th className="border px-4 py-2">Large Breeds</th>
              <th className="border px-4 py-2">GIANT BREEDS</th>
            </tr>
          </thead>
          <tbody>
            {/* Bath vs Spa Label */}
            <tr>
              <td className="border px-4 py-2"></td>
              <td></td>
              <td className="border px-4 py-2 font-bold" colSpan={4}>BATH vs SPA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Gentle Bath (Dryer, Eye & Ear cleaning)</td>
              <td className="border px-4 py-2">550</td>
              <td className="border px-4 py-2">650</td>
              <td className="border px-4 py-2">750</td>
              <td className="border px-4 py-2">899</td>
              <td className="border px-4 py-2">999</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Luxury Bath (Premium shampoo) / Tick & Flea Bath</td>
              <td className="border px-4 py-2">699</td>
              <td className="border px-4 py-2">799</td>
              <td className="border px-4 py-2">899</td>
              <td className="border px-4 py-2">999</td>
              <td className="border px-4 py-2">1099</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Body Clips (Haircut/Spa & Hygiene)</td>
              <td className="border px-4 py-2">750</td>
              <td className="border px-4 py-2">999</td>
              <td className="border px-4 py-2">999</td>
              <td className="border px-4 py-2">1199</td>
              <td className="border px-4 py-2">1299</td>
            </tr>

            {/* Haircut Section */}
            <tr>
              <td className="border px-4 py-2"></td>
              <td></td>
              <td className="border px-4 py-2 font-bold" colSpan={4}>HAIR CUT + ZERO CUT – Package</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Basic Grooming (Short Clip, Nail Clip, Gentle Bath, Dryer, Eye & Ear cleaning)
              </td>
              <td className="border px-4 py-2">1050</td>
              <td className="border px-4 py-2">1150</td>
              <td className="border px-4 py-2">1250</td>
              <td className="border px-4 py-2">1425</td>
              <td className="border px-4 py-2">1550</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Zero Cut / One Inch Cut</td>
              <td className="border px-4 py-2">800 / 1000</td>
              <td className="border px-4 py-2">1200 / 1400</td>
              <td className="border px-4 py-2">1350 / 1550</td>
              <td className="border px-4 py-2">1500 / 1750</td>
              <td className="border px-4 py-2">2000 / 2250</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Full Grooming (Gentle Bath, Dryer, Eye & Ear cleaning + Zero + Nail Clip)
              </td>
              <td className="border px-4 py-2">1350</td>
              <td className="border px-4 py-2">2000</td>
              <td className="border px-4 py-2">2200</td>
              <td className="border px-4 py-2">2500</td>
              <td className="border px-4 py-2">2999</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Hair Cut (Stylish)</td>
              <td className="border px-4 py-2">1200</td>
              <td className="border px-4 py-2">2500</td>
              <td className="border px-4 py-2">2800</td>
              <td className="border px-4 py-2">3500</td>
              <td className="border px-4 py-2">4000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">De-Matt + Bath, Nail Clip, Eye & Ear cleaning</td>
              <td className="border px-4 py-2">4500</td>
              <td className="border px-4 py-2">4500</td>
              <td className="border px-4 py-2">5000</td>
              <td className="border px-4 py-2">5500</td>
              <td className="border px-4 py-2">6500</td>
            </tr>

            {/* Add-On Services */}
            <tr>
              <td className="border px-4 py-2"></td>
              <td></td>
              <td className="border px-4 py-2 font-bold" colSpan={4}>Add-On Services</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Short Clip (Face & sanitary trim)</td>
              <td colSpan={5} className="border px-4 py-2">350</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Teeth Clean</td>
              <td colSpan={5} className="border px-4 py-2">200</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Nail Clip</td>
              <td className="border px-4 py-2">150</td>
              <td className="border px-4 py-2">150</td>
              <td className="border px-4 py-2">150</td>
              <td className="border px-4 py-2">175</td>
              <td className="border px-4 py-2">200</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Boot Cut</td>
              <td className="border px-4 py-2">150</td>
              <td className="border px-4 py-2">200</td>
              <td className="border px-4 py-2">200</td>
              <td className="border px-4 py-2">250</td>
              <td className="border px-4 py-2">350</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ear & Eye Cleaning</td>
              <td className="border px-4 py-2">150</td>
              <td className="border px-4 py-2">200</td>
              <td className="border px-4 py-2">200</td>
              <td className="border px-4 py-2">250</td>
              <td className="border px-4 py-2">350</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center font-bold text-lg">
        For Appointments Call: +91 9848204672
      </p>
    </div>
      </section>
    </div>
  )
}

export default PageSubcription
