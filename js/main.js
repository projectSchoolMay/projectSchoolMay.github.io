window.onload = function () {

	document.addEventListener("click", function (e) {
		const targetElement = e.target;
	})
	document.addEventListener("DOMContentLoaded", function (e) {

	});
	//Фукнции для DOM
	//===========PARALLAX ПРИ СКРОЛЛЕ====================================================================================================================================================================================================================================================================================

}
if (document.querySelector(".parallax") && document.querySelector(".content")) {
	window.addEventListener("scroll", function (e) {
		var s = window.pageYOffset;
		var w = window.innerWidth;
		var h = document.querySelector(".content").offsetHeight;
		var h_b = document.querySelector(".parallax").offsetHeight;
		var p = s / h * 100;
		var p_b = s / h_b * 100;
		var o = 1 - 1 / 100 * p_b;

		var z_1 = 1 + (w / 10000 * p_b)
		let fog = document.querySelector(".parallax__fog");
		let mountain_1 = document.querySelector(".parallax__mountain_1")
		let mountain_2 = document.querySelector(".parallax__mountain_2")
		let mountain_3 = document.querySelector(".parallax__mountain_3")
		fog.style.transform = 'scale(' + z_1 + ')';
		fog.style.opacity = o;
		var z_2 = 1 + (w / 50000000 * p)
		mountain_1.style.transform = 'scale(' + z_2 + ')';


		mountain_2.style.transform = 'scale(' + z_2 + ')';

		mountain_3.style.transform = 'scale(' + z_2 + ')';
		var hr = w / 2000 * p_b
		var z_3 = 1 + (w * 0.000005 * p_b)
		mountain_2.style.transform = 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')';

		var hr_2 = w / 1500 * p_b
		var z_4 = 1 + (w * 0.00001 * p_b)
		mountain_3.style.transform = 'translate3d(' + hr_2 + 'px,0,0) scale(' + z_4 + ')';

	})

}




