<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $guarded = ['id', 'created_at', 'updated_at'];


    public function detail_explain (){
        switch($this->detail_explain){
            case 0:return "説明会希望";
            case 1:return "デモ希望";
            case 2:return "製品について詳しく聞きたい"; 
        }
    }

    public function document_send (){
        return  $this->document_send == 1 ? "希望する" : "いいえ";
    }
    
    public function notification (){
        return  $this->notification == 1 ? "はい" : "いいえ";
    }


}
