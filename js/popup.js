//Попап
/*
const popupContent = document.querySelector(".popup__content");
const body = document.body;
const popup = document.querySelector(".popup");
const popupLinks = document.querySelectorAll(".popup__link");
const popupClose = document.querySelectorAll(".popup__close");
if (popupLinks.length > 0) {
	popupLinks.forEach(popupLink => {
		popupLink.addEventListener("click", function (e) {
			const popup = document.querySelector(".popup");
			popupOpen(popup)
			e.preventDefault();
		})
	})
}
if (popupClose.length > 0) {
	popupClose.forEach(popupCloseIcon => {
		popupCloseIcon.addEventListener("click", function (e) {
			popup.classList.remove("active")
			body.classList.remove("scroll-lock")
			e.preventDefault();
		})

	})
}

function popupOpen(popup) {
	if (popup) {
		popup.classList.add("active");
		const popupActive = document.querySelector(".popup active")
		body.classList.add("scroll-lock");
		popup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup__content")) {
				popupCloseMenu(e.target.closest(".popup"))
			}
		})
	}
}
function popupCloseMenu(popupActive) {
	body.classList.remove("scroll-lock")
	popupActive.classList.remove("active")
}
*/

/*  HTML

			<div class="popup">
				<div class="popup__body">
					<div class="popup__content">
						<div class="popup__title"></div>
						<div class="popup__close">
						</div>
						<div class="popup__text">
						</div>
					</div>
				</div>
			</div>
*/


//===============================<ПОПАП (ВТОРАЯ ВАРИАЦИЯ)>================================================================================================================================================================================================================================================================


const popupLinks = document.querySelectorAll(".open-popup");
const body = document.querySelector("body")
const lockPadding = document.querySelectorAll(".lock-padding");


let unlock = true

const timeout = 800;
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute("href").replace("#", "");
			const currentPopup = document.getElementById(popupName)
			popupOpen(currentPopup)
			e.preventDefault()
		});
	}
}

const popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest(".popup"))
			e.preventDefault();
		})
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector(".popup._open");
		if (popupActive) {
			popupClose(popupActive, false)
		} else {
			bodyLock();
		}
		currentPopup.classList.add("_open")
		currentPopup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup__body")) {
				popupClose(e.target.closest(".popup"));
			}
		})
	}
}

function popupClose(popupActive, doUnlock = true) {

	if (unlock) {
		popupActive.classList.remove("_open");
		if (doUnlock) {
			bodyUnLock()
		}
	}
}


function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
			body.classList.add("_scroll-lock");
		}
	}
	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, timeout);

}

function bodyUnLock() {
	setTimeout(() => {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px'
			body.classList.remove("_scroll-lock");
		}
	}, timeout);

	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, timeout);
}


//Закрытие по клавише ESC
document.addEventListener("keydown", function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector(".popup._open");
		popupClose(popupActive)
	}
})
