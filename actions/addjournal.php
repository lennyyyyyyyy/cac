<?php
    include $_SERVER["DOCUMENT_ROOT"]."/config.php"; // database info
    session_start();
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) { // if not logged in redirect to login
        header('Location: /pages/login.php');
        exit;
    }
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if (mysqli_connect_errno()) { // if error redirect to error page
        header("Location: /pages/sqlerr.html");
        exit;
    }
    $stmt = $con->prepare("INSERT INTO journalentries (id, date, entry) VALUES (?, ?, ?)");
    echo $_POST['journal'];
    $stmt->bind_param("iss", $_SESSION['id'], date("Y-m-d"), $_POST['journal']);
    $stmt->execute();
    $stmt->close();

    // add 10 admirecoins for adding a journal entry
    $admirecoins = $con->query("SELECT admirecoins FROM userinfo WHERE id = '" . $_SESSION['id'] . "'")->fetch_assoc()['admirecoins'];
    $admirecoins += 10;
    $con->query("UPDATE userinfo SET admirecoins = $admirecoins WHERE id = '" . $_SESSION['id'] . "'");

    header('Location: /pages/journal.php'); // redirect back to journal page
?>