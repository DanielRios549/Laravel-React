<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script type="module" src="{{env('ASSET_URL')}}/@vite/client"></script>
        <script type="module">
            import RefreshRuntime from "{{env('ASSET_URL')}}/@react-refresh"
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
        </script>

        @routes
        @inertiaHead
        <script type="module" src="{{env('ASSET_URL')}}/resources/inertia.tsx"></script>
    </head>
    <body>
        @inertia
    </body>
</html>
