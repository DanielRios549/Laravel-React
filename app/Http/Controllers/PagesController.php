<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
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

    public function clients(Request $request) {
        $param = $request::input('filter');
        $clients = ClientController::all($param);

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

    public function editClient($request) {
        $data = ClientController::check($request);

        return Inertia::render('clients/edit', [
            'title' => 'Edit Client',
            'data' => $data
        ]);
    }

    public function users(Request $request) {
        $param = $request::input('filter');
        $users = UserController::all($param);

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

    public function editUser($request) {
        $data = UserController::check($request);

        return Inertia::render('users/edit', [
            'title' => 'Edit User',
            'data' => $data
        ]);
    }
}
