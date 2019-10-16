<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table ='bookings';
    protected $fillable =[
    						'fullname',
    						'country',
    						'date',
    						'package',
    						'person',
    						'pickup',
    						'pickuparea',
    						'contact',
    						'food'
    					];
}
