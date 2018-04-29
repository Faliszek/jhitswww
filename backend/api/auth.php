<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../domain/auth.php';

class AuthApi
{
    private $auth;
    private $r; //request

    public function __construct()
    {
        $this->auth = new Auth();

    }

    public function handleRequest()
    {
        $res = '';

        $this->r = json_decode(file_get_contents("php://input"), true);

        if ($this->auth->validateRequest($this->r['email'], $this->r['password'])) {
            $res = $this->handleSuccess($res);

        } else {
            $res = $this->handleError($res);
        }

        echo json_encode($res);
    }

    public function handleSuccess($res)
    {
        return array(
            'token' => $this->auth->createToken($this->r['email']),
        );
    }

    public function handleError($res)
    {
        http_response_code(422);

        return array(
            'error' => 'Invalid credentials',
        );
    }

}

// $r = json_decode(file_get_contents("php://input"), true);
$a = new AuthApi();
$a->handleRequest();
