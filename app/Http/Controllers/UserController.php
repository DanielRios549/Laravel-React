<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {
    public static function count() {
        return User::all()->count();
    }

    public static function all(?String $filter) {
        $get = [];

        if (!$filter || $filter === '') {
            $get = User::all();
        }
        else {
            $get = User::where('name', 'ilike', "%$filter%")
                ->orWhere('email', 'ilike', "%$filter%")
                ->get()
            ;
        }
        return $get;
    }

    public static function check(String $id) {
        $validate = User::where('id', $id)->get()->first();

        if(!$validate) {
            return [
                'error' => 'User does not exists'
            ];
        }

        return $validate;
    }

    public static function add(Request $request) {
        $data = $request->collect();
        $verify = User::where('email', $data['email'])->exists();

        if ($verify) {
            return redirect()->back()->with([
                'form' => 'Sign Up',
                'error' => 'User Already Exists'
            ]);
        }
        else {
            User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password'])
            ]);

            return redirect()->back()->with([
                'form' => 'Sign Up',
                'success' => 'User Created'
            ]);
        }
    }

    public function edit(Request $items) {
        $check = $this::check($items['id']);

        if ($check && $check['error']) {
            return redirect()->back()->with($check);
        }

        $update = [
            'name' => $items['name'],
            'email' => $items['email'],
        ];

        if ($items['password']) {
            $update['password'] = Hash::make($items['password']);
        }

        User::where('id', $items['id'])->update($update);

        return redirect()->back()->with('success', 'User Edited Successfully');
    }

    public function remove(String $id) {
        $client = UserController::check($id);

        if ($client && $client['error']) {
            return redirect()->back()->with('error', 'user does not exists.');
        }
        else {
            User::where('id', $id)->delete();
        }

        return redirect('/users');
    }
}