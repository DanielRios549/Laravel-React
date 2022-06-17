<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller {
    public static function count() {
        return Client::all()->count();
    }

    public static function all() {
        return Client::all();
    }

    public static function add(Request $request) {
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
