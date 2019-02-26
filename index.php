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
						<li><a href="#aboutus">About Us</a></li>
						<li><a href="#">Notice</a></li>
						<li class="drop-down">
		                <a href="#">Download</a>
		                </li>
						<li id="signupBtn" style="float:right"><a>Sign Up</a></li>
						<li id="myBtn" style="float:right"><a>Login</a></li>
					</ul>
				</div>
			</div>
	</div>

													<!-- Login Modal -->
<div id=modal-flow>	



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

							<input type="submit" class="btn btn-primary btn-large btn-block"  style="background-color:#1c2b4b" value="Login"/>


							<a class="login-link" href="#"> Lost your password?</a>
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>


													<!-- Sign up Modal -->


	<div id="signup" class="modal">
		<div class="modal-content1">
			<span class="close2">&times;</span>

			<div class="details">
				<h4>Personal Details</h4>
			</div>
			<div class="login">
				<div class="login-screen">
					<div class="app-title">
						<h1>Registration</h1>
						<h5>(1/3)</h5>
					</div>
					<form method="post" action="#">
						<div class="login-form">

										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Name" name="Name" id="reg_name">
												<span class="error_modal" style="display:none" id="error_reg_name">Name is required</span>
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>
										
										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Father's name" name="father name" id="f_name">
												<span class="error_modal" style="display:none" id="error_f_name">Name is required</span>
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>


										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Mother's name" id="m_name" name="mother name">
												<span class="error_modal" style="display:none" id="error_m_name">Name is required</span>
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>


										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Date of birth: dd/mm/yy" id="dob" name="dob">
												<span class="error_modal" style="display:none" id="error_dob">Name is required</span>
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>

										<div class=table>
											<table style="padding-left: 10px;">
												<tr>
													<td style="padding-left: 56px;">GENDER</td>
													<td style="padding-left:38px;">
														  <label for="male">Male</label>
  														  <input type="radio" name="gender" id="male" value="male">
  													</td>
  													<td style="padding-left: 38px;">
													  	  <label for="female">Female</label>
  													  	  <input type="radio" name="gender" id="female" value="female">
													</td>
												</tr>
											</table>
										</div>

										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Nationality" id="nationality" name="nationality">
												<label class="login-field-icon fui-user" for="login-name"></label>
												<span class="error_modal" style="display:none" id="error_nationality">Name is required</span>
												
										</div>


						</div>
					</form>
				</div>
			</div>


			<div id=next1  class="btn btn-primary btn-large btn-block" id="next1" style="background-color:#1c2b4b ;float:right;text-align: center;padding:4px 0;width:90px">
				<a>Next</a>	
			</div>


		</div>
	</div> 




	<div id="signup2" class="modal">
		<div class="modal-content1">

			<span class="close3">&times;</span>

			<div class="details">
				<h4>Education Details</h4>
			</div>
			<div class="login">
				<div class="login-screen">
					<div class="app-title">
						<h1>Registration</h1>
						<h5>(2/3)</h5>
					</div>
					<form method="post" action="#">
						<div class="login-form">

										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Registration Number" name="Regno">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>
										
										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Roll Number" name="regno">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>


										<div class="control-group" class=dropdown>
													<SELECT class="login-field" >

													<OPTION  style="text-align: center;" Value="Department">Department</OPTION>
													<OPTION Value="Information Technology">Information Technology</OPTION>
													<OPTION Value="Computer science and Engineering">Computer science and Engi.</OPTION>
													<OPTION Value="40 to 60">Metallurgical & Materials Engi.</OPTION>
													<OPTION Value="Over 60">Bio-Technology</OPTION>

													</SELECT>
										</div>


										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Date of birth: dd/mm/yy" id="login-name" name="dob">
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

						</div>
					</form>


				</div>
			</div>

			<div id=next2  class="btn btn-primary btn-large btn-block" style="background-color:#1c2b4b ;float:right;text-align: center;padding:4px 0;width:90px">
				<a>Next</a>	
			</div>

		</div>
	</div>





	<div id="signup3" class="modal">
		<div class="modal-content1">
			<span class="close4">&times;</span>

			<div class="details">
				<h4>Other Details</h4>
			</div>
			<div class="login">
				<div class="login-screen">
					<div class="app-title">
						<h1>Registration</h1>
						<h5>(3/3)</h5>
					</div>
					<form method="post" action="#">
						<div class="login-form">

										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Contact no." name="contact">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>
										
										<div class="control-group">
												<input type="email" class="login-field" value="" placeholder="Email" name="email">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>


										<div class="control-group">
												<input type="address" class="login-field" value="" placeholder="Permanent Address" id="login-name" name="peraddress">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>


										<div class="control-group">
												<input type="text" class="login-field" value="" placeholder="Correspondence Address" id="login-name" name="corraddress">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>


										<div class="control-group">
												<input type="password" class="login-field" value="" placeholder="Password" id="login-name" name="password">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>



										<div class="control-group">
												<input type="password" class="login-field" value="" placeholder="Confirm Password" id="login-name" name="confirm password">
												<label class="login-field-icon fui-user" for="login-name"></label>
										</div>

							<input type="submit" class="btn btn-primary btn-large btn-block"  style="background-color:#1c2b4b" value="Register"/>



						</div>
					</form>
				</div>
			</div>

		</div>
	</div>


