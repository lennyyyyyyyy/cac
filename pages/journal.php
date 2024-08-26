<?php
    include $_SERVER["DOCUMENT_ROOT"]."/config.php"; // database info
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) { // if not logged in redirect to login
        header('Location: /pages/login.php');
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Journal</title>
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/css/all.css">
</head>
<body>
    <nav></nav>
    <div class="d-flex flex-column w-100 p-4">
        <h1 class="display-4 text-primary">Journal your natural experiences!</h1>
        <form class="w-100 border border-primary rounded-3 p-2 my-2 shadow-lg" action="/actions/addjournal.php" method="post"> 
            <div>
                <span class="text-primary fw-light fs-4 w-100"><?php echo date('m/d/Y'); ?></span>
                <button type="submit" class="btn btn-primary float-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                    +10 <img class="d-inline-block" src="/textures/admirecoin.png"/>
                </button>
            </div>
            <textarea class="w-100 border border-primary rounded-3 shadow-sm mt-2 p-2" name="journal" id="journal" cols="30" rows="10" placeholder="Today, I went on a walk in the park..."></textarea>
        </form>
        <?php
            $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME); // connect to database
            if (mysqli_connect_errno()) { // if error redirect to error page
                header('Location: sqlerr.html');
                exit;
            }
            $res = $con->query("SELECT date, entry FROM journalentries WHERE id = '" . $_SESSION['id'] . "' ORDER BY date DESC"); // fetch journal entries
            while ($row = $res->fetch_assoc()) { // display journal entries
                $date = $row['date'];
                $entry = $row['entry'];
                echo '<div class="w-100 border border-primary rounded-3 p-2 my-2 shadow-lg">
                        <span class="text-primary fw-light fs-4 w-100">' . date("m/d/Y", strtotime($date)) . '</span>
                        <p class="w-100 border border-primary rounded-3 shadow-sm mt-2 p-2">' . $entry . '</p>
                      </div>';
            }
        ?>
    </div>
</body>
<script src="/js/jquery.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="/js/journal.js"></script>
<script src="/js/all.js"></script>
</html>