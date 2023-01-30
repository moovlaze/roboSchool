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

export const scrollToSections = () => {
	const links = document.querySelectorAll("a[data-scroll]");
	const sections = document.querySelectorAll("section[id]");
	const headerHight = document.querySelector(".header").clientHeight;

	let sectinosId = [];

	const scrollBehavior = (el) => {
		const section = document.querySelector(el);

		window.scroll({
			behavior: "smooth",
			top: section.offsetTop - headerHight,
			left: 0,
		});
	};

	const getIdSections = () => {
		sections.forEach((item) => {
			sectinosId.push(item.id);
		});
	};

	const startScroll = () => {
		let linkHref;

		links.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				linkHref = link.getAttribute("href");
				for (let i = 0; i < sectinosId.length; i++) {
					if (`#${sectinosId[i]}` === linkHref) {
						scrollBehavior(`#${sectinosId[i]}`);
					}
				}
			});
		});
	};

	getIdSections();
	startScroll();
};
