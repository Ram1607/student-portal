var modal = document.getElementById('Mymodal');

var signup=document.getElementById('signup');

var signup2=document.getElementById('signup2');

var signup3=document.getElementById('signup3');

var btn = document.getElementById("myBtn");

var passModal = document.getElementById('passModal');

var signupbtn = document.getElementById("signupBtn");

var next1=document.getElementById("next1");


var next2=document.getElementById("next2");


var span1 = document.getElementsByClassName("close1")[0];

var span2 = document.getElementsByClassName("close2")[0];

var span3 = document.getElementsByClassName("close3")[0];

var span4 = document.getElementsByClassName("close4")[0];

var span5 = document.getElementsByClassName("close5")[0]

btn.onclick = function() {
    errors3();
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

span5.onclick = function() {
    passModal.style.display="none";
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
   else if(event.target == passModal){
        passModal.style.display="none";
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
    errors();
    errors1();
    errors2();
    reset1();
    reset2();


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


 document.getElementById("f_name").value=null;

document.getElementById("reg_name").value=null;


document.getElementById("m_name").value=null;

 document.getElementById("dob").value=null;

document.getElementById("nationality").value=null;

document.getElementById('male').checked=false;

document.getElementById('male').checked=false;
    errors();


}

function reset1(){
    
 document.getElementById("regno").value=null;

document.getElementById("roll").value=null;

var e = document.getElementById("select");
 e.options[e.selectedIndex].value="";

document.getElementById("tenth").value=null;

document.getElementById("twelve").value=null;

document.getElementById("cgpa").value=null;
    errors1();
    enable();
}

function reset2(){
    document.getElementById("contact").value=null;
document.getElementById("email").value=null;

document.getElementById("peraddress").value=null;
document.getElementById("corraddress").value=null;
document.getElementById("pass").value=null;
document.getElementById("conpass").value=null;

document.getElementById("reg_answer").value=null;

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

function disable(){
        document.getElementById("reg_name").disabled=true;
   
        document.getElementById("m_name").disabled = true;

        document.getElementById("f_name").disabled=true;


        document.getElementById("dobi").disabled=true;
        document.getElementById("dob").disabled=true;

        document.getElementById("male").disabled=true;
        document.getElementById("female").disabled=true;

        document.getElementById("nationality").disabled=true;
}

function enable(){

        document.getElementById("reg_name").disabled=false;
       
        document.getElementById("m_name").disabled = false;

        document.getElementById("f_name").disabled=false;

        document.getElementById("dob").disabled=false;

        document.getElementById("male").disabled=false;
        document.getElementById("female").disabled=false;

        document.getElementById("nationality").disabled=false;
}



function fname(){

var reg_name = document.getElementById("reg_name").value;
    errors();

    if(!(reg_name.length>0) || !(reg_name.match(regex)) )
    {
        error_reg_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
    }

    else{
        
        enable();
    }
}




function mname(){

    errors();

var reg_name = document.getElementById("reg_name").value;
var f_name = document.getElementById("f_name").value;



    if(!(reg_name.length>0) || !(reg_name.match(regex)) ){
        error_reg_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
    }
    else if(!(f_name.length>0) || !(f_name.match(regex)))
    {
        error_f_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;

    }
    else
    {
        enable();

    }
    
}


function dateob(){

    errors();

var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;


var m_name = document.getElementById("m_name").value;

    if(!(reg_name.length>0) || !(reg_name.match(regex)) ){
        error_reg_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
    }
    else if(!(f_name.length>0) || !(f_name.match(regex)))
    {
        error_f_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;

    }
    else if(!(m_name.length>0) || !(m_name.match(regex)))
    {
        error_m_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;
         document.getElementById("m_name").disabled=false;       

    }
    else
    {
        enable();

    }
    
}

function fmale(){

    errors();



var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;

var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;

    if(!(reg_name.length>0) || !(reg_name.match(regex)) ){
        error_reg_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
    }
    else if(!(f_name.length>0) || !(f_name.match(regex)))
    {
        error_f_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;

    }
    else if(!(m_name.length>0) || !(m_name.match(regex)))
    {
        error_m_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;
         document.getElementById("m_name").disabled=false;       

    }
    else if(!(dob))
    {
        error_dob.style.display="block";
        enable();
        document.getElementById("male").disabled=true;
        document.getElementById("female").disabled=true;

        document.getElementById("nationality").disabled=true;

    }
    else{
        enable();
    }
    
}

function ffemale(){

    errors();



var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;

var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;

    if(!(reg_name.length>0) || !(reg_name.match(regex)) ){
        error_reg_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
    }
    else if(!(f_name.length>0) || !(f_name.match(regex)))
    {
        error_f_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;

    }
    else if(!(m_name.length>0) || !(m_name.match(regex)))
    {
        error_m_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;
         document.getElementById("m_name").disabled=false;       

    }
    else if(!(dob))
    {
        error_dob.style.display="block";
        enable();
        document.getElementById("male").disabled=true;
        document.getElementById("female").disabled=true;

        document.getElementById("nationality").disabled=true;

    }
    else{
        enable();
    }
    
}


function nation(){

    errors();



var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;


var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;




    if(!(reg_name.length>0) || !(reg_name.match(regex)) ){
        error_reg_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
    }
    else if(!(f_name.length>0) || !(f_name.match(regex)))
    {
        error_f_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;

    }
    else if(!(m_name.length>0) || !(m_name.match(regex)))
    {
        error_m_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;
         document.getElementById("m_name").disabled=false;       

    }
    else if(!(dob))
    {
        error_dob.style.display="block";
        enable();
        document.getElementById("male").disabled=true;
        document.getElementById("female").disabled=true;

        document.getElementById("nationality").disabled=true;

    }
    else if(!(document.getElementById('male').checked) && !(document.getElementById('female').checked))
    {
        error_gender.style.display="block";
        enable();
        document.getElementById("nationality").disabled=true;
    }
    else
    {
        enable();
    }
    
}

function nextb1(){

    errors();



var f_name = document.getElementById("f_name").value;

var reg_name = document.getElementById("reg_name").value;


var m_name = document.getElementById("m_name").value;

var dob = document.getElementById("dob").value;

var nationality = document.getElementById("nationality").value;


    if(!(reg_name.length>0) || !(reg_name.match(regex)) ){
        error_reg_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;

    }
    else if(!(f_name.length>0) || !(f_name.match(regex)))
    {
        error_f_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;


    }
    else if(!(m_name.length>0) || !(m_name.match(regex)))
    {
        error_m_name.style.display="block";
        disable();
        document.getElementById("reg_name").disabled=false;
        document.getElementById("f_name").disabled=false;
         document.getElementById("m_name").disabled=false;  
  

    }
    else if(!(dob))
    {
        error_dob.style.display="block";
        enable();
        document.getElementById("male").disabled=true;
        document.getElementById("female").disabled=true;

        document.getElementById("nationality").disabled=true;


    }
    else if(!(document.getElementById('male').checked) && !(document.getElementById('female').checked))
    {
        error_gender.style.display="block";
        enable();
        document.getElementById("nationality").disabled=true;

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

function enable1(){


document.getElementById("regno").disabled=false;

document.getElementById("roll").disabled=false;

var e = document.getElementById("select");
 e.options[e.selectedIndex].disabled=false;

document.getElementById("tenth").disabled=false;

document.getElementById("twelve").disabled=false;

document.getElementById("cgpa").disabled=false;
}


function disable1(){


document.getElementById("regno").disabled=true;

document.getElementById("roll").disabled=true;

var e = document.getElementById("select");
 e.options[e.selectedIndex].disabled=true;

document.getElementById("tenth").disabled=true;

document.getElementById("twelve").disabled=true;

document.getElementById("cgpa").disabled=true;
}



function rollyno(){

errors1();

var regno = document.getElementById("regno").value;

if(regno && regno.match(alpha)){

    error_reg.style.display="none";
    enable1();
}
else{
    
    disable1();
    error_reg.style.display="block";
    document.getElementById("regno").disabled=false;


}
    
}

function rolly(){

errors1();

var regno = document.getElementById("regno").value;

var roll = document.getElementById("roll").value;

if(!(regno) || !(regno.match(alpha))){

    disable1();
    error_reg.style.display="block";
    document.getElementById("regno").disabled=false;

}
else if(!(roll) || !(roll.match(alpha))){
    
    error_roll.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;


}
else{
    enable1();
    errors1();
}

}



document.getElementById("select").onchange = function()
{


errors1();

var regno = document.getElementById("regno").value;

var roll = document.getElementById("roll").value;

if(!(regno) || !(regno.match(alpha))){

    disable1();
    error_reg.style.display="block";
    document.getElementById("regno").disabled=false;

}
else if(!(roll) || !(roll.match(alpha))){
    
    error_roll.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;


}
else{
    errors1();
    enable1();
    }
};

function c_tenth(){

errors1();

var regno = document.getElementById("regno").value;

var roll=document.getElementById("roll").value;

var e = document.getElementById("select");
var select = e.options[e.selectedIndex].value;


var tenth=document.getElementById("tenth").value;

var twelve=document.getElementById("twelve").value;

var cgpa=document.getElementById("cgpa").value;

if(!(regno) || !(regno.match(alpha))){

    disable1();
    error_reg.style.display="block";
    document.getElementById("regno").disabled=false;

}
else if(!(roll) || !(roll.match(alpha))){
    
    error_roll.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;


}
else if(!(select)){
    errors1();
    error_select.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;



}
else if(!(tenth>0 && tenth<=100)){
    errors1();
    error_tenth.style.display="block";
    enable1();
    document.getElementById("twelve").disabled=true;

    document.getElementById("cgpa").disabled=true;
}
else{

    errors1();
    enable1();
}

}

function c_twelve(){

errors1();
    
var regno = document.getElementById("regno").value;

var roll=document.getElementById("roll").value;

var e = document.getElementById("select");
var select = e.options[e.selectedIndex].value;


var tenth=document.getElementById("tenth").value;

var twelve=document.getElementById("twelve").value;

var cgpa=document.getElementById("cgpa").value;

if(!(regno) || !(regno.match(alpha))){

    disable1();
    error_reg.style.display="block";
    document.getElementById("regno").disabled=false;

}
else if(!(roll) || !(roll.match(alpha))){
    
    error_roll.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;


}
else if(!(select)){
    errors1();
    error_select.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;



}
else if(!(tenth>0 && tenth<=100)){
    errors1();
    error_tenth.style.display="block";
    enable1();
    document.getElementById("twelve").disabled=true;

    document.getElementById("cgpa").disabled=true;
}

else if(!(twelve>0 && twelve<=100)){
    errors1();
    error_twelve.style.display="block";

    enable1();

    document.getElementById("cgpa").disabled=true;
}
else{
    enable1();
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

var cgpa=document.getElementById("cgpa").value;

if(!(regno) || !(regno.match(alpha))){

    disable1();
    error_reg.style.display="block";
    document.getElementById("regno").disabled=false;

}
else if(!(roll) || !(roll.match(alpha))){
    
    error_roll.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;


}
else if(!(select)){
    errors1();
    error_select.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;



}
else if(!(tenth>0 && tenth<=100)){
    errors1();
    error_tenth.style.display="block";
    enable1();
    document.getElementById("twelve").disabled=true;

    document.getElementById("cgpa").disabled=true;
}

else if(!(twelve>0 && twelve<=100)){
    errors1();
    error_twelve.style.display="block";

    enable1();

    document.getElementById("cgpa").disabled=true;
}
else if(!(cgpa>0 && cgpa<=100)){
    errors1();
    error_cgpa.style.display="block";

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

    disable1();
    error_reg.style.display="block";
    document.getElementById("regno").disabled=false;

}
else if(!(roll) || !(roll.match(alpha))){
    
    error_roll.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;


}
else if(!(select)){
    errors1();
    error_select.style.display="block";
    disable1();
    document.getElementById("regno").disabled=false;
    document.getElementById("roll").disabled=false;



}
else if(!(tenth>0 && tenth<=100)){
    errors1();
    error_tenth.style.display="block";
    enable1();
    document.getElementById("twelve").disabled=false;

    document.getElementById("cgpa").disabled=false;
}

else if(!(twelve>0 && twelve<=100)){
    errors1();
    error_twelve.style.display="block";

    enable1();

    document.getElementById("cgpa").disabled=false;
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
    error_ans.style.display="none";
    error_select.style.display="none";
}


var error_contact = document.getElementById("error_contact");



var error_email = document.getElementById("error_email");

var error_perm = document.getElementById("error_perm");

var error_corr = document.getElementById("error_corr");

var error_pass = document.getElementById("error_pass");

var error_confirm = document.getElementById("error_confirm");

var error_ans= document.getElementById("error_ans");

var error_select=document.getElementById("error_select")



function enable2(){
document.getElementById("contact").disabled=false;
document.getElementById("email").disabled=false;

document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;
document.getElementById("pass").disabled=false;
document.getElementById("conpass").disabled=false;

document.getElementById("reg_answer").disabled=false;



}
function disable2(){

document.getElementById("contact").disabled=true;
document.getElementById("email").disabled=true;

document.getElementById("peraddress").disabled=true;
document.getElementById("corraddress").disabled=true;
document.getElementById("pass").disabled=true;
document.getElementById("conpass").disabled=true;

document.getElementById("reg_answer").disabled=true;


}

function con(){
var contact=document.getElementById("contact").value;

if(contact && contact.length==10){
    error_contact.style.display="none";
    enable2();

}
else{
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
}
function eemail(){
    var contact=document.getElementById("contact").value;

  var email=document.getElementById("email").value;

if(!(contact) || !(contact.length==10) ){
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
else if(!(email) || !(email.match(regexemail))){
    error_email.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
}
else{
    enable2();
    errors2();
}

}

function permanent(){
    var contact=document.getElementById("contact").value;

    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;
if(!(contact) || !(contact.length==10) ){
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
else if(!(email) || !(email.match(regexemail))){
    error_email.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;

}

else{
    errors2();
    enable2();
}

}

function corres(){
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;

if(!(contact) || !(contact.length==10) ){
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
else if(!(email) || !(email.match(regexemail))){
    error_email.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;


}
else{
    errors2();
    enable2();
}
}

var passregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function pash(){

    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;

    var corraddress=document.getElementById("corraddress").value;
    var pass=document.getElementById("pass").value;

if(!(contact) || !(contact.length==10) ){
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
else if(!(email) || !(email.match(regexemail))){
    error_email.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;


}
else if(!(pass) || !(pass.match(passregex)))
{
    errors2();
    error_pass.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;
document.getElementById("pass").disabled=false;


}

else{
    errors2();
    enable2();
}
}

function conpash(){

    var conpass=document.getElementById("conpass").value;
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;
    var corraddress=document.getElementById("corraddress").value;
    var pass=document.getElementById("pass").value;

if(!(contact) || !(contact.length==10) ){
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
else if(!(email) || !(email.match(regexemail))){
    error_email.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;


}
else if(!(pass) || !(pass.match(passregex)))
{
    errors2();
    error_pass.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;
document.getElementById("pass").disabled=false;


}
else if(conpass!=pass){
    errors2();
    error_confirm.style.display="block";
    enable2();
    document.getElementById("reg_answer").disabled=true;
}
else{
    errors2();
    enable2();
}

} 


document.getElementById("select_reg_question").onchange = function()
{

    var conpass=document.getElementById("conpass").value;
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;
    var corraddress=document.getElementById("corraddress").value;
    var pass=document.getElementById("pass").value;

var e = document.getElementById("select_reg_question");
var select = e.options[e.selectedIndex].value;


if(!(contact) || !(contact.length==10) ){
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
else if(!(email) || !(email.match(regexemail))){
    error_email.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;


}
else if(!(pass) || !(pass.match(passregex)))
{
    errors2();
    error_pass.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;
document.getElementById("pass").disabled=false;


}
else if(conpass!=pass){
    errors2();
    error_confirm.style.display="block";
    enable2();
    document.getElementById("reg_answer").disabled=true;
}
else if(!(select)){
        errors2();
    error_select.style.display="block";
    enable2();
    document.getElementById("reg_answer").disabled=true;
}
else{
    errors2();
    enable2();
}

};
 
function seque(){
    
    var conpass=document.getElementById("conpass").value;
    var contact=document.getElementById("contact").value;
    var email=document.getElementById("email").value;

    var peraddress=document.getElementById("peraddress").value;
    var corraddress=document.getElementById("corraddress").value;
    var pass=document.getElementById("pass").value;
    var answer=document.getElementById("reg_answer").value;

if(!(contact) || !(contact.length==10) ){
    disable2();
    error_contact.style.display="block";
    document.getElementById("contact").disabled=false;
}
else if(!(email) || !(email.match(regexemail))){
    error_email.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
}
else if(!(peraddress)){
    errors2();
    error_perm.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;

}
else if(!(corraddress)){
    errors2();
    error_corr.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;


}
else if(!(pass) || !(pass.match(passregex)))
{
    errors2();
    error_pass.style.display="block";
    disable2();
    document.getElementById("contact").disabled=false;
    document.getElementById("email").disabled=false;
document.getElementById("peraddress").disabled=false;
document.getElementById("corraddress").disabled=false;
document.getElementById("pass").disabled=false;


}
else if(conpass!=pass){
    errors2();
    error_confirm.style.display="block";
    enable2();
    document.getElementById("reg_answer").disabled=true;
}
else if(!(select)){
        errors2();
    error_select.style.display="block";
    enable2();
    document.getElementById("reg_answer").disabled=true;
}
else if(!(answer)){

    errors2();
    error_ans.style.display="block";
}
else{
    errors2();
    enable2();
}

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

  
function lostPass() {
    modal.style.display = "none";
    errors4();
    passModal.style.display = "block";
    document.getElementById("myform5").reset();

}

function securityQue() {
    var q = document.getElementById("select_que");
    q = q.value;
    var a = document.getElementById("answer");
    a = a.value;
    var user = document.getElementById("ch_user");
    user = user.value;
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var status = this.responseText;
            console.log(this.responseText);
            if(status == '1') {
                console.log(status);
                document.getElementById("select_que").style.display = "none";
                document.getElementById("ch_user").style.display = "none";
                document.getElementById("answer").style.display = "none";
                document.getElementById("ch_pass").style.display = "initial";
                document.getElementById("ch_conpass").style.display = "initial";
                document.getElementById("ch_btn").style.display = "none";
                document.getElementById("ch_sub").style.display = "initial";
            } else {

            }
        }
    };
    xhttp.open("GET", "pass_recovery.php?user="+user+"&&q="+q+"&&a="+a, true);
    xhttp.send();
}










