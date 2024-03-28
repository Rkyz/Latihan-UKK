<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailBuying extends Model
{
    use HasFactory;
    protected $fillable = [
        'PenjualanID',
        'ProdukID',
        'JumlahProduk',
        'SubTotal',
    ];

    public function buying()
    {
        return $this->belongsTo(Buying::class, 'PenjualanID', 'id');
        
    }
    public function product()
    {
        return $this->belongsTo(Product::class, 'ProdukID', 'id');
    }

}
