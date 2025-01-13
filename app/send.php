<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "karinadesyatnik27@gmail.com"; 
    $subject = "New Contact Form Submission";
    $message = "Name: " . $_POST["name"] . "\n" .
               "Email: " . $_POST["email"] . "\n" .
               "Message: " . $_POST["message"];
    $headers = "From: " . $_POST["email"];

    if (mail($to, $subject, $message, $headers)) {
        // Если письмо отправлено, перенаправляем на страницу thank-you.html
        header("Location: thank-you.html");
        exit; 
    } else {
        echo "Error: Unable to send email.";
    }
}
?>
