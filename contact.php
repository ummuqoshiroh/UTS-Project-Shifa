<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "2310631170049@student.unsika.ac.id";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "Pesan berhasil dikirim.";
    } else {
        echo "Gagal mengirim pesan.";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method Not Allowed";
}
?>
