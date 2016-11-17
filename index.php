

<?php


    $pages=scandir('pages/');
    print_r($pages);

    if(isset($_GET['page']) && !empty($_GET['page']) && in_array($_GET['page'],$pages)){
        $page = $_GET['page'];
    }else {
        $page = 'home';
    }

?>
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cfa Tchat</title>
</head>
<body>
    <h1> Page Index </h1>
</body>
</html>