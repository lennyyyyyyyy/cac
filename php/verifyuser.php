<!-- 
fetch('/php/verifyuser.php', {
    method: 'POST',
    body: JSON.stringify({
        username: username,
        password: password
    })
}) 
verifies a username and password
returns an int, userid for success, 0 for failure
-->
<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(0);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $query = $con->query("SELECT * FROM userinfo WHERE username = '" . $post['username'] . "' AND password = '" . $post['password'] . "'");
    if ($query->num_rows == 0) {
        echo json_encode(0);
    } else {
        echo json_encode($query->fetch_assoc()['id']);
    }
?>