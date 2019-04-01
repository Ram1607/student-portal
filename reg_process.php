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
	$question = $_REQUEST['question'];
	$answer = $_REQUEST['answer'];

	$target_dir = "uploads/";
	$target_file = $target_dir . basename($_FILES["photo"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	// Check if image file is a actual image or fake image
	if(isset($_POST["sub"])) {
		$check = getimagesize($_FILES["photo"]["tmp_name"]);
		if($check !== false) {
			echo "File is an image - " . $check["mime"] . ".";
			$uploadOk = 1;
		} else {
			echo "File is not an image.";
			$uploadOk = 0;
		}
	}
	if ($uploadOk == 0) {
		echo "Sorry, your file was not uploaded.";
	// if everything is ok, try to upload file
	} else {
		if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
			echo "The file ". basename( $_FILES["photo"]["name"]). " has been uploaded.";
		} else {
			echo "Sorry, there was an error uploading your file.";
		}
	}
	
    $con = mysqli_connect('localhost','pradum','Aqzplm@123','student-portal',3307) or die("Server can't connect try again");
	mysqli_select_db($con,'student-portal') or die("Database not found!!");
	$s = "INSERT INTO details (name,f_name,m_name,dob,gender,nationality,reg_no,roll_no,department,marks_10,marks_12,cgpa,contact,email,per_address,cor_address,password,que,ans) VALUES('$name','$f_name','$m_name',$dob,$gender,'$nationality','$reg_no','$roll_no','$department',$marks_10,$marks_12,$cgpa,$contact,'$email','$per_address','$cor_address','$password',$question,'$answer')";
	$result = mysqli_query($con,$s) or die(mysqli_error($con));
	if($result>0)
	{
		echo "$uploadOk script>window.location='http://localhost/Project/student-portal/admin.php';</script>";
	}
	else
	{
		echo "<script>window.location='http://localhost/project/student-portal/';</script>";
	}
	
?>
