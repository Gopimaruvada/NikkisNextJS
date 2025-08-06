import Logo from '@/components/Logo'
import { getCollections } from '@/data/data'
import { getCurrencies, getHeaderDropdownCategories, getLanguages, getNavMegaMenu } from '@/data/navigation'
import clsx from 'clsx'
import { FC } from 'react'
import Link from 'next/link' // Make sure this is imported
import AvatarDropdown from './AvatarDropdown'
import CartBtn from './CartBtn'
import CategoriesDropdown from './CategoriesDropdown'
import CurrLangDropdown from './CurrLangDropdown'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import MegaMenuPopover from './MegaMenuPopover'
import SearchBtnPopover from './SearchBtnPopover'

export interface HeaderProps {
  hasBorderBottom?: boolean
}

const Header: FC<HeaderProps> = async ({ hasBorderBottom = true }) => {
  const megamenu = await getNavMegaMenu()
  const dropdownCategories = await getHeaderDropdownCategories()
  const currencies = await getCurrencies()
  const languages = await getLanguages()
  const featuredCollections = (await getCollections()).slice(7, 11)

  return (
    <div className="relative z-0">
      <div className="container">
        <div
          className={clsx(
            'flex h-30 justify-between gap-x-2.5 border-neutral-200 dark:border-neutral-700',
            hasBorderBottom && 'border-b',
            !hasBorderBottom && 'has-[.header-popover-full-panel]:border-b'
          )}
        >
      <div className="flex items-center justify-center gap-x-3 sm:gap-x-8">
  <Logo />
  <div className="hidden h-9 border-l border-neutral-200 md:block dark:border-neutral-700"></div>

  <div className="flex flex-col">
    <h1 className="text-xl font-semibold sm:text-2xl md:text-2xl">
      Nikkis Pet World
    </h1>
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      PET SHOP | PET GROOMING | PET SPA | PET CLINIC | VET CARE | PET KENNELS | PET STORE
    </p>
  </div>
</div>

        

          <div className="flex flex-1 items-center justify-end gap-x-2.5 sm:gap-x-5">
  <div className="block lg:hidden">
    <HamburgerBtnMenu />
  </div>

  {/* Move Blog & Contact here */}
  <nav className="hidden md:flex items-center gap-x-6 text-sm font-medium text-neutral-700 dark:text-neutral-200">
  <Link href="/subscription" className="hover:text-neutral-900 dark:hover:text-white">
      Spa & Grooming
    </Link>
    {/* <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-white">
      Blogs
    </Link> */}
    <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-white">
      Contact
    </Link>
    <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white">
      About US
    </Link>
    <Link href="/vetonline" className="hover:text-neutral-900 dark:hover:text-white">
     Vet Online
    </Link>
    {/* <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white">
     Vet Clinic
    </Link> */}
  </nav>

  {/* Other components (optional) */}
  {/* <MegaMenuPopover megamenu={megamenu} featuredCollection={featuredCollections[0]} />
  <CurrLangDropdown currencies={currencies} languages={languages} className="hidden md:block" />
  <SearchBtnPopover />
  <AvatarDropdown />
  <CartBtn /> */}
</div>
        </div>
      </div>
    </div>
  )
}

export default Header
