'use strict';
function CountryList () {
		
			var ukraine = new Country("ukraine", "603,700", "45,238,805", "europe"),
        		usa = new Country("usa", '9,826,630', "320,050,716", "america"),
        		france = new Country("france", '643,427', "64,291,280", "europe"),
        		china = new Country("china", '9,596,960', "1,385,566,537", "asia"),
        		canada = new Country("canada", "9,984,670", "35,181,704", "america"),
        		zambia = new Country("zambia", "752,614", "14,538,640", "africa"),
        		egypt = new Country("egypt", "1,001,450", "82,056,378", "africa");
    
         this.countryCollection = [ukraine, usa, france, china, canada, zambia, egypt];
	    
	    this.forEach = function (country) {
			this.countryCollection.forEach(country);		  
		} 
		
    return this;
}