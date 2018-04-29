<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../domain/image.php';

$image = new Image();

$imageQuery = $image->getAll();
$images_arr['images'] = array();

foreach ($imageQuery->fetchAll() as $i) {
    $image = array(
        "id" => $i['id'],
        "title" => $i['title'],
        "description" => $i['description'],
        "url" => $i['url'],
        "created" => $i['created'],
    );

}
;
// while ($row = $imageQuery->fetchAll())){
//     // just $name only
//     extract($row);

//     array_push($images_arr['images'], $image);
// }

echo json_encode($images_arr);
