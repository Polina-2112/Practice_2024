<?php
$db = new PDO("mysql:host=localhost;dbname=Practice_BD", "root", "");

if ($_GET['action'] == 'send') 
{
    $date = date('Y-m-d H:i:s');
    $name = $_GET['name'];
    $comment = $_GET['com'];

    $stmt = $db->prepare("INSERT INTO Guest_Book (Name, Date, Comment) VALUES (:name, :date, :comment)");
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->bindParam(':date', $date, PDO::PARAM_STR);
    $stmt->bindParam(':comment', $comment, PDO::PARAM_STR);

    $stmt->execute();   
}

if ($_GET['action'] == 'get')
{
    $stmt = $db->query("SELECT * FROM Guest_Book ORDER BY Date DESC LIMIT 3;");
    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($comments);
}
