<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'NamaPelanggan',
        'Alamat',
        'NomorTelephone',
    ];

    public function buying()
    {
        return $this->hasMany(Buying::class, 'PelangganID', 'id');
    }
}
