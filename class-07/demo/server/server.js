'use strict';

// Defining Application Dependencies 
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const { request, response } = require('express');
require('dotenv').config()


const PORT = process.env.PORT || 3000;
const GEOIQ = process.env.GEOIQ;

console.log(PORT);

const app = express();
app.use(cors());

// Routes
app.get('/', welcomePage);
app.get('/location', locationHandler);
app.get('/restaurant', resturantHandler);
app.use('*', notFound)


// Constructor
function Location(city, locationData){
    // this.search_query=city;
    // this.formated_query=locationData.display_name;
    // this.latitude = locationData.lat;
    // this.longitude = locationData.lon;
    this.search_query=city;
    this.formated_query=locationData[0].display_name;
    this.latitude = locationData[0].lat;
    this.longitude = locationData[0].lon;
}

function Restaurant(restaurantData){
    this.resturant = restaurantData.restaurant.name;
    this.location = restaurantData.restaurant.location.city;
}


// Helpers 

function welcomePage (reqeust, response){
    response.send('Home Page Welcome to express');
}

function locationHandler (request, response) {
    const city = request.query.city;
    const url =`https://eu1.locationiq.com/v1/search.php?key=${GEOIQ}&q=${city}&format=json`;
    superagent.get(url).then( locationData =>{
        // console.log(locationData.body);
        let location = new Location(city, locationData.body)
        response.json(location);
    }
    ).catch(console.error);
}

function resturantHandler (request, response) {
    const restaurantsData = require('./data/restaurants.json');
    let data = [];
    restaurantsData.nearby_restaurants.forEach(restaurant => {
        data.push(new Restaurant(restaurant));
    });
    response.json(data);
}

function notFound(request, resp){
    resp.status(404).send('Not found');
}

app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`));