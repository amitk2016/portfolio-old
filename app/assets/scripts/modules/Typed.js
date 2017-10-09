import $ from 'jquery';
import Typed from 'typed.js';

class TypingText {
	constructor(){
		
		this.events();
	}

	events(){
		
		new Typed('#typed', {
    		stringsElement: '#typed-strings',
    		typeSpeed:100,
    		backSpeed: 100,
    		loop: true,
  			loopCount: Infinity,
  			startDelay:0,

  		}); 
	}

	


}



export default TypingText;