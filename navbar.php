<div class="d-flex align-items-center p-2 w-100">
    <h1 class="flex-grow-1">Back To Nature</h1>
    <a href="/pages/index.php" class="text-light mx-2">Home</a>
    <a href="/pages/map.php" class="text-light mx-2">Map</a>
    <?php
        session_start();
        if (isset($_SESSION['loggedin']) && $_SESSION['loggedin']) {
            echo '<a href="/pages/log.php" class="text-light mx-2">Log</a>
                  <a href="/pages/journal.php" class="text-light mx-2">Journal</a>';
            echo '<a href="/pages/profile.php" class="text-light mx-2">' . $_SESSION['name'] . '</a>';
        } else {
            echo '<a href="/pages/login.php" class="text-light mx-2 login">Login</a>';
        }
    ?>
</div>