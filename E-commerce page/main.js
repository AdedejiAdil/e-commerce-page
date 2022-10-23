const hamburgerMenu = document.querySelector('.hamburger-menu')
const menuDisplay = document.querySelector('.menu-display')
const closeMenu = document.querySelector('.close-menu')

const cardImage = document.querySelector('.product-page')

hamburgerMenu.addEventListener('click', () => {
    if(hamburgerMenu.style.display = 'visible'){
        menuDisplay.classList.remove('hidden')
        menuDisplay.classList.add('visible')
    }
})
closeMenu.addEventListener('click', () => {
    if(menuDisplay.classList.contains('menu-display')) {
        menuDisplay.classList.add('hidden')
        menuDisplay.classList.remove('visible')
    }
    console.log(menuDisplay)
})

// CLICK CARD TO TAKE YOU TO PRODUCT PAGE
cardImage.addEventListener('click', () => {
    window.location.href ='product.html'
})