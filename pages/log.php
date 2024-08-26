<?php
    session_start(); 
    if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) { // if not logged in redirect to login
        header('Location: /pages/login.php');
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log your environmental activites!</title>
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/css/all.css">
</head>
<body>
    <nav></nav>
    <div class="container w-75 h-75 d-flex flex-column align-items-center py-3 px-2 my-2">
        <h1 class="display-4 text-primary my-4">Log your environmental activites!</h1>
        <div class="d-flex w-100">
            <div class="w-50 d-flex flex-column align-items-center m-1">
                <span class="fs-3 mt-2">Activity</span>
                <select class="form-select" id="options">
                    <option value="-1" selected>Choose...</option>
                </select>
            
                <div class="rounded-2 mt-2 mb-5">
                    <span class="bg-white p-1 rounded-start-2 fs-6 fw-light border border-primary">
                        <span class="mx-2">
                            <span class="each">0</span>
                            <img src="/textures/carboncoin.png"/>
                        </span>
                        <span class="mx-2">
                            <span class="each">0</span>
                            <img src="/textures/admirecoin.png"/>
                        </span>
                        <span class="mx-2">
                            <span class="each">0</span>
                            <img src="/textures/sustaincoin.png"/>
                        </span>
                        <span class="mx-2">
                            <span class="each">0</span>
                            <img src="/textures/unitycoin.png"/>
                        </span>
                    </span>
                    <span class="bg-light p-1 rounded-end-2 border border-primary" id="unit"></span>
                </div>
            </div>
            <div class="w-50 d-flex flex-column align-items-center m-1">
                <span class="fs-3 mt-2">Amount</span>
                <input id="amount" type="number" class="form-control" placeholder="0" min="0" max="100" step="1" oninput="this.value = Math.max(0, Math.min(100, Math.floor(this.value)))">
            </div>
        </div>
        <span class="bg-white rounded-3 border border-primary fs-3 fw-light">
            <span class="mx-2">
                <span class="total">0</span>
                <img src="/textures/carboncoin.png"/>
            </span>
            <span class="mx-2">
                <span class="total">0</span>
                <img src="/textures/admirecoin.png"/>
            </span>
            <span class="mx-2">
                <span class="total">0</span>
                <img src="/textures/sustaincoin.png"/>
            </span>
            <span class="mx-2">
                <span class="total">0</span>
                <img src="/textures/unitycoin.png"/>
            </span>
            <button type="submit" class="btn btn-outline-dark border-0">Submit</button>
        </span>
            
        
    </div>
</div>
</body>
<script src="/js/jquery.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="/js/log.js"></script>
<script src="/js/all.js"></script>
</html>