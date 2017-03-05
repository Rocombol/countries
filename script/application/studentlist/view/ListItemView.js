'use strict';

function ListItemView (_student) {
	var student = _student,
		itemTr = document.createElement('tr'),
		buttonFind, buttonEdit, buttonDelete;
			
    this.render = function () {
        var itemData = '',
            json = student.toJSON();
		
		itemData += renderTemplate(listItemTpl, json);		
		itemTr.innerHTML = itemData;			      
		
		queryListeners();				
				
		return itemTr;
    };
	

	function findMore () {  			
		mediator.pub('likeView', itemTr);				
	}
	
	function editInfo () {                    
		mediator.pub('editView', itemTr);							
	}
	

	function deleteRow () {                    
		mediator.pub('deleteView', student, itemTr);							
	}	
	
	function queryListeners () {
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');		
		buttonDelete = itemTr.querySelector('.delete');		
		buttonFind.addEventListener('click', findMore, false);			
		buttonEdit.addEventListener('click', editInfo, false);		
		buttonDelete.addEventListener('click', deleteRow, false);		
	}	
	
	function queryRemoveListeners () {
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');
		buttonDelete = itemTr.querySelector('.delete');
        buttonFind.removeEventListener('click', findMore);
        buttonDelete.removeEventListener('click', deleteRow);				
	}
		
    return this;
};