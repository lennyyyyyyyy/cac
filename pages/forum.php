<?php
    include $_SERVER["DOCUMENT_ROOT"]."/config.php"; // database info
?>
<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum</title>
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/css/all.css">
</head>
<body class="h-100">
    <nav></nav>
    <div class="d-flex flex-column w-100 p-4 h-100">
        <h1 class="display-4 text-primary text-center">Connect with others</h1>
        <div class="h-100 p-2 overflow-auto">
            <?php
                echo '<input id="loggedin" type="hidden" value="'.($loggedin?'true':'') .'">';
                $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
                if (mysqli_connect_errno()) {
                    header('Location: sqlerr.html');
                    exit;
                }
                $res = $con->query("SELECT * FROM posts ORDER BY time DESC"); // fetch posts
                while ($row = $res->fetch_assoc()) {
                    $vote = 0;
                    if ($loggedin) {
                        $query = $con->query("SELECT * FROM votes WHERE postid = '" . $row["postid"] . "' AND userid = '" . $_SESSION["id"] . "'");
                        if ($query->num_rows > 0) {
                            $vote = $query->fetch_assoc()["val"]; // get user vote if it exists
                        }
                    }
                    // display the post itself, along with hidden fields for the postid, vote, and votes
                    echo '<div class="post w-100 border border-primary rounded-3 p-2 my-2 shadow-lg d-flex">
                            <input class="postid" type="hidden" value="'. $row["postid"] .'">
                            <input class="vote" type="hidden" value="'. $vote .'">
                            <input class="votes" type="hidden" value="'. $row["votes"] .'">
                            <div class="d-flex flex-column align-items-center me-2 p-1 border-end">
                                <button class="upvote border-0 bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="var(--bs-gray)" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </button>
                                <span>'. $row["votes"] .'</span>
                                <button class="downvote border-0 bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="var(--bs-gray)" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-grow-1">
                                <div class="d-flex align-items-center">
                                    <a class="fs-2 flex-grow-1 text-decoration-none">'. $row["title"] .'</a>
                                    
                                    <a href="profile.php?view='. $row["userid"] .'">User</a>
                                </div>
                                <p>'. $row["body"] .'</p>
                            </div>

                        </div>';
                }
            ?>
        </div>
    </div>
</body>
<script src="/js/jquery.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="/js/forum.js"></script>
<script src="/js/all.js"></script>
</html>