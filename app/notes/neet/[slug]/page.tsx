import { client } from "@/lib/sanity"
import {PortableText} from '@portabletext/react'

async function getData() {
  const slug = 'class-11-physics-motion-in-a-straight-line'
  const query = `*[slug.current == "class-11-physics-motion-in-a-straight-line"]{
    title,
    pdf,
    content
    
  }[0]`

  const data = await client.fetch(query)
  return data
}

async function note()  {
  const data = await getData()
  console.log(data)
  return (
    <div className="p-2 md:p-4"> 

        <h1 className="text-xl bold w-full text-center">{data.title}</h1>
        <div className="mt-16 prose">
        <PortableText value={data.content}></PortableText>
        </div>
    
    </div>
  )
}

export default note