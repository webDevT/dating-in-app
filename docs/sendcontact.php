<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Получаем данные для email
    $to = 'karinadesyatnik27@gmail.com';  // Укажите ваш email
    $subject = 'New Contact Form Submission';
    $messageContent = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Отправка email
    if (mail($to, $subject, $messageContent, $headers)) {
        // Если письмо отправлено, редиректим на страницу благодарности
        header('Location: thank-you-contact.html');
        exit();
    } else {
        // Если произошла ошибка
        echo 'Error: Unable to send email.';
    }
}
?>
