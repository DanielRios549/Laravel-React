<?php

namespace App\Http\Controllers;

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
                'clients' => ClientController::count(),
                'users' => UserController::count()
            ]
        ]);
    }

    public function about() {
        return Inertia::render('about', [
            'title' => 'About'
        ]);
    }

    public function clients() {
        $clients = ClientController::all();

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

    public function users() {
        $users = UserController::all();

        return Inertia::render('users', [
            'title' => 'List Users',
            'users' => $users
        ]);
    }

    public function newUser() {
        return Inertia::render('users/new', [
            'title' => 'Create New User'
        ]);
    }
}
