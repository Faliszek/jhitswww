<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../domain/comment.php';
include_once '../domain/auth.php';
include_once './api.php';

class CommentApi extends Api
{

    public function handleRequest()
    {

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            return $this->post();
        }

        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            return $this->get();
        }

        $this->handleMethodNotAllowed();

    }

    public function get()
    {

        $comment = new Comment();
        $commentsArray = array();
        $params = $this->getParams();

        if (array_key_exists('id', $params)) {
            $commentsArray = $comment->getCommentsByImage($params['id']);
            $this->encodeJSON($commentsArray);

        } else {
            $this->handleBadRequest();
        }
    }

    public function post()
    {
        $comment = new Comment();
        $r = json_decode(file_get_contents("php://input"), true);

        $violations = $this->validateRequest($r);

        if (count($violations) > 0) {
            return $this->handleBadRequest($violations);
        }

        if (!$comment->newComment($r)) {
            return $this->handleBadRequest();
        }
        return $this->handleSuccess();

    }

    public function validateRequest($r)
    {
        $violations = array();

        if (!$r['imageId']) {
            $err = array('imageId' => 'imageId required');
            array_push($err, $violations);
        }

        if (!$r['author']) {
            $err = array('author' => 'author required');
            array_push($err, $violations);
        }

        if (!$r['text']) {
            $err = array('text' => 'text required');
            array_push($err, $violations);
        }

        return $violations;
    }

}

$i = new CommentApi();

if (Auth::hasAccess()) {
    $i->handleRequest();
} else {
    $i->handleUnauthorized();
}
