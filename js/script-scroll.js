const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockId = anchor.getAttribute('href')
		document.querySelector('' + blockId).sccrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
