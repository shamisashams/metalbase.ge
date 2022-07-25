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
                "name" => "filebi",
            ],
            [
                "name" => "kafeli",
            ],
            [
                "name" => "metlaxi",
            ],
            [
                "name" => "laminati",
            ],
            [
                "name" => "rkinis kari",
            ],
            [
                "name" => "xis kari",
            ],
            [
                "name" => "abazanis",
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
