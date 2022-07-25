<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $Category = [
            [
                "name" => "ფილები",
            ],
            [
                "name" => "კაფელი",
            ],
            [
                "name" => "მეტლახი",
            ],
            [
                "name" => "ლამინატი",
            ],
            [
                "name" => "რკინის კარი",
            ],
            [
                "name" => "ხის კარი",
            ],
            [
                "name" => "აბაზანის ავეჯი",
            ],

        ];

        // // Insert Languages
        // Category::insert($Category);
        foreach ($Category as $cat) {
            Category::create([
                "name" => $cat['name']
            ]);
        }

        // Category::create([
        //     "name" => "test"
        // ]);
    }
}
