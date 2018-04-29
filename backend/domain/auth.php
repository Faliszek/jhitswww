
<?php

include_once '../inf/auth.php';
include_once '../vendor/php-jwt/src/JWT.php';

const KEY = "my_secret_key";

class Auth
{
    private $authReadModel;

    public function __construct()
    {
        $this->authReadModel = new AuthReadModel();

    }

    public function userExistWithEmail($email)
    {
        $users = $this->authReadModel->getUsers();

        foreach ($users as $u) {
            if ($u['email'] == $email) {
                return true;
            }
        }
        return false;
    }

    public function passIsCorrect($requestPassword = '', $userPassword)
    {

        $requestPassword = md5($requestPassword);

        if ($requestPassword == $userPassword) {
            return true;
        } else {
            return false;
        }
    }

    public function validateRequest($email, $password)
    {
        if (!$this->userExistWithEmail($email)) {
            return false;
        }

        $user = $this->authReadModel->findUserBy($email)->fetch();

        if (!$this->passIsCorrect($password, $user['password'])) {
            return false;
        }

        return true;
    }

    public function createToken($email)
    {
        $token = array(
            "email" => $email,
            "expire" => $this->authReadModel->dateNow(),
            "iat" => 1356999524,
            "nbf" => 1357000000,
            'hasAccess' => true,
        );
        $jwt = JWT::encode($token, KEY);

        return $jwt;
    }

    public static function hasAccess()
    {
        $requestHeaders = apache_request_headers();
        $requestToken = $requestHeaders['Authorization'];

        if (!preg_match('/Bearer\s(\S+)/', $requestToken, $parsedToken)) {
            return false;
        }

        try {
            $decoded = JWT::decode($parsedToken[1], KEY, array('HS256'));
        } catch (\Exception $e) {
            return false;
        }

        // var_dump($decoded);

        return true;
    }
}