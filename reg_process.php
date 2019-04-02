<?php
	session_start();
	
	$name = $_REQUEST['Name'];
	$f_name = $_REQUEST['f_name'];
    $m_name = $_REQUEST['m_name'];
	$dob = $_REQUEST['dob'];
    $gender = $_REQUEST['gender'];
    $nationality = $_REQUEST['nationality'];
	$reg_no = $_REQUEST['Regino'];
    $roll_no = $_REQUEST['rollno'];
    $department = $_REQUEST['department'];
    $marks_10 = $_REQUEST['tenth_mark'];
    $marks_12 = $_REQUEST['twelve_mark'];
	$cgpa = $_REQUEST['cgpa_mark'];
	$contact = $_REQUEST['contact'];
	$email = $_REQUEST['email'];
	$per_address = $_REQUEST['peraddress'];
	$cor_address = $_REQUEST['corraddress'];
	$password = $_REQUEST['password'];
	$question = $_REQUEST['reg_question'];
	$answer = $_REQUEST['reg_answer'];

	$target_dir = "/home/pradum/uploads/";
	$photo = $_FILES['photo']['name'];
	$target_file = $target_dir . basename($photo);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	if (move_uploaded_file($_FILES['photo']['tmp_name'], $target_file)) {
		echo "The file ". basename( $photo). " has been uploaded.";
	} else {
		echo "Sorry, there was an error uploading your file.";
	}
	
    $con = mysqli_connect('localhost','pradum','Aqzplm@123','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$s = "INSERT INTO details (name,src_img,f_name,m_name,dob,gender,nationality,reg_no,roll_no,department,marks_10,marks_12,cgpa,contact,email,per_address,cor_address,password,que,ans) VALUES('$name','$photo','$f_name','$m_name',$dob,$gender,'$nationality','$reg_no','$roll_no','$department',$marks_10,$marks_12,$cgpa,$contact,'$email','$per_address','$cor_address','$password',$question,'$answer')";
	$result = mysqli_query($con,$s) or die(mysqli_error($con));
	if($result>0)
	{
		echo "<script>window.location='http://localhost/Project/student-portal/admin.php';</script>";
	}
	else
	{
		echo "<script>window.location='http://localhost/project/student-portal/';</script>";
	}
	
?>
