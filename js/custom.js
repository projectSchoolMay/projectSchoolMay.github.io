
//=====================КАСТОМНЫЕ СЕЛЕКТЫ==========================================================================================================================================================================================================================================================================
const dropMenus = document.querySelectorAll("[drop-menu]");
if (dropMenus.length > 0) {
	for (let index = 0; index < dropMenus.length; index++) {
		const dropMenu = dropMenus[index];
		dropMenu.addEventListener("click", function (e) {
			const dropMenuList = dropMenu.querySelector("[drop-menu-list]")
			const dropMenuButton = dropMenu.querySelector("[drop-menu-button]");
			const dropMenuLinks = dropMenu.querySelectorAll("[drop-menu-link]");
			dropMenuList.classList.toggle("active")
			if (dropMenuButton.tagName == 'BUTTON') {

				for (let index = 0; index < dropMenuLinks.length; index++) {
					const dropMenuLink = dropMenuLinks[index];
					dropMenuLink.addEventListener("click", function (e) {
						dropMenuButton.innerHTML = dropMenuLink.innerHTML;
						dropMenuList.classList.add("active")
						e.preventDefault()
					})
				}

			}
			else if (dropMenuButton.tagName == 'INPUT') {
				if (dropMenuLinks.length > 0) {
					for (let index = 0; index < dropMenuLinks.length; index++) {
						const dropMenuLink = dropMenuLinks[index];
						dropMenuLink.addEventListener("click", function (e) {
							dropMenuButton.removeAttribute("value");
							dropMenuButton.setAttribute("value", dropMenuLink.innerHTML)
							dropMenuList.classList.add("active")
							e.preventDefault()
						})
					}
				}
			}


		})
	}
}

//=================НАВИГАЦИЯ ПО САЙТУ==============================================================================================================================================================================================================================================================================
const linksTo = document.querySelectorAll("[data-goto]");

if (linksTo.length > 0) {
	for (let index = 0; index < linksTo.length; index++) {
		const linkTo = linksTo[index];
		linkTo.addEventListener("click", linkClickTo)

	}
	function linkClickTo(e) {
		const linkTo = e.target;
		if (linkTo.dataset.goto && document.querySelector(linkTo.dataset.goto)) {
			const gotoBlock = document.querySelector(linkTo.dataset.goto);
			const gotoBlockCoordinate = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header").offsetHeight;

			window.scrollTo({
				top: gotoBlockCoordinate,
				behavior: "smooth",
			});
			e.preventDefault()
		}
	}
}




