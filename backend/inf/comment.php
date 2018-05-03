<?php
include_once 'time.php';

class CommentReadModel
{
    private $conn;
    private $table_name = "comments";

    public function __construct()
    {
        $database = new Database();
        $db = $database->getConnection();
        $this->conn = $db;
    }

    public function getCommentsByImage($id)
    {
        $query = sprintf("SELECT * FROM comments WHERE %s='%s'",
            'image_id',
            $id);
        $cQuery = $this->conn->prepare($query);
        $cQuery->execute();

        return $cQuery;
    }

    public function newComment($imageId, $author, $text)
    {

        $now = time();
        $query = sprintf("INSERT INTO  comments (image_id, author, text, created) VALUES (%d, '%s', '%s', %d);", $imageId, $author, $text, $now);
        $cQuery = $this->conn->prepare($query);

        if ($cQuery->execute()) {
            return true;
        }

        return false;

    }

}
