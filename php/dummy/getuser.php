<!-- 
fetch('/php/getuser.php', {
    method: 'POST',
    body: JSON.stringify({
        id: user's id,
    })
}) 
returns a list of elements
each element has 'id', 'username', 'password', 'carboncoins', 'admirecoins', 'sustaincoins', 'utilitycoins'
-->
<?php
    if ($_POST['id'] == 1) {
        echo json_encode(array(
            'id' => 1,
            'username' => 'user1',
            'password' => 'password1',
            'carboncoins' => 100,
            'admirecoins' => 100,
            'sustaincoins' => 100,
            'unitycoins' => 100,
        ));
    } else {
        echo json_encode(false);
    }
    
?>