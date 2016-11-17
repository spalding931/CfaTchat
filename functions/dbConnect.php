<?php
    session_start();
    $dbhost ='localhost';
    $dbname = 'cfatchat';
    $dbuser ='root';
    $dbpassword ='root';


    try{
        $db = new PDO('mysql:host='.$dbhost.';dbname='.$dbname,$dbuser,$dbpassword,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',PDO ::ATTR_ERRMODE => PDO::ERRMODE_WARNING));

    }catch (PDOException $e){

        die("erreur lors de la connection à la base de données");
    }

function isLogged(){
    if(isset($_SESSION['cfatchat'])){
        $logged = 1;
    }else{
        $logged = 0;
    }
    return $logged;
}