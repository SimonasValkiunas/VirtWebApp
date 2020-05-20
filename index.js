const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const { Pool, Client } = require('pg')


const pool = new Pool({
    user: 'postgres',
    host: '35.228.240.252',
    database: 'test_db',
    password: 'simonasv',
    port: 5432,
  })


app.get('/getrows', (request, response) => {
    // client.connect()
    pool.query('SELECT * FROM test_table', (error, results)=>{
        if(error){
            throw error;
        }
        response.json(results.rows);
    })

    // client.query('SELECT NOW()', (err, res) => {
    //     console.log(err, res)
    //     response.json(res);
    //     client.end()
    //   })
    
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})