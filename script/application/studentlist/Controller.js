'use strict';

function Controller () {
	var container = document.querySelector('#content'),
		buttons = document.querySelector('#buttons'),
		editContainer = document.querySelector('#extraInfo'),	
	 	likeView = new LikeView(),
		editView = new EditView(),
		countryList = new CountryList(),
    	countryListView = new CountryListView(countryList),
//		sortView = new SortView(studentsList),
    	deleteView = new DeleteView(countryList),		
		countriesFooter = new CountriesFooter(countryList),
	    countriesFooterRender = countriesFooter.render();
	
	mediator.sub('CountryListView', function (){
		
		if (container.firstChild){
			container.firstChild.innerHTML = '';
		}
						
		var countryListViewRender = countryListView.render();
					
		container.appendChild(countryListViewRender);
		
	});
	
	mediator.pub('CountryListView')	 
	
	buttons.appendChild(countriesFooterRender);
					
	mediator.sub('likeView', function (tr){
		
		var like = likeView.render(tr);
		
	});	
	
	mediator.sub('editView', function (tr){
	
		var edit = editView.render(tr);
		
	});	
		
	mediator.sub('deleteView', function (student, tr ){
						
		var deleteArray = deleteView.render(student, tr );
						
	});
	
	
//	mediator.sub('sortView', function (studentsList){
//						
//		var sort = sortView.render(studentsList);
//						
//	});		
		
	
		
	return this;	
};