<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/meeting', [\App\Http\Controllers\MeetingController::class, 'store'])
    ->name('meeting.store');
Route::get('/meeting/{id}', [\App\Http\Controllers\MeetingController::class, 'getById'])
    ->name('meeting.getId');
Route::delete('/meeting/{id}', [\App\Http\Controllers\MeetingController::class, 'deleteById'])
    ->name('meeting.deleteId');

Route::get('/meetings/available_date', [\App\Http\Controllers\MeetingController::class, 'availableDate'])
    ->name('meetings.available-date');

Route::get('/meetings/available_date/{year_month}/{day}', [\App\Http\Controllers\MeetingController::class, 'availableDateSlotTime'])
    ->name('meetings.available-date.year-month');

Route::get('/meetings/{user_id}', [\App\Http\Controllers\MeetingController::class, 'listByUserId'])
    ->name('meetings.getByUserId');

