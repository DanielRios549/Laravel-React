<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="module">
            window.__vite_plugin_react_preamble_installed__ = true
        </script>
        @routes
        @inertiaHead
        @vite(resources/inertia.tsx)
    </head>
    <body>
        @inertia
    </body>
</html>
