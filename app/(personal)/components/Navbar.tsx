'use client'
import { Page } from 'app/(personal)/queries'
import Link from 'next/link'

import { ThemeToggle } from './ThemeToggle'

export function Navbar({ menu }: { menu: Page[] }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-32 py-5 dark:bg-black">
      <div>
        {menu &&
          menu.map((menuItem, key) => (
            <Link
              key={key}
              className={`font-inter  mr-4 hover:text-black dark:hover:text-white ${
                menuItem.slug.current === 'home'
                  ? 'font-semibold text-black dark:text-white'
                  : 'text-gray-600'
              }`}
              href={`/${
                menuItem.slug.current === 'home' ? '' : menuItem.slug.current
              }`}
            >
              {menuItem.title}
            </Link>
          ))}
      </div>

      <div className="px-3 text-lg">
        <ThemeToggle />
      </div>
    </div>
  )
}
