// FOR DATA AOS
AOS.init();

/* ================================== */
            /*   NAV BAR  */
/* ================================== */

// SHOW/HIDE LOGIN MODAL
var modal = document.querySelector(".modal-box");
function  showModal(){
    modal.style.display = "flex";    
}

window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
// SHOW/HIDE MODAL



/* ====================================== */
        /*  Landing Page Carousel  */
/* ====================================== */
var nextIcon = "<i class=' fa fa-angle-right'></i>";
var prevIcon = "<i class=' fa fa-angle-left'></i>";

$('#land-page .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        5000:{
            items:1,
            nav:false
        }
    }
})



/* ====================================== */
        /*  CATGORIES  Carousel  */
/* ====================================== */


$('#catagories .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,       
        },
        425:{
            items: 2,
        },        
        768:{
            items: 3,
        },
        992:{
            items:5,
        }
    }
})








/* ====================================== */
        /*  FEATURES  Carousel  */
/* ====================================== */


$('#feature .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,       
        },
        425:{
            items: 2,
        },        
        768:{
            items: 3,
        },
        992:{
            items:5,
        }
    }
})







/* ====================================== */
        /*  DEAL FOR TODAY CAROUSEL  */
/* ====================================== */
var nextIcon = "<i class=' fa fa-angle-right'></i>";
var prevIcon = "<i class=' fa fa-angle-left'></i>";

$('#deal-today .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    dots:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1,
        }
    }
})







/* ====================================== */
        /*DEAL FOR TODAY COUNT DOWN   */
/* ====================================== */

// Set the date we're counting down to
var countDownDate = new Date("sep 25, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  

//   getting the length of all class
  var dealLen = document.querySelectorAll(".cd-sec").length;
  
  for(var i=1; i<=dealLen; i++){
    document.querySelectorAll(".cd-day")[i].innerHTML = days;
    document.querySelectorAll(".cd-hour")[i].innerHTML = hours;
    document.querySelectorAll(".cd-min")[i].innerHTML = minutes;
    document.querySelectorAll(".cd-sec")[i].innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.querySelectorAll(".count-down")[i].innerHTML = "EXPIRED";
    }
  }

  
}, 1000);








/* ====================================== */
        /*PRODUCT QUANTITY BUTTON */
/* ====================================== */

// =======================================================



// var quanUp = document.querySelectorAll(".quan-up");
// var quanDown = document.querySelectorAll(".quan-down");
// var quanInput = document.querySelectorAll(".quan-input");



// var fcardLen = document.querySelectorAll(".food-item").length;

// for(var i=0; i<fcardLen; i++){
//     var quantity = quanInput[i].value;

//     quanUp[i].addEventListener('click', function(){
//         quanValUp(i);
//     });

//     quanDown[i].addEventListener('click',function(){
//         quanValDown();        
//     });
// }




// function quanValUp(){  

//     quantity++;    
//     quanInput[i].value = quantity;
//     // if(quantity >= 99){
//     //     quantity = quantity - 1;
//     // }

// };

// function quanValDown(){

//     // for(var i=0; i<fcardLen; i++){
//     //     quantity--;    
//     //     quanInput[i].value = quantity;
//     //     if(quantity <= 0){
//     //         quantity = quantity + 1;
//     //     }
//     // }

// };



// ===================================

var quanUp = document.querySelectorAll(".quan-up");
var quanDown = document.querySelectorAll(".quan-down");
var quanInput = document.querySelectorAll(".quan-input");

// number of all Item card 
var fcardLen = document.querySelectorAll(".food-item").length;
var quantity = [];


for(var i=0; i<fcardLen; i++){
    
    quantity[i] = quanInput[i].value;
   

    // Increase quantity value
    quanUp[i].addEventListener('click', function(){
        quanValUp();
    });


    // decrease quantity value
    quanDown[i].addEventListener('click',function(){
        quanValDown();
    });
}




function quanValUp(){
    for(var i=0; i<fcardLen; i++){
        quantity[i]++;
        quanInput[i].value = quantity[i];
        if(quantity[i] >= 99){
            quantity[i] = quantity[i] - 1;       
        }
    }   
};


function quanValDown(){
    for(var i=0; i<fcardLen; i++){
        quantity[i]--;    
        quanInput[i].value = quantity[i];
        if(quantity[i] <= 0){
            quantity[i] = quantity[i] + 1;       
        }
    }   
};








/* ====================================== */
        /*  Product Recommendation  */
/* ====================================== */

$('#recommend-item-section .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:20,
    dots:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1,
        },
        400:{
            items:2,
        },
        600:{
            items:3,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
})









