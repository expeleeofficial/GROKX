import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/LandingPage/Hero'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<Hero />
</>
  )
}
