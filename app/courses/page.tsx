import { Button } from '@/components/ui/button'

import Link from 'next/link'

import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='w-full px-8 text-start text-xl md:text-3xl font-bold text-red-500'>Subscribe to the official Youtube Channel</h1>
    <div className='px-8 my-2'>
    <p>Follow the official iNsight Youtube channel for regular updates and revision lectures </p>

    <Link href="https://www.youtube.com/@insightclasseslko"><Button variant={"default"}className="mt-2">Visit Channel</Button></Link>

    <Button variant={"default"}className="mt-2">Visit Channel</Button>

    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 place-items-center'>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/y81RxIFKb_I?si=elIx3NWMVupxHAXC" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/EtBKvqqvlfY?si=TueZcbaD1jwEsb2p" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/bwzoifsaTbw?si=s-Z0rXKc2lJ_y4bq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/u9_W2b_xIsM?si=PESaYSFcSSZJ9oS8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/NmPamfJ_HeA?si=yEFPiT0gQAglooSQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/Be5FBIpzJsA?si=DWRyMKx23W4EfC43" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/b7u6Vk_F0bA?si=CVF-hwRUmpHuVl2k" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/lkgaH0Es2fs?si=TZ7mx2Hb-68B8h3Y" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/ggJ4BvdN3wc?si=yDU2WD4q6oX72ySk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/ZX7rDFQXrdc?si=dwpGrL8YyXCpabH0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/ksdl-ZRB8Fw?si=r4InzeeBDuTtBUo3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>
       <iframe className="p-0 m-0 flex w-full h-32 md:h-64" src="https://www.youtube.com/embed/WqPGm_5k0VA?si=r2YZuKGcea-uclgV" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='lazy'></iframe>

    </div>
    </>
  )
}

export default page