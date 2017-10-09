import $ from 'jquery';
import ScrollReveal from 'scrollreveal';

class ScrollRevealElements {
	constructor(){
		
		this.reveal();
	}

	reveal(){
		window.sr = ScrollReveal();
		sr.reveal('.profile-pic',{
	    	duration:2000,
	    	origin:'bottom',
	    	viewFactor:0.2
	    	
    	});
    	sr.reveal('.about-text',{
	    	duration:2000,
	    	origin:'bottom',
	    	viewFactor:0.2
    	});
	}

	


}



export default ScrollRevealElements;