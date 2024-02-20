import SecondaryCard from '@/components/secondaryCard';
import React from 'react'
import { physicsSubjects,chemistrySubjects,biologyChapterNames, ChapterNames } from '@/app/chapternames';
const NEET = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-start  p-4">
        <h1 className="text-2xl md:text-4xl font-bold">NEET UG</h1>
        <p className='m-4'>
          The NEET UG Revision Notes are curated for the NEET UG 
          aspirants who are aspiring to excel in their NEET UG exams. These
          revision notes will justify the preparation of the students and will
          help them to do a quick study before the examination day. The NEET UG
          aspirants will now have the resort to these revision notes, and
          they do not have to go through lengthy textbooks before the
          examination day.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4'>
          <h2 className='md:col-span-2 place-self-start text-xl md:text-2xl text-green-700 font-bold'>Biology</h2>
        {
          biologyChapterNames.map(function(value:ChapterNames,key){return(<SecondaryCard title={value.title} slug={value.slug} key={key}></SecondaryCard>)})
        }
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4'>
          <h2 className='md:col-span-2 place-self-start text-xl md:text-2xl text-green-700 font-bold'>Chemistry</h2>
        {
          chemistrySubjects.map(function(value:ChapterNames,key){return(<SecondaryCard title={value.title} slug={value.slug} key={key}></SecondaryCard>)})
        }
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4'>
          <h2 className='md:col-span-2 place-self-start text-xl md:text-2xl text-green-700 font-bold'>Physics</h2>
        {
          physicsSubjects.map(function(value:ChapterNames,key){return(<SecondaryCard title={value.title} slug={value.slug} key={key}></SecondaryCard>)})
        }
        </div>

        
        
      </div>
    </main>
  );
}

export default NEET