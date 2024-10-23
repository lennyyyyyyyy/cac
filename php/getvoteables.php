<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $stmt = $con->prepare("SELECT * FROM voteables WHERE postid = ?");
    $stmt->bind_param("i", $post['voteableid']);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    foreach ($data as $key => $value) {
        $query = $con->query("SELECT * FROM userinfo WHERE id = ". $value['userid']);
        $data2 = $query->fetch_assoc();
        $data[$key]['username'] = $data2['username'];
    }
    echo json_encode($data);
?>