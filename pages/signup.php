<!DOCTYPE html>
<html lang="en" class="w-100 h-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create an account!</title>
    <link rel="stylesheet" href="/css/bootstrap.css">
</head>
<body class="w-100 h-100">
    <div class="w-100 h-100 bg-primary d-flex align-items-center justify-content-center">
        <div class="container w-25 d-flex flex-column align-items-center bg-light border border-dark rounded-2 py-3 px-2">
            <h1 class="fw-light my-4">Sign up</h1>
            <?php // various errors if redirected from signuprequest.php
                if (isset($_GET['sqlerr']))
                    echo '<h6 class="fw-light text-danger">Failed to connect to server, please try again later.</h6>';
                if (isset($_GET['emptyerr']))
                    echo '<h6 class="fw-light text-danger">Please fill both the username and password fields!</h6>';
                if (isset($_GET['passerr']))
                    echo '<h6 class="fw-light text-danger">Password must contain between 12 and 24 characters and no spaces!</h6>';
                if (isset($_GET['usertakenerr']))
                    echo '<h6 class="fw-light text-danger">Username is taken!</h6>';
                if (isset($_GET['userformaterr']))
                    echo '<h6 class="fw-light text-danger">Username must not contain spaces!</h6>';
                if (isset($_GET['matcherr']))
                    echo '<h6 class="fw-light text-danger">Passwords do not match!</h6>';
            ?>
            <form action="/actions/signuprequest.php" method="post" class="w-75">
                <div class="form-floating my-2">
                    <input type="text" id="username" name="username" class="form-control" placeholder="Username">
                    <label for="username">Username</label>
                </div>
                <div class="form-floating my-2">
                    <input type="password" id="password" name="password" class="form-control" placeholder="Password">
                    <label for="password">Password</label>
                </div>
                <div class="form-floating my-2">
                    <input type="password" id="password2" name="password2" class="form-control" placeholder="Confirm Password">
                    <label for="password2">Confirm Password</label>
                </div>
                <button type="submit" class="btn btn-outline-dark my-4 w-100">Sign up</button>
            </form>
            <a href="/pages/login.php" class="my-2">Already have an account? Log in</a>
        </div>
    </div>
    <script src="/js/jquery.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>