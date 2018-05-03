<?php

include_once 'db.php';

class AuthReadModel
{
    private $conn;
    private $table_name = "users";

    public function __construct()
    {
        $database = new Database();
        $db = $database->getConnection();
        $this->conn = $db;
    }

    public function getUsers()
    {
        $query = "SELECT * FROM users";

        $uQuery = $this->conn->prepare($query);
        $uQuery->execute();

        return $uQuery;
    }

    public function findUserBy($value, $s = "email")
    {

        $query = sprintf("SELECT * FROM users WHERE %s='%s'",
            $s,
            $value);

        $uQuery = $this->conn->prepare($query);
        $uQuery->execute();

        return $uQuery;
    }

}
