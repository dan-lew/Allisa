<?php
  $headers = array();
  foreach ($_SERVER as $k => $v){   
    if(substr($k, 0, 5) == "HTTP_"){
      $k = str_replace('_', ' ', substr($k, 5));
      $k = str_replace(' ', '-', ucwords(strtolower($k)));
      $headers[$k] = $v;
    }
  } 
  $file = new stdClass;
  $file->name = basename($headers['X-File-Name']);
  $file->size = $headers['X-File-Size'];
  $file->content = file_get_contents("php://input");
  if(file_put_contents('files/'.$file->name, $file->content))
    echo $_GET['id'];
?>