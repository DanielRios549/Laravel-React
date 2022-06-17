<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {
    public static function count() {
        return User::all()->count();
    }

    public static function all() {
        return User::all();
    }

    public static function add(Request $request) {
        $data = $request->collect();
        $verify = User::where('email', $data['email'])->exists();

        if ($verify) {
            return redirect()->back()->with('error', 'User Already Exists');
        }
        else {
            User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password'])
            ]);

            return redirect()->back()->with('success', 'User Created');
        }
    }
}