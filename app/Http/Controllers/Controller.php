<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController {
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public static function filter(Model | String $contoller, ?String $filter) {
        $get = [];

        if (!$filter || $filter === '') {
            $get = $contoller::all();
        }
        else {
            $get = $contoller::where('name', 'ilike', "%$filter%")
                ->orWhere('email', 'ilike', "%$filter%")
                ->get()
            ;
        }
        return $get;
    }
}
