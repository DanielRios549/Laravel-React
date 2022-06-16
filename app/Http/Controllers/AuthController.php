<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller {
    public function login(LoginRequest $request) {
        $request->authenticate();
        $request->session()->regenerate();

        // FIXME: Needs to reload since redirect does not change main stylesheet
        return Inertia::location('/');
    }
    public function signup(Request $request) {
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
    public function logout(Request $request) {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}