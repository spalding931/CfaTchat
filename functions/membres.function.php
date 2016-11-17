<?php

    function get_membres(){
        global $db;

        $request = $db->query("SELECT * FROM users");
        $result = array();

        while($rows = $request->fetchObject()){
            $result[] = $rows;


        }
        return $result;
    }
