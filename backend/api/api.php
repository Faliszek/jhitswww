<?php

class Api
{
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

        $this->encodeJSON($err);
    }
}
