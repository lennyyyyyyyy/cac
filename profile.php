<?php
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) {
        header("Location: login.html");
        exit;
    }
    $DATABASE_HOST = 'sql307.infinityfree.com';
    $DATABASE_USER = 'if0_36852730';
    $DATABASE_PASS = '13isDumby';
    $DATABASE_NAME = 'if0_36852730_backtonature';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if (mysqli_connect_errno()) {
        $sqlerr = true;
        exit;
    }
    $carboncoins = $con->query("SELECT carboncoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['carboncoins'];
    $admirecoins = $con->query("SELECT admirecoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['admirecoins'];
    $sustaincoins = $con->query("SELECT sustaincoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['sustaincoins'];
    $unitycoins = $con->query("SELECT unitycoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['unitycoins'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>
<body class="w-100 h-100">
    <nav></nav>
    <div class="w-100 d-flex flex-column align-items-center mt-4">
        <div class="text-danger"><?php if (isset($sqlerr) && $sqlerr) { echo "Error fetching user info. Try again later."; } ?></div>
        <h1 class="display-1"><?php echo $_SESSION['name']; ?></h1>
        <div class="d-flex mx-1 p-2 border border-primary rounded-3">
            <div class="fs-3 fw-light mx-2">
                <?php echo $carboncoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/carboncoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-2">
                <?php echo $admirecoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/admirecoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-2">
                <?php echo $sustaincoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/sustaincoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-2">
                <?php echo $unitycoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/unitycoin.png"/>
            </div>
        </div>
        <form action="logout.php" method="post">
        <button type="submit" class="btn btn-danger my-4 p-2 fs-2">Log out</button>
        </form>
    </div>
    
</body>
<script src="jquery.js"></script>
<script src="all.js"></script>
</html>