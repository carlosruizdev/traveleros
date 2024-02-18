import Image from 'next/image'
export default function NavigationBar() {
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
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/about-us'>About Us</a>
        </li>
        <li>
          <a href='/admin'>Panel de administración</a>
        </li>
      </ul>
    </nav>
  )
}
