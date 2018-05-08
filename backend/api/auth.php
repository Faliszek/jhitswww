<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type, Authorization');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Accept, Access-Control-Allow-Headers, Authorization,");

// include database and object files
include_once '../domain/auth.php';
include_once './api.php';

class AuthApi extends Api
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
            $res = $this->returnToken($res);

        } else {
            $res = $this->handleAuthError($res);
        }

        $this->encodeJSON($res);
    }

    public function returnToken($res)
    {

        return array(
            'accessToken' => $this->auth->createToken($this->r['email']),
        );
    }

    public function handleAuthError($res)
    {
        http_response_code(422);

        return array(
            'error' => 'Invalid credentials',
        );
    }

}

$a = new AuthApi();
$a->handleRequest();
