let deltascroll=0
const loginref=document.getElementById("2login")
const signupref=document.getElementById("2signup")
loginref.addEventListener('click',(e)=>{
    document.getElementById('login').classList.remove('hide')
    document.getElementById('signup').classList.add('hide')

})
signupref.addEventListener('click',(e)=>{
    document.getElementById('login').classList.add('hide')
    document.getElementById('signup').classList.remove('hide')

})
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