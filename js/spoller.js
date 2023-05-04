//СПОЙЛЕР аккордеон

const spollersArray = document.querySelectorAll("[data-spollers]");
//Получаем обычные спойлеры
if (spollersArray.length > 0) {
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, array) {
		return !item.dataset.spollers.split(",")[0];
	})

	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	//Получаем спойлеры с параметрами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, array) {
		return item.dataset.spollers.split(",")[0];
	})

	//Получаем спойлеры с медиазапросами, а именно их параметры 650,min
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];

		spollersMedia.forEach(function (item, index, array) {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);

		});

		//Получаем повторения спойлеров с медиазапросами
		let mediaQueries = breakpointsArray.map(function (item, index, array) {
			return '(' + item.type + '-width: ' + item.value + 'px' + '),' + item.value + ',' + item.type;
		})

		mediaQueries = mediaQueries.filter(function (item, index, array) {
			return array.indexOf(item) === index;
		})


		//Работа с каждым брейкпоинтом
		mediaQueries.forEach(item => {
			const paramsArray = item.split(",")
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]) //Здесь получаем ту строку (max-width: 800px)

			//Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item, index, array) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			})
			//Событие
			matchMedia.addListener(() => {
				initSpollers(spollersArray, matchMedia);
			})
			initSpollers(spollersArray, matchMedia)
		})
	}
}




//Функция initSpollers


function initSpollers(spollersArray, matchMedia = false) {
	spollersArray.forEach(function (spollersBlock, index, array) {
		spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
		if (matchMedia.matches || !matchMedia) {	//matchMedia.matches означает, что брейкпоинт сработал
			spollersBlock.classList.add("_init");
			initSpollerBody(spollersBlock);
			spollersBlock.addEventListener("click", setSpollerAction);

		} else {
			spollersBlock.classList.remove("_init");
			initSpollerBody(spollersBlock, false);
			spollersBlock.removeEventListener("click", setSpollerAction);
		}


	})
};
//Работа с контентом


function initSpollerBody(spollersBlock, hideSpollerBody = true) {
	const spollersTitles = spollersBlock.querySelectorAll("[data-spoller]")
	if (spollersTitles.length > 0) {
		spollersTitles.forEach(function (spollerTitle) {
			if (hideSpollerBody) {
				spollerTitle.removeAttribute("tabindex");
				if (!spollerTitle.classList.contains("_active")) {
					spollerTitle.nextElementSibling.hidden = true;
				} else {
					spollerTitle.setAttribute("tabindex", "-1");
					spollerTitle.nextElementSibling.hidden = false;
				}
			}
		})
	}
};


function setSpollerAction(event) {
	const el = event.target;
	if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
		const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]')
		const spollersBlock = spollerTitle.closest('[data-spollers]');
		//const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
		if (!spollersBlock.querySelectorAll('._slide').length) {
			if (spollersBlock && !spollerTitle.classList.contains("_active")) {
				hideSpollerBody(spollersBlock);
			}
			spollerTitle.classList.toggle("_active");
			_slideToggle(spollerTitle.nextElementSibling, 500)
		}
		event.preventDefault();
	}
};


function hideSpollerBody(spollersBlock) {
	const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._active");
	if (spollerActiveTitle) {
		spollerActiveTitle.classList.remove("_active");
		_slideUp(spollerActiveTitle.nextElementSibling, 500)


	}
};




let _slideUp = (target, duration = 500) => {

	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide")
		target.style.transitionProperty = 'all';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove("_slide")
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide")
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.transitionProperty = "all";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove("_slide")

		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}



