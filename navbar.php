<div class="d-flex align-items-center p-2 w-100">
    <h1 class="flex-grow-1">Back To Nature</h1>
    <a href="index.php" class="text-light mx-2">Home</a>
    <a href="map.php" class="text-light mx-2">Map</a>
    <?php
        session_start();
        if (isset($_SESSION['loggedin']) && $_SESSION['loggedin']) {
            echo '<a href="log.php" class="text-light mx-2">Log</a>
                  <a href="journal.php" class="text-light mx-2">Journal</a>';
            echo '<a href="profile.php" class="text-light mx-2">' . $_SESSION['name'] . '</a>';
        } else {
            echo '<a href="login.php" class="text-light mx-2 login">Login</a>';
        }
    ?>
</div>