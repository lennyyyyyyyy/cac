<?php
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) {
        header('Location: login.php');
        exit;
    }
    $DATABASE_HOST = 'sql307.infinityfree.com';
    $DATABASE_USER = 'if0_36852730';
    $DATABASE_PASS = '13isDumby';
    $DATABASE_NAME = 'if0_36852730_backtonature';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if (mysqli_connect_errno()) {
        header("Location: sqlerr.html");
        exit;
    }
    $carboncoins = $con->query("SELECT carboncoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['carboncoins'];
    $admirecoins = $con->query("SELECT admirecoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['admirecoins'];
    $sustaincoins = $con->query("SELECT sustaincoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['sustaincoins'];
    $unitycoins = $con->query("SELECT unitycoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['unitycoins'];
    $carboncoins += $_POST['carboncoins'];
    $admirecoins += $_POST['admirecoins'];
    $sustaincoins += $_POST['sustaincoins'];
    $unitycoins += $_POST['unitycoins'];
    $con->query("UPDATE userinfo SET carboncoins = $carboncoins WHERE id = '" . $_SESSION['id'] . "'");
    $con->query("UPDATE userinfo SET admirecoins = $admirecoins WHERE id = '" . $_SESSION['id'] . "'");
    $con->query("UPDATE userinfo SET sustaincoins = $sustaincoins WHERE id = '" . $_SESSION['id'] . "'");
    $con->query("UPDATE userinfo SET unitycoins = $unitycoins WHERE id = '" . $_SESSION['id'] . "'");
    echo "success";
?>