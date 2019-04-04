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
						<li><a href="http://localhost:86/student-portal/">Home</a></li>
						<li><a href="#notice">Notice</a></li>
						<!--<li class="drop-down"><a href="#">Download</a></li>-->
						<li><a href="#profile">Profile</a></li>
						<li style="float:right"><a href="logout.php" id="logoutbtn">logout</a></li>
                        <li style="float:right;bottom-paading:10px;">welcome <?php echo $_SESSION['ss_user']; ?> / </li>
					</ul>
				</div>
			</div>
	</div>
  <a id="myBtn"></a>

  <div id="notice">

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
                                          <!-- notice -->
<table class="table" >
      <thead>
        <tr>
            <th style="width: 100%">Notice</th>
        </tr>
      </thead>
    </table >
    <table class="table">
      <tbody>
      <?php 
        $reg = $student['reg_no'];
        $s = "SELECT * FROM notice WHERE target='0' or target='$reg' or target='1'";
        $result = mysqli_query($con,$s) or die(mysqli_error($con));
      while($row = mysqli_fetch_assoc($result))
      {
      ?>
        <tr>
            <th><?php echo $row["notice"]?></th>
        </tr>
    <?php } ?>
      </tbody>
    </table>

  </div>

    <div id="profile">

    <br>
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
            <th style="width: 20%">     <button class ="btn-change" onclick="edit1()" id="sd_edit">Edit</button><button class ="btn-change" onclick="save()" id="ed_save" style="display: none;">Save</button></th>


        </tr>
      </thead>
    </table >


    <table class="table" style="width: 60%" id="edit1">
      <tbody>
        <tr>
            <th>Name</th>
            <td ><input type="text" value="<?php echo $student['name']; ?>" style="text-align: center;display: none;" name="ed_name" id="ed_name"><span id="sd_name"><?php echo $student['name']; ?></span></td>
        </tr>
       	<tr>
       		<th>Father name</th>
       		<td><input type="text" value="<?php echo $student['f_name']; ?>" style="text-align: center;display: none;" name="ed_fname" id="ed_fname"><span id="sd_fname"><?php echo $student['f_name']; ?></span></td> 
       	</tr>
       	<tr>
       		<th >Mother Name</th>
       		<td><input type="text" value="<?php echo $student['m_name']; ?>" style="text-align: center;display: none;" name="ed_mname" id="ed_mname"><span id="sd_mname"><?php echo $student['m_name']; ?></span></td>
       	</tr>
       	<tr>
       		<th>Date of Birth</th>
       		<td><input type="date" value="<?php echo $student['dob']; ?>" style="text-align: center;display: none;" name="ed_dob" id="ed_dob"><span id="sd_dob"><?php echo $student['dob']; ?></span></td>
       	</tr>
        
        <tr>
        	<th> Gender</th>
        	<td><div class=table id="ed_gender" style="display: none;">
                <table style="padding-left: 10px;">
                  <tr>
                    <td style="padding-left:38px;">
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="ed_male" value="0"<?php if($student['gender']==0){echo "checked";}?>>
                    </td>
                    <td style="padding-left: 38px;">
                          <label for="female">Female</label>
                        <input type="radio"  name="gender" id="ed_female" value="1" <?php if($student['gender']==1){echo "checked";}?>>
                    </td>
                  </tr>
                  
                </table>

                <span class="error_modal" style="display:none" id="error_gender">What's your gender ?</span>

            </div>
            <span id="sd_gender"><?php if($student['gender']==1){echo "female";}else{echo "male";}?></span></td>
        </tr>  
            
        <tr>
        	<th>Nationality</th>
        	<td><input type="text" value="<?php echo $student['nationality']; ?>" style="text-align: center;display: none;" name="ed_nationality" id="ed_nationality"><span id="sd_nationality"><?php echo $student['nationality']; ?></span></td>

        </tr>


      </tbody>
    </table>

