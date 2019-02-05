var modal = document.getElementById('Mymodal');

var signup=document.getElementById('signup');

var btn = document.getElementById("myBtn");

var signupbtn = document.getElementById("signupBtn");

var span1 = document.getElementsByClassName("close1")[0];

var span2 = document.getElementsByClassName("close2")[0];
 
btn.onclick = function() {
    modal.style.display = "block";
}
span1.onclick = function() {
    	modal.style.display="none";
}

span2.onclick = function() {
    	signup.style.display="none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if(event.target==signup){
    	signup.style.display="none";
   }
}

			// For Sign up modal


signupbtn.onclick = function() {
    signup.style.display = "block";
}


         //For carousel


var slide_index = 0;   
  
showSlides();

function nextSlide(n) {  
displaySlides(slide_index += n);  
        
}  
  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
  
function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}  

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slide_index++;
    if (slide_index > slides.length) {slide_index = 1}    

    slides[slide_index-1].style.display = "block";  
    setTimeout(showSlides, 10000);
}




