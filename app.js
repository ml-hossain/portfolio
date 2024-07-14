document.addEventListener("DOMContentLoaded", () => {

    let hamBurger = document.querySelector(".hamburger");
let navBar = document.querySelector(".navMenu");

hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("openHam");
    navBar.classList.toggle("openUl");
    });
 document.querySelectorAll('.navMenu a').forEach(link => {
    link.addEventListener('click' ,() => {
        hamBurger.classList.remove("openHam");
        navBar.classList.remove("openUl")
    });
    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');
    window.onscroll=()=>{
        section.forEach(sec=>{
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')
            if(top>offset && top<offset + height){
                navLinks.forEach(links=>{
                    links.classList.remove('active')
                    document.querySelector('nav ul li a[href*='+id+']').classList.add('active')
                })
            }
        })
    }
 })

})

