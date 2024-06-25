<?php
    $DATABASE_HOST = 'sql5.freesqldatabase.com';
    $DATABASE_USER = 'sql5715625';
    $DATABASE_PASS = 'et38IIz7ek';
    $DATABASE_NAME = 'sql5715625';
    // Try and connect using the info above.
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
    if ( mysqli_connect_errno() ) {
        // If there is an error with the connection, stop the script and display the error.
        echo 'Failed to connect to MySQL: ' . mysqli_connect_error();
        header("Location: login.html?sqlerr=true");
        exit;
    }
    // Check if all fields are filled
    if (!isset($_POST["username"], $_POST["password"], $_POST["password2"])) {
        echo 'Please fill all fields!';
        header("Location: signup.php?emptyerr=true");
        exit;
    }
    // Check if passwords match
    if ($_POST["password"] !== $_POST["password2"]) {
        echo 'Passwords do not match!';
        header("Location: signup.php?matcherr=true");
        exit;
    }
    // Check if username contains spaces
    if (preg_match('/\s/', $_POST["username"])) {
        echo 'Username must not contain spaces!';
        header("Location: signup.php?userformaterr=true");
        exit;
    }
    // Check if username is taken
    $stmt = $con->prepare("SELECT * FROM userinfo WHERE username = ?");
    $stmt->bind_param('s', $_POST['username']);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows > 0) {
        echo 'Username is taken!';
        header("Location: signup.php?usertakenerr=true");
        exit;
    }
    $stmt->close();
    // Check if password is valid (between 12 and 24 chars and no whitespace)
    if (preg_match('/\s/', $_POST["password"]) || strlen($_POST["password"]) < 12 || strlen($_POST["password"]) > 24) {
        echo 'Password must contain between 12 and 24 characters and no spaces!';
        header("Location: signup.php?passerr=true");
        exit;
    }
    // Successful
    $stmt = $con->prepare("INSERT INTO userinfo (username, password) VALUES (?, ?)");
    $stmt->bind_param('ss', $_POST['username'], $_POST['password']);
    $stmt->execute();
    $stmt->close();
    // Redirect to login
    header("Location: login.php?signup=true");
?>