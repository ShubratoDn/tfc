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
    autoplay:false,
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