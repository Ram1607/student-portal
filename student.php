<?php
	session_start();
	if(!isset($_SESSION['ss_user'])||$_SESSION['ss_type']!=0)
	{
		$_SESSION['ss_e'] = 1;
		echo "<script>window.location='http://localhost:86/student-portal';</script>";
	}
	$id=$_SESSION['ss_user'];
    $con = mysqli_connect('localhost','root','','student-portal',3307) or die("Server can't connect try again");
    mysqli_select_db($con,'student-portal') or die("Database not found!!");

    $s = "SELECT * FROM details WHERE name='$id'";
    $result = mysqli_query($con,$s) or die(mysqli_error($con));
    $student=mysqli_fetch_assoc($result);
?>
<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Student Portal</title>
  
  <style>
      
          .background{
                background-image: url(images/bg2.jpg);
                height: 434px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                border-radius:8px;
          }

          .onbackground h1{
          		padding-top: 20px;
                color:red;
                text-align: center;
          }
          .p{
          	width:80%;
          	color: grey;
          	text-align: center;
          	padding-left: 190px;
          }

  </style>  

 <link rel="stylesheet" href="css/style.css">

  <link rel="stylesheet" href="css/admin.css">

</head>

<body style="background-color:#1c2b4b">


	<div class="sticky">
		
			<div class="nav">
				<div class="webtitle-screen">
					<div class="webtitle">

		                <h2>National Institute of Technology, Durgapur</h2>
					</div>
				</div>
				<div class="nav-menu">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#notice">Notice</a></li>
						<li class="drop-down"><a href="#">Download</a></li>
						<li><a href="#profile">Profile</a></li>
						<li style="float:right"><a href="logout.php" id="logoutbtn">logout</a></li>
                        <li style="float:right;bottom-paading:10px;">welcome <?php echo $_SESSION['ss_user']; ?> / </li>
					</ul>
				</div>
			</div>
	</div>

<br>
<br>

	<img style=" margin-left: 43%;
				 height: 175px;
				 width:175px;
	             " src="uploads/<?php echo $_SESSION['ss_src_img'];?>"/>

<br>
<br>


    <table class="table" style="width: 60%">
      <thead>
        <tr>
        	<th style="width: 80%; padding-left: 30%;" >  Personal Details   </th>
            <th style="width: 20%">     <button class ="btn-change" onclick="edit1()">Edit</button>  </th>


        </tr>
      </thead>
    </table >


    <table class="table" style="width: 60%" id="edit1">
      <tbody>
        <tr>
            <th>Name</th>
            <td ><?php echo $student['name']; ?></td>
        </tr>
       	<tr>
       		<th>Father name</th>
       		<td><?php echo $student['f_name']; ?></td> 
       	</tr>
       	<tr>
       		<th >Mother Name</th>
       		<td><?php echo $student['m_name']; ?></td>
       	</tr>
       	<tr>
       		<th>Date of Birth</th>
       		<td><?php echo $student['dob']; ?></td>
       	</tr>
        
        <tr>
        	<th> Gender</th>
        	<td><?php echo $student['gender']; ?></td>
        </tr>  
            
        <tr>
        	<th>Nationality</th>
        	<td><?php echo $student['nationality']; ?></td>

        </tr>


      </tbody>
    </table>

<br>
<br>

    <table class="table" style="width: 60%">
      <thead>
        <tr>

            <th style="width: 80%; padding-left: 30%;" >Education Details</th>
            <th style="width: 20%">     <button class ="btn-change" onclick="edit2()">Edit</button>  </th>

        </tr>
      </thead>
    </table >


    <table class="table" style="width: 60%" id=edit2>
      <tbody>
        <tr>
            <th>Registration no.  </th>
            <td ><?php echo $student['reg_no']; ?></td>
        </tr>
       	<tr>
       		<th>Roll no.</th>
       		<td><?php echo $student['roll_no']; ?></td> 
       	</tr>
       	<tr>
       		<th >Department</th>
       		<td><?php echo $student['department']; ?></td>
       	</tr>
       	<tr>
       		<th> Tenth Marks</th>
       		<td><?php echo $student['marks_10']; ?></td>
       	</tr>
        
        <tr>
        	<th> +2 Marks</th>
        	<td><?php echo $student['marks_12']; ?></td>
        </tr>  
            
        <tr>
        	<th>CGPA</th>
        	<td><?php echo $student['cgpa']; ?></td>

        </tr>


      </tbody>
    </table>

<br>
<br>

    <table class="table" style="width: 60%">
      <thead>
        <tr>

            <th style="width: 80%; padding-left: 30%;" >Others</th>
            <th style="width: 20%">     <button class ="btn-change" onclick="edit3()">Edit</button>  </th>

        </tr>
      </thead>
    </table >


    <table class="table" style="width: 60%" id="edit3">
      <tbody>
        <tr>
            <th>Contact</th>
            <td><?php echo $student['contact']; ?></td>
        </tr>
       	<tr>
       		<th>Email</th>
       		<td><?php echo $student['email']; ?></td> 
       	</tr>
       	<tr>
       		<th >Permanent Address</th>
       		<td><?php echo $student['per_address']; ?></td>
       	</tr>
       	<tr>
       		<th>Correspondent Address</th>
       		<td><?php echo $student['cor_address']; ?></td>
       	</tr>
        


      </tbody>
    </table>

	<script type="text/javascript" src="jquery.min.js"></script>
    <script src="js/javascript.js"></script>
</body>
</html>
