<?php
//get data from form  
$name = $_POST['Name'];
$email= $_POST['Email'];
$message= $_POST['Message'];
$Phone= $_POST['Phone'];
$to = "newcodingera@gmail.com";
$subject = "Mail From Contact Section of newcodingera website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message "\r\n Phone No." . $Phone;
$headers = "From: noreply@newcodingera.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}else{
    echo"Fill the form";
}
//redirect
// header("Location:thankyou.html");
echo '<script>alert("Welcome to Geeks for Geeks")</script>';
?>

