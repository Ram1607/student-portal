
function errors3(){
	error_login_name.style.display="none";
}

function errors4(){
error_select_user.style.display="none";

error_select_que.style.display="none";
}

function errors5(){

	error_ch_pass.style.display="none";
}



function forgot(){
	errors3();
	var user=document.getElementById("login_name").value;
	if(!(user)){

		error_login_name.style.display="block";
	}

}

document.getElementById("select_que").onchange = function()
{

errors4();
var chuser = document.getElementById("ch_user").value;
if(!(chuser)){
    error_select_user.style.display="block";
}

};

function ans(){
	var chuser = document.getElementById("ch_user").value;


var e = document.getElementById("select_que");
var select = e.options[e.selectedIndex].value;

errors4();

if(!(chuser)){
	errors4();
    error_select_user.style.display="block";
}
else if(!(select)){
	errors4();
    error_select_que.style.display="block";


}

}

var passregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function con_security(){
	var pass=document.getElementById("ch_pass").value;
	errors5();
	if(!(pass.match(passregex))){
		errors5();
		error_ch_pass.style.display="block";
	}
}

