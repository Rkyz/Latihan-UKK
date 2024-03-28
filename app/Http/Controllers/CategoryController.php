<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Menus/Food',[
            'categorys' => Category::get()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'Category' => 'required|unique:categories',
        ],[
            'Category.required' => 'category lu jangan kosong yah',
            'Category.unique' => 'category lu jangan sama yah',
        ]);

        Category::create($data);

        return redirect()->back()->with('message', 'Category Berhasil Disimpan');
    }
}
