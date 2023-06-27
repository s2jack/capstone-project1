/* Mobile Menu Interaction */
const hamburgerIcon = document.querySelector('#hamburger-icon')
const menuContainer = document.querySelector('#menu-container')
const menuList = document.querySelector('#menu-list')
const body = document.getElementsByTagName('body')[0]
const menuElements = document.getElementsByClassName('menu-element')
const closeIcon = document.querySelector('#closeIcon')
const logo = document.querySelector('#logo-container')

const openMobileMenu = () => {
  body.style = 'overflow: hidden;'
  menuContainer.style = 'display: flex; flex-direction: column; z-index: 1; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0;'
  menuContainer.classList.add('light-bg')
  closeIcon.style = 'display: block'
  menuList.style = 'display: flex; flex-direction: column; gap: 14px; padding: 24px 0 0 16px;'

  Array.prototype.forEach.call(menuElements, function (element) {
    element.classList.add('lato')
    element.classList.add('white')
    element.style = 'font-size: 32px'
  });

  Array.prototype.forEach.call(menuElements, function (element) {
    element.addEventListener('click', closeMobileMenu)
  });

  const aboutLink = menuElements[0]
  const programLink = menuElements[1]
  
  programLink.addEventListener('click', function () {
    window.location.href = '#program'
  })

  aboutLink.addEventListener('click', function() {
    window.location.href = 'about.html'
  })
  closeIcon.addEventListener('click', closeMobileMenu)
}

const closeMobileMenu = () => {
  body.style = ''
  menuContainer.style = 'display: none'
  menuContainer.classList.remove('light-bg')
}


logo.addEventListener('click', function() {
  window.location.href = 'index.html'
})

hamburgerIcon.addEventListener('click', openMobileMenu)