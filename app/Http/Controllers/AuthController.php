<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller {
    public function login(LoginRequest $request) {
        $request->authenticate();
        $request->session()->regenerate();

        // FIXME: Needs to reload since redirect does not change main stylesheet
        return Inertia::location('/');
    }

    public function signup(Request $request) {
        return UserController::add($request);
    }

    public function logout(Request $request) {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}