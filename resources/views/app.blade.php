<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <script type="module">
            window.__vite_plugin_react_preamble_installed__ = true
        </script>
        @production
            @php
                $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
            @endphp
            <script type="module" src="/build/{$manifest['resources/js/app.js']['file']}"></script>
        @else
            <script type="module" src="http://localhost:3000/@vite/client"></script>
            <script type="module" src="http://localhost:3000/resources/inertia.ts"></script>
        @endproduction
        @inertiaHead
    </head>
    <body>
        <div id="app">
            @inertia
        </div>
    </body>
</html>
