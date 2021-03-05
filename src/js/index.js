$(document).ready(function(){
    console.log("hi");
});

document.addEventListener('DOMContentLoaded',function(){
    console.log("loading완료");
    // phone();
    // slide();
    // setInterval(slide, 2000);

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
    // console.log(document.documentElement.scrollTop); //스크롤 움직일 때마다 console
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

function scrollDiv(e){
    var main1 = document.getElementById("main1");
    var main2 = document.getElementById("main2");
    var main3 = document.getElementById("main3");
    var main4 = document.getElementById("main4");

    // console.log(e.target);
    if(e.target.innerHTML=="main" || e.target.className == "logo-img"){
        main1.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});
    }
    else if(e.target.innerHTML=="history"){
        main2.scrollIntoView({behavior:"smooth",inline:"nearest"});
    }
    else if(e.target.innerHTML=="hobby"){
        main3.scrollIntoView({behavior:"smooth",inline:"end"});
    }
    else if(e.target.innerHTML=="skill"){
        main4.scrollIntoView({behavior:"smooth",inline:"end"});
    }
}


//   const SHOWING_CLASS="showing";
//   const firstSlide = document.querySelector(".box-container:first-child");
//   function slide(){
//     const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
//     if(currentSlide){
//         currentSlide.classList.remove(SHOWING_CLASS);
//         const nextSlide = currentSlide.nextElementSibling;
//         if(nextSlide){
//             nextSlide.classList.add(SHOWING_CLASS);
//         }
//         else{
//             firstSlide.classList.add(SHOWING_CLASS);
//         }
//     }else{
//         firstSlide.classList.add(SHOWING_CLASS);
//     }
//   }

  //slick slider
//   $('#slider').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
$('.box-inner').slick({
    arrows:false,
    autoplay:true,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });        

 