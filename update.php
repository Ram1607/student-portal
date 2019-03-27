<?php
	session_start();
	
    $action = $_REQUEST['q'];
    $reg_no = $_REQUEST['reg'];
    $con = mysqli_connect('localhost','pradum','Aqzplm@123','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	if($action == "acc")
    {
        $s = "UPDATE details SET active=1 WHERE reg_no='$reg_no'";
        $result = mysqli_query($con,$s) or die(mysqli_error($con));
        $s = "SELECT name,password FROM details WHERE reg_no='$reg_no'";
        $result = mysqli_query($con,$s) or die(mysqli_error($con));
        $row = mysqli_fetch_assoc($result);
        $name = $row['name'];
        $password = $row['password'];
        $s = "INSERT INTO login (username,password,type) VALUES ('$name','$password',0)";
        $result = mysqli_query($con,$s) or die(mysqli_error($con));
        
    }
    else
    {
        $s = "UPDATE details SET active=2 WHERE reg_no='$reg_no'";
        $result = mysqli_query($con,$s) or die(mysqli_error($con));
        
    }
	
?>
