window.addEventListener("mousemove",function(details)
{
    var re=this.document.querySelector("#center")
    
    var xvalue= gsap.utils.mapRange(0,window.innerWidth,100+re.getBoundingClientRect().width,window.innerWidth-100-re.getBoundingClientRect().width,details.clientX)
    gsap.to("#center",{
        left:xvalue,
        top:details.clientY
       
    })
})