<br>
<br>

    <table class="table" style="width: 60%">
      <thead>
        <tr>

            <th style="width: 80%; padding-left: 30%;" >Education Details</th>
            <th style="width: 20%">     <button class ="btn-change" onclick="edit2()" id="sd_edit1">Edit</button><button class ="btn-change" onclick="save()" id="ed_save1" style="display: none;">Save</button>  </th>

        </tr>
      </thead>
    </table >


    <table class="table" style="width: 60%" id=edit2>
      <tbody>
        <tr>
            <th>Registration no.  </th>
            <td ><input type="text" style="display: none;text-align: center;" name="ed_reg_no" value="<?php echo $student['reg_no']; ?>" id="ed_reg_no"><span id="sd_reg_no" ><?php echo $student['reg_no']; ?></span></td>
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
       		<td><input type="number" name="ed_marks_10" value="<?php echo $student['marks_10']; ?>" style="display: none;text-align: center;" id="ed_marks_10"><span id="sd_marks_10"><?php echo $student['marks_10']; ?></span></td>
       	</tr>
        
        <tr>
        	<th> +2 Marks</th>
        	<td><input type="number" name="ed_marks_12" value="<?php echo $student['marks_12']; ?>" style="display: none;text-align: center;" id="ed_marks_12"><span id="sd_marks_12"><?php echo $student['marks_12']; ?></span></td>
        </tr>  
            
        <tr>
        	<th>CGPA</th>
        	<td><input type="number" name="ed_cgpa" value="<?php echo $student['cgpa']; ?>" style="display: none;text-align: center;" id="ed_cgpa"><span id="sd_cgpa"><?php echo $student['cgpa']; ?></span></td>

        </tr>


      </tbody>
    </table>

<br>
<br>

    <table class="table" style="width: 60%">
      <thead>
        <tr>

            <th style="width: 80%; padding-left: 30%;" >Others</th>
            <th style="width: 20%">     <button class ="btn-change" onclick="edit3()" id="sd_edit2">Edit</button><button class ="btn-change" onclick="save()" id="ed_save2" style="display: none;">Save</button>  </th>

        </tr>
      </thead>
    </table >


    <table class="table" style="width: 60%" id="edit3">
      <tbody>
        <tr>
            <th>Contact</th>
            <td><input type="number" name="ed_contact" value="<?php echo $student['contact']; ?>" style="display: none;text-align: center;" id="ed_contact"><span id="sd_contact"><?php echo $student['contact']; ?></span></td>
        </tr>
       	<tr>
       		<th>Email</th>
       		<td><input type="email" name="ed_email" value="<?php echo $student['email']; ?>" style="display: none;text-align: center;" id="ed_email"><span id="sd_email"><?php echo $student['email']; ?></span></td> 
       	</tr>
       	<tr>
       		<th >Permanent Address</th>
       		<td><input type="text" name="ed_per_address" value="<?php echo $student['per_address']; ?>" style="display: none;text-align: center;" id="ed_per_address"><span id="sd_per_address"><?php echo $student['per_address']; ?></span></td>
       	</tr>
       	<tr>
       		<th>Correspondent Address</th>
       		<td><input type="text" name="ed_cor_address" value="<?php echo $student['cor_address']; ?>" style="display: none; text-align: center;" id="ed_cor_address"><span id="sd_cor_address"><?php echo $student['cor_address']; ?></span></td>
       	</tr>
        


      </tbody>
    </table>
   </div>
<br>
<br>
    <table class="table" style="width: 60%">
      <thead>
        <tr>

            <th style="width: 80%; padding-left: 30%;" >Additional Information</th>
            <th style="width: 20%">     <button class ="btn-change" onclick="edit4()" id="sd_edit3">Edit</button><button class ="btn-change" onclick="save1()" id="ed_save3" style="display: none;">Save</button>  </th>

        </tr>
      </thead>
    </table >
    <table class="table" style="width: 60%" id="edit3">
      <tbody>
        <tr>
          <td id="add_info_row"><input type="text" name="add_info" style="width: 90%;height: 50%;" id="add_info" value="<?php echo $student['add_info'];?>"></td>
        </tr>
      </tbody>
    </table>
<br>
<br>
    <textarea name="ckeditor" value="ajgvedjebkb" id="ckeditor" style="width: 60%;display: none;"></textarea>

	<script type="text/javascript" src="jquery.min.js"></script>
  <script type="text/javascript" src="js/student.js"></script>
  <script src="https://cdn.ckeditor.com/4.11.3/standard/ckeditor.js"></script>
</body>
</html>
