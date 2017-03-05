'use strict';

function CountryListView (countryList) {
	var country = countryList;
	
    this.render = function() {		
		var itemTable = document.createElement('table');
		
		itemTable.innerHTML = listTpl;
		
		country.forEach(function(item){
		    var listItemView = new ListItemView(item),
				tr = listItemView.render(item);
			
			itemTable.appendChild(tr);
		});
				
		return itemTable;					
	
	};	
	return this;
}