const buttonMenu =  document.querySelector(".header__nav")
const menuVisible = document.querySelector(".header__nav-inner") 

buttonMenu.addEventListener (("click"), () => {

menuVisible.classList.toggle("mobile-menu");
})
