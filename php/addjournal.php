<!-- 
fetch('/php/addjournal.php', {
    method: 'POST',
    body: JSON.stringify({
        id: user's id,
        text: journal text,
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
    $stmt = $con->prepare("INSERT INTO journalentries (id, date, entry) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $_POST['id'], date("Y-m-d"), $_POST['text']);
    $stmt->execute();
    $stmt->close();
    echo json_encode(true);
?>