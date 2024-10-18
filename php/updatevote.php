<!-- 
fetch('/php/updatevote.php', {
    method: 'POST',
    body: JSON.stringify({
        voteableid: id of voteable(post or comment),
        userid: user's id,  
        vote: current user's vote (1, 0, -1)
    })
}) 
changes a user's recorded vote and updates total votes
returns a boolean, true for success, false for failure
-->
<?php
    require 'config.php';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        echo json_encode(false);
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }
    $query = $con->query("SELECT * FROM votes WHERE voteableid = " . $_POST['voteableid'] . " AND userid = " . $_POST['userid']);
    if ($query->num_rows == 0) {
        $query = $con->query("INSERT INTO votes (voteableid, userid, vote) VALUES (" . $_POST['voteableid'] . ", " . $_POST['userid'] . ", " . $_POST['vote'] . ")");
        $query = $con->query("UPDATE voteables SET votes = votes + " . $_POST['vote'] . " WHERE id = " . $_POST['voteableid']);
    } else {
        $data = $query->fetch_assoc();
        $query = $con->query("UPDATE votes SET vote = " . $_POST['vote'] . " WHERE voteableid = " . $_POST['voteableid'] . " AND userid = " . $_POST['userid']);
        $query = $con->query("UPDATE voteables SET votes = votes + " . ($_POST['vote'] - $data['vote']) . " WHERE id = " . $_POST['voteableid']);
    }
    echo json_encode(true);
?>