// import DataTable from 'datatables.net-dt';
// import express from 'express';
const express = require('express');
const DataTable = require('datatables.net');
// import fs from 'node:fs';
const app = express();

// const requestOptions = {
//   method: 'GET',
//   headers: {
//     'X-API-KEY': `${process.env.APIKEY}`,
//   },
// };

// const stats = await fetch(process.env.APIURL, requestOptions)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     console.log(response.json());
//     return response.json();
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// let table = new DataTable('#stats', {
//     data: stats,
//     paging: false
// });

// app.get('/', (req, res) => {
//   html = `<head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>TFT Augment Stats</title>
// </head>
// <body>
//     <h1 style="text-align:center">TFT Augment Stats</h1>
//     <table id="stats" style="width:70%;border: 1rem;margin-left: auto;margin-right: auto;" class="display">
//         <thead>
//             <tr>
//                 <th>Augment Name</th>
//                 <th>Average Placement</th>
//                 <th>2-1</th>
//                 <th>3-2</th>
//                 <th>4-2</th>
//                 <th>Games Played</th>
//             </tr>
//     </table>
// </body>`;
//   // fs.readFile('index.html', 'utf8', (err, data) => {
//   //   if (err) throw err;
//   //   res.send(data);
//   //   console.log(stats);
//   // });
//   res.send(data);
// });


