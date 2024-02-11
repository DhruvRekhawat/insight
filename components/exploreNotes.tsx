import { Card,CardHeader,CardContent,CardTitle } from "./ui/card"
import Link from "next/link"

const ExploreNotes = () => {
  return (
    <div className="grid gird-cols-1 sm:grid-cols-2 bg-lime-400 px-6 gap-2 py-8 rounded-md">
        <h2 className="col-span-1 sm:col-span-2 place-self-center text-3xl font-bold pb-4">Explore Notes</h2>
        <Link href={'/notes/jee'}><Card>
            <CardHeader>
                <CardTitle>JEE Mains & JEE Advanced Notes </CardTitle>
            </CardHeader>
        </Card>
        </Link>
        <Link href={'/notes/neet'}><Card>
            <CardHeader>
                <CardTitle>NEET UG Notes</CardTitle>
            </CardHeader>
        </Card>
        </Link>
        <Link href={'/notes/cuet'}><Card>
            <CardHeader>
                <CardTitle>CUET Notes</CardTitle>
            </CardHeader>
        </Card>
        </Link>
        <Link href={'/notes/icse'}><Card>
            <CardHeader>
                <CardTitle>ICSE Notes</CardTitle>
            </CardHeader>
        </Card>
        </Link>
        <Link href={'/notes/cbse'}><Card>  
            <CardHeader>
                <CardTitle>CBSE Notes</CardTitle>
            </CardHeader>
        </Card>
        </Link>
        <Link href={'/notes/upboard'}><Card>
            <CardHeader>
                <CardTitle>UPMSP Notes</CardTitle>
            </CardHeader>
        </Card>
        </Link>
    </div>
  )
}

export default ExploreNotes