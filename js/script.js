const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();


const menuItemMobile = document.querySelector('.menu-items-mobile');
const mobileMenBoard = document.querySelector('.mobile-menu-board');
const menuFlags = document.querySelector('.menu-flags')

mobileMenBoard.addEventListener('click', function (){
    if(this.classList.contains(active)){
        this.classList.remove(active);
        menuItemMobile.classList.remove(active);
        menuFlags.classList.remove('active')
        document.body.style.overflow = null;
    } else {
        this.classList.add(active);
        menuItemMobile.classList.add(active);
        menuFlags.classList.add('active')
        document.body.style.overflow = 'hidden';
    }
})

const menu = document.getElementById('menu')

window.addEventListener('scroll', (e)=>{
    if(window.scrollY >= 15){
        menu.classList.add(active)
    } else {
        menu.classList.remove(active)
    }
})


