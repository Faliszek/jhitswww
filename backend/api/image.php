<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../domain/image.php';
 
 
$image = new Image();
 
// query products
$stmt = $image->getAll();
$num = $stmt->rowCount();
 
 
    $images_arr['images']=array();
 
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // just $name only
        extract($row);
 
        $image=array(
            "id" => $id,
            "title" => $title,
            "description" => $description,
            "url" => $url,
            "created" => $created
        );
 
        array_push($images_arr['images'], $image);
    }
 
    echo json_encode($images_arr);

 
