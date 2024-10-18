<!-- 
fetch('/php/addjournal.php', {
    method: 'POST',
    body: JSON.stringify({
        id: user's id,
        text: journal text,
    })
}) 
returns a boolean, true for success, false for failure
-->
<?php
    echo json_encode(true);
?>