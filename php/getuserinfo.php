<?php
    $DATABASE_HOST = 'sql307.infinityfree.com';
    $DATABASE_USER = 'if0_36852730';
    $DATABASE_PASS = '13isDumby';
    $DATABASE_NAME = 'if0_36852730_backtonature'; // database info
    session_start();
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    $stmt = $con->prepare("SELECT * FROM userinfo WHERE username = ?");
    $stmt->bind_param('s', $_POST['username']);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo 'Username is taken!';
        exit;
    } else {
        echo 'Username is available!';
        exit;
    }
?>