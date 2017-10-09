
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
		constructor(els,offset,className){
			this.itemToReveal = els;
			this.offsetPercentage = offset;
			this.className = className;
			this.hideIntially();
			this.createWaypoints();		
		}
		hideIntially(){

			this.itemToReveal.addClass(this.className);	
		}

		 createWaypoints() {
		 	var that = this;
		    this.itemToReveal.each(function(){
		    	var currentItem = this;
		    	new Waypoint({

				  element:currentItem,
				  handler: function() {
				     $(currentItem).addClass(that.className+"--is-visible");
				  },
       				 offset: that.offsetPercentage
				}); 	
		    });
		  }
		  
}


export default RevealOnScroll;







