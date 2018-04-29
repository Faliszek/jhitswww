<?php

include_once 'db.php';

class ImageReadModel {

  private $conn;
  private $table_name = "images";
  
  public function __construct(){
    $database = new Database();
    $db = $database->getConnection();
    $this->conn = $db;
 }


 public function getAll() {
   $query = "SELECT * FROM images ORDER BY created DESC";
  
   $stmt = $this->conn->prepare($query);
   $stmt->execute();
   
   return $stmt;
  }
}
