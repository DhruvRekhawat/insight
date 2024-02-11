import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Image1 from '@/assets/cheerful-attractive-young-woman-with-black-hair-walking.webp'
import Image2 from '@/assets/casual-clothes-portrait-attractive-young-woman-standing-office-with-black-bag.webp'
import Image3 from '@/assets/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall_1_.webp'
import Image4 from '@/assets/istockphoto-1301397300-612x612-transformed.webp'
import Image5 from '@/assets/10733824_4542740.webp'
import Image6 from '@/assets/6572399_3312018.webp'
import Image7 from '@/assets/5202271_Designer-girl.webp'
import Image8 from '@/assets/9233873_4119037.webp'
import Image9 from '@/assets/css-pattern-by-magicpattern.png'
import ExploreNotes from '@/components/exploreNotes'
import { Carousel,CarouselItem,CarouselNext,CarouselPrevious,CarouselContent } from '@/components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Autoplay from "embla-carousel-autoplay"
import { Star } from 'lucide-react'
import { Form } from '@/components/ui/form'
import AdmissionForm from '@/components/AdmissionForm'
export default function Home() {
  return (
    <main className="flex p-2 px-6 flex-col ">
      <section className='grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 px-6 py-4 h-auto '>
        <div className='mb-4 py-4 px-2'>
        <h1 className='text-4xl sm:text-6xl font-bold place-self-center'>
          Join <span className='bg-gradient-to-r bg-clip-text text-transparent from-green-600 to-lime-600'>Lucknow&apos;s Number One</span> Coaching Institute
        </h1>
        <p className='text-2xl font-sans mt-2'>Ab harr bachha karega crack!</p>
        <div className='mt-12 flex flex-wrap gap-4'>
        <Button size="default" className='font-bold mt-2 '>Enroll Now</Button>
        <Button variant="secondary" size="default" className='mt-2 font-bold'>View Courses</Button>
        </div>
        </div>
        
        <div className='grid grid-flow-col grid-rows-2 p-4 gap-2'>
          <div className='rounded-tr-3xl overflow-clip'>
            <Image src={Image1} objectFit='cover' alt='student'></Image>
          </div>
          <div className='rounded-tl-3xl overflow-clip'>
                      <Image src={Image2} objectFit='cover' alt='student'></Image>
                      </div>
          <div className=' rounded-tl-3xl overflow-clip'>
                      <Image src={Image3} objectFit='cover' alt='student'></Image>
          </div>
          <div className='rounded-lr-3xl overflow-clip'>
          <Image src={Image4} objectFit='cover' alt='student'></Image>
          </div>
        </div>
      </section>

      <section className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-6 py-4 h-auto gap-2'>
         <div className='flex flex-col justify-center items-center'>
          <Image src={Image5} height={512} width={400} alt='illustration1'></Image>
          <h2 className='text-2xl sm:text-3xl font-bold place-self-center'>Learn from the best</h2>
          <p className=' text-wrap text-center px-6'>Our teachers are experts excited to share their wisdom, experience, & trusted tools with you.</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <Image src={Image6} height={512} width={400} alt='illustration1'></Image>
          <h2 className=' text-2xl sm:text-3xl font-bold place-self-center'>Get personalised training </h2>
          <p className='text-wrap text-center px-6'>At iNsight we focus on giving every student the attention they need</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <Image src={Image7} height={512} width={400} alt='illustration1'></Image>
          <h2 className=' text-2xl sm:text-3xl font-bold place-self-center'>Learn from anywhere!</h2>
          <p className=' text-wrap text-center px-6'>iNsight&apos;s online learning platform empowers you to learn new skills and accomplish real growth.</p>
          </div>
      </section>
      <section className='px-6 py-4 my-4 '>
        <ExploreNotes></ExploreNotes>
      </section>
      {/* <section>
        explore courses
      </section> */}
      <section className='px-12 py-4 flex flex-col'>
      <h2 className='place-self-center text-3xl font-bold pb-4 md:col-span-2 col-span-1 '>What our students say</h2>
      <div className='flex flex-wrap justify-center gap-4 p-8'>
      
<Carousel opts={{loop:true}} className='md:w-full w-64'>
  <CarouselContent>
    <CarouselItem className="md:basis-1/3 w-32"><Card className='flex flex-col justify-center items-center'><CardTitle className='p-8 pb-0'>Snigdha Dwivedi</CardTitle><CardContent className='flex flex-col justify-center items-center'><div className='flex m-4 gap-1'><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star></div><p>Best faculties are provided....🤩🤩 The teachers are very supportive and teach the CONCEPTS WITH TRICK....Be with student till the last...... Very energetic, enthusiastic and supportive...... Thank you Somesh sir for this institution.....🙏🙏🙏</p></CardContent></Card></CarouselItem>
    <CarouselItem className="md:basis-1/3 w-32"><Card className='flex flex-col justify-center items-center'><CardTitle className='p-8 pb-0'>Kaif Khan</CardTitle><CardContent className='flex flex-col justify-center items-center'><div className='flex m-4 gap-1'><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star></div><p>An absolute and tremendous coaching with tricks and ease of learning for JEE NEET aspirants and Board students too!!❤️❤️</p></CardContent></Card></CarouselItem>
    <CarouselItem className="md:basis-1/3 w-32"><Card className='flex flex-col justify-center items-center'><CardTitle className='p-8 pb-0'>Mansi Shukla</CardTitle><CardContent className='flex flex-col justify-center items-center'><div className='flex m-4 gap-1'><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star></div><p>One of the best coaching for medical students in the universe..if you don&apos;t believe me go & attend demo classes...you will see the differences between IN SIGHT & other coaching...World best faculty (Somesh Sir & Dk sir) Note- concept with TRICK , NCERT based</p></CardContent></Card></CarouselItem>
    <CarouselItem className="md:basis-1/3 w-32"><Card className='flex flex-col justify-center items-center'><CardTitle className='p-8 pb-0'>Utkarsh Yadav</CardTitle><CardContent className='flex flex-col justify-center items-center'><div className='flex m-4 gap-1'><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star></div><p>This place will provide you with an amazing experience with respect to teachings and overall development. Faculty will help you in every possible way.</p></CardContent></Card></CarouselItem>
    <CarouselItem className="md:basis-1/3 w-32"><Card className='flex flex-col justify-center items-center'><CardTitle className='p-8 pb-0'>Mamta Gupta</CardTitle><CardContent className='flex flex-col justify-center items-center'><div className='flex m-4 gap-1'><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star><Star className='text-yellow-400'></Star></div><p>Best ever coaching....well experienced staff...knowledgeable faculty...ambience well maintained...... Join insight and get assured ur result......
Nice experience</p></CardContent></Card></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

      </div>
 
      </section>

      <section className='bg-gradient-to-r from-orange-300 to-rose-300 p-4 rounded-md flex flex-col justify-center items-center'>
        <div>

        <Card className='w-full mt-4'>
          <CardTitle className='p-6'>Get a chance to attend a demo class!</CardTitle>
          <CardContent>
            <AdmissionForm></AdmissionForm>
          </CardContent>
        </Card>
        </div>
        
        
      </section>
      
    </main>
  )
}
