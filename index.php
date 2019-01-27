<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Login Form</title>
  
  
  
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body style="background-color:#1c2b4b">
	<div class="nav">
		<div class="webtitle-screen">
			<div class="webtitle">
				<h1>National Institute of Technology, Durgapur</h1>
			</div>
		</div>
		<div class="nav-menu">
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About Us</a></li>
			<li><a href="#">Notice</a></li>
			<li><a href="#">Download</a></li>
		</ul>
		</div>
	</div>
	
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

				<input type="submit" class="btn btn-primary btn-large btn-block"  style="background-color:#1c2b4b" value="login"/>
				<a class="login-link" href="#"> Lost your password?</a>
			</div>
			</form>
		</div>
	</div>
</body>
  
  

</body>

</html>
