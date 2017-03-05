'use strict';

function EditView () {

	this.render =  function (itemTr){
	
			itemTr.remove(itemTr.children);
		
	};
				
    return this;
}