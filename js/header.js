//===========================<ВСЁ СВЯЗАННОЕ С ШАПКОЙ>====================================================================================================================================================================================================================================================================
/*window.addEventListener("scroll", function (e) {
	if (document.querySelector(".header") && document.querySelector(".page")) {
		let header = document.querySelector(".header")
		let block = document.querySelector(".page")
		let offSet = block.clientHeight;
		let offSetTop = block.getBoundingClientRect().top;
		let cf = 12;

		if (window.pageYOffset > (offSet - offSetTop) / cf) {
			header.classList.add("scroll")
			document.querySelector(".full-screen").classList.add("_scroll")
		} else {
			header.classList.remove("scroll")
			document.querySelector(".full-screen").classList.remove("_scroll")
		}
	}
})
*/
//===============================================================================================================================================================================================================================================================================================
if (document.querySelector(".header")) {
	const headerElement = document.querySelector(".header");
	const callback = function (entries, observer) {

		//	if (entries[0].isInteresting) {

		//		headerElement.classList.remove('_scroll')

		//	} else {
		if (headerElement.classList.contains("_scroll")) {
			headerElement.classList.remove("_scroll")
		} else {
			headerElement.classList.add("_scroll")
		}
		//}
	};
	const headerObserver = new IntersectionObserver(callback)
	headerObserver.observe(headerElement)
}

//===============================================================================================================================================================================================================================================================================================

//=========================ДЕЛАЕМ=HOVER=НА=ССЫЛКИ=В=HEADER======================================================================================================================================================================================================================================================================
const links = document.querySelectorAll("[data-link]");
	//При наведении
/*
links.forEach((link) => {
	link.addEventListener("mouseover", function (e) {
		if (!e.target.classList.contains("tdu")) {
			e.target.classList.add("tdu")
		}
		link.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("lock")) {
				e.target.classList.remove("tdu")
			}
		})
	})
})
*/
	//При клике
/*
if (links.length > 0) {
	for (let index = 0; index < links.length; index++) {
		const element = links[index];
		element.addEventListener("click", removeActiveClass);
		element.addEventListener("click", setActiveLink);
		element.addEventListener("mouseout", removeActiveClass);
	}
	function removeActiveClass(e) {
		document.querySelector("[data-link].active")
	}
	function setActiveLink(e) {
		e.target.classList.add("active")
	}
}
*/





