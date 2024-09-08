let deltascroll=0
window.addEventListener('scroll',(e)=>{
    const navbar=document.getElementById("navbar")
    let diff=Math.abs(window.scrollY-deltascroll)

    if(diff>50){
        if((window.scrollY-deltascroll)>0)
                navbar.classList.add("hide")
        deltascroll=window.scrollY
    }else if((window.scrollY-deltascroll)<0)
        navbar.classList.remove('hide')
})