<?php
    include $_SERVER["DOCUMENT_ROOT"]."/config.php"; // database info
    if (!isset($_POST["postid"], $_POST["newvote"])) {
        echo "unfillederror";
        exit;
    }
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME); // connect to database
    if (mysqli_connect_errno()) {
        echo "sqlerror";
        exit;
    }
    $vote = $con->query("SELECT * FROM votes WHERE postid = '" . $_POST["postid"] . "' AND userid = '" . $_SESSION["id"] . "'");
    $votes = $con->query("SELECT votes FROM posts WHERE postid = '" . $_POST["postid"] . "'")->fetch_assoc()["votes"]; // fetch total votes
    if ($vote->num_rows > 0) { // has the user voted before?
        $votes += $_POST["newvote"] - $vote->fetch_assoc()["val"]; // change it according to the difference between user's new vote and old vote
        $con->query("UPDATE votes SET val = " . $_POST["newvote"] . " WHERE postid = '" . $_POST["postid"] . "' AND userid = '" . $_SESSION["id"] . "'"); // set new user vote
    } else {
        $votes += $_POST["newvote"]; // change it by user's new vote
        $con->query("INSERT INTO votes (postid, userid, val) VALUES ('" . $_POST["postid"] . "', '" . $_SESSION["id"] . "', " . $_POST["newvote"] . ")"); // add new user vote
    }
    $con->query("UPDATE posts SET votes = $votes WHERE postid = '" . $_POST["postid"] . "'"); // set new total votes
    echo "success";
?>