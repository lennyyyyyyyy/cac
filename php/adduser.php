<!-- 
fetch('/php/adduser.php', {
    method: 'POST',
    body: JSON.stringify({
        username: username,
        password: password,
    })
}) 
returns a boolean, true for success, false for failure
each element has 'id', 'username', 'password', 'carboncoins', 'admirecoins', 'sustaincoins', 'utilitycoins'
-->
<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(false);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $query = $con->query("SELECT * FROM userinfo WHERE username = '" . $post['username'] . "' AND password = '" . $post['password'] . "'");
    if ($query->num_rows != 0) {
        echo json_encode(false);
    } else {
        $stmt = $con->prepare("INSERT INTO userinfo (username, password, carboncoins, admirecoins, sustaincoins, unitycoins) VALUES (?, ?, 0, 0, 0, 0)");
        $stmt->bind_param("ss", $post['username'], $post['password']);
        $stmt->execute();
        $stmt->close();
        echo json_encode(true);
    }
?>