(function (){
	var html = document.querySelector('html');
	var btn = document.querySelector('.header-nav__hamburgger');

	btn.addEventListener('click', function (){
		html.classList.toggle('menu-opened');
	});
})();