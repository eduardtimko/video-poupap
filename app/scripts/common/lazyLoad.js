let element = document.querySelectorAll('.lazy');
let lazyLoad = function (target) {
	let windowPosition = {
		top: window.pageYOffset,
		left: window.pageXOffset,
		right: window.pageXOffset + document.documentElement.clientWidth,
		bottom: window.pageYOffset + document.documentElement.clientHeight
	};
	for (let i = 0; i < target.length; i++) {
		if (window.pageYOffset + target[i].getBoundingClientRect().top >= windowPosition.top && window.pageYOffset + target[i].getBoundingClientRect().top < windowPosition.bottom) {
			let src = target[i].getAttribute('data-background-image');
			target[i].style.backgroundImage = `url(${src})`;
		}
	}
};

lazyLoad(element);
window.addEventListener('scroll', function () {
	lazyLoad(element);
});
