import { Augments, columns } from "./columns";
import { DataTable } from "./data-table";


// const requestOptions = {
//   method: 'GET',
//   headers: {
//     'X-API-KEY': `${process.env.APIKEY}`,
//   },
// };

// async function getData(): Promise<Augments[]> {
//   const data = await fetch(`http://${process.env.APIURL}/${process.env.ENDPOINT}`);
//   const stats = await data.json();
//   return stats
// };
export const revalidate = 120

export default async function Home() { 
  const res = await fetch(`https://api.vercel.app/blog`)
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
