
document.addEventListener('DOMContentLoaded',function(){
    console.log("loading완료");
    phone();
});

function phone(){
    var mo = window.matchMedia("screen and (max-width:757px)")
    if(mo.matches==true){
        document.getElementById("bg-img").src = "/bg-phone.06e8c994.png";
        console.log("phone");
    }else{
        console.log("tablet or desktop");
    }
}
