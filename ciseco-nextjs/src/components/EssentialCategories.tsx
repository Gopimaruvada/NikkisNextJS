'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logoImage from '@/images/dogfood.jpg'
import catImage from '@/images/catfood.png'
import pedigree from '@/images/pedigree.png'
import drolls from '@/images/drolls.png'
import healthCare from '@/images/healthcare.png'
import shampoo from '@/images/Shampoo.png'

const categories = [
  { label: 'Pedigree', image: pedigree, url: 'https://mybillbook.in/store/nikkispetworld' },
  { label: 'Dog Wet Food', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld?category=10c902a4-651a-4d8a-86d3-10804fc6f3e2&page_no=1' },
  { label: 'Cat Wet Food', image: catImage, url: 'https://mybillbook.in/store/nikkispetworld?category=036d7942-581e-4c72-88be-3cbbbc952601&page_no=1' },
  { label: 'Drolls', image: drolls, url: 'https://mybillbook.in/store/nikkispetworld?category=89e6add3-bd92-4542-91c0-95461f572c9a&page_no=1' },
  { label: 'Health care(Flea & Tick)', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld?category=c2681f8e-f0ae-4534-88fd-d7ddb263b30a&page_no=1' },
  { label: 'Health Care(Medicines)', image: healthCare, url: 'https://mybillbook.in/store/nikkispetworld?category=f8969e12-eb95-46ef-a39f-a46eeaaeb469&page_no=1' },
  { label: 'Health Care (Suppliments)', image: healthCare, url: 'https://mybillbook.in/store/nikkispetworld?category=6b8b851d-f028-4b87-babe-cec8cd538654&page_no=1' },
  { label: 'Royal Canin', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld?category=5eaac5da-0e5e-48da-88f6-863a782c1007&page_no=1' },
  { label: 'Shampoo & Conditioners', image: shampoo, url: 'https://mybillbook.in/store/nikkispetworld?category=a152ffc4-5f95-4c94-a00e-dbbf1e162497&page_no=1' },
]
//   { label: 'Toys', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld' },
//   { label: 'Fashion', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld' },
//   { label: 'Grooming essentials', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld' },
//   { label: 'Beds and mats', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld' },
//   { label: 'Collars & leash', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld' },
//   { label: 'Bowls and feeders', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld' },
//   { label: 'Pet tracker', image: logoImage, url: 'https://mybillbook.in/store/nikkispetworld' },
// ]

export default function EssentialCategories() {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null)

  return (
    <section className="container mx-auto my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Everyday essentials</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
        {categories.map((cat, id) => (
          <div
            key={id}
            className="flex flex-col items-center text-center group cursor-pointer"
            onClick={() => setIframeUrl(cat.url)}
          >
            <div className="mb-2 relative">
              <Image
                src={cat.image}
                alt={cat.label}
                width={96}
                height={96}
                unoptimized
                className="object-contain rounded-md"
              />
             
            </div>
            <p className="text-sm font-semibold">{cat.label}</p>
          </div>
        ))}
      </div>

      {/* Iframe Modal */}
      {iframeUrl && (
  <div className="fixed inset-0 bg-black bg-opacity-80 z-50">
   <button
      onClick={() => setIframeUrl(null)}
      className="absolute top-4 right-6 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg hover:bg-red-500 hover:text-white transition-all z-50"
      aria-label="Close iframe"
    >
      ✕
    </button>
    <iframe
      src={iframeUrl}
      className="w-full h-full border-none"
      title="External Content"
    />
  </div>
)}
    </section>
  )
}

