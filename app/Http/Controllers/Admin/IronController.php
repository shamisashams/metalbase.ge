<?php

/**
 *  app/Http/Controllers/Admin/ProductController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CustomerRequest;
use App\Http\Requests\Admin\ProductRequest;
use App\Http\Requests\Admin\StaffRequest;
use App\Models\Category;
use App\Models\Customer;
use App\Models\File;
use App\Models\Product;
use App\Models\Skill;
use App\Models\Staff;
use App\Repositories\CategoryRepositoryInterface;
use Illuminate\Support\Facades\Config;
use App\Repositories\Eloquent\CustomerRepository;
use App\Repositories\Eloquent\StaffRepository;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use ReflectionException;
use Illuminate\Support\Facades\Hash;
use App\Models\Size;
use App\Models\Iron;
// use Clockwork\Request\Request;
use Illuminate\Http\Request;

class IronController extends Controller
{

    private $staffRepository;

    public function __construct(
        StaffRepository $staffRepository
    ) {
        $this->staffRepository = $staffRepository;
    }

    public function index(ProductRequest $request)
    {

        return view('admin.nowa.views.irons.index', [
            "sizes" => Iron::with('translations')->get(),
            "data" => Size::with(['getdata'])->paginate(5),
            "locale" => Config::get('app.locale'),
        ]);
    }

    public function create(Request $request)
    {
        // dd($request->post());
        Size::create([
            "iron_id" => $request->product,
            "size" => $request->size,
        ]);
        return redirect()->back();
    }

    public function destroy(Request $request, $locale, $slug)
    {
        // dd($slug);
        Size::where('id', $slug)->delete();
        return redirect()->back();
    }

    public function update(Request $request)
    {
        // dd($request->post());
        Size::where("iron_id", $request->id)->update(["size" => $request->size]);
        return redirect()->back();
    }
}
