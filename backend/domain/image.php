<?php

include_once '../inf/image.php';

class Image
{

    //img instance
    private $imageReadModel;

    // object properties
    public $id;
    public $name;
    public $description;
    public $url;
    public $created;

    public function __construct()
    {
        $this->imageReadModel = new ImageReadModel();
    }

    public function getAll()
    {
        return $this->imageReadModel->getAll();
    }

}
