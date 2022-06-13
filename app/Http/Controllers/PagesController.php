<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Inertia\Inertia;

class PagesController extends Controller {
    public function home() {
        return Inertia::render('index', [
            'title' => 'Dashboard'
        ]);
    }
    public function about() {
        return Inertia::render('about', [
            'title' => 'About'
        ]);
    }
}
