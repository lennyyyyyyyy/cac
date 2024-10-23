<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $query = $con->query("SELECT * FROM voteables WHERE id = ". 1);
    $data = $query->fetch_assoc();

    $query2 = $con->query("SELECT * FROM userinfo WHERE id = ". $data['userid']);
    $data2 = $query2->fetch_assoc();

    $data['username'] = $data2['username'];
    echo json_encode($data);
?>