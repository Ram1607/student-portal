<?php
	session_start();
	$user = $_REQUEST['user'];
	$q = $_REQUEST['q'];
	$a = $_REQUEST['a'];
	$con = mysqli_connect('localhost','root','','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$s = "select * from details where name='$user' and que='$q' and ans='$a'";
	$result = mysqli_query($con,$s) or die(mysqli_error($con));
	if($row = mysqli_fetch_assoc($result))
	{
		echo "1";
	}
	else
	{
        echo "0";
	}
	
?>
