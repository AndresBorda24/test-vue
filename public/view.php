<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Usuarios Fidelización</title>
    <?php if ($_ENV["APP_ENV"] == "prod"): ?>
      <link
        rel="stylesheet"
        type="text/css"
        href="/build/<?= $files["src/main.css"]["file"] ?>"
      >
    <?php endif ?>
  </head>
  <body>
    <div id="app" class="min-h-screen"></div>
    <?php if ($_ENV["APP_ENV"] !== "prod"): ?>
      <script type="module" src="http://localhost:5173/@vite/client"></script>
      <script type="module" src="http://localhost:5173/src/main.js"></script>
    <?php else: ?>
      <script type="module" src="/build/<?= $files["src/main.js"]["file"] ?>"></script>
    <?php endif ?>
  </body>
</html>
