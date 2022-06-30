<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @routes
        @inertiaHead
        @php
            $input = 'resources/inertia.tsx';
            $url = env('ASSET_URL');
            $mode = env('ASSET_MODE');
        @endphp
        @if ($mode === 'dev')
            <script type="module" src="{{$url}}/@vite/client"></script>
            <script type="module" src="{{$url}}/{{$input}}"></script>
            <script type="module">
                import RefreshRuntime from "{{$url}}/@react-refresh"
                RefreshRuntime.injectIntoGlobalHook(window)
                window.$RefreshReg$ = () => {}
                window.$RefreshSig$ = () => (type) => type
                window.__vite_plugin_react_preamble_installed__ = true
            </script>
        @else
            @php
                $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
            @endphp
            <script type="module" src="/build/{{$manifest[$input]['file']}}"></script>
        @endif
    </head>
    <body>
        @inertia
    </body>
</html>
