<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $query = $con->query("SELECT * FROM votes WHERE userid = " . $post['userid']);
    $data = $query->fetch_all(MYSQLI_ASSOC);

    $data2 = array();
    foreach ($data as $key => $value) {
        $data2[$value['voteableid']] = $value['vote'];
    }

    echo json_encode($data2);
?>
        
