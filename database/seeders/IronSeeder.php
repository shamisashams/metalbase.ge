<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Iron;

class IronSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $irons = [
            [
                "slug" => "profili_milkvadrati",
                "ge" => ["name" => "პროფილი მილკვადრატი"],
                "en" => ["name" => "profili milkvadrati"],
            ],
            [
                "slug" => "mili",
                "ge" => ["name" => "მილი"],
                "en" => ["name" => "mili"],
            ],
            [
                "slug" => "litonis_furceli",
                "ge" => ["name" => "ლითონის ფურცელი"],
                "en" => ["name" => "litonis furceli"],
            ],
            [
                "slug" => "litonis_furceli_dajatuli",
                "ge" => ["name" => "ლითონის ფურცელი დაჟატული"],
                "en" => ["name" => "litonis furceli dajatuli"],
            ],
            [
                "slug" => "litonis_furceli_daxvretili",
                "ge" => ["name" => "ლითონის ფურცელი დახვრეტილი"],
                "en" => ["name" => "litonis furceli daxvretili"],
            ],
            [
                "slug" => "ortisebri",
                "ge" => ["name" => "ortisebri"],
                "en" => ["name" => "ortisebri"],
            ],
            [
                "slug" => "shveleri",
                "ge" => ["name" => "შველერი"],
                "en" => ["name" => "shveleri"],
            ],
            [
                "slug" => "kutxovana",
                "ge" => ["name" => "კუთხოვანა"],
                "en" => ["name" => "kutxovana"],
            ],
            [
                "slug" => "zolovana",
                "ge" => ["name" => "ზოლოვანა"],
                "en" => ["name" => "shveleri"],
            ],
            [
                "slug" => "kvadrati",
                "ge" => ["name" => "კვადრატი"],
                "en" => ["name" => "kvadrati"],
            ],
            [
                "slug" => "granula",
                "ge" => ["name" => "გრანულა"],
                "en" => ["name" => "granula"],
            ],
            [
                "slug" => "armatura",
                "ge" => ["name" => "არმატურა"],
                "en" => ["name" => "armatura"],
            ],
        ];

        // // Insert Languages
        foreach ($irons as $iron) {
            Iron::create($iron);
        }
    }
}
