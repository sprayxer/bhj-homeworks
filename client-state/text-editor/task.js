const inputText = document.getElementById('editor')

// если localStorage не равно null, то заполняем содержимое текстом из localStorage
if (localStorage.getItem('text') !== null) {
	inputText.value = localStorage.getItem('text');
}

// сохраняем введенный текст в localStorage
document.addEventListener('keyup', function () {
	localStorage.setItem('text', inputText.value);
});

// очистить localStorage
document.getElementById('clear').addEventListener('click', function() {
	localStorage.clear();
	inputText.value = '';
});

