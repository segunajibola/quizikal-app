<?php

// error_reporting(0);

$name = $_POST['name'];
$score = filter_input(INPUT_POST, 'score', FILTER_VALIDATE_INT);
$terms = filter_input(INPUT_POST, 'terms', FILTER_VALIDATE_BOOLEAN);

// $terms = var_dump(filter_var("terms", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));

// print_r($_POST);

if ( ! $terms) {
    die("Terms must be accepted");
}

// var_dump($name, $score, $terms);

$host = "localhost";
$dbname = "quiz";
$name = "root";
$password = "";

// "localhost", "root", "", "myDB","3308"
$conn = mysqli_connect($host, $name, $password, $dbname);
// $conn = mysqli_connect("localhost", "root", "", "quiz_table", "3306");

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}

// echo "Connection successful";

$sql = "INSERT INTO quiz_table (name, score)
        VALUES (?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
 
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "si",
                       $name,
                       $score);

mysqli_stmt_execute($stmt);

echo "Record saved.";
?>