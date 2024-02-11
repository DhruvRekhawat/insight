import AdmissionForm from '@/components/AdmissionForm'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

const Admission = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl md:text-4xl slide-in-from-bottom-full font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent'>Attend a demo class for free!</h1>
      <Card className='py-8 px-12 m-8 flex flex-col gap-4 w-1/3'>
        <CardTitle>Fill the form below</CardTitle>
        <CardDescription>Our team will contact you shortly</CardDescription>
      <AdmissionForm ></AdmissionForm>
      </Card>
      <svg className=" fixed bottom-0 w-full -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,250.7C384,256,480,224,576,186.7C672,149,768,107,864,112C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </main>
  )
}

export default Admission