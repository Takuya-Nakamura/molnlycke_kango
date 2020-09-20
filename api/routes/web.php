<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;

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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [PostsController::class, 'index']);

Route::post('/', [PostsController::class, 'post']);

Route::get('test_index', [PostsController::class, 'index']);

Route::get('posts', [PostsController::class, 'post']);

Route::get('/csv', [PostsController::class, 'csv']);


Route::group(['middleware' => 'basicauth'], function() {
    //ここにBasic認証をかけたいルーティングの設定を記述して下さい
    //例
    Route::get('/csv', [PostsController::class, 'csv']);

    // Route::get('/', 'PageController@home')->name('page.home');
});