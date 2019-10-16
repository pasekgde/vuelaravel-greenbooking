<?php

require __DIR__.'/breadcrumbs/backend/backend.php';
Breadcrumbs::for('admin.databooking.booking.createbooking', function ($trail) {
    $trail->push('Create Booking', route('admin.databooking.booking.createbooking'));
});
