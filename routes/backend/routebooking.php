<?php

use App\Http\Controllers\Backend\Booking\BookingController;

// All route names are prefixed with 'admin.'.

//Route::resource('/createbooking','BookingController');
Route::group([
    'prefix' => 'booking',
    'as' => 'databooking.',
    'namespace' => 'Booking',
    'middleware' => 'role:'.config('access.users.admin_role'),
], function () {
    Breadcrumbs::for('admin.databooking.booking.halbooking', function ($trail) {
    $trail->push('Booking Data', route('admin.databooking.booking.halbooking'));
	});

    Breadcrumbs::for('admin.databooking.booking.updatebooking', function ($trail) {
    $trail->push('Update Data', route('admin.databooking.booking.updatebooking'));
});
	
    Route::group(['namespace' => 'Booking'], function () {
        Route::get('booking', [BookingController::class, 'home'])->name('booking.halbooking');
        Route::get('/create', [BookingController::class, 'create'])->name('booking.createbooking');
    });
    

    
});

