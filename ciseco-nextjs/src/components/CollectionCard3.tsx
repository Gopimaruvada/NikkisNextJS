'use client'

import { TCollection } from '@/data/data'
import { Button } from '@/shared/Button/Button'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  className?: string
  collection: TCollection
}

const CollectionCard3: FC<Props> = ({ className = '', collection }) => {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!collection.handle) return null

  const handleOpenIframe = () => {
    setIframeUrl('https://mybillbook.in/store/nikkispetworld')
  }

  const iframeModal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full h-full bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-2 end-2 text-xl font-bold p-2 z-40"
          onClick={() => setIframeUrl(null)}
        >
          ✕
        </button>
        <iframe
          src={iframeUrl ?? ''}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          title="Store Iframe"
        />
      </div>
    </div>
  )

  return (
    <>
      <div className={`group/CollectionCard3 relative block ${className}`}>
      <div
        className={`aspect-w-16 relative h-0 w-full overflow-hidden rounded-2xl aspect-h-11 sm:aspect-h-9 ${collection.color}`}
      >
           <div>
          <div className="absolute inset-5 sm:inset-8">
            {collection.image && (
              <div className="absolute end-0 h-full w-full max-w-52">
                <Image
                  alt={collection.image.alt || ''}
                  src={collection.image}
                  fill
                  className="object-contain object-center drop-shadow-xl"
                  sizes="300px"
                />
              </div>
            )}
          </div>
          </div>

          <span className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover/CollectionCard3:opacity-40" />
          <div>
          <div className="absolute inset-5 flex flex-col sm:inset-8">
            <div className="max-w-xs">
              <span className="mb-2 block text-sm text-neutral-700">{collection.title}</span>
              {collection.description && (
                <h2
                  className="text-xl font-semibold text-neutral-900 md:text-2xl"
                  dangerouslySetInnerHTML={{ __html: collection.sortDescription || '' }}
                />
              )}
            </div>
            <div className="mt-auto">
              <Button
                color="light"
                className="[--btn-border:white]/0"
                onClick={handleOpenIframe}
              >
                Show me all
              </Button>
            </div>
          </div>
          </div>
        </div>

        {/* Make entire card clickable */}
        <button
          className="absolute inset-0"
          onClick={(e) => {
            e.preventDefault()
            handleOpenIframe()
          }}
          aria-label="Open collection"
        />
      </div>

      {/* Render modal in portal */}
      {isClient && iframeUrl && createPortal(iframeModal, document.body)}
    </>
  )
}

export default CollectionCard3
