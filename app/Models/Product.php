<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'NamaProduk',
        'Harga',
        'Stok',
        'CategoryID',
    ];

    public function details()
    {
        return $this->hasMany(DetailBuying::class, 'ProdukID', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'CategoryID', 'id');
    }
}
