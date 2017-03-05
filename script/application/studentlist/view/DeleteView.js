'use strict';

function DeleteView (studentsList) {
		
	this.render = function (student, itemTr) {
				
		studentsList.forEach(function(itemCountry, index){
			if (itemCountry.get('country')==student.get('country')){
				 
			studentsList['countryCollection'].splice(index,1);
												
			}
		})
	
		itemTr.remove(itemTr.children);			
	}

		
    return this;
}