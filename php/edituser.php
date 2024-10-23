<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(false);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $stmt = $con->query("UPDATE userinfo SET username = '" . $post['username'] . "', password = '" . $post['password'] . "' WHERE id = '" . $post['id'] . "'");
    echo json_encode(true);
?>