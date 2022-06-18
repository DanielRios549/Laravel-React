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

    public static function check(String $id) {
        $validate = Client::where('id', $id)->get()->first();

        if(!$validate) {
            return [
                'error' => 'User Does not exists'
            ];
        }

        return $validate;
    }

    public function edit(Request $items) {
        $check = $this::check($items['id']);

        if ($check && $check['error']) {
            return redirect()->back()->with('error', 'Something went wrong.');
        }

        Client::where('id', $items['id'])->update([
            'name' => $items['name'],
            'email' => $items['email']
        ]);

        return redirect()->back()->with('success', 'User Edited Successfully');
    }
}
