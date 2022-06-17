<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ClientController;
use App\Models\Client;
use App\Models\User;
use Inertia\Inertia;

class PagesController extends Controller {
    public function login() {
        return Inertia::render('login', [
            'title' => 'Login'
        ]);
    }
    public function home() {
        return Inertia::render('index', [
            'title' => 'Dashboard',
            'itemsCount' => [
                'clients' => Client::all()->count(),
                'users' => User::all()->count()
            ]
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
    public function newClient() {
        return Inertia::render('clients/new', [
            'title' => 'Create New Client'
        ]);
    }
}
