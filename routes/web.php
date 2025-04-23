<?php

use Illuminate\Support\Facades\Route;

Route::domain('api.' . env('APP_DOMAIN', 'localhost'))->group(function () {
    Route::get('{any}', function () {
        return view('api');
    })->where('any', '.*');
});

// front end route
Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');