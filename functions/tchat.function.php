
<?php

    function user_exist(){
        global $db;

        $e = array('user' => $_GET['user'], 'session'=> $_SESSION['cfatchat']);
        $sql = "SELECT * FROM users WHERE email =:user and email!= :session";
        $request = $db-> prepare($sql);
        $request->execute($e);
        $exist = $request->rowCount($sql);
        return $exist;

    }

    function get_user(){

        global $db;
        $request = $db->query("SELECT * FROM users WHERE email = '{$_SESSION['user']}'");
        $user = array();
        while($row = $request->fetchObject()){
            $user[]= $row;
        }
        return $user;
    }