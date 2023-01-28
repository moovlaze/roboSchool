export const openBurgerMenu = () => {
	const page = document.querySelector(".page");
	const headerNav = document.querySelector(".header__nav");
	const burger = document.querySelector(".burger");

	burger.addEventListener("click", (e) => {
		headerNav.classList.toggle("nav_active");
		burger.classList.toggle("burger_active");
		page.classList.toggle("page_lock");
	});

	headerNav.addEventListener("click", (e) => {
		if (e.target.closest(".nav__link")) {
			headerNav.classList.remove("nav_active");
			burger.classList.remove("burger_active");
			page.classList.remove("page_lock");
		}
	});
};
