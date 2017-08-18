import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
 	constructor(){
 		this.siteHeader = $('.site-header');
 		this.headerTriggerElement = $('.large-hero__title');
 		this.pageScroll = $('.page-scroll');
 		this.headerLinks = $('.primary-nav a');
 		this.logoLink = $('.site-header__logoLink');
 		this.createHeaderWaypoint();
 		this.createPageScrollWaypoints();
 		this.addSmoothScrolling();
 	}

 	addSmoothScrolling(){
 		this.headerLinks.smoothScroll({speed:1200});
 		this.logoLink.smoothScroll({speed:1200});
 	}

 	createHeaderWaypoint(){
 		var that = this;
 		new Waypoint({
 			element:this.headerTriggerElement[0],
 			handler: function(direction){
 				if(direction == "down"){
 					that.siteHeader.addClass('site-header--dark');
 				}else{
 					that.siteHeader.removeClass('site-header--dark');
 					that.headerLinks.removeClass("is-current-link");
 				}
 			}
 		});
 	}

 	createPageScrollWaypoints(){
 		var that = this;
 		this.pageScroll.each(function(){
 			var currentPageSection = this;
 			new Waypoint({
 				element:currentPageSection,
 				handler: function(direction){
 					if(direction == 'down'){
 						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
	 					that.headerLinks.removeClass('is-current-link');
	 					$(matchingHeaderLink).addClass('is-current-link');
 					}	
 				},
 				offset:"20%"
 			});

 			new Waypoint({
 				element:currentPageSection,
 				handler: function(direction){
 					if(direction == 'up'){
 						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
	 					that.headerLinks.removeClass('is-current-link');
	 					$(matchingHeaderLink).addClass('is-current-link');
 					}	
 				},
 				offset:"-40%"
 			});	
 		});
 	}




}

export default StickyHeader;