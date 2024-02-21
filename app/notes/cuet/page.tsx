import SecondaryCard from '@/components/secondaryCard';
import React from 'react'
import { physicsSubjects,chemistrySubjects,jeeMathematicsSubjects, ChapterNames } from '@/app/chapternames';
const CUET = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-start  p-4">
        <h1 className="text-2xl md:text-4xl font-bold">CUET </h1>
        <p className='m-4'>
          The CUET Revision Notes are curated for the CUET
          aspirants who are aspiring to excel in their CUET exams. These
          revision notes will justify the preparation of the students and will
          help them to do a quick study before the examination day. The CUET
          aspirants will now have the resort to these revision notes, and
          they do not have to go through lengthy textbooks before the
          examination day.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4'>
          <h2 className='md:col-span-2 place-self-start text-xl md:text-2xl text-green-700 font-bold'>Mathematics</h2>
        {
          jeeMathematicsSubjects.map(function(value:ChapterNames,key){return(<SecondaryCard title={value.title} slug={value.slug} key={key} ></SecondaryCard>)})
        }
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4'>
          <h2 className='md:col-span-2 place-self-start text-xl md:text-2xl text-green-700 font-bold'>Chemistry</h2>
        {
          chemistrySubjects.map(function(value:ChapterNames,key){return(<SecondaryCard title={value.title} slug={value.slug} key={key} ></SecondaryCard>)})
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

export default CUET