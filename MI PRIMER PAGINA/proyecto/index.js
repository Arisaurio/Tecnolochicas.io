const navTogg = document.querySelector(".nav-toggler")
const navMenu = document.querySelector(".nav-menu")
navToggle.addEventListener(click,()=>{
    navMenu.classList.toggle("nav-menu_visible");
    if(navMenu.classList.contains("nav-menú_invisible")){
        navToggle.setAttribute("aria-label","cerrar menú");
    } else{
        navToggle.setAttribute("aria-label","Abrir menú");
    }
})



let app=document.getElementByld(typewriter);
lettypewriter=new typewriter(app,{
    loop: true,
    delay:75,
});
typewriter
.pauseFor(2500)
.typeString(Portafolio)
.pauseFor(200)
.deleteChars(10)
.start();