<?php

// include database and object files
include_once '../inf/image.php';

class Image
{

    // database connection and table name
    //img instance
    private $i;

    // object properties
    public $id;
    public $name;
    public $description;
    public $url;
    public $created;

    public function getAll()
    {
        $this->i = new ImageReadModel();
        return $this->i->getAll();
    }

}
