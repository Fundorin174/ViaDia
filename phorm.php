<?php
// несколько получателей
$to  = 'senkevichi@rambler.ru' . ', ';  // обратите внимание на запятую
$to .= 'fundorin174@gmail.com';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br />' . $_POST['history'] . '<br />
Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>'
//  ' или по телефону' . $_POST['fone'] . ' Его интересует дата' . $_POST['date'] .
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Дмитрий <senkevichi@rambler.ru>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>