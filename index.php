<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congressional App Challenge</title>
    <link rel="stylesheet" href="bootstrap.css">
    
</head>
<body>
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            <h1>Back To Nature</h1>
            <?php
                session_start();
                if (isset($_SESSION['loggedin']) && $_SESSION['loggedin']) {
                    echo '<a href="profile.html" class="text-light float-end">' . $_SESSION['name'] . '</a>';
                } else {
                    echo '<a href="login.html" class="text-light float-end">Login</a>';
                }
            ?>
        </div>
    </nav>
    <div class="container w-100">
        <div class="container w-100 d-flex my-4 py-4 border-bottom">
            <div class="container text-primary text-start">
                <div class="fw-bold display-2">37,150,000,000</div>
                <div class="fs-1 fw-light">tons of CO<sub>2</sub> released every year</div>
                <a href="https://ourworldindata.org/co2-emissions" class="text-secondary">Global Carbon Budget (2023) - with major processing by Our World in Data</a>
            </div>
            <div class="container text-end">
                <div class="text-primary fw-bold display-2" id="carbondioxide"></div>
                <div class="fs-3 fw-light text-dark"> tons released since you opened the page</div>
            </div>
        </div>
        <div class="container w-100 d-flex my-4 py-4 border-bottom">
            <div class="container text-start">
                <div class="text-primary fw-bold display-2" id="airpollutiondeaths"></div>
                <div class="fs-3 fw-light text-dark"> deaths since you opened the page</div>
            </div>
            <div class="container text-primary text-end">
                <div class="fw-bold display-2">8,430,000</div>
                <div class="display-6">deaths by air pollution every year</div>
                <a href="https://doi.org/10.1136/bmj-2023-077784" class="text-secondary">British Medical Journal</a>
            </div>
        </div>
        <div class="container w-100 d-flex my-4 py-4 border-bottom">
            <div class="container text-primary text-start">
                <div class="fw-bold display-2">1,300,000,000</div>
                <div class="display-6">tons of food wasted every year</div>
                <a href="https://www.fao.org/3/mb060e/mb060e.pdf" class="text-secondary">FAO Save Food Global Food Waste and Loss Initiative</a>
            </div>
            <div class="container text-end">
                <div class="text-primary fw-bold display-2" id="foodwaste"></div>
                <div class="fs-3 fw-light text-dark"> tons wasted since you opened the page</div>
            </div>
        </div>
        <div class="container w-100 d-flex my-4 py-4 border-bottom">
            <div class="container text-start">
                <div class="text-primary fw-bold display-2" id="deforestation"></div>
                <div class="fs-3 fw-light text-dark"> m<sup>2</sup> deforested since you opened the page</div>
            </div>
            <div class="container text-primary text-end">
                <div class="fw-bold display-2">3,740,000</div>
                <div class="display-6">hectares of primary forest removed every year</div>
                <a href="https://www.globalforestwatch.org/dashboards/global/" class="text-secondary">Global Forest Watch</a>
            </div>
        </div>
        <div class="container w-100 d-flex my-4 py-4">
            <div class="container text-primary text-start">
                <div class="fw-bold display-2">353,000,000</div>
                <div class="display-6">tons of plastic waste produced every year</div>
                <a href="https://ourworldindata.org/plastic-pollution?insight=around-05-of-plastic-waste-ends-up-in-the-ocean#key-insights" class="text-secondary">OECD Global Plastic Outlook (2022)</a>
            </div>
            <div class="container text-end">
                <div class="text-primary fw-bold display-2" id="plasticwaste"></div>
                <div class="fs-3 fw-light text-dark"> tons of waste produced since you opened the page</div>
            </div>
        </div>
    </div>
    <script src="jquery.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="index.js"></script>
</body>
</html>