<?php

// $firstname = $_POST['firstname']; 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$from = 'Trouve ton presta'; 
$to = 'tom.wiltberger@wezzar.com'; 
$subject = 'Un client à besoin de conseils!';
 
$body = "From: $name\n E-Mail: $email\n Message:\n $message";

mail ($to, $subject, $body, $from);
echo "Merci ma biche";
	
?>
