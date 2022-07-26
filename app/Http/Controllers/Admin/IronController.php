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
    /**
     * @var ProductRepositoryInterface
     */
    private $staffRepository;




    public function __construct(
        StaffRepository $staffRepository
    ) {
        $this->staffRepository = $staffRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(ProductRequest $request)
    {
        /*return view('admin.pages.product.index', [
            'products' => $this->productRepository->getData($request, ['translations', 'categories'])
        ]);*/

        return view('admin.nowa.views.irons.index', [
            "sizes" => Iron::with('translations')->get(),
            "locale" => Config::get('app.locale'),
        ]);
    }

    public function create(Request $request)
    {
        dd($request->post());
    }
}
