'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();


const { response } = require('express');
// Application Dependencies
const express = require('express');
const pg  = require('pg');



// Application Setup
const PORT = process.env.PORT;
const DATABASE =  process.env.DATABASE;
const app = express();
const client = new pg.Client(DATABASE);

app.get('/', (req, res)=>{
    res.send('all is good');
})

app.get('/get-people', (req, res)=>{
    const selectPeople = 'SELECT * FROM people_info;';
    client.query(selectPeople).then(result => {
        res.status(200).json(result.rows);
    });
});

app.get('/add-person', (req, res)=>{
    const firstName = req.query.first_name;
    const lastName = req.query.last_name;
    const newValues = "INSERT INTO people_info (first_name, last_name) VALUES($1,$2);";
    const safeValues = [firstName, lastName];
    client.query(newValues, safeValues).then(result =>{
        res.status(200).json(result.rows);
    }).catch(error=>console.log(error));

});



app.use('*', (req, res)=>{
    res.status(404).send('huh?');
});


client.connect().then(() =>{
    app.listen(PORT, ()=>console.log(`Listening to port ${PORT}`));
}).catch(error=>{
    console.log('error', error);
});
