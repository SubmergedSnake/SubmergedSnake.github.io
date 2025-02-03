Object.values(document.getElementsByClassName('logo')).forEach((logo, _) => {
	logo.addEventListener('click', rotate)
})

function rotate({ target }) {
	target.classList.remove('logo')
	setTimeout(() => { target.classList.add('logo') }, 100)
}
