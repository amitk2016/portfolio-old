import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RevealOnScroll( $('.work_image'), "65%" ,"reveal-item" );
new RevealOnScroll( $('.testimonial'), "75%" ,"reveal-item-2");
