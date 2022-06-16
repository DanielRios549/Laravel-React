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

        $verify = Client::where('email', $data['email'])->exists();

        if ($verify) {
            return redirect()->back()->with('error', 'Client Already Exists');
        }
        else {
            Client::create([
                'name' => $data['name'],
                'email' => $data['email']
            ]);

            return redirect()->back()->with('success', 'Client Created');
        }
    }
}
