<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ClientController;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class PagesController extends Controller {
    public function home() {
        return Inertia::render('index', [
            'title' => 'Dashboard'
        ]);
    }
    public function about() {
        return Inertia::render('about', [
            'title' => 'About'
        ]);
    }
    public function clients() {
        $clients = ClientController::getClients();

        return Inertia::render('clients', [
            'title' => 'List Clients',
            'clients' => $clients
        ]);
    }
}
