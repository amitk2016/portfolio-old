import $ from 'jquery';

class Accordian {

  constructor() {
 		this.designButton = $(".designButton");
 		this.developmentButton = $('.developmentButton');
 		this.userButton = $('.UxButton');
 		this.designTab = $('#design-tab');
 		this.developmentTab = $('#development-tab');
 		this.userTab = $('#user-tab');
 		// this.skillsTab = $('.skills__eachBox');
 		this.designEvents();
 		this.developmentEvents();
 		this.UxEvents();
  }

  

  designEvents(){

  	this.designButton.addClass('skills__button-clicked');
  	this.developmentTab.hide();
  	this.userTab.hide();
  	this.designButton.click(this.fadein.bind(this));
  }

  fadein(){
  	this.developmentButton.removeClass('skills__button-clicked');
  	this.userButton.removeClass('skills__button-clicked');
  	this.designButton.addClass('skills__button-clicked');
  	this.designTab.fadeIn('slow');
  	this.developmentTab.fadeOut('fast');
  	this.userTab.fadeOut('fast');
  	return false;

  }

  developmentEvents(){
  	
  	this.developmentButton.click(this.devfadein.bind(this));
  	
  }

  devfadein(){
  	this.designButton.removeClass('skills__button-clicked');
  	this.userButton.removeClass('skills__button-clicked');
  	this.developmentButton.addClass('skills__button-clicked');
  	this.developmentTab.fadeIn('slow');
  	this.designTab.fadeOut('fast');
  	this.userTab.fadeOut('fast');
  	return false;
  }

  UxEvents(){
  	this.userButton.click(this.userfadein.bind(this));
  }

  userfadein(){
  	this.developmentButton.removeClass('skills__button-clicked');
  	this.designButton.removeClass('skills__button-clicked');
  	this.userButton.addClass('skills__button-clicked');
    this.userTab.fadeIn('slow');
  	this.developmentTab.fadeOut('fast');
  	this.designTab.fadeOut('fast');
  	
  	
  	
  	return false;

  }



 }












export default Accordian;