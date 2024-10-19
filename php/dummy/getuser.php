<?php
    require 'config.php';
    if ($post['id'] == 1) {
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