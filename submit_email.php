<?php
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Save email to a file (or database)
        file_put_contents('emails.txt', $email.PHP_EOL, FILE_APPEND);
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No email provided']);
}
?>
