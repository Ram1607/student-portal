<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Student Portal</title>
  
  
  
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body style="background-color:#1c2b4b">



	<div class="nav">
		<div class="webtitle-screen">
			<div class="webtitle">
				<h2>National Institute of Technology, Durgapur</h2>
			</div>
		</div>
		<div class="nav-menu">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Notice</a></li>
				<li><a href="#">Download</a></li>
				<li id="Btn"><a>Login</a></li>
				<li id="signupBtn"><a>Sign Up</a></li>
			</ul>
		</div>
	</div>


													<!-- Login Modal -->

		
	<div id="Mymodal" class="modal">
		<div class="modal-content">
			<span class="close1">&times;</span>
			<div class="login">
				<div class="login-screen">
					<div class="app-title">
						<h1>Login</h1>
					</div>
					<form method="post" action="login_process.php">
						<div class="login-form">
							<div class="control-group">
									<input type="text" class="login-field" value="" placeholder="username" id="login-name" name="username">
									<label class="login-field-icon fui-user" for="login-name"></label>
							</div>

							<div class="control-group">
									<input type="password" class="login-field" value="" placeholder="password" id="login-pass" name="pswd">
									<label class="login-field-icon fui-lock" for="login-pass"></label>
							</div>

							<a class="login-link" href="#"> Lost your password?</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>


													<!-- Sign up Modal -->


	<div id="signup" class="modal">
		<div class="modal-content">
			<span class="close2">&times;</span>
			<div class="login">
				<div class="login-screen">
					<div class="app-title">
						<h1>Registration</h1>
					</div>
					<form method="post" action="#">
						<div class="login-form">
							<div class="control-group">
									<input type="text" class="login-field" value="" placeholder="Name" name="Name">
									<label class="login-field-icon fui-user" for="login-name"></label>
							</div>
							
							<div class="control-group">
									<input type="text" class="login-field" value="" placeholder="Registration no." name="regno">
									<label class="login-field-icon fui-user" for="login-name"></label>
							</div>


							<div class="control-group">
									<input type="text" class="login-field" value="" placeholder="Branch" id="login-name" name="branch">
									<label class="login-field-icon fui-user" for="login-name"></label>
							</div>


							<div class="control-group">
									<input type="text" class="login-field" value="" placeholder="Contact" id="login-name" name="contact">
									<label class="login-field-icon fui-user" for="login-name"></label>
							</div>


							<div class="control-group">
									<input type="text" class="login-field" value="" placeholder="Email" id="login-name" name="email">
									<label class="login-field-icon fui-user" for="login-name"></label>
							</div>



							<div class="control-group">
									<input type="text" class="login-field" value="" placeholder="Address" id="login-name" name="address">
									<label class="login-field-icon fui-user" for="login-name"></label>
							</div>


							<input type="submit" class="btn btn-primary btn-large btn-block"  style="background-color:#1c2b4b" value="Submit"/>


						</div>
					</form>
				</div>
			</div>
		</div>
	</div> 





	<script src="js/javascript.js"></script>
</body>
</html>
