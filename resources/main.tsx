import React from 'react'
import { createRoot } from 'react-dom/client'
import '$/styles/guest.scss'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <h1>Vite App</h1>
        <p>
            Open
            <a className="highlight" href="http://localhost/"> Lavarel URL </a>
            to start developing
        </p>
    </React.StrictMode>
)
