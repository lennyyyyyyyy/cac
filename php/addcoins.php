<!-- 
fetch('/php/addcoins.php', {
    method: 'POST',
    body: JSON.stringify({
        id: user's id,
        carboncoins: carbon coins to add,
        admirecoins: admire coins to add,
        sustaincoins: sustain coins to add,
        unitycoins: unity coins to add,
    })
}) 
returns a boolean, true for success, false for failure
-->
<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(false);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $row = $con->query("SELECT carboncoins, admirecoins, sustaincoins, unitycoins FROM userinfo WHERE id = '" . $_POST['id'] . "'")->fetch_assoc();
    $carboncoins = $row['carboncoins'];
    $admirecoins = $row['admirecoins'];
    $sustaincoins = $row['sustaincoins'];
    $unitycoins = $row['unitycoins'];
    $carboncoins += $_POST['carboncoins']; // add amounts from POST request
    $admirecoins += $_POST['admirecoins'];
    $sustaincoins += $_POST['sustaincoins'];
    $unitycoins += $_POST['unitycoins'];
    // send the new amounts back
    $con->query("UPDATE userinfo SET carboncoins = $carboncoins, admirecoins = $admirecoins, sustaincoins = $sustaincoins, unitycoins = $unitycoins WHERE id = '" . $_SESSION['id'] . "'");
    echo json_encode(true);
?>