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




