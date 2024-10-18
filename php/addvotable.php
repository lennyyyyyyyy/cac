<!-- 
fetch('/php/addvotable.php', {
    method: 'POST',
    body: JSON.stringify({
        postid: 0 if post, otherwise id of comment's parent post,
        title: title, empty string if comment,
        body: body,
        userid: user's id,
    })
}) 
adds a post or a comment to the database
returns a boolean, true for success, false for failure
-->
<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(false);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $stmt = $con->prepare("INSERT INTO posts (postid, title, body, userid) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("issi", $_POST['postid'], $_POST['title'], $_POST['body'], $_POST['userid']);
    $stmt->execute();
    $stmt->close();
    echo json_encode(true);
?>