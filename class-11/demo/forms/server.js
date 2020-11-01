'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (access the data form (Form Data header))
app.use(express.urlencoded({ extended: true }));

// specify the public directory to access resources
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

app.post('/contact', (request, response) => {
    console.log(request.body);
    response.sendFile('./thanks.html', { root: './public' });
});

app.get('/contact', (request, response) => {
    console.log(request.query);
    response.sendFile('./thanks.html', { root: './public' });
});

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
