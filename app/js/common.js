document.onreadystatechange = () => {
	if (document.readyState === 'complete') {

		// catSlider
		const slidesList = Array.from(document.getElementById('slidesList').children)
		const prevSlide = document.getElementById('prevSlide')
		const nextSlide = document.getElementById('nextSlide')
		let activeSlide = 0
		let canMove = true
	
		slidesList.forEach(slide => {
			slide.children[0].style.backgroundImage = `url(${slide.dataset.link})`
		});
	
		prevSlide.addEventListener('click', () => {
			if (!canMove) return
			canMove = false
			if (activeSlide === slidesList.length - 1) {
				nextSlide.classList.remove('disabled')
				nextSlide.classList.add('active')
			}
			slidesList[activeSlide].classList.remove('active')
			activeSlide -= 1
			if (activeSlide === 0) {
				prevSlide.classList.add('disabled')
				prevSlide.classList.remove('active')
			}
			setTimeout(() => canMove = true, 350)
		})
	
		nextSlide.addEventListener('click', () => {
			if (!canMove) return
			canMove = false
			if (activeSlide === 0) {
				prevSlide.classList.remove('disabled')
				prevSlide.classList.add('active')
			}
			activeSlide += 1
			slidesList[activeSlide].classList.add('active')
			if (activeSlide === slidesList.length - 1) {
				nextSlide.classList.add('disabled')
				nextSlide.classList.remove('active')
			}
			setTimeout(() => canMove = true, 350)
		})

		// dogSlider

		if (window.innerWidth < 768) {
			let dogSlider = new Siema({
				draggable: false,
				loop: true
			});
		}

		// rabbitSlider

		let rabbitSlider = new Siema({
			selector: '.rabbitSlider',
			// draggable: false,
			perPage: 3,
			loop: true
		});

		console.log(rabbitSlider, '--- rabbitSlider')

		// superSonic

		const superSonicList = Array.from(document.getElementById('superSonic').children)
		const superSonicShow = document.getElementById('superSonicShow')
		let activeSonic = document.getElementById('superSonic').querySelector('.active')

		superSonicList.forEach((sonic, index) => {
			if (index === superSonicList.length - 1) {
				return
			}
			sonic.addEventListener('click', () => {
				let content = sonic.querySelector('.superSonicCnt').cloneNode(true)
				superSonicShow.children[0].remove()
				superSonicShow.appendChild(content)
				sonic.classList.add('active')
				activeSonic.classList.remove('active')
				activeSonic = sonic
			})
		});

		
		// console.log(superSonicList, '--- superSonicList')

	}
};