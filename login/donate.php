<?php
    $to = 'demo@spondonit.com';
    $from = $_POST["name"];
    $from = $_POST["type"];
    $from = $_POST["email"];
    $from = $_POST["amound"];
    $from = $_POST["message"];




    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $name . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$name.'  '.$email.'</td>
        </tr>
        <tr><td>Start: '.$type.'</td></tr>
        <tr><td>Arrival: '.$amound.'</td></tr>
        <tr><td>Departure: '.$message.'</td></tr>       
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>
