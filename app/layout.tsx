import type { Metadata } from 'next'
import { Inter,Laila } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'

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
    icon: 'iNsightLogo.webp'
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
        <footer className='w-full bg-lime-400 grid-cols-3 md:grid-cols-4'>
        footer        
      </footer>
        </body>
    </html>
  )
}
