import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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

        <h1 className="text-xl font-bold w-full text-center">{data.title}</h1>

        <div className="mt-16 prose">
        <a href="https://www.vedantu.com/content-files-downloadable/revision-notes/cbse-class-11-biology-notes-chapter-1.pdf" download><Button className="w-full my-4" size={"lg"}>Download PDF</Button></a>
          <Card className="py-8 px-16 bg-slate-100">
          <PortableText value={data.content}></PortableText>
          </Card>
        
        </div>
        
    
    </div>
  )
}

export default note