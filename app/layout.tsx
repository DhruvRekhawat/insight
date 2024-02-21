import type { Metadata } from 'next'
import { Inter,Laila } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'
import Icon from '@/assets/iNsightLogo.webp'
import Logo from '@/components/ui/logo'
import Link from 'next/link'
import { Youtube } from 'lucide-react'
import { InstagramIcon } from 'lucide-react'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
const laila = Laila({
  weight: ["300","700"],
  subsets : ['latin'],
  variable : '--font-laila',
})

export const metadata: Metadata = {
  title: 'iNsight Classes-NEET / IIT-JEE /9th,10th,11&12th',
  description: `Discover academic excellence with Insight Coaching, your premier coaching institute in Lucknow, Aliganj. We specialize in providing top-notch coaching services for students from class 9 to class 12, offering comprehensive programs that cover fundamental concepts and advanced preparation.

  Our experienced faculty is dedicated to delivering high-quality education tailored to the needs of each student. Whether you're in class 9 or a 12th-grade student, our curriculum is designed to build a strong academic foundation for success.
  
  For aspiring IIT JEE and NEET candidates, Insight Coaching is your gateway to success. Our specialized coaching programs are crafted to enhance problem-solving skills and ensure conceptual clarity, giving you a competitive edge in these crucial exams.
  
  At Insight Coaching, we prioritize holistic education, combining advanced teaching methodologies with personalized attention. Our state-of-the-art facilities and regular assessments create a supportive learning environment for optimal growth.
  
  Join the ranks of successful students who have benefitted from Insight Coaching in Lucknow, Aliganj. Prepare for a bright future with our transformative educational approach. Enroll now to unlock your academic potential and excel in exams and beyond.`,
  icons : {
    icon: '@/assets/iNsightLogo.webp'
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={laila.className}>
      
      <body>
      <Navbar></Navbar>
        {children}
        <footer className='w-full bg-lime-400 grid grid-cols-1 md:grid-cols-4 px-6 py-4'>
        <div>
          <Logo></Logo>
        </div>
          <div className='px-4'>
              <h3 className='font-bold text-lg text-green-700'>Address</h3>
              <p className='text-green-800'>B1-65, sector -P, near shyam swad restaurant, Beligarad, Aliganj, Lucknow, Uttar Pradesh 226026</p>
          </div>        
          <div className='px-4'>
            <h3 className='font-bold text-lg text-green-700'>Contact Us</h3>
            <p className='font-green-600'>Phone: +91 07905431059 </p>
            <h3 className='font-bold text-lg text-green-700'>Follow Us</h3>
            <a href="https://www.youtube.com/@insightclasseslko/videos" target='_blank' className='text-green-600 font-semibold underline'>Youtube</a>
            </div>      
          <div>
              <h3 className='font-bold text-lg text-green-700'>Important Links</h3>
              <ul className='flex flex-col gap-4 px-4'>
                <li>
                  <h4 className='font-semibol text-md text-green-700 underline'>Notes</h4>
                  <Link href='/notes/jee'><p className='text-green-800'>JEE Mains</p></Link>
                  <Link href='/notes/jee'><p className='text-green-800'>JEE Advanced</p></Link>
                  <Link href='/notes/neet'><p className='text-green-800'>NEET</p></Link>
                  <Link href='/notes/cuet'><p className='text-green-800'>CUET</p></Link>
                  <Link href='/notes/icse'><p className='text-green-800'>ICSE Class 12th</p></Link>
                  <Link href='/notes/icse'><p className='text-green-800'>ICSE Class 11th</p></Link>
                  <Link href='/notes/cbse'><p className='text-green-800'>CBSE Class 12th</p></Link>
                  <Link href='/notes/cbse'><p className='text-green-800'>CBSE Class 11th</p></Link>
                  <Link href='/notes/upboard'><p className='text-green-800'>UP Board Class 12th</p></Link>
                  <Link href='/notes/upboard'><p className='text-green-800'>UP Board Class 11th</p></Link>
                </li>
                <li>
                  <h4 className='font-semibol text-md text-green-700 underline'>Courses</h4>
                  <Link href='/notes/jee'><p className='text-green-800'>JEE Mains</p></Link>
                  <Link href='/notes/jee'><p className='text-green-800'>JEE Advanced</p></Link>
                  <Link href='/notes/neet'><p className='text-green-800'>NEET</p></Link>
                  <Link href='/notes/cuet'><p className='text-green-800'>CUET</p></Link>
                  <Link href='/notes/icse'><p className='text-green-800'>ICSE Class 12th</p></Link>
                  <Link href='/notes/icse'><p className='text-green-800'>ICSE Class 11th</p></Link>
                  <Link href='/notes/cbse'><p className='text-green-800'>CBSE Class 12th</p></Link>
                  <Link href='/notes/cbse'><p className='text-green-800'>CBSE Class 11th</p></Link>
                  <Link href='/notes/upboard'><p className='text-green-800'>UP Board Class 12th</p></Link>
                  <Link href='/notes/upboard'><p className='text-green-800'>UP Board Class 11th</p></Link>
                </li>
              </ul>
          </div>  
      </footer>
        </body>
    </html>

  )
}
