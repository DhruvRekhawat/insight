import { Card,CardHeader,CardContent,CardTitle } from "./ui/card"


const ExploreNotes = () => {
  return (
    <div className="grid gird-cols-1 sm:grid-cols-2 bg-lime-400 px-6 gap-2 py-8 rounded-md">
        <h2 className="col-span-1 sm:col-span-2 place-self-center text-3xl font-bold pb-4">Explore Notes</h2>
        <Card>
            <CardHeader>
                <CardTitle>JEE Mains & JEE Advanced Notes </CardTitle>
            </CardHeader>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>NEET UG Notes</CardTitle>
            </CardHeader>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>CUET Notes</CardTitle>
            </CardHeader>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>ICSE Notes</CardTitle>
            </CardHeader>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>CBSE Notes</CardTitle>
            </CardHeader>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>UPMSP Notes</CardTitle>
            </CardHeader>
        </Card>
    </div>
  )
}

export default ExploreNotes