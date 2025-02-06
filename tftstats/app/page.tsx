import { Augments, columns } from "./columns";
import { DataTable } from "./data-table";
import { promises as fs } from 'fs';
const requestOptions = {
  method: 'GET',
  headers: {
    'X-API-KEY': `${process.env.APIKEY}`,
  },
};

async function getData(): Promise<Augments[]> {
  const data = await fetch(process.env.APIURL, requestOptions);
  const stats = await data.json();
  // const file = await fs.readFile(process.cwd() + '/app/test.json', 'utf8');
  // const stats = await JSON.parse(file);
  // console.log(stats)
  return stats
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="title">TFT Augment Stats</h1>
      <h1>Patch 13.5</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
