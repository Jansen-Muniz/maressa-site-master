let menuMobile = document.querySelector('.menu-responsivo')
let icon = document.querySelector('.icone')

const menuMobileButton = document.querySelector('.botao-menu-responsivo')

menuMobileButton.addEventListener('click', () => {
  if (menuMobile.classList.contains('abrir')) {
    menuMobile.classList.remove('abrir')
    icon.setAttribute('src', 'assets/svg/menu_white_36dp.svg')
    return
  }

  menuMobile.classList.add('abrir')
  icon.setAttribute('src', 'assets/svg/close_white_36dp.svg')
})