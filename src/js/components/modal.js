function closeModal(modal) {
	modal.classList.remove("show");
	modal.classList.add("hide");
	document.body.removeAttribute("style");
}

function openModal(modal) {
	modal.classList.add("show");
	modal.classList.remove("hide");
	document.body.style.overflow = "hidden";
	// clearTimeout(modalTimerId);
}

function modalModule() {
	const modalTrigger = document.querySelectorAll("[data-modal]");
	const modal = document.querySelector(".modal");

	modalTrigger.forEach(btn => btn.addEventListener("click", () => openModal(modal)));
	
	closeModal(modal);
	openModal(modal);


	modal.addEventListener("click", (e) => {
		if (e.target === modal || e.target.getAttribute("data-close") == "") {
			closeModal(modal);
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal.matches(".show")) {
			closeModal(modal);
		}
	});

	// const modalTimerId = setTimeout(openModal, 600000);

	function showModalByScroll() {
		// if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
		// 	openModal(modal);
		// 	window.removeEventListener("scroll", showModalByScroll);
		// }
		if (window.scrollY >= 2000) {
			openModal(modal);
			window.removeEventListener("scroll", showModalByScroll);
		}
	}

	window.addEventListener("scroll", showModalByScroll);
}

// module.exports = modalModule;
export { closeModal, openModal };
export default modalModule;