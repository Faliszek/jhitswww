<?php

class Api
{
    public function __construct()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
            header('Access-Control-Allow-Headers: token, Content-Type, Authorization');
            header('Access-Control-Max-Age: 1728000');
            header('Content-Length: 0');
            header('Content-Type: charset=utf-8');

            die();
        }

    }
    public function getParams()
    {
        return $_REQUEST;
    }

    public function encodeJSON($json)
    {

        echo json_encode($json);
        die();
    }

    public function handleBadRequest($violations = array())
    {
        http_response_code(400);
        $err = array(
            'error' => 'Bad request',
            'violations' => $violations,
        );

        $this->encodeJSON($err);
    }

    public function handleMethodNotAllowed()
    {
        http_response_code(405);
        $err = array(
            'error' => 'Method not allowed',
        );

        $this->encodeJSON($err);
    }

    public function handleUnauthorized()
    {
        http_response_code(401);
        $err = array(
            'error' => 'You dont have permissions',
        );

        $this->encodeJSON($err);
    }

    public function handleSuccess()
    {
        http_response_code(200);
        $err = array(
            'message' => 'OK',
        );

        return $this->encodeJSON($err);
    }
}
