<!DOCTYPE html>
<html lang="en" class="w-100 h-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login to BTN</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>
<body class="w-100 h-100">
    <div class="w-100 h-100 bg-primary d-flex align-items-center justify-content-center">
        <div class="container w-25 d-flex flex-column align-items-center bg-light border border-dark rounded-2 py-3 px-2">
            <h1 class="fw-light my-4">Login</h1>
            <?php
                if (isset($_GET['sqlerr']))
                    echo '<h6 class="fw-light text-danger">Failed to connect to server, please try again later.</h6>';
                if (isset($_GET['emptyerr']))
                    echo '<h6 class="fw-light text-danger">Please fill both the username and password fields!</h6>';
                if (isset($_GET['passerr']) || isset($_GET['usererr']))
                    echo '<h6 class="fw-light text-danger">Incorrect username and/or password</h6>';
                if (isset($_GET['signup']))
                    echo '<h6 class="fw-light text-success">Account created successfully!</h6>';
            ?>
            <h6 class="fw-light text-danger">Incorrect username and/or password</h6>
            <form action="authenticate.php" method="post" class="w-75">
                <div class="form-floating my-2">
                    <input type="text" id="username" name="username" class="form-control" placeholder="Username">
                    <label for="username">Username</label>
                </div>
                <div class="form-floating my-2">
                    <input type="password" id="password" name="password" class="form-control" placeholder="Password">
                    <label for="password">Password</label>
                </div>
                <button type="submit" class="btn btn-outline-dark my-4 w-100">Login</button>
            </form>
            <a href="signup.php" class="my-2">Don't have an account? Sign up</a>
        </div>
    </div>
    <script src="jquery.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>