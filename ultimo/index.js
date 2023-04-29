let app=document.getElementByld(typewriter);

let typewriter=new typewriter(app,{
    loop: true,
    delay:75,
});
typewriter
.pauseFor(2500)
.typeString(Portafolio)
.pauseFor(200)
.deleteChars(10)
.start();