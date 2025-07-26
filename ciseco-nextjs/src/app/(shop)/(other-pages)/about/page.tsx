import BgGlassmorphism from '@/components/BgGlassmorphism/BgGlassmorphism'
import { Divider } from '@/components/Divider'
import SectionClientSay from '@/components/SectionClientSay'
import SectionPromo1 from '@/components/SectionPromo1'
import rightImg from '@/images/logo-name.jpeg'
import { Metadata } from 'next'
import SectionFounder from './SectionFounder'
import SectionHero from './SectionHero'
import SectionStatistic from './SectionStatistic'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Us. We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.',
}

const PageAbout = () => {
  return (
    <div>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      <div className="container flex flex-col gap-y-16 py-16 lg:gap-y-28 lg:py-28 lg:pt-20">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          subHeading="Established in 2020, Nikki’s Petworld in Miyapur, Kukatpally Hyderabad has grown into one of the city’s most trusted names in the pet care industry. As a top player in the category of Pet Shops, Nikki’s Petworld serves customers from both local neighborhoods and across Hyderabad, offering a comprehensive range of pet products and services.

          Over the years, the business has built a strong reputation and a loyal customer base, driven by its belief that customer satisfaction is just as important as product quality and service excellence. The team at Nikki’s Petworld is made up of passionate individuals who are committed to their roles and strive to achieve the brand’s broader vision.
          
          making it easy to find and conveniently accessible by various modes of transportation.
          
          With 50+ positive reviews on Justdial, Nikki’s Petworld is recognized for its excellence in:
          
          Pet Shops
          
          Pet Accessory Dealers
          
          Dog Product Retailers
          
          Looking ahead, Nikki’s Petworld aims to expand its product and service offerings, continuing to meet the growing needs of Hyderabad’s vibrant pet-loving community.."
        />
        {/* <SectionFounder /> */}
        <Divider />
        <SectionStatistic />
     
      </div>
    </div>
  )
}

export default PageAbout
