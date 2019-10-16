@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.access.users.management'))



@section('content')
<div class="card"id="app">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                     Booking Data<small class="text-muted">   CRUD</small>
                </h4>
            </div><!--col-->

            <div class="col-sm-7">
                @include('backend.booking.include.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Country</th>
                            <th>Date</th>
                            <th>Package</th>
                            <th>Person</th>
                            <th>PicUp</th>
                            <th>PicUp Area</th>
                            <th>Contact</th>
                            <th>Food</th>
                            <th>Action</th>
                        </tr>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="book in databooking" class="table-default">
                                <td>@{{book.fullname}}</td>
                                <td>@{{book.country}}</td>
                                <td>@{{book.date}}</td>
                                <td>@{{book.package}}</td>
                                <td>@{{book.person}}</td>
                                <td>@{{book.pickup}}</td>
                                <td>@{{book.pickuparea}}</td>
                                <td>@{{book.contact}}</td>
                                <td>@{{book.food}}</td>
                                <td>@include('backend.booking.include.actions',['book' => @book])</td>
                            </tr>
                      
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->
    @include('backend.booking.modal');
</div>
<script src="{{URL::asset('js/booking.js')}}"></script>
@endsection
