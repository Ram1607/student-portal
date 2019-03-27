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
    document.getElementById("myform0").reset();

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
/*
   document.getElementById("myform").reset();
   document.getElementById("myform1").reset();
   document.getElementById("myform2").reset(); 

   */
}

            // For Sign up modal


signupbtn.onclick = function() {
    signup.style.display = "block";
    document.getElementById("myform").reset();
    document.getElementById("myform1").reset();
    document.getElementById("myform2").reset();

    errors();
    errors1();
    errors2();
    common_error.style.display="none";
    common_erro.style.display="none";
    common_err.style.display="none";

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

function reset(){
    document.getElementById("myform").reset();
    errors();
}

function reset1(){
    document.getElementById("myform1").reset();
    errors1();
}

function reset2(){
    document.getElementById("myform2").reset();
    errors2();
}

function previous1(){
    signup.style.display="block";
    signup2.style.display="none";
}

function previous2(){
    signup2.style.display="block";
    signup3.style.display="none";
}


                                                        /*FORM VALIDATION FOR 1ST MODAL */

function errors(){
    error_reg_name.style.display="none";
    error_f_name.style.display="none";
    error_m_name.style.display="none";
    error_dob.style.display="none";
    error_gender.style.display="none";
    error_nationality.style.display="none";
}

var error_reg_name = document.getElementById("error_reg_name");



var error_f_name = document.getElementById("error_f_name");

var error_m_name = document.getElementById("error_m_name");

var error_dob = document.getElementById("error_dob");

var error_gender = document.getElementById("error_gender");

var error_nationality = document.getElementById("error_nationality");

var regex=/^[a-zA-Z_ ]*$/;

function regi(){
    errors();


}

function fname(){

var reg_name = document.getElementById("reg_name").value;

    errors();

    if(!(reg_name.length>0) || !(reg_name.match(regex)) )
    {
        error_reg_name.style.display="block";
    }
    else
    {
        error_reg_name.style.display="none";

    }
    
}

function mname(){

    errors();

var reg_name = document.getElementById("reg_name").value;
var f_name = document.getElementById("f_name").value;

    if(!(reg_name.length>0) || !(reg_name.match(regex)) ){
        errors();
        error_reg_name.style.display="block";
    }
    else if(!(f_name.length>0) || !(f_name.match(regex)))
    {
        error_f_name.style.display="block";
        common_error.style.display="none";
    }
    else
    {
        error_f_name.style.display="none";

    }
    
}


function dateob(){

    errors();

var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;


var m_name = document.getElementById("m_name").value;

    if( !(reg_name.length>0) || !(reg_name.match(regex))){
        errors();
        error_reg_name.style.display="block";

    }
    else if(!(f_name.length>0) || !(f_name.match(regex))){
        errors();
        error_f_name.style.display="block";
    }
    else if(!(m_name.length>0) || !(m_name.match(regex)))
    {
        error_m_name.style.display="block";

    }
    else
    {
        error_m_name.style.display="none";

    }
    
}

function fmale(){

    errors();

var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;

var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;

    if(!(reg_name.length>0) || !(reg_name.match(regex)))
    {
        errors();
        error_reg_name.style.display="block";
    }
    else if(!(f_name.length>0) || !(f_name.match(regex))){
        errors();
        error_f_name.style.display="block";
    }
    else if(!(m_name.length>0) || !(m_name.match(regex)) ){
        errors();
        error_m_name.style.display="block";        
    }
    else if(dob)
    {
        errors();
        error_dob.style.display="none";

    }
    else
    {
        error_dob.style.display="block";

    }
    
}

function ffemale(){

    errors();

var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;

var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;

    if(!(reg_name.length>0) || !(reg_name.match(regex)))
    {
        errors();
        error_reg_name.style.display="block";
    }
    else if(!(f_name.length>0) || !(f_name.match(regex))){
        errors();
        error_f_name.style.display="block";
    }
    else if(!(m_name.length>0) || !(m_name.match(regex)) ){
        errors();
        error_m_name.style.display="block";        
    }
    else if(dob)
    {
        errors();
        error_dob.style.display="none";

    }
    else
    {
        error_dob.style.display="block";

    }
    
}


function nation(){

    errors();

var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;


var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;



    if(!(reg_name.length>0) || !(reg_name.match(regex)))
    {
        errors();
        error_reg_name.style.display="block";
    }
    else if(!(f_name.length>0) || !(f_name.match(regex))){
        errors();
        error_f_name.style.display="block";
    }
    else if(!(m_name.length>0) || !(m_name.match(regex)) ){
        errors();
        error_m_name.style.display="block";        
    }
    else if(!dob)
    {
        errors();
        error_dob.style.display="block";
    }
    else if(document.getElementById('male').checked || document.getElementById('female').checked)
    {
        errors();
        error_gender.style.display="none";

    }
    else
    {
        error_gender.style.display="block";

    }
    
}

function nextb1(){

    errors();

var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;


var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;

var nationality = document.getElementById("nationality").value;


    if(!(reg_name.length>0) || !(reg_name.match(regex)))
    {
        errors();
        error_reg_name.style.display="block";
    }
    else if(!(f_name.length>0) || !(f_name.match(regex))){
        errors();
        error_f_name.style.display="block";
    }
    else if(!(m_name.length>0) || !(m_name.match(regex)) ){
        errors();
        error_m_name.style.display="block";        
    }
    else if(!dob)
    {
        errors();
        error_dob.style.display="block";
    }
    else if(!(document.getElementById('male').checked) && !(document.getElementById('female').checked))
    {
        errors();
        error_gender.style.display="block";

    }
    else if(nationality.length>0 && nationality.match(regex))
    {
        signup.style.display="none";
        signup2.style.display="block";
    }
    else
    {
        errors();
        error_nationality.style.display="block";

    }
    
}   



                                                        /* FORM VALIDATION FOR 2ND MODAL */ 

alpha=/^[0-9]{2}[a-zA-Z]{1,3}[0-9]{4,5}$/;

function errors1(){
    error_reg.style.display="none";
    error_roll.style.display="none";
    error_select.style.display="none";
    error_tenth.style.display="none";
    error_twelve.style.display="none";
    error_cgpa.style.display="none";
}


var error_reg = document.getElementById("error_reg");



var error_roll = document.getElementById("error_roll");

var error_select = document.getElementById("error_select");

var error_tenth = document.getElementById("error_tenth");

var error_twelve = document.getElementById("error_twelve");

var error_cgpa = document.getElementById("error_cgpa");

function reg(){
    errors1();

}

function rollyno(){

errors1();

var regno = document.getElementById("regno").value;

if(regno && regno.match(alpha)){
    error_reg.style.display="none";

}
else{
    error_reg.style.display="block";


}
    
}

document.getElementById("select").onchange = function()
{

errors1();

var regno = document.getElementById("regno").value;

var roll=document.getElementById("roll").value;

if(!(regno) || !(regno.match(alpha))){
    errors1();
    error_reg.style.display="block";
}
else if(!(roll) || !(roll.match(alpha))){
    errors1();
    error_roll.style.display="block";
}
else{
    errors1();

}

};

function c_tenth(){

errors1();

var regno = document.getElementById("regno").value;

var roll=document.getElementById("roll").value;

var e = document.getElementById("select");
var select = e.options[e.selectedIndex].value;

if(!(regno) || !(regno.match(alpha))){
    errors1();
    error_reg.style.display="block";
}
else if(!(roll) || !(roll.match(alpha))){
    errors1();
    error_roll.style.display="block";
}
else if(!(select)){
    errors1();
    error_select.style.display="block";


}

else{

    errors1();
}

}

function c_twelve(){

errors1();
    
var regno = document.getElementById("regno").value;

var roll=document.getElementById("roll").value;

var e = document.getElementById("select");
var select = e.options[e.selectedIndex].value;

var tenth=document.getElementById("tenth").value;

if(!(regno) || !(regno.match(alpha))){
    errors1();
    error_reg.style.display="block";
}
else if(!(roll) || !(roll.match(alpha))){
    errors1();
    error_roll.style.display="block";
}
else if(!(select)){
    errors1();
    error_select.style.display="block";


}
else if(!(tenth>0 && tenth<=100)){
    errors1();
    error_tenth.style.display="block";
}

else{

    errors1();
}


 
}

function c_cgpa(){
    
errors1();

var regno = document.getElementById("regno").value;

var roll=document.getElementById("roll").value;

var e = document.getElementById("select");
var select = e.options[e.selectedIndex].value;

var tenth=document.getElementById("tenth").value;

var twelve=document.getElementById("twelve").value;

if(!(regno) || !(regno.match(alpha))){
    errors1();
    error_reg.style.display="block";
}
else if(!(roll) || !(roll.match(alpha))){
    errors1();
    error_roll.style.display="block";
}
else if(!(select)){
    errors1();
    error_select.style.display="block";


}
else if(!(tenth>0 && tenth<=100)){
    errors1();
    error_tenth.style.display="block";
}
else if(!(twelve>0 && twelve<=100)){
    errors1();
    error_twelve.style.display="block";
}

else{

    errors1();
}

}


function nextb2(){
    
errors1();

var regno = document.getElementById("regno").value;

var roll=document.getElementById("roll").value;

var e = document.getElementById("select");
var select = e.options[e.selectedIndex].value;

var tenth=document.getElementById("tenth").value;

var twelve=document.getElementById("twelve").value;

var cgpa=document.getElementById("cgpa").value;

if(!(regno) || !(regno.match(alpha))){
    errors1();
    error_reg.style.display="block";
}
else if(!(roll) || !(roll.match(alpha))){
    errors1();
    error_roll.style.display="block";
}
else if(!(select)){
    errors1();
    error_select.style.display="block";


}
else if(!(tenth>0 && tenth<=100)){
    errors1();
    error_tenth.style.display="block";
}
else if(!(twelve>0 && twelve<=100)){
    errors1();
    error_twelve.style.display="block";
}
else if(!(cgpa>0 && cgpa<=100)){
    errors1();
    error_cgpa.style.display="block";


}

else{

    errors1();
    signup2.style.display="none";
    signup3.style.display="block";
}

}

function fuck(){
    alert("fewf");
}
  

                                                /* Form Validation for 3rd modal */

var regexemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

function errors2(){
    error_contact.style.display="none";
    error_email.style.display="none";
    error_perm.style.display="none";
    error_corr.style.display="none";
    error_pass.style.display="none";
    error_confirm.style.display="none";
}


var error_contact = document.getElementById("error_contact");



var error_email = document.getElementById("error_email");

var error_perm = document.getElementById("error_perm");

var error_corr = document.getElementById("error_corr");

var error_pass = document.getElementById("error_pass");

var error_confirm = document.getElementById("error_confirm");

function con(){
    errors2();

}

function eemail(){
    var contact=document.getElementById("contact").value;

if(contact && contact.length==10){
    error_contact.style.display="none";

}
else{
    error_contact.style.display="block";


}
}

function permanent(){
    var contact=document.getElementById("contact").value;

    var email=document.getElementById("email").value;


if(!(contact) || !(contact.length==10) ){
    errors2();
    error_contact.style.display="block";
}
else if(!(email) || !(email.match(regexemail))){
    errors2();
    error_email.style.display="block";
}
else{
    errors2();

}

}

function corres(){
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;

if(!(contact) || !(contact.length==10) ){
    errors2();
    error_contact.style.display="block";
}
else if(!(email) || !(email.match(regexemail))){
    errors2();
    error_email.style.display="block";
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";

}
else{
    errors2();

}
}

var passregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function pash(){

    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;

    var corraddress=document.getElementById("corraddress").value;

if(!(contact) || !(contact.length==10) ){
    errors2();
    error_contact.style.display="block";
}
else if(!(email) || !(email.match(regexemail))){
    errors2();
    error_email.style.display="block";
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";

}
else{
    errors2();

}
}

function conpash(){
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;
    var corraddress=document.getElementById("corraddress").value;
    var pass=document.getElementById("pass").value;

if(!(contact) || !(contact.length==10) ){
    errors2();
    error_contact.style.display="block";
}
else if(!(email) || !(email.match(regexemail))){
    errors2();
    error_email.style.display="block";
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";

}
else if(!(pass) || !(pass.match(passregex)))
{
    errors2();
    error_pass.style.display="block";

}
else{
    errors2();

}
} 
 
function regist(){
    

}
document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault()
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;
    var corraddress=document.getElementById("corraddress").value;
    var pass=document.getElementById("pass").value;

    var conpass=document.getElementById("conpass").value;

if(!(contact) || !(contact.length==10) ){
    errors2();
    error_contact.style.display="block";
}
else if(!(email) || !(email.match(regexemail))){
    errors2();
    error_email.style.display="block";
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";

}
else if(!(pass) || !(pass.match(passregex)))
{
    errors2();
    error_pass.style.display="block";

}
else if(conpass!=pass){
    errors2();
    error_confirm.style.display="block";

}
else{
    errors2();

    document.getElementById("myform").submit();
    signup3.style.display="none";

}
  });

  function ajaxreq(str,reg_no) {
    var xhttp; 
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
      location.reload();
      }
    };
    xhttp.open("GET", "update.php?q="+str+"&reg="+reg_no, true);
    xhttp.send();
  }









