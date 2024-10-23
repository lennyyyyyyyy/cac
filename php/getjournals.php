<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $query = $con->query("SELECT * FROM journals WHERE id = " . $post['userid'] . " ORDER BY date DESC");
    $data = $query->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
?>