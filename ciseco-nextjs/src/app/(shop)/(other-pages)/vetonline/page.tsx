import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import ButtonSecondary from '@/shared/Button/ButtonSecondary'
import { CheckIcon } from '@heroicons/react/24/solid'
import doctor from '@/images/vetOnline.png'
export interface PricingItem {
  isPopular: boolean
  name: string
  pricing: string
  desc: string
  per: string
  features: string[]
}

export const metadata = {
  title: 'vetonline',
  description: 'Subscription page for products',
}

const VetOnline = () => {
  return (
    <div className="container pb-24 lg:pb-32">
      <header className="mx-auto my-20 max-w-2xl text-center">
        {/* You can add a heading here if needed */}
      </header>

      <section className="overflow-hidden text-sm text-neutral-600 md:text-base">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-2">
            24x7 Online Vet Consultation & Home Visits
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Dogs Grooming Salon, Day Spa, Pet Meals, Doggy Day Care, Dog Boarding.
          </p>

          {/* 👉 Grid Layout Starts Here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={doctor.src}
                alt="Vet care"
                className="rounded-lg w-full object-cover h-50 md:h-150"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Why Choose Our Online Vet Services?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>24/7 access to certified veterinarians</li>
                <li>Home visit for health checks & vaccinations</li>
                <li>Grooming & Spa services at your doorstep</li>
                <li>Specialized diet plans and pet meal delivery</li>
                <li>Safe and loving doggy daycare & boarding</li>
              </ul>
             
            </div>
          </div>

          {/* Call-to-action */}
          <p className="mt-10 text-center font-bold text-lg">
            For Appointments Call: <a href="tel:+919848204672" className="text-blue-600">+91 9848204672</a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default VetOnline
