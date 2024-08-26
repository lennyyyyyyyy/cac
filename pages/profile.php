<?php
    include $_SERVER["DOCUMENT_ROOT"]."/config.php"; // database info
    session_start();
    if (!isset($_GET['view']) && (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin'])) { // if not logged in redirect to login
        header("Location: /pages/login.php");
        exit;
    }
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME); // connect to database
    if (mysqli_connect_errno()) {
        header("Location: /pages/sqlerr.html");
        exit;
    }
    $id = isset($_GET['view']) ? $_GET['view'] : $_SESSION['id'];
    $info = $con->query("SELECT * FROM userinfo WHERE id = '" . $id . "'")->fetch_assoc(); // retrieve coins
    $carboncoins = $info['carboncoins'];
    $admirecoins = $info['admirecoins'];
    $sustaincoins = $info['sustaincoins'];
    $unitycoins = $info['unitycoins'];
    $name = $info['username'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $name."'s"; ?> Profile</title>
    <link rel="stylesheet" href="/css/bootstrap.css">
</head>
<body class="w-100 h-100">
    <nav></nav>
    <div class="w-100 d-flex flex-column align-items-center mt-4">
        <h1 class="display-1"><?php echo $name; ?></h1>
        <div class="d-flex mx-1 p-2 border border-primary rounded-3">
            <div class="fs-3 fw-light mx-2">
                <?php echo $carboncoins; ?>
                <img src="/textures/carboncoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-2">
                <?php echo $admirecoins; ?>
                <img src="/textures/admirecoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-2">
                <?php echo $sustaincoins; ?>
                <img src="/textures/sustaincoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-2">
                <?php echo $unitycoins; ?>
                <img src="/textures/unitycoin.png"/>
            </div>
        </div>
        <?php
            if (!isset($_GET['view'])) { // if viewing someone elses profile, then no log out button. if viewing own profile, log out button
                echo '<form action="/actions/logout.php" method="post">
                    <button type="submit" class="btn btn-danger my-4 p-2 fs-2">Log out</button>
                    </form>';
            }
        ?>  
    </div>
    
</body>
<script src="/js/jquery.js"></script>
<script src="/js/all.js"></script>
</html>