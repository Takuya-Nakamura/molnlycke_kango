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
            case null : "未選択";
            case 0:return "説明会希望";
            case 1:return "デモ希望";
            case 2:return "製品について詳しく聞きたい"; 
        }
    }

    public function document_send (){
        switch($this->document_send){
            case null : "未選択";
            case 0:return "いいえ";
            case 1:return "希望する";
        }
    }
    
    public function notification (){
        return  $this->notification == 1 ? "はい" : "いいえ";
    }


}
