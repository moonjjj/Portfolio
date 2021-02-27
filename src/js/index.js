
document.addEventListener('DOMContentLoaded',function(){
    console.log("loading완료");
    phone();
});

function phone(){
    var mo = window.matchMedia("screen and (max-width:757px)")
    if(mo.matches==true){
        document.getElementById("bg-img").src = "src/img/bg-phone.png";
        console.log("phone");
    }else{
        console.log("tablet or desktop");
    }
}
