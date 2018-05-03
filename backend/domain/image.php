<?php

include_once '../inf/image.php';

class Image
{

    private $imageReadModel;

    public function __construct()
    {
        $this->imageReadModel = new ImageReadModel();
    }

    public function getAll()
    {

        $imageQuery = $this->imageReadModel->getAll();
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

        return $imagesArray;
    }

    public function getOne($id)
    {
        $image = array();

        if (!$id) {
            return new stdClass();
        }

        $imageModel = $this->imageReadModel->getOne($id)->fetch(PDO::FETCH_LAZY);

        if (!$imageModel) {
            return new stdClass();
        }
        $image = array(
            "id" => $imageModel['id'],
            "title" => $imageModel['title'],
            "description" => $imageModel['description'],
            "url" => $imageModel['url'],
            "created" => $imageModel['created'],
        );

        return $image;
    }

}
