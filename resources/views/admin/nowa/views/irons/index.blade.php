@extends('admin.nowa.views.layouts.app')

@section('styles')



@endsection

@section('content')


{{-- @dd($data) --}}
<div class="container-fluid mt-4 bg-white">
    <h5 class='mb-2 pt-2'>admin.irons</h5>
    <form class='w-25' action={{route("admin.irons.create")}} method="post" >
        @csrf
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Choose Product</label>
          <select class="form-control" name="product" id='size' required>
            <option disabled selected>choose product</option>
            @foreach ($sizes as $cat)
            <option value={{$cat->id}}>{{$cat->translate($locale)->name}}</option>

            @endforeach
        </select>

        <label for="exampleInputEmail1" class="form-label">Enter Size</label>
          <input name="size" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
        </div>
        <button type="submit" class="btn ripple btn-primary">create</button>
      </form>
 </div>


 <table class="table mg-b-0 text-md-nowrap mt-3 mb-2">
    <thead>
        <tr>
            {{-- <th>ID</th> --}}
            <th>id</th>
            <th>name</th>
            <th>size</th>
            {{-- <th>delete</th> --}}
            {{-- <th>Salary</th> --}}
        </tr>
    </thead>
    <tbody>
        @foreach ($data as $v)
        <tr>
            <th>{{$v->id}}</th>
            <th>{{$v->iron_id}}</th>
            <form action={{route('admin.irons.update')}} method="post">
                @csrf
            <td>
                <input class="form-control" type="text" value="{{$v->size}}" name="size">
                <input class="form-control" type="hidden" name='id' value="{{$v->iron_id}}"
            </td>
            <td>
                <a href="{{locale_route('admin.irons.del',$v->id)}}"
                    onclick="return confirm('Are you sure?')" class="pl-3">
                     <i class="fa fa-edit">წაშლა</i>
                 </a>
            </td>
            <td>
                <button class='btn' href="{{locale_route('admin.irons.update',$v->id)}}"
                class="pl-3">
                 <i class="fa fa-edit">შეცვლა</i>
                </button>
            </td>
        </form>
        </tr>
        @endforeach

    </tbody>
</table>
<div class="contaner">

    {{ $data->appends(request()->input())->links('admin.vendor.pagination.material') }}
</div>

@endsection

@section('scripts')



@endsection
