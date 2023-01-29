import * as functions from "./modules/functions.js";
import Swiper, { Navigation, Scrollbar } from "swiper";

const swiper = new Swiper(".trainers__slider", {
	modules: [Navigation, Scrollbar],
	slidesPerView: "auto",
	spaceBetween: 40,
	// slidesPerView: 1,
	// spaceBetween: 20,
	scrollbar: {
		el: ".trainers__scrollbar",
		draggable: true,
	},
	navigation: {
		nextEl: ".trainers__arrow_next",
		prevEl: ".trainers__arrow_prev",
	},
	// breakpoints: {
	// 	575.98: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	},
	// },
});

functions.openBurgerMenu();
