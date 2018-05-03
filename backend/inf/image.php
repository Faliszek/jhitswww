<?php

include_once 'db.php';

class ImageReadModel
{

    private $conn;
    private $table_name = "images";

    public function __construct()
    {
        $database = new Database();
        $db = $database->getConnection();
        $this->conn = $db;
    }

    public function getAll()
    {
        $query = "SELECT * FROM images ORDER BY created DESC";

        $imageQuery = $this->conn->prepare($query);
        $imageQuery->execute();

        return $imageQuery;
    }

    public function getOne($id)
    {
        $query = sprintf("SELECT * FROM images WHERE %s='%s'",
            'id',
            $id);

        $imageQuery = $this->conn->prepare($query);
        $imageQuery->execute();

        return $imageQuery;
    }
}
