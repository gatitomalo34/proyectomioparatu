const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click", function (){
    alert("no me salio tan bien el programa pero da igual xd,te amo mocosa ,gracias por aguantar mis estupideces <3")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})