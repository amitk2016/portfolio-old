import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.siteHeader = $('.site-header');
		this.menuIcon = $('.site-header__menuIcon');
		this.menuContent = $('.site-header__menuContent');
		this.largeHero = $('.large-hero');
		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		this.largeHero.click(this.removeTheMenu.bind(this));
	}

	toggleTheMenu(){
		this.menuContent.toggleClass('site-header__menuContent--is-visible');
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menuIcon--close-x");
	}

	removeTheMenu(){
		this.menuContent.removeClass('site-header__menuContent--is-visible');
		this.siteHeader.removeClass("site-header--is-expanded");
		this.menuIcon.removeClass("site-header__menuIcon--close-x");
	}


}



export default MobileMenu;