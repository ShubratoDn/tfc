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