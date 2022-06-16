<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller {
    public static function getClients() {
        $clients = Client::all();

        return $clients;
    }
    public static function addClient(Request $request) {
        $data = $request->collect();

        Client::create([
            'name' => $data['name'],
            'email' => $data['email']
        ]);

        return redirect()->back();
    }
}
