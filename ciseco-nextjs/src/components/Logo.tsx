import Image from 'next/image'
import { Link } from '@/components/Link'
import React from 'react'
import logoImage from '@/images/logo1.jpeg'

export interface LogoProps extends React.ComponentPropsWithoutRef<'img'> {
  className?: string
  src?: string
  alt?: string
  width?:number
  height?:number
}

const Logo: React.FC<LogoProps> = ({
  className = 'shrink-0',
  src = '/images/logo1.jpeg',
  alt = 'Nikkis Pet World',
  ...props
}) => {
  return (
    <Link href="/" className="flex text-neutral-950 dark:text-neutral-50">
      <Image
       src={logoImage}
        alt={alt}
        className={className}
        width={90} // adjust as needed
        height={40}
        {...props}
      />
    </Link>
  )
}
export default Logo
