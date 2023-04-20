//your JS code here. If required.

let timer = document.querySelector('#timer')
setInterval(() => {
	let now = new Date()
	
	let date = now.getDate()
	let month = now.getMonth()
	let year = now.getFullYear()

	let hour = now.getHours()
	let minutes = now.getMinutes()
	let seconds = now.getSeconds()

	let time = now.toLocaleTimeString()
	timer.innerText = `${month}/${date}/${year}, ${time}`
}, 1000)