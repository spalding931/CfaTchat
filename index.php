<?php

    include 'functions/dbConnect.php';

$pages = scandir('pages/');

if (isset($_GET['page']) && !empty($_GET['page']) && in_array($_GET['page'] . '.php', $pages)) {
    $page = $_GET['page'];
} else {
    $page = 'home';
}

$pages_function = scandir('functions/');

$pages_functions = scandir('functions/');

if(in_array($page.'.function.php',$pages_functions)){
    include 'functions/'.$page.'.function.php';
}
?>

<!doctype html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>CFA Tchat</title>
        <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
    <?php
    include 'body/topbar.php';
    ?>
    <center>
    <div class="container">
        <?php
        include 'pages/' . $page . '.php';
        ?>
    </div>
    </center>
    <script src = "js/jquery.js"></script>
    <?php
    $pages_js = scandir('js/');
    if(in_array($page.'.function.js',$pages_js)){
        ?>
        <script src="js/<?= $page ?>.function.js"></script>
        <?php
    }

    ?>


    </body>
</html>