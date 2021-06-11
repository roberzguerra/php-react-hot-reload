<?php 
$user = (object) [
    'name' => 'Rober',
    'email' => 'roberzguerra@gmail.com',
    'logged' => true
];

?>
<!doctype html>
<html lang="pt-br">
    <head>
        <title>React PHP starter Kit</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/app/assets/css/app.css" type="text/css">
    </head>
    <script type="text/javascript">
        var STATIC_URL = 'http://localhost/my-app';
        var myApp = {
            user : <?php echo json_encode($user); ?>,
            logged : <?php echo $user->logged; ?>
        };
    </script>
    <body>
        <h1>Titulo pagina php</h1>

        <div id="root"></div>

        <!-- Em ambiente dev: use abaixo -->
        <script type="text/javascript" src="http://localhost:8080/dist/bundle.js" ></script>
        <!-- Em ambiente producao: use abaixo -->
        <!-- <script type="text/javascript" src="/dist/bundle.js" ></script> -->
    </body>
</html>
