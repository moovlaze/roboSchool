import * as functions from "./modules/functions.js";
import Swiper, { Navigation, Scrollbar } from "swiper";

const swiper = new Swiper(".trainers__slider", {
	modules: [Navigation, Scrollbar],
	slidesPerView: "auto",
	spaceBetween: 40,
	scrollbar: {
		el: ".trainers__scrollbar",
		draggable: true,
	},
	navigation: {
		nextEl: ".trainers__arrow_next",
		prevEl: ".trainers__arrow_prev",
	},
});

functions.openBurgerMenu();
functions.scrollToSections();
