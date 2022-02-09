fetch('https://icanhazdadjoke.com/slack')
	.then((data) => data.json())
	.then((jokeData) => {
		const jokeText = jokeData.attachments[0].text;
		const jokeDisplay = document.querySelector('#jokeDisplay');
		jokeDisplay.innerHTML = jokeText;
	});

const refreshButton = document.querySelector('#refreshBtn');
refreshButton.addEventListener('click', () => {
	window.location.reload();
});
