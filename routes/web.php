<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', [PagesController::class, 'login'])->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'login'])->name('user/login')->middleware('guest');
Route::delete('/logout', [AuthController::class, 'logout'])->name('user/logout');

Route::get('/', [PagesController::class, 'home'])->name('home')->middleware('auth');
Route::get('/about', [PagesController::class, 'about'])->name('about')->middleware('auth');
Route::get('/clients', [PagesController::class, 'clients'])->name('clients')->middleware('auth');
Route::get('/clients/new', [PagesController::class, 'newClient'])->name('clients/new')->middleware('auth');
