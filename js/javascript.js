var modal = document.getElementById('Mymodal');

var signup=document.getElementById('signup');

var signup2=document.getElementById('signup2');

var signup3=document.getElementById('signup3');

var btn = document.getElementById("myBtn");

var signupbtn = document.getElementById("signupBtn");

var next1=document.getElementById("next1");


var next2=document.getElementById("next2");


var span1 = document.getElementsByClassName("close1")[0];

var span2 = document.getElementsByClassName("close2")[0];

var span3 = document.getElementsByClassName("close3")[0];

var span4 = document.getElementsByClassName("close4")[0];
 
btn.onclick = function() {
    modal.style.display = "block";
}
span1.onclick = function() {
    	modal.style.display="none";
}

span2.onclick = function() {
    	signup.style.display="none";
}

span3.onclick = function() {
        signup2.style.display="none";
}

span4.onclick = function() {
        signup3.style.display="none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if(event.target==signup){
    	signup.style.display="none";
   }

    else if(event.target==signup2){
        signup2.style.display="none";
   }

    else if(event.target==signup3){
        signup3.style.display="none";
   }
}

			// For Sign up modal


signupbtn.onclick = function() {
    signup.style.display = "block";
}


next2.onclick =function() {
    signup2.style.display="none";
    signup3.style.display="block";

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


/*       About us Javascript */

/* validation of registration form */
next1.addEventListener("click",function(){
    var name = document.getElementById("reg_name").value;
    var error = document.getElementById("error_reg_name");
    if(name)
    {
        signup.style.display="none";
        signup2.style.display="block";
    }
    else
    {
        console.log(name.value);
        error.style.display="block";
    }
    
});
