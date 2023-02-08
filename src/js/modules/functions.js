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

export const openPopup = () => {
	const page = document.querySelector(".page");
	const openPopup = document.querySelectorAll(".item-trainers__btn");
	const popup = document.querySelector(".popup");
	const popupContent = popup.querySelector(".popup__content");

	openPopup.forEach((item) => {
		item.addEventListener("click", () => {
			page.classList.add("page_lock");
			popup.classList.add("popup_active");
			popupContent.classList.add("popup__content_active");
		});
	});

	popup.addEventListener("click", (e) => {
		if (
			e.target.closest(".popup__close") ||
			!e.target.closest(".popup__content")
		) {
			page.classList.remove("page_lock");
			popup.classList.remove("popup_active");
			popupContent.classList.remove("popup__content_active");
		}
	});
};

export const tabs = () => {
	const tabsParents = document.querySelectorAll("[data-tabs]");
	let tabsBtns;
	let tabsContent;

	tabsParents.forEach((item) => {
		tabsBtns = item.querySelectorAll("[data-btn]");
		tabsContent = item.querySelectorAll("[data-content]");
	});

	const selectBtn = (e) => {
		const btnName = e.target.dataset.btn;
		tabsBtns.forEach((el) => {
			el.classList.remove("active");
		});

		e.target.classList.add("active");
		selectContent(btnName);
	};

	const selectContent = (btnName) => {
		tabsContent.forEach((item) => {
			if (item.dataset.content === btnName) {
				item.classList.add("active");
			} else {
				item.classList.remove("active");
			}
		});
	};

	tabsBtns.forEach((btn) => {
		btn.addEventListener("click", selectBtn);
	});
};

export const formVaildate = () => {
	const form = document.querySelector("#form");

	const validation = (form) => {
		const allInputs = form.querySelectorAll(".form__input");
		let result = true;

		const removeError = (input) => {
			const parent = input.parentNode;

			if (parent.classList.contains("error")) {
				parent.querySelector(".form__label-text").remove();
				parent.classList.remove("error");
			}
		};

		const createError = (input, errorText) => {
			const parent = input.parentNode;
			const errorEl = document.createElement("span");

			errorEl.classList.add("form__label-text");
			errorEl.textContent = errorText;

			parent.append(errorEl);
			parent.classList.add("error");
		};

		allInputs.forEach((input) => {
			removeError(input);

			if (input.dataset.minLength) {
				if (input.value.length < input.dataset.minLength) {
					result = false;
					removeError(input);
					createError(
						input,
						`Кол-во символов меньше ${input.dataset.minLength}`
					);
				}
			}

			if (input.dataset.required) {
				if (input.value === "") {
					result = false;
					removeError(input);
					createError(input, "поле не заполнено!");
				}
			}
		});

		return result;
	};

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		if (validation(form)) {
			alert("Заявка отправлена");
		} else {
			alert("Введите данные снова!");
		}

		form.querySelectorAll(".form__input").forEach((input) => {
			input.value = "";
		});
	});
};
