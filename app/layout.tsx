import type { Metadata } from 'next'
import { roboto } from '@/app/ui/fonts'
import './globals.css'
import NavigationBar from './ui/navigation'
import Footer from './ui/footer'

export const metadata: Metadata = {
  title: 'Traveleros Charter',
  description:
    'Página para agendar viajes charter con la agencia de viajes Traveleros',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} transition-all flex flex-col items-center antialiased min-h-screen p-5 md:px-10 lg:px-20 md:py-10 tracking-wide`}
      >
        <div className='max-w-5xl w-full text-sm flex flex-col grow'>
          <NavigationBar />
          <main className='h-full grow'>
            <div>{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
