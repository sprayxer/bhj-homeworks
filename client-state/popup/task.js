function getCookie(name) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
if (getCookie('modalClose') !== 'true') {
	const modal = document.querySelector('.modal');
	modal.classList.add('modal_active');
	const close = document.querySelectorAll('.modal__close_times');
	close[0].onclick = function () {
		modal.classList.remove('modal_active');
		document.cookie = 'modalClose=true';
	}
}


