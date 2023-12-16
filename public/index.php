<?php
declare(strict_types=1);

use \DI\Bridge\Slim\Bridge;
use Slim\Views\PhpRenderer;
use Slim\Routing\RouteCollectorProxy;
use Psr\Http\Message\ResponseInterface as Response;

require __DIR__ . "/../vendor/autoload.php";

/** Cargamos variables de entorno */
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ ."/..");
$dotenv->load();

/** Creacion del contenedor */
$app = Bridge::create();
$app->setBasePath($_ENV["APP_BASE"]);

// Se ponen primero las rutas de la 'Api' para que no se solapen con la ultima ruta
$app->group("/api", function(RouteCollectorProxy $group) {
  $group->get("/check", [\App\Controllers\ApiController::class, "check"]);
})->add(\App\Middleware\JsonBodyParserMiddleware::class);


// Como lo que se construyo es un SPA no nos importa mucho la uri, eso lo maneja JS
$app->get("/[{routes:.*}]", function(Response $response) {
  $renderer = new PhpRenderer(__DIR__);
  // Aqui se cargan los links de los archivos JS y CSS
  $files = json_decode(file_get_contents(__DIR__."/build/manifest.json"), true);

  return $renderer->render($response, "view.php", [
    "files" => $files
  ]);
});


$app->add(\App\Middleware\StartSessionMiddleware::class);
/**
 * Unos Middleware de Slim.
 * El ErrorMiddleware debe siempre ser agregado al ultimo.
 */
$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, false, false);

$app->run();
