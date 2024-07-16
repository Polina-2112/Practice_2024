<?php
$db = new PDO("mysql:host=localhost;dbname=Practice_BD","root","");
try {
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->beginTransaction();

    $update = $db->prepare("UPDATE Hits_Counter SET Hits = Hits + 1");
    $update->execute();

    $query = $db->query("SELECT Hits FROM Hits_Counter LIMIT 1");
    $result = $query->fetch(PDO::FETCH_ASSOC);
    $hits = $result['Hits'];

    $db->commit();

    echo $hits;
} catch (PDOException $e) 
{
    $db->rollBack();
    echo "Error!";
}

