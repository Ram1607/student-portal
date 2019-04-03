<?php
	session_start();
	
	$notice = $_REQUEST['notice'];
	$target = $_REQUEST['target'];
    $con = mysqli_connect('localhost','root','','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$s = "INSERT INTO notice (notice,target) VALUES('$notice','$target')";
	$result = mysqli_query($con,$s) or die(mysqli_error($con));
	if($result>0)
	{
		echo "<script>window.location='http://localhost:86/student-portal/admin.php';</script>";
	}
	else
	{
		echo "<script>window.location='http://localhost:86/student-portal/admin.php';</script>";
	}
	
?>
