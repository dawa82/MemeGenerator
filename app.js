const form = document.querySelector('#memeForm');
const newMemeContainer = document.querySelector('#newMemeContainer');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const boxContainer = document.createElement('div');

	const removeBtn = document.createElement('button');
	removeBtn.className = 'remove';
	removeBtn.innerText = 'Remove';

	removeBtn.addEventListener('click', function(e) {
		if (e.target.tagName === 'BUTTON') {
			e.target.parentElement.remove();
		}
	});

	const newMemeImage = document.createElement('img');
	const url = document.querySelector('input[name="imgUrl"]').value;
	newMemeImage.setAttribute('src', url);

	const newTextOnTop = document.createElement('div');
	newTextOnTop.classList = 'top-center';
	newTextOnTop.innerText = document.querySelector('input[name="textOnTop"]').value;
	newTextOnTop.style.color = document.querySelector('input[name="color"]').value;
	newTextOnTop.style.fontSize = document.querySelector('input[name="fontsize"]').value + 'px';

	const newTextOnBottom = document.createElement('div');
	newTextOnBottom.classList = 'bottom-center';
	newTextOnBottom.innerText = document.querySelector('input[name="textOnBottom"]').value;
	newTextOnBottom.style.color = document.querySelector('input[name="color"]').value;
	newTextOnBottom.style.fontSize = document.querySelector('input[name="fontsize"]').value + 'px';

	newMemeContainer.append(boxContainer);
	boxContainer.append(newTextOnTop);
	boxContainer.append(newMemeImage);
	boxContainer.append(newTextOnBottom);
	form.reset();
	boxContainer.appendChild(removeBtn);
});
