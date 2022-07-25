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
        // categorytranslations
        $Category = [
            [
                "en" => ["name" => "ფილები"],
                "ge" => ["name" => "tiles"],
            ],
            [
                "en" => ["name" => "კაფელი"],
                "ge" => ["name" => "kafeli"],
            ],
            [
                "en" => ["name" => "მეტლახი"],
                "ge" => ["name" => "metlaxi"],
            ],
            [
                "en" => ["name" => "ლამინატი"],
                "ge" => ["name" => "laminati"],
            ],
            [
                "en" => ["name" => "რკინის კარი"],
                "ge" => ["name" => "iron doors"],
            ],
            [
                "en" => ["name" => "ხის კარი"],
                "ge" => ["name" => "Wood doors"],
            ],
            [
                "en" => ["name" => "აბაზანის ავეჯი"],
                "ge" => ["name" => "Bathroom"],
            ],
        ];

        // // Insert Languages
        foreach ($Category as $cat) {
            Category::create($cat);
        }

        // Category::create([
        //     "name" => "test"
        // ]);
    }
}
