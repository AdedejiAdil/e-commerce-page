const small1 = document.querySelector('.card-1')
const small2 = document.querySelector('.card-2')
const small3 = document.querySelector('.card-3')
const small4 = document.querySelector('.card-4')
const bigImage = document.querySelector('.big-img')

const hamburgerMenu = document.querySelector('.hamburger-menu')
const menuDisplay = document.querySelector('.menu-display')
const closeMenu = document.querySelector('.close-menu')

const addToCart = document.querySelector('.add')
const cartValue = document.querySelector('.cart-num')



const Image = [
    'f1.jpg', 'f2.jpg', 
    'f3.jpg', 'f4.jpg'
]
let i = 0

let counter = 0
// PRODUCT IMAGE CHANGER
small1.addEventListener('click', () => {
    if(bigImage.style.backgroundImage = `url(products/${Image[i]})`) {
        bigImage.style.backgroundImage = `url(products/${Image[0]})`
    }
})
small2.addEventListener('click', () => {
    if(bigImage.style.backgroundImage = `url(products/${Image[i]})`) {
        bigImage.style.backgroundImage = `url(products/${Image[1]})`
    }
})
small3.addEventListener('click', () => {
    if(bigImage.style.backgroundImage = `url(products/${Image[i]})`) {
        bigImage.style.backgroundImage = `url(products/${Image[2]})`
    }
})
small4.addEventListener('click', () => {
    if(bigImage.style.backgroundImage = `url(products/${Image[i]})`) {
        bigImage.style.backgroundImage = `url(products/${Image[3]})`
    }
})


//NAV TOGGLE
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

//ADD TO CART
addToCart.addEventListener('click', () => {
    counter ++
    if(counter > 0){
        cartValue.innerHTML = counter
    }
})