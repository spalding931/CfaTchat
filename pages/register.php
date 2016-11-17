<?php
if(isLogged() == 1){
header("Location:index.php?page=membres");
}
?>


<h2 class ="header header-formulaire">S'inscrire</h2>

<?php
    if(isset($_POST['submit'])){

        $name = htmlspecialchars(trim($_POST['name']));
        $email = htmlspecialchars(trim($_POST['email']));
        $password = sha1(htmlspecialchars(trim($_POST['password'])));
        $competence = htmlspecialchars(trim($_POST['competence']));

        if( email_already_taken($email)==1){
            $erro_email = "adresse déja utilisée";
        }else {
            register($name,$email,$password,$competence);
            $_SESSION['cfatchat']= $email;
            header("Location:index.php?page=membres");
        }

    }
?>


<form method="post" id="registerForm">

    <div class="field">
        <label for="name" class="field-label">Name</label>
        <input type="text" class="field-input" name="name" id="name">
    </div>

    <div class="field">
        <label for="email" class="field-label">Email</label>
        <input type="text" class="field-input" name="email" id="email">
    </div>

    <div class="field">
        <label for="password" class="field-label">Password</label>
        <input type="password" class="field-input" name="password" id="password">
    </div>

    <div class="field">
        <label for="competence" class="field-label">Competence</label>
        <input type="text" class="field-input" name="competence" id="competence">
    </div>
    <p class="error"><?php echo (isset($error_email)) ? $error_email : ''; ?></p>
    <button type="submit" name ="submit"> S'inscrire</button>


</form>