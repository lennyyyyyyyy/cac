<?php
    require 'config.php';
    if ($post['postid'] == 0) {
        $data = array(
            array(
                'id' => 1,
                'postid' => 0,
                'title' => 'post1',
                'body' => 'body1',
                'userid' => 1,
                'time' => '2021-01-01 00:00:00',
                'votes' => 0,
            ),
            array(
                'id' => 2,
                'postid' => 0,
                'title' => 'post2',
                'body' => 'body2',
                'userid' => 2,
                'time' => '2021-01-02 00:00:00',
                'votes' => 0,
            ),
            array(
                'id' => 3,
                'postid' => 0,
                'title' => 'post3',
                'body' => 'body3',
                'userid' => 3,
                'time' => '2021-01-03 00:00:00',
                'votes' => 0,
            ),
        );
    } else {
        $data = array(
            array(
                'id' => 4,
                'postid' => 1,
                'title' => '',
                'body' => 'comment1',
                'userid' => 4,
                'time' => '2021-01-04 00:00:00',
                'votes' => 0,
            ),
            array(
                'id' => 5,
                'postid' => 1,
                'title' => '',
                'body' => 'comment2',
                'userid' => 5,
                'time' => '2021-01-05 00:00:00',
                'votes' => 0,
            ),
            array(
                'id' => 6,
                'postid' => 2,
                'title' => '',
                'body' => 'comment3',
                'userid' => 6,
                'time' => '2021-01-06 00:00:00',
                'votes' => 0,
            ),
        );
    }
    echo json_encode($data);
?>