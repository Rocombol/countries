'use strict';

function SortView (studentsList) {
	
	var studentsCopy = studentsList;
		
	this.render = function (studentsCopy) {	
		
		
			
//		studentsCopy.forEach(function(itemCountry, index){
//			if (itemCountry.get('continent')=='europe'){				
//			arr.push(itemCountry);
//				 
////			studentsCopy['countryCollection'].splice(index,1);
////												
////			console.log(studentsList['countryCollection'][index].get('country'));  	
//			}
//		})				
//		
		var filter = [];

		studentsCopy.forEach(function(itemCountry, index){
			if (itemCountry.get('continent')==='europe'){				
							 
			filter.push(itemCountry);
			//studentsCopy['countryCollection'].splice(index,1);
												
			}
		})				
		

		studentsCopy['countryCollection'] = filter;
		
		//console.log(studentsCopy['countryCollection'])
		mediator.pub('StudentListView');					
	}
		
		
    return this;
}