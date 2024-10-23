<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(false);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $row = $con->query("SELECT carboncoins, admirecoins, sustaincoins, unitycoins FROM userinfo WHERE id = '" . $post['id'] . "'")->fetch_assoc();
    $carboncoins = $row['carboncoins'];
    $admirecoins = $row['admirecoins'];
    $sustaincoins = $row['sustaincoins'];
    $unitycoins = $row['unitycoins'];
    $carboncoins += $post['carboncoins']; // add amounts from POST request
    $admirecoins += $post['admirecoins'];
    $sustaincoins += $post['sustaincoins'];
    $unitycoins += $post['unitycoins'];
    // send the new amounts back
    $con->query("UPDATE userinfo SET carboncoins = $carboncoins, admirecoins = $admirecoins, sustaincoins = $sustaincoins, unitycoins = $unitycoins WHERE id = '" . $post['id'] . "'");
    echo json_encode(true);
?>