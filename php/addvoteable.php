<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(false);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $stmt = $con->prepare("INSERT INTO posts (postid, title, body, userid) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("issi", $post['postid'], $post['title'], $post['body'], $post['userid']);
    $stmt->execute();
    $stmt->close();
    echo json_encode(true);
?>