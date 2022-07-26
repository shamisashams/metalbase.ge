@extends('admin.nowa.views.layouts.app')

@section('styles')



@endsection

@section('content')


{{-- @dd($sizes) --}}
<div class="container-fluid mt-4 bg-white">
    <h5 class='mb-4 pt-4'>admin.irons</h5>
    <form class='w-25'>
        @csrf
        <div class="mb-3">

          <label for="exampleInputEmail1" class="form-label">Choose Product</label>
          <select class="form-control" name="size" id='size'>
            <option disabled selected>choose product</option>

            @foreach ($sizes as $cat)

            <option value={{$cat->translate($locale)->brand}}>{{$cat->translate($locale)->name}}</option>

            @endforeach
        </select>

        <label for="exampleInputEmail1" class="form-label">Enter Size</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <button type="submit" class="btn ripple btn-primary">create</button>
      </form>
 </div>

@endsection

@section('scripts')



@endsection
