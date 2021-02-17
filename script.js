
const backToTop = document.querySelector('#back-to-top')
const mobileButton = document.querySelector('#mobile-button')
const mobileMenu = document.querySelector('#mobile-menu')
const exitMenu = document.querySelector('#exit-menu')
const mobileItems = document.querySelectorAll('#mobile-menu li')

mobileButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('nav__menu-mobile-hidden')
    mobileMenu.classList.toggle('nav__menu-mobile')
})

mobileItems.forEach(item => {
    item.addEventListener('click', function () {
        mobileMenu.classList.toggle('nav__menu-mobile')
        mobileMenu.classList.toggle('nav__menu-mobile-hidden')
    })
})


window.addEventListener('scroll', function () {
    if (window.scrollY > 100 && window.outerWidth > 700) {
        backToTop.style.right = '0'
    } else if (window.scrollY < 100 || window.outerWidth < 700) {
        backToTop.style.right = '-105px'
    }
    backToTop.addEventListener('click', function () {
        window.scroll(0, 0)
    })
})
