<?php


if (!isset($_GET['url'])) {
  http_response_code(400);
  echo json_encode(["error" => "Missing URL"]);
  exit;
}

$url = $_GET['url'];


$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0");
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Accept: image/*,*/*"]);
$response = curl_exec($ch);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
curl_close($ch);


if (!$response) {
  http_response_code(500);
  echo json_encode(["error" => "Image fetch failed"]);
  exit;
}


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Cross-Origin-Resource-Policy: cross-origin");
header("Cross-Origin-Embedder-Policy: unsafe-none");
header("Content-Type: " . $contentType);

echo $response;
?>
