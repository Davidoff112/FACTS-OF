// DARK AND LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

if(themeButton) {
	themeButton.addEventListener('click', () => {
		document.body.classList.toggle(darkTheme)
	})
}

//FOR SCROLLUP BUTTON
function scrollUp() {
	
	const scrollUp = document.getElementById('scroll-up')

	if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// FOR NAVIFATION 
const nav = document.getElementById('header-list')
const navButton = document.getElementById('nav-button')
const links = document.querySelectorAll('.links')
const header = document.getElementById('header')

if(navButton) {
	navButton.addEventListener('click', () => {
		nav.classList.toggle('header__list2')
		nav.classList.toggle('header__list')
		header.classList.toggle('header-not-opacity')
	})
}

links.forEach(l => l.addEventListener('click', () => {
	// links.forEach(el => el.href = '#')
	nav.classList.remove('header__list2')
	nav.classList.add('header__list')
	header.classList.remove('header-not-opacity')
}))


// FOR MEDIAQUERIE (MIN - MAX 600PX)
const mediaQuery = window.matchMedia('(min-width: 600px)');

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    nav.classList.remove('header__list2')
	header.classList.remove('header-not-opacity')
	nav.classList.add('header__list')
  }
}

mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

// FOR SWIPER
let swiper = new Swiper(".mySwiper", {
	cssMode: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,

	},
	mousewheel: true,
	keyboard: true,
});