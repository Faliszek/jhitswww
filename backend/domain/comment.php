<?php

include_once '../infrastructure/comment.php';

class Comment
{

    private $commentReadModel;

    public function __construct()
    {
        $this->commentReadModel = new CommentReadModel();
    }

    public function getCommentsByImage($id)
    {
        $commentQuery = $this->commentReadModel->getCommentsByImage($id);
        $commentsArray['comments'] = array();

        foreach ($commentQuery->fetchAll() as $c) {
            $comment = array(
                "id" => $c['id'],
                "author" => $c['author'],
                "text" => $c['text'],
                "created" => $c['created'],
            );

            array_push($commentsArray['comments'], $comment);
        }
        return $commentsArray;
    }

    public function newComment($r)
    {
        $imageId = $r['imageId'];
        $author = $r['author'];
        $text = $r['text'];
        $created = $r['created'];

        $imageId = htmlspecialchars(strip_tags($imageId));
        $author = htmlspecialchars(strip_tags($author));
        $text = htmlspecialchars(strip_tags($text));
        $created = htmlspecialchars(strip_tags($created));
        var_dump($created);
        $commentQuery = $this->commentReadModel->newComment($imageId, $author, $text, $created);

        return $commentQuery;

    }

}
