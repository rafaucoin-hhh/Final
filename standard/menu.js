const navSlide = () =>{
    const menu = document.querySelector('#cv');
    const close = document.querySelector('#close')
    const nav = document.querySelector('.nav-links');
    const scroll = document.querySelector('body');
    menu.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
        console.log("1");
        scroll.classList.toggle('active'); 
    });
    close.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
        console.log("1");
        scroll.classList.toggle('active');
    });
}
navSlide();
