<?php
    session_start(); // reset session vars
    $_SESSION["id"] = 0;
    $_SESSION["name"] = "";
    $_SESSION["loggedin"] = false;
    header("Location: login.php") // redirect to login
?>