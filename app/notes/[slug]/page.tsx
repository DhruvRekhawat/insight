import { client } from "@/lib/sanity"
import {PortableText} from '@portabletext/react'
// import { useParams } from "next/navigation"

async function getData(slug:string) {
  // const params = useParams<{ slug: string}>()
  const query = `*[slug.current == '${slug}']{
    title,
    pdf,
    content
    
  }[0]`

  const data = await client.fetch(query)
  return data
}

async function note({params}:{params:{slug:string}})  {
  const data = await getData(params.slug)
  console.log(data)
  return (
    <div className="p-2 md:p-4"> 

        <h1 className="text-xl bold w-full text-center">{data.title}</h1>
        <div className="mt-16 prose">
        <PortableText value={data.content}></PortableText>
        </div>
        <a href="https://www.vedantu.com/content-files-downloadable/revision-notes/cbse-class-11-biology-notes-chapter-1.pdf" download>pdf</a>
    
    </div>
  )
}

export default note