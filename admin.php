<?php
    session_start();
    if(!isset($_SESSION['ss_user'])||$_SESSION['ss_type']!=1)
    {
        $_SESSION['ss_e'] = 1;
        echo "<script>window.location='http://localhost:86/student-portal';</script>";
    }
    $con = mysqli_connect('localhost','root','','student-portal',3307) or die("Server can't connect try again");
    mysqli_select_db($con,'student-portal') or die("Database not found!!");
    $s = "SELECT * FROM details WHERE active=0";
    $result = mysqli_query($con,$s) or die(mysqli_error($con));
    
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
                        <li><a href="#aboutus">Profile</a></li>
                        <li><a href="#request">Request</a></li>
                        <li><a href="#manage">Manage</a></li>
                        <li><a href="#">Notice</a></li>
                        <li class="drop-down"><a href="#">Download</a></li>
                        <li style="float:right"><a href="logout.php" id="logoutbtn">logout</a></li>
                        <li style="float:right;bottom-paading:10px;">welcome <?php echo $_SESSION['ss_user']; ?> / </li>
                    </ul>
                </div>
            </div>
    </div>

  <br>
  <br>


    <div>
      <table class="table">
        <thead>
          <tr>
              <th>New Students</th>
          </tr>      
        </thead>
      </table>
    <table class="table">
      <tbody>
          <tr>
              <th>Name</th>
              <th>Reg. No.</th>
              <th>Roll. No.</th>
              <th>Action</th>
          </tr>
          <?php
              while($row=mysqli_fetch_assoc($result))
              {
          ?>
          <tr>
              <td><?php echo $row['name']; ?></td>
              <td><?php echo $row['reg_no']; ?></td> 
              <td><?php echo $row['roll_no']; ?></td>
              <td><button class="btn-change" style="background-color: green" onclick="ajaxreq('acc','<?php echo $row['reg_no'];?>')">Accept</button><button style="background-color: red;margin-left: 5%;" class="btn-change" onclick="ajaxreq('rej','<?php echo $row['reg_no'];?>')">Reject</button></td>
          </tr>
              <?php } ?>
      </tbody>
      </table>

    <br/>

    <table class="table">
      <thead>
        <tr>

            <th>Accepted Students</th>

        </tr>
      </thead>
    </table >
    <table class="table">
      <tbody>
        <tr>
            <th>Name</th>
            <th>Reg. No.</th>
            <th >Roll. No.</th>
            <th>Action</th>
        </tr>
        <?php
            $s = "SELECT * FROM details WHERE active=1";
            $result = mysqli_query($con,$s) or die(mysqli_error($con));        
            while($row=mysqli_fetch_assoc($result))
            {
        ?>
        <tr>
            <td><?php echo $row['name']; ?></td>
            <td><?php echo $row['reg_no']; ?></td> 
            <td><?php echo $row['roll_no']; ?></td>
            <td><button class="btn-change">View</button></td>
        </tr>
            <?php } ?>
      </tbody>
    </table>


    <br/>

    <table class="table">
      <thead>
        <tr>
            <th>Rejected Students</th>
        </tr>
      </thead>
    </table>
    <table class="table">
      <tbody>
        <tr>
            <th>Name</th>
            <th>Reg. No.</th>
            <th>Roll. No.</th>
            <th>Action</th>
        </tr>
        <?php
            $s = "SELECT * FROM details WHERE active=2";
            $result = mysqli_query($con,$s) or die(mysqli_error($con));        
            while($row=mysqli_fetch_assoc($result))
            {
        ?>
        <tr>
            <td><?php echo $row['name']; ?></td>
            <td><?php echo $row['reg_no']; ?></td> 
            <td><?php echo $row['roll_no']; ?></td>
            <td><button class="btn-change">View</button></td>
        </tr>
            <?php } ?>
      </tbody>
    </table>
  </div>

  <div id="txtHint">
  </div>


    <script type="text/javascript" src="jquery.min.js"></script>
  <script src="js/javascript.js"></script>

</body>
</html>
