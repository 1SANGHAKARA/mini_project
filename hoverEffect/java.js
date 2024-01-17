var rect=document.querySelector("#center")

rect.addEventListener("mousemove",function(details){
    var rectinfo=rect.getBoundingClientRect();
    var result= Math.floor(details.clientX-rectinfo.left);  
    // console.log(result)
    if(result < rectinfo.width/2){
        var redcolor=Math.floor(gsap.utils.mapRange(0,rectinfo.width/2,255,0,result))
        console.log(redcolor)
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
        
            
        });
    }
    else if(result==rectinfo.width/2)
    {
        gsap.to(rect,{
            backgroundColor:"white"
        })
    }
   else {
    var bluecolor=Math.floor(gsap.utils.mapRange(rectinfo.width/2,rectinfo.width,0,255,result))
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`
    })


   }


})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})