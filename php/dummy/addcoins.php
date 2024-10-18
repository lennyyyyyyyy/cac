<!-- 
fetch('/php/addcoins.php', {
    method: 'POST',
    body: JSON.stringify({
        id: user's id,
        carboncoins: carbon coins to add,
        admirecoins: admire coins to add,
        sustaincoins: sustain coins to add,
        unitycoins: unity coins to add,
    })
}) 
returns a boolean, true for success, false for failure
-->
<?php
    echo json_encode(true);
?>