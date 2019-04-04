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

function edit1(){
    document.getElementById('sd_fname').style.display = "none";
    document.getElementById('ed_fname').style.display = "initial";
    document.getElementById('sd_mname').style.display = "none";
    document.getElementById('ed_mname').style.display = "initial";
    document.getElementById('sd_dob').style.display = "none";
    document.getElementById('ed_dob').style.display = "initial";
    document.getElementById('sd_gender').style.display = "none";
    document.getElementById('ed_gender').style.display = "initial";
    document.getElementById('sd_nationality').style.display = "none";
    document.getElementById('ed_nationality').style.display = "initial";
    document.getElementById('sd_edit').style.display = "none";
    document.getElementById('ed_save').style.display = "initial";
    document.getElementById('ed_save').style.backgroundColor = "red";
}

function edit2(){
    document.getElementById('sd_marks_10').style.display = "none";
    document.getElementById('ed_marks_10').style.display = "initial";
    document.getElementById('sd_marks_12').style.display = "none";
    document.getElementById('ed_marks_12').style.display = "initial";
    document.getElementById('sd_cgpa').style.display = "none";
    document.getElementById('ed_cgpa').style.display = "initial";
    document.getElementById('sd_edit1').style.display = "none";
    document.getElementById('ed_save1').style.display = "initial";
    document.getElementById('ed_save1').style.backgroundColor = "red";
}

function edit3(){
    document.getElementById('sd_contact').style.display = "none";
    document.getElementById('ed_contact').style.display = "initial";
    document.getElementById('sd_email').style.display = "none";
    document.getElementById('ed_email').style.display = "initial";
    document.getElementById('sd_per_address').style.display = "none";
    document.getElementById('ed_per_address').style.display = "initial";
    document.getElementById('sd_cor_address').style.display = "none";
    document.getElementById('ed_cor_address').style.display = "initial";
    document.getElementById('sd_edit2').style.display = "none";
    document.getElementById('ed_save2').style.display = "initial";
    document.getElementById('ed_save2').style.backgroundColor = "red";
}

function edit4(){
    document.getElementById('sd_edit3').style.display = "none";
    document.getElementById('ed_save3').style.display = "initial";
    document.getElementById('ed_save3').style.backgroundColor = "red";
    document.getElementById('ckeditor').style.display = "initial";
    CKEDITOR.replace('ckeditor');
    //CKEDITOR.instances['ckeditor'].setData(add_info);
}

function save() {
    var name = document.getElementById('ed_name').value;
    var fname = document.getElementById('ed_fname').value;
    var mname = document.getElementById('ed_mname').value;
    var reg_no = document.getElementById('ed_reg_no').value;
    var dob = document.getElementById('ed_dob').value;
    if(document.getElementById('ed_male').checked)
    {
        var gender = 0;
    }
    else
    {
        var gender = 1;
    }
    var nation = document.getElementById('ed_nationality').value;
    var marks_10 = document.getElementById('ed_marks_10').value;
    var marks_12 = document.getElementById('ed_marks_12').value;
    var cgpa = document.getElementById('ed_cgpa').value;
    var contact = document.getElementById('ed_contact').value;
    var email = document.getElementById('ed_email').value;
    var per_address = document.getElementById('ed_per_address').value;
    var cor_address = document.getElementById('ed_cor_address').value;
    var add_info = "";
    console.log(add_info);

    var xhttp; 
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      location.reload();
      }
    };
    console.log("name="+name+"&fname="+fname+"&mname="+mname+"&reg_no="+reg_no+"&dob="+dob+"&gender="+gender+"&nation="+nation+"&marks_10="+marks_10+
        "&marks_12="+marks_12+"&cgpa="+cgpa+"&contact="+contact+"&email="+email+"&per_address="+per_address+"&cor_address="+cor_address+"&add_info="+add_info);
    xhttp.open("GET", "edit.php?name="+name+"&fname="+fname+"&mname="+mname+"&reg_no="+reg_no+"&dob="+dob+"&gender="+gender+"&nation="+nation+"&marks_10="+marks_10+
        "&marks_12="+marks_12+"&cgpa="+cgpa+"&contact="+contact+"&email="+email+"&per_address="+per_address+"&cor_address="+cor_address+"&add_info="+add_info, true);
    xhttp.send();
}

function save1() {
    var name = document.getElementById('ed_name').value;
    var fname = document.getElementById('ed_fname').value;
    var mname = document.getElementById('ed_mname').value;
    var reg_no = document.getElementById('ed_reg_no').value;
    var dob = document.getElementById('ed_dob').value;
    if(document.getElementById('ed_male').checked)
    {
        var gender = 0;
    }
    else
    {
        var gender = 1;
    }
    var nation = document.getElementById('ed_nationality').value;
    var marks_10 = document.getElementById('ed_marks_10').value;
    var marks_12 = document.getElementById('ed_marks_12').value;
    var cgpa = document.getElementById('ed_cgpa').value;
    var contact = document.getElementById('ed_contact').value;
    var email = document.getElementById('ed_email').value;
    var per_address = document.getElementById('ed_per_address').value;
    var cor_address = document.getElementById('ed_cor_address').value;
    var add_info = encodeURI(CKEDITOR.instances['ckeditor'].getData());
    console.log(add_info);

    var xhttp; 
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      location.reload();
      }
    };
    console.log("name="+name+"&fname="+fname+"&mname="+mname+"&reg_no="+reg_no+"&dob="+dob+"&gender="+gender+"&nation="+nation+"&marks_10="+marks_10+
        "&marks_12="+marks_12+"&cgpa="+cgpa+"&contact="+contact+"&email="+email+"&per_address="+per_address+"&cor_address="+cor_address+"&add_info="+add_info);
    xhttp.open("POST", "edit.php?name="+name+"&fname="+fname+"&mname="+mname+"&reg_no="+reg_no+"&dob="+dob+"&gender="+gender+"&nation="+nation+"&marks_10="+marks_10+
        "&marks_12="+marks_12+"&cgpa="+cgpa+"&contact="+contact+"&email="+email+"&per_address="+per_address+"&cor_address="+cor_address+"&add_info="+add_info, true);
    xhttp.send();
}