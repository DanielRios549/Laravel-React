<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller {
    public static function count() {
        return Client::all()->count();
    }

    public static function all(String $filter) {
        $get = [];

        if ($filter === '') {
            $get = Client::all();
        }
        else {
            $get = Client::where('name', 'like', "%$filter%")
                ->orWhere('email', 'like', "%$filter%")
                ->get()
            ;
        }

        return $get;
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
                'error' => 'Client does not exists'
            ];
        }

        return $validate;
    }

    public function edit(Request $items) {
        $check = $this::check($items['id']);

        if ($check && $check['error']) {
            return redirect()->back()->with($check);
        }

        Client::where('id', $items['id'])->update([
            'name' => $items['name'],
            'email' => $items['email']
        ]);

        return redirect()->back()->with('success', 'Client Edited Successfully');
    }

    public function remove(String $id) {
        $client = ClientController::check($id);

        if ($client && $client['error']) {
            return redirect()->back()->with('error', 'Client does not exists.');
        }
        else {
            Client::where('id', $id)->delete();
        }

        return redirect('/clients');
    }
}
