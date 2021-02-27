
document.addEventListener('DOMContentLoaded',function(){
    console.log("loading완료");
    // phone();
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

document.addEventListener('scroll', function(){
    //console.log(document.documentElement.scrollTop); //스크롤 움직일 때마다 console
    //scroll event로 스크롤이 해당 영역 될 때에 header의 글자 색깔이 바뀌게 만들기
    var scrollEvent = document.documentElement.scrollTop;
    var contentHeader = document.getElementById("content-header");
   
    if(scrollEvent>0){
        contentHeader.style.boxShadow="0 0 15px #529cf4";
        contentHeader.style.backgroundColor="#529cf4";
    }
    else if(scrollEvent===0){
        contentHeader.style.boxShadow="none";
        contentHeader.style.backgroundColor="#11ffee00";
        
    }
});
