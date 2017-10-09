import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import Accordian from './modules/Accordian';
import SplitScreen from './modules/SplitScreen';
import TypingText from './modules/Typed';
import ScrollRevealElements from './modules/ScrollReveal';


var mobileMenu = new MobileMenu();

new RevealOnScroll( $('.work_image'), "65%" ,"reveal-item" );
new RevealOnScroll( $('.testimonial'), "75%" ,"reveal-item-2");

new Modal( $(".open-modal-first"), $(".modal__first"), $(".modal__first-close"), $('.modal__first-cancel') ,'modal__first');
new Modal( $(".open-modal-second"), $(".modal__second"), $(".modal__second-close"), $('.modal__second-cancel') ,'modal__second');
new Modal( $(".open-modal-third"), $(".modal__third"), $(".modal__third-close"), $('.modal__third-cancel') ,'modal__third');
new Modal( $(".open-modal-fourth"), $(".modal__fourth"), $(".modal__fourth-close"), $('.modal__fourth-cancel') ,'modal__fourth');
new Modal( $(".open-modal-fifth"), $(".modal__fifth"), $(".modal__fifth-close"), $('.modal__fifth-cancel') ,'modal__fifth');
new Modal( $(".open-modal-sixth"), $(".modal__sixth"), $(".modal__sixth-close"), $('.modal__sixth-cancel') ,'modal__sixth');

var stickyHeader = new StickyHeader();

// var modal = new Modal();

var accordian = new Accordian();
 
var splitScreen = new SplitScreen();

var typingText = new TypingText();

var scrollReveal = new ScrollRevealElements();