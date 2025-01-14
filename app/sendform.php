<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $appLink = htmlspecialchars($_POST['app-link']);
    $monthlyAudience = htmlspecialchars($_POST['monthly-audience']);

    // Получаем данные для email
    $to = 'karinadesyatnik27@gmail.com';  // Укажите ваш email
    $subject = 'New Form Submission from Dating In Apps';
    $message = "Name: $name\nEmail: $email\nApp Link: $appLink\nMonthly Audience: $monthlyAudience";
    $headers = "From: $email";

    // Отправка email
    if (mail($to, $subject, $message, $headers)) {
        // Если письмо отправлено, редиректим на страницу "thank-you.html"
        header('Location: thank-you.html');
        exit();
    } else {
        // Если произошла ошибка
        echo 'Error: Unable to send email.';
    }
}
?>
