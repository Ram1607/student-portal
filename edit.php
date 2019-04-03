<?php
	session_start();
	
    $name = $_REQUEST['name'];
    $fname = $_REQUEST['fname'];
    $mname = $_REQUEST['mname'];
    $reg_no = $_REQUEST['reg_no'];
    $dob = $_REQUEST['dob'];
    $gender = $_REQUEST['gender'];
    $nation = $_REQUEST['nation'];
    $marks_10 = $_REQUEST['marks_10'];
    $marks_12 = $_REQUEST['marks_12'];
    $cgpa = $_REQUEST['cgpa'];
    $contact = $_REQUEST['contact'];
    $email = $_REQUEST['email'];
    $per_address = $_REQUEST['per_address'];
    $cor_address = $_REQUEST['cor_address'];
    $add_info = $_REQUEST['add_info'];
    if($add_info == "")
    {
    	$s = "UPDATE details SET name='$name',f_name='$fname',m_name='$mname',dob='$dob',gender='$gender',nationality='$nation',marks_10=$marks_10,marks_12=$marks_12,cgpa=$cgpa,contact=$contact,email='$email',per_address='$per_address',cor_address='$cor_address' WHERE reg_no='$reg_no'";
    }
    else
    {
    	$s = "UPDATE details SET name='$name',f_name='$fname',m_name='$mname',dob='$dob',gender='$gender',nationality='$nation',marks_10=$marks_10,marks_12=$marks_12,cgpa=$cgpa,contact=$contact,email='$email',per_address='$per_address',cor_address='$cor_address',add_info='$add_info' WHERE reg_no='$reg_no'";
    
    }
    $con = mysqli_connect('localhost','pradum','Aqzplm@123','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$result = mysqli_query($con,$s) or die(mysqli_error($con));
    if($result>0)
    {
    	echo "success".$add_info;
    }
    else
    {
    	echo "failed";
    }
	
?>
