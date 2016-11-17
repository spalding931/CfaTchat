<?php

    function email_already_taken($email){
        global $db;
        $emailTab = array ('email'=> $email);
        $sql ='SELECT *FROM users WHERE email = :email';
        $request = $db->prepare($sql);
        $request -> execute($emailTab);
        $isFree = $request ->rowCount($sql);

        return $isFree;
    }

    function register($name,$email,$password,$competence){

        global $db;
        $register =array(
            'name'=>$name,
            'email'=>$email,
            'password'=>$password,
            'competence'=>$competence

        );
        $sql ="INSERT INTO users (name,email,password,competence) VALUE (:name,:email,:password,:competence)";
        $request = $db->prepare($sql);
        $request->execute($register);
    }