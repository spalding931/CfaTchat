<?php

if(!isset($_GET['user']) || isLogged() == 0 || user_exist() != 1){
    header("Location:index.php?page=home");
}

$_SESSION['user'] = $_GET['user'];

foreach(get_user() as $user){
    ?>
    
        <h2 class="header"><?= $user->name; ?></h2>
        <div class="messages-box"></div>

    

    <div class="bottom">
        <div class="field field-area">
            <label for="message" class="field-label">Votre message</label>
           
           <textarea name="message" id="message" rows="2" class="field-inputMessage field-textarea"></textarea>
        
        </div>
        
        <button type="submit" id="send" class="send">
            <span class="i-send">GO</span>
        </button>
        
        <div class="field field-area" style="margin-bottom:2%; display: inline-block;float:left;width:30%!important">
            <label for="message" class="field-label">Votre gif</label>
            
            <textarea id="gifinput" rows="2"  class="field-inputGif field-textarea"></textarea>
        
        </div>
       
       <button class="sendGif" type="submit" id="sendgif">
            <span class="i-gif">GIFF</span>
        </button>
        
        
     
    </div>  
  
   

    <?php
    
}