</div>

										<!--                                       carousel                   --->


<div id=main>
    <div class="slideshow-border"> 
            <div class="slidercontainer">  
                <div class="showSlide fade">  
                    <img src="images/img1.jpg" />  
                    <div class="content">NIT DGP</div>  
                </div>  
                <div class="showSlide fade">  
                    <img src="images/img2.jpeg" />  
                    <div class="content">NIT DGP</div>  
                </div>  
          
                <div class="showSlide fade">  
                    <img src="images/img3.jpg" />  
                    <div class="content">NIT DGP</div>  
                </div>  
                <div class="showSlide fade">  
                    <img src="images/img4.jpg" />  
                    <div class="content">NIT DGP</div>  
                </div>    
                <a class="left" onclick="nextSlide(-1)">❮</a>  
                <a class="right" onclick="nextSlide(1)">❯</a>  
            </div>
    </div>

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
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>





                                                        <!--               About us page -->



    <div id="aboutus">
        <div class="background">
            <div class="onbackground">
                <h1>AboutUs</h1>
            </div>
            <div class=p>
           			
                <p>We are the students of <b>NIT Durgapur</b> and with three members in a team.We design webpages just like here we have designed student login portal.Hope you liked our website  :) </p>

            </div>
            <div id="flex_container">

						<div class="member">
							<div class="flip-box">
			  					<div class="flip-box-inner">
			    					<div class="flip-box-front">
			   							<img src="images/Pradum.jpg"></img>
									</div>
			    					<div class="flip-box-back">
										<br>
										<br>
			      						<h2>Pradum Kumar</h2>
			    					</div>
								</div>

			 		 		</div>
						</div>

						<div class="member" >
							<div class="flip-box">
			  					<div class="flip-box-inner">
			    					<div class="flip-box-front">
			   							<img src="images/SaiRam.jpg"></img>
									</div>
			    					<div class="flip-box-back">
									<br>
									<br>
			      						<h2>Sai Ram</h2>
			    					</div>
								</div>

			 		 		</div>
						</div>


						<div class="member">
							<div class="flip-box">
			  					<div class="flip-box-inner">
			    					<div class="flip-box-front">
			   							<img src="images/Ankit.jpg"></img>
									</div>
			    					<div class="flip-box-back">
										<br>
										<br>
			      						<h2>Ankit Kumar</h2>
			    					</div>
								</div>
			 		 		</div>			
						</div>
				</div>

        </div>
    </div>

</div>
	<script type="text/javascript" src="jquery.min.js"></script>
    <script src="js/javascript.js"></script>
</body>
</html>
