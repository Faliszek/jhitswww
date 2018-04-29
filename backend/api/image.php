<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../domain/image.php';
include_once '../domain/auth.php';

class ImageApi
{
    private $image;
    private $imageQuery;
    private $imagesArray;

    public function handleRequest()
    {
        $image = new Image();
        $imageQuery = $image->getAll();
        $imagesArray['images'] = array();

        foreach ($imageQuery->fetchAll() as $i) {
            $image = array(
                "id" => $i['id'],
                "title" => $i['title'],
                "description" => $i['description'],
                "url" => $i['url'],
                "created" => $i['created'],
            );

            array_push($imagesArray['images'], $image);
        }

        echo json_encode($imagesArray);

    }

    public function handleError()
    {
        http_response_code(422);

        $err = array(
            'error' => 'You dont have permissions',
        );

        echo json_encode($err);
    }
}

$i = new ImageApi();

if (Auth::hasAccess()) {
    $i->handleRequest();
} else {
    $i->handleError();
}
