import { Augments, columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Home() { 
  const res = await fetch(`${process.env.APIURL}`, {next: {revalidate : 900}})
  const data: Augments[] = await res.json()
  console.log(data)
  return (
    <div className="container mx-auto py-10">
      <h1 className="title">TFT Augment Stats</h1>
      <h1>Patch 13.5</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
