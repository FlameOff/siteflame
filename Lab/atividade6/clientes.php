<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>clientes</title>
</head>
<body>
   <div id = "all">
    
   <center><h1> Você Foi Cadastrado</h1></center>
   <?php
   $nome = $_POST['nome'];
   $endereco = $_POST['endereco'];
   $email = $_POST['email'];
   
   echo '<b>Nome</b>'.$nome.'<br>';
   echo '<b>Endereço</b>'.$endereco.'<br>';
   echo '<b>Email:</b>'.$email.'<br>';
   
   ?>
</body>
</html>
