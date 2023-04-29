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