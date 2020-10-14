<?php
    $to = 'karelchan@mail.ru';
    $subject = 'Заявка с сайта';
    $message = '
            <html>
                <head>
                    <title>' . $subject . '</title>
                </head>
                <body>
                    <h2> Напишите нам </h2>
                    <p>Имя: ' . $_POST['name'] . '</p>   
                    <p>Телефон: ' . $_POST['phone'] . '</p>    
                </body>
            </html>';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: <vashkawe@vashkaweb.ru>\r\n";
    mail($to, $subject, $message, $headers);
?>