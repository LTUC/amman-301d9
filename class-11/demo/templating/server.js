'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Setting the view engine for templating 
app.set('view engine', 'ejs');

const listOfFruitesArr = ['Apples', 'Pears', 'Bananas', 'Mango', 'Pineapple'];

const groceryList =[
    {name: 'butter', 'quantity':1},
    {name: 'milk', 'quantity':4},
    {name: 'eggs', 'quantity':12},
]
// Routes

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/list', (req, res)=>{
    const objRes = {
        Title: 'My Grocery List of items',
        listOfFruites: listOfFruitesArr,
    };
    res.render('list', objRes);
});

app.get('/quantities', (req, res)=>{
    const objRes = {
        groceryList: groceryList
    };
    res.render('quantities',objRes);
});

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
