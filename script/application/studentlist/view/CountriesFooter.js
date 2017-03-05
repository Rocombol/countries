'use strict';

function CountriesFooter(countryList) {
	var  itemTable = document.createElement('table'),
		 //countryList = countryList,
		 buttonAll,buttonAsia, buttonEurope, buttonAmerica, buttonAfrica;
	
    this.render = function() {		
						
		itemTable.innerHTML = listButtonTpl;
		
		listeners();	
		
		return itemTable;					
    };	
	
	function listeners () {
		buttonAll = itemTable.querySelector('.all');
//		buttonAsia = itemTable.querySelector('.asia');		
//		buttonEurope = itemTable.querySelector('.europe');		
//		buttonAmerica = itemTable.querySelector('.america');		
//		buttonAfrica = itemTable.querySelector('.africa');
		buttonAll.addEventListener('click', showAllCountries, false);	
//		buttonAsia.addEventListener('click', showContinent, false);			
//		buttonEurope.addEventListener('click', showContinent, false);		
//		buttonAmerica.addEventListener('click', showContinent, false);		
//		buttonAfrica.addEventListener('click', showContinent, false);		
	}
	
	
	function showAllCountries () { 
		//console.log('work?')
		mediator.pub('CountryListView');				
	}
	
	function showContinent () {                    
//  	 Do no work yet	!!!
			
	}		

		
	return this;
}