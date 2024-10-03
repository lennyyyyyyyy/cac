<!-- 
fetch('/php/getuser.php', {
    method: 'POST',
    body: JSON.stringify({
        id: user's id,
    })
}) 
returns a list of elements
each element has 'id', 'username', 'password', 'carboncoins', 'admirecoins', 'sustaincoins', 'utilitycoins'
-->
<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $stmt = $con->prepare("SELECT * FROM userinfo WHERE id = ?");
    $stmt->bind_param("i", $_POST['id']);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
?>