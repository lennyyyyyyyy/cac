<?php
    require 'config.php';
    echo json_encode(array(
        'id' => 1,
        'postid' => 0,
        'title' => 'post1',
        'body' => 'body1',
        'userid' => 1,
        'username' => 'Evan Dan',
        'time' => '2021-01-01 00:00:00',
        'votes' => 10,
    ));
?>