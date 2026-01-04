import { Augments, columns } from "./columns";
import { DataTable } from "./data-table";
import { Analytics } from '@vercel/analytics/next';

export default async function Home() { 
  const res = await fetch(`${process.env.APIURL}`, {next: {revalidate : 1800}})
  // const file = await fs.readFile('data.json', 'utf8')
  const data: Augments[] = await res.json()
  // const data = JSON.parse(file);
  // console.log(data1)
  return (
    <div className="container mx-auto py-10">
      <h1 className="title">TFT Augment Stats by @Setsuko VODS</h1>
      <h1>Patch 16.1c</h1>
      <h1>Data from Master+ games in NA, EUW, and VN. Updates every 30 minutes</h1>
      <DataTable columns={columns} data={data} />
      <Analytics />
      <p><small>I am not affliated with Riot Games</small></p>
    </div>
  )
}
