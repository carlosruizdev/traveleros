'use client'

import Image from 'next/image'
import {
  EnvelopeIcon,
  UserGroupIcon,
  HomeIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { icon: HomeIcon, name: 'Homepage', href: '/' },
  { icon: UserGroupIcon, name: 'AboutUs', href: '/about-us' },
  { icon: EnvelopeIcon, name: 'Contact', href: '/contact' },
  { icon: Cog6ToothIcon, name: 'Admin', href: '/admin' },
]
export default function NavigationBar() {
  const pathname = usePathname()
  return (
    <nav className='flex justify-between items-center flex-col sm:flex-row mb-5'>
      <Image
        className='max-h-full object-cover'
        src='/traveleros.png'
        alt='Traveleros logo'
        width={200}
        height={38}
      />
      <ul className='flex justify-between gap-x-8'>
        {links.map((link) => {
          const LinkIcon = link.icon
          return (
            <li key={link.name}>
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                  { 'bg-sky-100 text-blue-600': pathname === link.href }
                )}
              >
                <LinkIcon className='w-6' />
                <p className='hidden lg:block'>{link.name}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
