<?php
	session_start();
	$user = $_REQUEST['user'];
	$password = $_REQUEST['password'];
	$con = mysqli_connect('localhost','pradum','Aqzplm@123','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$s = "UPDATE details SET password='$password' WHERE name='$user'";
    $result = mysqli_query($con,$s) or die(mysqli_error($con));
    $s = "UPDATE login SET password='$password' WHERE username='$user'";
    $result = mysqli_query($con,$s) or die(mysqli_error($con));
    if($result>0)
	{
        echo "<script>alert('Password Changed!!! Login Please');</script>";
	}
	else
	{
        echo "<script>alert('Failed to change password Try Again Later');</script>";
	}
	echo "<script>window.location='http://localhost/Project/student-portal/';</script>";
?>
