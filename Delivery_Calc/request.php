<?php

if ($_GET['action'] == 'getCities')
{
    $url = 'http://exercise.develop.maximaster.ru/service/city/';

    $username = 'cli';
    $password = '12344321';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    header('Content-Type: application/json');

    if ($httpCode !== 200) {
        echo "Failed to fetch data. HTTP code: $httpCode\n";
        exit;
    }

    if ($response === false) echo "Unable to fetch data.";
    else echo $response;
}

if ($_GET['action'] == 'getCalcs')
{
    $city = $_GET['city'];
    $weight = $_GET['weight'];
    $url = 'http://exercise.develop.maximaster.ru/service/delivery/?city=' . $city . '&weight=' . $weight;

    $username = 'cli';
    $password = '12344321';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    header('Content-Type: application/json');

    if ($httpCode !== 200) {
        echo "Failed to fetch data. HTTP code: $httpCode\n";
        exit;
    }

    if ($response === false) echo "Unable to fetch data.";
    else echo $response;
}

