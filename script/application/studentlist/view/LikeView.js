'use strict';

function LikeView () {
		
	this.render = function (itemTr) {
		
		itemTr.classList.add('like');
	}
		
		
    return this;
}