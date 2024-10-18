<!-- 
fetch('/php/getvoteables.php', {
    method: 'POST',
    body: JSON.stringify({
        postid: 0 if getting all posts, otherwise id of post to get comments of that post,
    })
}) 
returns a list of voteables(posts or comments) sorted by time
each element has 'id', 'postid', 'title', 'body', 'userid', 'time', 'votes'
-->
<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $stmt = $con->prepare("SELECT * FROM voteables WHERE postid = ?");
    $stmt->bind_param("i", $_POST['postid']);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
?>