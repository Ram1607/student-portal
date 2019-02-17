<?php
	session_start();
	
	$id = $_REQUEST['username'];
	$pswd = $_REQUEST['pswd'];
	$con = mysqli_connect('localhost','root','','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$s = "select * from login where username='$id' and password='$pswd'";
	$result = mysqli_query($con,$s) or die(mysqli_error($con));
	if($row = mysqli_fetch_assoc($result))
	{
		$_SESSION["ss_res"] = $result;
		if($row['type'])
		{
			echo "Admin";
		}
		else
		{
			echo "Student";
		}
	}
	else
	{
		$_SESSION["ss_er"] = "w";
		echo "<script>window.location='http://localhost/project/R.Brothers/#contact-sec';</script>";
	}
	
?>
