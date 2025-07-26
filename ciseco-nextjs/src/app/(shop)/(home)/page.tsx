import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import { Divider } from '@/components/Divider'
import EssentialCategories from '@/components/EssentialCategories'
import Heading from '@/components/Heading/Heading'
import SectionClientSay from '@/components/SectionClientSay'
import SectionCollectionSlider from '@/components/SectionCollectionSlider'
import SectionCollectionSlider2 from '@/components/SectionCollectionSlider2'
import SectionGridFeatureItems from '@/components/SectionGridFeatureItems'
import SectionGridMoreExplore from '@/components/SectionGridMoreExplore/SectionGridMoreExplore'
import SectionHero2 from '@/components/SectionHero/SectionHero2'
import SectionHowItWork from '@/components/SectionHowItWork/SectionHowItWork'
import SectionPromo1 from '@/components/SectionPromo1'
import SectionPromo2 from '@/components/SectionPromo2'
import SectionSliderLargeProduct from '@/components/SectionSliderLargeProduct'
import SectionSliderProductCard from '@/components/SectionSliderProductCard'
import SectionMagazine5 from '@/components/blog/SectionMagazine5'
import { getBlogPosts, getCollections, getGroupCollections, getProducts } from '@/data/data'
import { Button } from '@/shared/Button/Button'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Ciseco is a modern and elegant template for Next.js, Tailwind CSS, and TypeScript. It is designed to be simple and easy to use, with a focus on performance and accessibility.',
  keywords: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Ciseco', 'Headless UI', 'Fashion', 'E-commerce'],
}

async function PageHome() {
  const allCollections = await getCollections()
  const departmentCollections = allCollections.slice(11, 15)
  const featuredCollections = allCollections.slice(7, 11)
  const groupCollections = await getGroupCollections()
  const products = await getProducts()
  const carouselProducts1 = products.slice(0, 5)
  const carouselProducts2 = products.slice(3, 10)
  const carouselProducts3 = products.slice(1, 5)
  const blogPosts = await getBlogPosts()

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero2 />
      <SectionCollectionSlider className="mt-24 lg:mt-32" collections={featuredCollections} />
<EssentialCategories/>
      <div className="relative container my-24 flex flex-col gap-y-24 lg:my-32 lg:gap-y-32">
       
        <div className="pb-16">
          <SectionHowItWork />
        </div>
        <SectionCollectionSlider2 collections={departmentCollections} />
        <Divider />
        <div>
          <Heading headingDim="From the Ciseco blog">The latest news</Heading>
          <SectionMagazine5 posts={blogPosts} />
          <div className="mt-20 flex justify-center">
            <Button href="/blog" outline>
              Show all blog articles
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

     
      </div>
    </div>
  )
}

export default PageHome
