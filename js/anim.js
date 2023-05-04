//Анимация при скролле



const anim_items = document.querySelectorAll("._anim-items");


if (anim_items.length > 0) {

	window.addEventListener("scroll", animScroll);

	function animScroll() {
		anim_items.forEach((anim_item) => {
			const animHeight = anim_item.offsetHeight;
			const animTop = offSet(anim_item).top;
			const cf = 4;



			let anim_point = window.innerHeight - animHeight / cf;

			if (animHeight > window.innerHeight) {
				anim_point = window.innerHeight - window.innerHeight / cf;
			}
			if ((window.pageYOffset > animTop - anim_point) && window.pageYOffset < (animTop + animHeight)) {

				anim_item.classList.add("_active")

			} else {
				if (!anim_item.classList.contains("_anim-no-hide")) {
					anim_item.classList.remove("_active")
				}
			}
		})
	}
	setTimeout(() => {
		animScroll()
	}, 300);

	function offSet(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


}





