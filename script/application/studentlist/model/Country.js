'use strict';

function Country (country, area, population, continent) {
    var values = {
        country: country,
		area: area,
        population: population,
        continent: continent
    };
	
    this.toJSON = function () {
        return values;
    };
				
    this.get = function (key) {
        return values[key];
    };
	
    return this;

}

 