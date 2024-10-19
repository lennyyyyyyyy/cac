<?php
    $DATABASE_HOST = 'sql307.infinityfree.com';
    $DATABASE_USER = 'if0_36852730';
    $DATABASE_PASS = '13isDumby';
    $DATABASE_NAME = 'if0_36852730_backtonature';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');
    $post = json_decode(file_get_contents('php://input'), true);
?>