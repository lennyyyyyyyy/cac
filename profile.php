<?php
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) {
        header("Location: login.html");
        exit;
    }
    $DATABASE_HOST = 'sql5.freesqldatabase.com';
    $DATABASE_USER = 'sql5715625';
    $DATABASE_PASS = 'et38IIz7ek';
    $DATABASE_NAME = 'sql5715625';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if (mysqli_connect_errno()) {
        $sqlerr = true;
        exit;
    }
    $carboncoins = $con->query("SELECT carboncoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
    $admirecoins = $con->query("SELECT admirecoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
    $sustaincoins = $con->query("SELECT sustaincoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
    $unitycoins = $con->query("SELECT unitycoins FROM users WHERE id = '" . $_SESSION['id'] . "'");
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
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            <h1>Back To Nature</h1>
        </div>
    </nav>
    <div class="w-100 d-flex flex-column align-items-center mt-2">
        <div class="text-danger"><?php if (isset($sqlerr) && $sqlerr) { echo "Error fetching user info. Try again later."; } ?></div>
        <h1 class="display-1"><?php echo $_SESSION['name']; ?></h1>
        <div>
            <div class="fs-3 fw-light mx-1">
                <?php echo $carboncoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/carboncoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-1">
                <?php echo $admirecoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/admirecoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-1">
                <?php echo $sustaincoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/sustaincoin.png"/>
            </div>
            <div class="fs-3 fw-light mx-1">
                <?php echo $unitycoins; ?>
                <img class="d-inline-block" style="height: 1em;" src="textures/unitycoin.png"/>
            </div>
        </div>
    </div>
</body>
</html>