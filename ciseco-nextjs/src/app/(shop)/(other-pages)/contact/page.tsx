import { Divider } from '@/components/Divider'
import SectionPromo1 from '@/components/SectionPromo1'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import SocialsList from '@/shared/SocialsList/SocialsList'
import { Field, FieldGroup, Fieldset, Label } from '@/shared/fieldset'
import { Input } from '@/shared/input'
import { Textarea } from '@/shared/textarea'
import { Metadata } from 'next'
import Form from 'next/form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for any inquiries or support',
}

const info = [
  {
    title: '🗺 ADDRESS',
    desc: 'Nikkis Pet World Kukatpally',
    Info:'Nikkis Pet World, Geetanjali Towers, 1st floor KPHB 6th Phase Rd, OPP Forum Mall, Kukatpally, Hyderabad, Telangana 500085'
  },

  {
    
    desc: 'Nikkis Pet World Miyapur',
    Info:'Bollaram Road, Miyapur, Kalapuram Basti, Hyderabad, Telangana 500049'
  },
  {
    
    desc: 'Nikkis Pet World Madeenaguda',
    Info:'Nikkis Pet World, HIG 180, 1st floor, Manjeera Pipeline Rd, Ushodaya Enclave, Madeenaguda, Miyapur, Hyderabad, Telangana 500049'
  },
  {
    title: '💌 EMAIL',
    desc: 'nikkispetworld@gmail.com',
  },
  {
    title: '☎ PHONE',
    desc: '+91 9381385345 +91 9848204672',
  },
]

const info1= [
  {
    title: '🗺 ADDRESS',
    desc: 'Nikkis Pet World Kondapur',
    Info:'Nikkis Pet World, Plot No.101/A, S.No.78, 1st Floor, Avis Arcade, Park Avenue Colony, Raja Rajeshwara Nagar, Hyderabad, Telangana 500084'
  },

  {
    
    desc: 'Nikkis Pet World Nijampet',
    Info:'Nikkis Pet World, H. No: 3-132, 1st floor, BACHUPALLY MANDAL, weaker section, Nizampet, Hyderabad, Telangana 500090'
  },

]

const PageContact = async () => {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const formObject = Object.fromEntries(formData.entries())
    console.log(formObject)
    // Here you can implement the logic to handle the form submission, e.g., send an email or save to a database
  }

  return (
    <div className="pt-12 pb-16 sm:py-16 lg:py-24">
      <div className="container mx-auto flex max-w-6xl flex-col gap-y-16 lg:gap-y-28">
        <div className="grid shrink-0 grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl leading-[1.15] font-semibold tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-100">
              Contact
            </h1>
            <div className="mt-10 flex max-w-sm flex-col gap-y-8 sm:mt-14">
              {info.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">{item.title}</p>
                  <span className="mt-4 block text-neutral-700 dark:text-neutral-400">{item.desc}</span>
                  <span className="mt-4 block text-neutral-500 dark:text-neutral-400">{item.Info}</span>
                </div>
              ))}
             
            </div>
          </div>

          <div>
          <div className="mt-10 flex max-w-sm flex-col gap-y-8 sm:mt-14">
              {info1.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">{item.title}</p>
                  <span className="mt-4 block text-neutral-700 dark:text-neutral-400">{item.desc}</span>
                  <span className="mt-4 block text-neutral-500 dark:text-neutral-400">{item.Info}</span>
                </div>
              ))}
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">🌏 SOCIALS</p>
                <SocialsList className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContact
