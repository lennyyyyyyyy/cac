<?php
    require 'config.php';
    if ($post['voteableid'] == 0) {
        $data = array(
            array(
                'id' => 1,
                'postid' => 0,
                'title' => 'post1',
                'body' => 'body1',
                'userid' => 1,
                'username' => 'Evan Dan',
                'time' => '2021-01-01 00:00:00',
                'votes' => 10,
            ),
            array(
                'id' => 2,
                'postid' => 0,
                'title' => 'post2',
                'body' => 'body2',
                'username' => 'Evan Fan',
                'time' => '2021-01-02 00:00:00',
                'votes' => -10,
            ),
            array(
                'id' => 3,
                'postid' => 0,
                'title' => 'post3',
                'body' => 'body3',
                'userid' => 3,
                'username' => 'Evan Gan',
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
                'username' => 'Evan Han',
                'time' => '2021-01-04 00:00:00',
                'votes' => 5,
            ),
            array(
                'id' => 5,
                'postid' => 1,
                'title' => '',
                'body' => 'comment2',
                'userid' => 5,
                'username' => 'Evan Jan',
                'time' => '2021-01-05 00:00:00',
                'votes' => 5,
            ),
            array(
                'id' => 6,
                'postid' => 2,
                'title' => '',
                'body' => 'comment3',
                'userid' => 6,
                'username' => 'Evan Kan',
                'time' => '2021-01-06 00:00:00',
                'votes' => 5,
            ),
        );
    }
    echo json_encode($data);
?>