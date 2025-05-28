<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mood = isset($_POST['mood']) ? $_POST['mood'] : '';
    $reason = isset($_POST['reason']) ? $_POST['reason'] : '';
    $timestamp = date('Y-m-d H:i:s');

    $data = [$timestamp, $mood, $reason];
    $file = 'mood_data.csv';

    $file_exists = file_exists($file);
    $handle = fopen($file, 'a');

    if ($handle) {
        if (!$file_exists) {
            fputcsv($handle, ['Timestamp', 'Mood Rating', 'Reason']);
        }
        fputcsv($handle, $data);
        fclose($handle);
        echo "<script>alert('Thank you for your feedback!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Error: Unable to save data.'); window.location.href = 'index.html';</script>";
    }
} else {
    echo "<script>alert('Invalid request method.'); window.location.href = 'index.html';</script>";
}
?>
