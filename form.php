<?php

// error_reporting(0);

$playerName = $_POST['name'];
$score = filter_input(INPUT_POST, 'score', FILTER_VALIDATE_INT);
$terms = filter_input(INPUT_POST, 'terms', FILTER_VALIDATE_BOOLEAN);

// $terms = var_dump(filter_var("terms", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));

// print_r($_POST);

if ( ! $terms) {
    die("Terms must be accepted");
}

// var_dump($user_name, $score, $terms);

$host = "localhost";
$dbname = "quiz";
$user_name = "root";
$password = "";

$conn = mysqli_connect($host, $user_name, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}

// mysqli_connect_errno() returns 0 if there is no error

// echo "Connection successful";

$sql = "INSERT INTO quiz_table (playerName, score)
        VALUES (?, ?)";

// We use ? as placeholders to defend sql injection

$stmt = mysqli_stmt_init($conn); // create a prepared statement object

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
// mysqli_stmt_prepare($stmt, $sql) function that process the prepare statement and returns a boolean
    die(mysqli_error($conn)); // syntax error will be called here if anything goes wrong
}

// binding. s for string i for integer
mysqli_stmt_bind_param($stmt, "si",
                       $playerName,
                       $score);

mysqli_stmt_execute($stmt); // to execute the statement

echo "Record saved.";
?>