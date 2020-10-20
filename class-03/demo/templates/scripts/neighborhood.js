'use strict';

let neighborhoodsArray = [];

function Neighborhood(neighborhoodObject){
    // this.name = neighborhoodObject.name;
    // this.cityName = neighborhoodObject.city;
    // this.population = neighborhoodObject.population;
    // this.founded = neighborhoodObject.founded;
    // this.body = neighborhoodObject.body;

    for (const key in neighborhoodObject) {
        this[key] = neighborhoodObject[key];
    }    
}

// Using Append
// Neighborhood.prototype.render = function(){
//     let container = $('<div></div>').clone();
//     container.append(`<h2>${this.name}</h2> <p>Part of this: ${this.city}</p>`);
//     return container;
// };

// using clone
// Neighborhood.prototype.render = function(){
//     let container = $('.template').clone();
//     container.find('.name').text(this.name);
//     container.find('.city').text(this.city);
//     container.find('.population').text(this.population);
//     container.find('.founded').text(this.founded);
//     container.find('.body').html(this.body);
//     container.attr('class', this.name);
//     return container;
// };

// Using Mustache
Neighborhood.prototype.render = function(){
    // first we get the template from the HTML doc
    let template = $('#neighborhood-template').html();
    // Secondly we use mustaache render function to merge the template with the given data
    let html = Mustache.render(template, this);
    return html;
};


neighborhoodDataSet.forEach(neighborhoodObject => {
    neighborhoodsArray.push(new Neighborhood(neighborhoodObject));
});

neighborhoodsArray.forEach(neighborhoodObject => {
    $('#neighborhoods').append(neighborhoodObject.render());
});