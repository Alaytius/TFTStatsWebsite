import DataTable from 'datatables.net-dt';
import express from 'express';
import fs from 'node:fs';
const app = express();

const {
  APIKEY,
  APIURL
} = process.env;

const requestOptions = {
  method: 'GET',
  headers: {
    'X-API-KEY': `${APIKEY}`,
  },
};

const stats = await fetch(APIURL, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log(response.json())
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });

let table = new DataTable('#stats', {
    data: stats,
    paging: false
});

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data)
  });
});


