<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Отримання даних з форми
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Ваш email, на який будуть надходити повідомлення
    $to = "karinadesyatnik27@gmail.com";
    $subject = "New message from $name";

    // Тіло листа
    $body = "You have received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Заголовки листа
    $headers = "From: no-reply@akhundova-dev.com/\r\n";

    // Логування перед відправкою
    file_put_contents("log.txt", "Attempting to send mail:\nTo: $to\nSubject: $subject\nBody: $body\nHeaders: $headers\n\n", FILE_APPEND);

    // Відправка листа
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Thank you for your message. We will get back to you soon!</p>";
    } else {
        // Логування помилок
        $errorMessage = error_get_last();
        file_put_contents("log.txt", "Mail error: " . print_r($errorMessage, true) . "\n", FILE_APPEND);

        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
} else {
    echo "<p>Invalid request.</p>";
}

?>
