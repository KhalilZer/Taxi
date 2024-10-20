<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VoitureController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/test',[VoitureController::class,"test"]);
Route::post("create-voiture",[VoitureController::class,"create"]);
Route::get("getAll-voitures",[VoitureController::class,"getAll"]);
Route::delete("delete-voiture/{voit}",[VoitureController::class,"delete"]);

