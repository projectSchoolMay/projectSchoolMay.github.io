
let bg = document.querySelectorAll('[parallax-item]');
for (let i = 0; i < bg.length; i++) {
	const oneBg = bg[i];
	oneBg.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		oneBg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});

}


