<?php
    include $_SERVER["DOCUMENT_ROOT"]."/config.php"; // database info
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) { // if not logged in redirect to login
        header('Location: /pages/login.php');
        exit;
    }
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME); // connect to database
    if (mysqli_connect_errno()) { // if connection error, redirect to error page
        header("Location: /pages/sqlerr.html");
        exit;
    }
    $row = $con->query("SELECT carboncoins, admirecoins, sustaincoins, unitycoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc(); // fetch current coin counts
    $carboncoins = $row['carboncoins'];
    $admirecoins = $row['admirecoins'];
    $sustaincoins = $row['sustaincoins'];
    $unitycoins = $row['unitycoins'];
    $carboncoins += $_POST['carboncoins']; // add amounts from POST request
    $admirecoins += $_POST['admirecoins'];
    $sustaincoins += $_POST['sustaincoins'];
    $unitycoins += $_POST['unitycoins'];
    // send the new amounts back
    $con->query("UPDATE userinfo SET carboncoins = $carboncoins, admirecoins = $admirecoins, sustaincoins = $sustaincoins, unitycoins = $unitycoins WHERE id = '" . $_SESSION['id'] . "'");
    echo "success";
?>