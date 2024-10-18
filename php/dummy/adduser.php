<!-- 
fetch('/php/adduser.php', {
    method: 'POST',
    body: JSON.stringify({
        username: username,
        password: password,
    })
}) 
returns a boolean, true for success, false for failure
each element has 'id', 'username', 'password', 'carboncoins', 'admirecoins', 'sustaincoins', 'utilitycoins'
-->
<?php
    echo json_encode(true);
?>