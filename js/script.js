const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav__item')

function showNav (){
    nav.classList.toggle('nav--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () =>{
            nav.classList.remove('nav--active')
            allNavItems.forEach(item =>{
                item.classList.remove('nav-animation')
            })
        })
    })

    navAnimation();
}

function navAnimation (){

    let delayTime=1;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-animation')
        item.style.animationDelay= '.' + delayTime + 's';
        delayTime++;
    })
}

burgerBtn.addEventListener('click', showNav)
