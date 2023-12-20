<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Session;
use Psr\Http\Message\ResponseInterface as Response;

class ApiController
{
    private Session $session;

    public function __construct(Session $session)
    {
        $this->session = $session;
    }

    public function check(Response $response): Response
    {
        if ($_ENV["APP_ENV"] !== "prod") {
            return $this->responseJson($response, [
                "id" => 617,
                "name" => "Andrés Borda",
                "area" => 20
            ]);
        }

        $userId = $this->session->get('usu_id');
        if (! $userId) {
            return $this->responseJson($response, null, 401);
        }

        return $this->responseJson($response, [
            "id" => $userId,
            "name" => $this->session->get('usu_nombre'),
            "area" => $this->session->get('usu_area')
        ]);
    }

    private function responseJson(
        Response $response,
        $data,
        int $statusCode = 201
    ): Response {
        $payload = json_encode(
            $data,
            JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_QUOT |
            JSON_HEX_APOS | JSON_THROW_ON_ERROR
        );
        $response->getBody()->write($payload);
        return $response
            ->withHeader("Content-Type", "application/json")
            ->withStatus($statusCode);
    }
}
