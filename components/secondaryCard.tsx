import { Card, CardTitle } from "./ui/card"
import {ArrowBigRight} from 'lucide-react'
import Link from "next/link"
const SecondaryCard = (props:{title:string,slug:string}) => {
    
  return (
    <Link href={`/notes/neet/${props.slug}`}><Card className="flex justify-center p-4 p-4 bg-lime-300 hover:bg-lime-500">
        <CardTitle className="text-md md:text-xl col-span-2">{props.title}</CardTitle>

    </Card>
    </Link>
  )
}

export default SecondaryCard