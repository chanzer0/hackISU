<?php
    $zip_code = $_GET['zipcode'];
    $first_name = $_GET['firstName'];
    $last_name = $_GET['lastName'];
    $color = $_GET['backgroundColor'];

    $connection - @mysqli_connect('localhost', 'root', 'Sailer28', 'hackISU');

    # Comment
    
    $query - "INSERT INTO users (first_name, last_name, zip_code, color) VALUES ($first_name, $last_name, $zip_code, $color))";

    @mysql_query($query);
?>