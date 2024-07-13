<?php
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) {
        header('Location: login.php');
        exit;
    }
    $DATABASE_HOST = 'sql307.infinityfree.com';
    $DATABASE_USER = 'if0_36852730';
    $DATABASE_PASS = '13isDumby';
    $DATABASE_NAME = 'if0_36852730_backtonature';
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if (mysqli_connect_errno()) {
        header("Location: sqlerr.html");
        exit;
    }
    $stmt = $con->prepare("INSERT INTO journalentries (id, date, entry) VALUES (?, ?, ?)");
    echo $_POST['journal'];
    $stmt->bind_param("iss", $_SESSION['id'], date("Y-m-d"), $_POST['journal']);
    $stmt->execute();
    $stmt->close();

    $admirecoins = $con->query("SELECT admirecoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['admirecoins'];
    $admirecoins += 10;
    $con->query("UPDATE userinfo SET admirecoins = $admirecoins WHERE id = '" . $_SESSION['id'] . "'");

    header('Location: journal.php');
?>