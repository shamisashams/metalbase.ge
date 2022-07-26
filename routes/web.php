<?php

/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite LLC <hello@insite.international>
 */

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\OwnerAppController;
use App\Http\Controllers\Admin\EvaluationController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Client\ServiceController;
use App\Http\Controllers\Admin\IronController;
use App\Http\Controllers\Client\DocumentationController;
use App\Http\Controllers\Client\OurTeamController;
use App\Http\Controllers\Client\LoginPageController;
use App\Http\Controllers\Client\TilesController;




Route::post('ckeditor/image_upload', [CKEditorController::class, 'upload'])->name('upload');

Route::redirect('', config('translatable.fallback_locale'));
Route::prefix('{locale?}')
    ->middleware(['setlocale'])
    ->group(function () {
        Route::prefix('adminpanel')->group(function () {
            Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
            Route::post('login', [LoginController::class, 'login'])->name('login');


            Route::middleware('auth')->group(function () {
                Route::get('logout', [LoginController::class, 'logout'])->name('logout');

                Route::redirect('', 'adminpanel/page');

                // Language
                Route::resource('language', LanguageController::class);
                Route::get('language/{language}/destroy', [LanguageController::class, 'destroy'])->name('language.destroy');

                // Translation
                Route::resource('translation', TranslationController::class);

                // Category
                Route::resource('category', \App\Http\Controllers\Admin\CategoryController::class);
                Route::get('category/{category}/destroy', [\App\Http\Controllers\Admin\CategoryController::class, 'destroy'])->name('category.destroy');

                // brands
                Route::resource('brand', \App\Http\Controllers\Admin\BrandController::class);
                Route::get('brand/{brand}/destroy', [\App\Http\Controllers\Admin\BrandController::class, 'destroy'])->name('brand.destroy');
                //

                Route::resource('staff', \App\Http\Controllers\Admin\StaffController::class);
                Route::get('staff/{staff}/destroy', [\App\Http\Controllers\Admin\StaffController::class, 'destroy'])->name('staff.destroy');

                //iron sizes
                Route::resource('iron', \App\Http\Controllers\Admin\IronController::class);
                Route::post('create_iron', [IronController::class, 'create'])->name("admin.irons.create");
                Route::get('destroy/{id}', [IronController::class, 'destroy'])->name("admin.irons.del");
                Route::post('update', [IronController::class, 'update'])->name("admin.irons.update");

                // Product
                Route::resource('product', \App\Http\Controllers\Admin\ProductController::class);
                Route::get('product/{product}/destroy', [\App\Http\Controllers\Admin\ProductController::class, 'destroy'])->name('product.destroy');

                // Slider
                Route::resource('slider', SliderController::class);
                Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');

                // Page
                Route::resource('page', PageController::class);
                Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');
                Route::get('page/doc/{doc}/destroy', [PageController::class, 'docDelete'])->name('page.delete-doc');


                Route::get('setting/active', [SettingController::class, 'setActive'])->name('setting.active');
                // Setting
                Route::resource('setting', SettingController::class);
                Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');

                Route::resource('customer', \App\Http\Controllers\Admin\CustomerController::class);
                Route::get('customer/{customer}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroy'])->name('customer.destroy');
                Route::get('customer/doc/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'docDelete'])->name('customer.delete-doc');
                Route::get('customer/subclass/{customer}/create', [\App\Http\Controllers\Admin\CustomerController::class, 'createSubClass'])->name('subclass.create');
                Route::post('customer/subclass/{customer}/store', [\App\Http\Controllers\Admin\CustomerController::class, 'storeSubClass'])->name('subclass.store');
                Route::get('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'editSubClass'])->name('subclass.edit');
                Route::put('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'updateSubClass'])->name('subclass.update');
                Route::get('customer/subclass/{customer}/{subclass}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroySubClass'])->name('subclass.destroy');
                Route::get('customer/subclass/{customer}/{subclass}/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'subclassDocDelete'])->name('subclass.delete-doc');


                // Password
                Route::get('password', [\App\Http\Controllers\Admin\PasswordController::class, 'index'])->name('password.index');
                Route::post('password', [\App\Http\Controllers\Admin\PasswordController::class, 'update'])->name('password.update');

                Route::resource('classification', \App\Http\Controllers\Admin\ClassificationController::class);
                Route::get('classification/{classification}/destroy', [\App\Http\Controllers\Admin\ClassificationController::class, 'destroy'])->name('classification.destroy');
            });
        });
        Route::middleware(['active'])->group(function () {

            // Home Page
            Route::get('', [HomeController::class, 'index'])->name('client.home.index')->withoutMiddleware('active');


            Route::get('/register', [LoginPageController::class, 'Register'])->name('client.register');
            Route::post('/registeruser', [App\Http\Controllers\Auth\AuthFrontendCostumController::class, 'register'])->name('register');

            Route::middleware('customer:customer')->group(function () {
                Route::get('/cabinet', [\App\Http\Controllers\Client\CabinetController::class, 'index'])->name('client.cabinet');
            });

            // Contact Page
            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
            // Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');
            // contact us from navbar
            Route::post('/contactus', [ContactController::class, 'ContactMail'])->name('client.contact.contactmail');

            // About Page
            Route::get('aboutus', [LoginPageController::class, 'aboutus'])->name('client.aboutus');
            // partners page
            Route::get('partners', [LoginPageController::class, 'partners'])->name('client.partners.index');

            //tiles
            Route::get('tiles', [TilesController::class, 'index'])->name('client.tiles.index')->withoutMiddleware('active');
            //tiles2
            Route::get('tiles2', [TilesController::class, 'tiles2'])->name('client.tiles2.index')->withoutMiddleware('active');
            //tiles3
            Route::get('tiles3', [TilesController::class, 'tiles3'])->name('client.tiles3.index')->withoutMiddleware('active');
            // doors
            Route::get('doors', [TilesController::class, 'doors'])->name('client.doors.index')->withoutMiddleware('active');
            //bathroom
            Route::get('bathroom', [TilesController::class, 'bathroom'])->name('client.bathroom.index')->withoutMiddleware('active');
            //singleproduct
            Route::get('singleproduct', [TilesController::class, 'singleproduct'])->name('client.singleproduct.index');
            Route::get('/singleproduct/{singleproduct}', [\App\Http\Controllers\Client\TilesController::class, 'show'])->name('client.singleproduct.show')->withoutMiddleware('active');

            //irons
            Route::get('metalprofiles', [IronController::class, 'index'])->name('client.metalprofiles.index')->withoutMiddleware('active');
            Route::get('metalmiles', [IronController::class, 'mile'])->name('client.mile.index')->withoutMiddleware('active');
            Route::get('metalpaper', [IronController::class, 'metalpaper'])->name('client.metalpaper.index')->withoutMiddleware('active');
            Route::get('metalpaper1', [IronController::class, 'metalpaper'])->name('client.metalpaper.index1')->withoutMiddleware('active');
            Route::get('metalpaper2', [IronController::class, 'metalpaper'])->name('client.metalpaper.index2')->withoutMiddleware('active');
            Route::get('ortisebri', [IronController::class, 'ortisebri'])->name('client.ortisebri.index')->withoutMiddleware('active');
            Route::get('shveleri', [IronController::class, 'shveleri'])->name('client.shveleri.index')->withoutMiddleware('active');
            Route::get('kutxovana', [IronController::class, 'kutxovana'])->name('client.kutxovana.index')->withoutMiddleware('active');
            Route::get('zolovana', [IronController::class, 'zolovana'])->name('client.zolovana.index')->withoutMiddleware('active');
            Route::get('kvadrati', [IronController::class, 'kvadrati'])->name('client.kvadrati.index')->withoutMiddleware('active');
            Route::get('granula', [IronController::class, 'granula'])->name('client.granula.index')->withoutMiddleware('active');
            Route::get('armatura', [IronController::class, 'armatura'])->name('client.armatura.index')->withoutMiddleware('active');

            //search

            Route::get('search', [TilesController::class, 'search'])->name('client.search.index')->withoutMiddleware('active');
        });
    });
