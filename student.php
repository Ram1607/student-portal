<?php
	session_start();
	if(!isset($_SESSION['ss_user'])||$_SESSION['ss_type']!=0)
	{
		$_SESSION['ss_e'] = 1;
		echo "<script>window.location='http://localhost/Project/student-portal';</script>";
	}
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

	<script type="text/javascript" src="jquery.min.js"></script>
    <script src="js/javascript.js"></script>
</body>
</html>
