<?php
    session_start();
    $_SESSION["id"] = 0;
    $_SESSION["name"] = "";
    $_SESSION["loggedin"] = false;
    header("Location: login.php")
?>