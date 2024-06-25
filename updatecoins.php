<?php
    session_start();
    $DATABSE_HOST = 'sql5.freesqldatabase.com';
    $DATABASE_USER = 'sql5715625';
    $DATABASE_PASS = 'et38IIz7ek';
    $DATABASE_NAME = 'sql5715625';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if (mysqli_connect_errno()) {
        echo "sqlerr";
        exit;
    }
    $carboncoins = $con->query("SELECT carboncoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
    $admirecoins = $con->query("SELECT admirecoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
    $sustaincoins = $con->query("SELECT sustaincoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
    $unitycoins = $con->query("SELECT unitycoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
    $carboncoins += $_POST['carboncoins'];
    $admirecoins += $_POST['admirecoins'];
    $sustaincoins += $_POST['sustaincoins'];
    $unitycoins += $_POST['unitycoins'];
    $con->query("UPDATE users SET carboncoins = $carboncoins WHERE id = '" . $_SESSION['id'] . "'");
    $con->query("UPDATE users SET admirecoins = $admirecoins WHERE id = '" . $_SESSION['id'] . "'");
    $con->query("UPDATE users SET sustaincoins = $sustaincoins WHERE id = '" . $_SESSION['id'] . "'");
    $con->query("UPDATE users SET unitycoins = $unitycoins WHERE id = '" . $_SESSION['id'] . "'");
    echo "success";
?>