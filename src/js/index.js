var m = window.matchMedia("screen and (max-width:757px)")


document.addEventListener('DOMContentLoaded',function(){
    console.log("loading완료");
    console.log(m.media);
    console.log(m.matches);
    phone();
});

function phone(){
    if(m.matches==true){
        document.getElementById("bg-img").src = "/bg-phone.06e8c994.png";
        console.log("phone");
    }else{
        console.log("tablet or desktop");
    }
}
