import Nav_Footer_Layout from '@/src/FE/components/Nav_Footer_Layout'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/src/FE/components/Footer'


const monst = Montserrat({ subsets:['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={monst.className}>
      <Nav_Footer_Layout>
       <div className='absolute w-[85%] md:w-[80%] right-0'>{children}    
       <Footer />
        </div> 
      </Nav_Footer_Layout>
        </body>

    </html>
  )
}
