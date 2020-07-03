<?php
    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $name = "<b>Имя: </b>" . trim(strip_tags($_POST['name'])) . "<br>";
    $email ="<b>Email: </b>" . trim(strip_tags($_POST['email'])) . "<br>";
    $sub = "<b>Тема: </b>" . trim(strip_tags($_POST['subject'])) . "<br>";
    $body = "<b>Сообщение: </b>" . trim(strip_tags($_POST['text'])) . "<br>";

   
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'tjomka777@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
    $mail->Password = 'Qwerty192837465'; // Ваш пароль от почты с которой будут отправляться письма
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
    
    $mail->setFrom('tjomka777@mail.ru'); // от кого будет уходить письмо?
    $mail->addAddress('tjomka777@gmail.com');     // Кому будет уходить письмо 
    $mail->isHTML(true);                                  // Set email format to HTML
    
    $mail->Subject = 'Заявка с тестового сайта';
    $mail->Body    = "$name $email $sub $body";
    $mail->AltBody = '';
    
    if(!$mail->send()) {
        echo 'Error';
    } //else {
    //     header('location: thank-you.html');
    // }
    ?>