<?php
	session_start();
	
	$id = $_REQUEST['username'];
	$pswd = $_REQUEST['pswd'];
	$con = mysqli_connect('localhost','pradum','Aqzplm@123','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$s = "select * from login where username='$id' and password='$pswd'";
	$result = mysqli_query($con,$s) or die(mysqli_error($con));
	if($row = mysqli_fetch_assoc($result))
	{
		$_SESSION["ss_user"] = $row['username'];
		$s= "select src_img from details where name='$id'";
		$src = mysqli_query($con,$s) or die(mysqli_error($con));
		$img = mysqli_fetch_assoc($src);
		$_SESSION["ss_src_img"] = $img['src_img'];
		if($row['type'])
		{
			$_SESSION['ss_type'] = 1;
			echo "<script>window.location='http://localhost/Project/student-portal/admin.php';</script>";
		}
		else
		{
			$_SESSION['ss_type'] = 0;
			echo "<script>window.location='http://localhost/Project/student-portal/student.php';</script>";
		}
	}
	else
	{
		echo "<script>window.location='http://localhost/Project/student-portal';</script>";
	}
	
?>
