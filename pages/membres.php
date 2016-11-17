<?php
if(isLogged() == 0){
    header("Location:index.php?page=signin");
}
?>

<h2 class="header"> Les membres</h2>