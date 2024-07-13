<?php
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) {
        header('Location: login.php');
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log your environmental activites!</title>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="all.css">
</head>
<body>
    <nav></nav>
    <div class="container w-75 h-75 d-flex flex-column align-items-center bg-light border border-dark rounded-2 py-3 px-2 my-2">
        <h1 class="fw-light my-4">Log your environmental activites!</h1>
        <div class="options overflow-auto" style="height: 50vw"></div>
        <button type="submit" class="btn btn-outline-dark my-4">Good job! You deserve these coins.</button>
        <span class="bg-white p-3 border border-dark fs-1 fw-light">
            <span class="mx-2">
                <span class="total">0</span>
                <img class="d-inline-block" src="textures/carboncoin.png"/>
            </span>
            <span class="mx-2">
                <span class="total">0</span>
                <img class="d-inline-block" src="textures/admirecoin.png"/>
            </span>
            <span class="mx-2">
                <span class="total">0</span>
                <img class="d-inline-block" src="textures/sustaincoin.png"/>
            </span>
            <span class="mx-2">
                <span class="total">0</span>
                <img class="d-inline-block" src="textures/unitycoin.png"/>
            </span>
        </span>
    </div>
</div>
</body>
<script src="jquery.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="log.js"></script>
<script src="all.js"></script>
</html>