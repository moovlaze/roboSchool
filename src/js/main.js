import * as functions from "./modules/functions.js";
import Swiper, { Navigation, Scrollbar } from "swiper";
import { createPopper } from "@popperjs/core";
import simplebar from "simplebar";

const swiper = new Swiper(".trainers__slider", {
	modules: [Navigation, Scrollbar],
	slidesPerView: "auto",
	spaceBetween: 40,
	grabCursor: true,
	scrollbar: {
		el: ".trainers__scrollbar",
		draggable: true,
	},
	navigation: {
		nextEl: ".trainers__arrow_next",
		prevEl: ".trainers__arrow_prev",
	},
});

const tooltip = () => {
	const tooltipBox = document.querySelector(".tooltip__ico");
	const tooltip = document.querySelector(".tooltip__text");

	createPopper(tooltipBox, tooltip, {
		placement: "top-start",
		modifiers: [
			{
				name: "offset",
				options: {
					offset: [0, 10],
				},
			},
		],
	});
};

functions.openBurgerMenu();
functions.scrollToSections();
functions.openPopup();
functions.tabs();
functions.formVaildate();
tooltip();
