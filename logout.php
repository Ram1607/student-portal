<?php
    session_start();
    session_unset();
    echo "<script>window.location='http://localhost:86/student-portal';</script>";
?>