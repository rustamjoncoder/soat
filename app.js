let clock=document.querySelector('.clock');
let hour=document.querySelector('.hours');
let min=document.querySelector('.minutes');
let secund=document.querySelector('.seconds');
let timeStatus=document.querySelector('.timeStatus');
let buttons=document.querySelectorAll('button');
let format;
function clockFunc(){
    let format=clock.getAttribute('data-madina');
    // console.log(format);
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    if(format==='12'){
        h=h>12?h%12:h;
    }
    // console.log(h,m,s);
    hour.innerHTML=h<10?'0'+h:h; 
    min.innerHTML=m<10?'0'+m:m;
    secund.innerHTML=s<10?'0'+s:s;
    
}
// clockFunc();
setInterval(clockFunc,1000);

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target);
        format=button.getAttribute('data-madina');
        // console.log(format);
        clock.setAttribute('data-madina',format)
    })
})
// setTimeout(clockFunc,1000)