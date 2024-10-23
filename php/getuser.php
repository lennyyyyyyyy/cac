<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $stmt = $con->prepare("SELECT * FROM userinfo WHERE id = ?");
    $stmt->bind_param("i", $post['id']);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    echo json_encode($data);
?>