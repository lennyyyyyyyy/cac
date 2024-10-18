<!-- 
fetch('/php/addvotable.php', {
    method: 'POST',
    body: JSON.stringify({
        postid: 0 if post, otherwise id of comment's parent post,
        title: title, empty string if comment,
        body: body,
        userid: user's id,
    })
}) 
adds a post or a comment to the database
returns a boolean, true for success, false for failure
-->
<?php
    echo json_encode(true);
?>