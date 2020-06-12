const navSlide = () => {
	const hamburgerMenu = document.querySelector("#hamburger-menu");
	const nav = document.querySelector(".menu");
	const navLinks = document.querySelectorAll(".menu li");

	hamburgerMenu.addEventListener("click", () => {
		document.getElementById("hamburger-menu").classList.toggle("change");
		document
			.getElementById("hamburger-menu-block")
			.classList.toggle("hamburger-menu-block-change");

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 +
					0.4}s`;
			}
		});
	});
};

navSlide();
