<!-- 
fetch('/php/updatevote.php', {
    method: 'POST',
    body: JSON.stringify({
        voteableid: id of voteable(post or comment),
        userid: user's id,  
        vote: current user's vote (1, 0, -1)
    })
}) 
changes a user's recorded vote and updates total votes
returns a boolean, true for success, false for failure
-->
<?php
    echo json_encode(true);
?>