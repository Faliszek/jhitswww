<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
// include database and object files
include_once '../domain/image.php';
include_once '../domain/auth.php';
include_once './api.php';

class ImageApi extends Api
{
    private $image;
    private $imageQuery;
    private $imagesArray;

    public function handleRequest()
    {
        $image = new Image();
        $params = $this->getParams();

        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            $this->handleMethodNotAllowed();
        }

        if ($params['id']) {
            $i = $image->getOne($params['id']);
            $this->encodeJSON($i);
        } else {
            $imagesArray = $image->getAll();
            $this->encodeJSON($imagesArray);
        }

    }

}

$i = new ImageApi();

if (Auth::hasAccess()) {
    $i->handleRequest();
} else {
    $i->handleUnauthorized();
}
