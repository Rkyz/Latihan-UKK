<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Product/Main', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    
        $data = $request->validate([
            'NamaProduk' => 'required|unique:products',
            'Harga' => 'required',
            'Stok' => 'required',
            'CategoryID' => 'required',
        ], [
            'NamaProduk.required' => 'Nama produk harus diisi.',
            'NamaProduk.unique' => 'Nama produk sudah digunakan.',
            'Harga.required' => 'Harga harus diisi.',
            'Stok.required' => 'Stok harus diisi.',
            'CategoryID.required' => 'Category harus diisi.',
        ]);
    
        Product::create($data);
    
        return redirect('/product')->with('message', 'Product Berhasil Disimpan');
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    public function edit($id)
    {
        return Inertia::render('Product/Edit', [
            'products' => Product::findOrFail($id)
        ]);
    }

    public function update(Request $request, $id)
        {
            $product = Product::find($id);

            // Pastikan produk ditemukan
            if (!$product) {
                return redirect('/product')->with('error', 'Produk tidak ditemukan.');
            }

            $data = $request->validate([
                'NamaProduk' => [
                    'required',
                    Rule::unique('products')->ignore($product->id),
                ],
                'Harga' => 'required',
            ],[
                'NamaProduk.required' => 'Nama produk harus diisi.',
                'NamaProduk.unique' => 'Nama produk sudah digunakan.',
                'Harga.required' => 'Harga harus diisi.',
            ]);

            $product->update($data);

            return redirect('/product')->with('message', 'Product Berhasil Diupdate');
        }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect('/product')->with('message', 'Product berhasil dihapus.');
    }

    public function updateStok(Request $request, $id)
    {
        $request->validate([
            'Stok' => 'required|min:1', // Stok harus positif integer
        ],[
            'Stok.required' => 'stok tidak boleh kosong',
            'Stok.min' => 'stok tidak boleh 0'
        ]);
    
        $product = Product::findOrFail($id);
        $currentStok = $product->Stok;
    
        $newStok = $currentStok + $request->Stok;
        
        $product->update([
            'Stok' => $newStok,
        ]);
    
        return redirect()->back()->with('message', 'Stok berhasil diperbarui');
    }

}
